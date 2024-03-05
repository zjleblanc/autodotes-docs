---
title: Overview
---
# Execution Environments Crash Course <img src="/icons/ee.svg" class="title-icon"> 

Execution Environments (EEs) are a critical piece of Ansible Automation Platform (AAP) operations. For organizations to take full advantage of the Red Hat supported Ansible ecosystem, they often find themselves needed to build a custom execution environment. This crash course is intended to help AAP maintainers and developers get up to speed with EEs so they can establish a minimal, but sufficient environment for automation and focus on writing playbooks.

## Step-by-Step Tutorial

1. [Create a Definition File](./02_create_definition_file.md)
1. [Create an Execution Environment](./03_create_ee.md)
1. [Update an Execution Environment](./04_update_ee.md)
1. [Automate the Process](./05_automate_the_process.md)

## Strategy

We often get asked - how many execution environments do I need to build? The short answer is, *it depends*. However, there are rationales we should consider when determining how much customization is required to take full advantage of Ansible Automation Platform.

Below are some questions I like to pose, and the suggestion which follows:

<div class="pre-table-wrap-text"></div>
| Question | Suggestion |
| --- | --- |
| Is size of the execution environment a primary concern? | The container images can grow in size rather quickly if not reasonably scoped to handle certain workloads. For example, last time I checked the **minimal** EE was around 600MB whereas the **supported** EE (with many collections baked in) was about 1.7GB. If you are okay with an EE closer to 2GB, then I recommend having a default image that supports all of your workflows. |
| Which base image should I use? | I recommend starting with **minimal** and adding only the dependencies you need. |
| How should I divide up my workloads? | I recommend breaking them up to reflect the team structure within your organization. I typically see stratification like this: os (maybe windows/linux), storage, networking, etc. This prevents EE bloat while allowing us to keep the images small(er). Of course, all organizations are different, but generally we can determine a reasonable "division of labor" based on the teams onboarded to the platform. This also helps with governance, as the automation content available to a team is pertinent for their workloads (and only their workloads). |
| How many EEs is too many EEs? | Quite frankly, if you are managing more than a handful of EEs, then I would consider consolidating them based on the intended workload. This prevents EE bloat while allowing us to keep the images small(er). If this suggestion conflicts with the division strategy, then consider what workloads share the most common ground. An objective way to determine this would be looking at EEs that have similar content, but we can also make a subjective decision based on your team structure and operational realities. |
| How much effort will it require to maintain these custom EEs? | Prior to EEs, Ansible jobs executed in python virtual environments which were a nightmare to maintain. That being said, I recognize that effort is required and Red Hat is motivated to keep it to a minimum. We have a few things going for us when it comes to EEs: the base images do not change frequently, the EE composition should not be changing frequently, and the revision process can be fully automated (with ansible!) |
| How do I achieve the desired state of custom EEs to support my environment and minimal maintenance efforts? | First off, leverage the questions above to determine how many you (think you) need/want - start with one! The next step is to learn how to build them and minimize the manual steps - AKA read this guide :D |

## Tools

### Podman + Buildah <img src="/icons/podman.png" class="title-icon"> <img src="/icons/buildah.png" class="title-icon"> 

An Execution Environment can be thought of as container instances specifically designed for your AAP workloads. The basis of these containers is the image, which contains the tools necessary to run ansible jobs and dependencies you include specific to your workloads. In order to keep the images minmial in size, Red Hat supports and maintains the base images for running ansible jobs and provides a tool (ansible-builder) to add **only** the content you need (e.g. collections, python libraries, system packages).

!!! note "TL;DR;"
    The default container engine backing ansible-builder

!!! quote "man podman"
    Podman (Pod Manager) is a fully featured container engine that is a simple daemonless tool.  Podman provides a Docker-CLI comparable command line that eases the transition from other container engines and allows the management of pods, containers and images.  Simply put: alias docker=podman.  Most Podman commands can be run as a regular user, without requiring additional privileges.

    Podman uses Buildah internally to create container images. Both tools share image (not container) storage, hence each can use or manipulate images (but not containers) created by the other.

### ansible-builder <img src="/icons/ansible-builder.svg" class="title-icon"> 

The CLI tool used to build custom EEs from a single (YAML) definition file that specifies the dependencies needed for your automation workloads. The purpose of builder is to simplify the process of building custom execution environments by ingesting an execution environment definition file which specifies your requirements. When the `ansible-builder build ...` command is executed, a Containerfile is generated and podman is used to build the actual image which can be pushed to a container registry. 

!!! note "TL;DR;"
    Define a targeted, functional image without the need for manual authoring of Dockerfiles/Container files - let the CLI handle the complexity.

!!! quote "ansible-builder build --help"
    Creates a build context (including a Containerfile) from an execution environment spec. The build context will be populated from the execution environment spec. After that, the specified container runtime podman/docker will be invoked to build an image from that definition. After building the image, it can be used locally or published using the supplied tag.

#### the definition file

The default name for an EE definition file is `execution-environment.yml`. As of this post, we are on version 3 of the schema which is the simplest by far, reducing file clutter and keeping the customization efforts to a minimum. Below is an example definition file I will step through in detail:

*I won't be covering every possible configuration option, but I will hit on the common options used by customers I have supported. View the full schema [here](https://ansible.readthedocs.io/projects/builder/en/stable/definition/).*

```yaml
---
version: 3

### DEFINE OPTIONS ###
options:
  package_manager_path: /usr/bin/microdnf

### DEFINE IMAGES ###
images:
  base_image:
    name: registry.redhat.io/ansible-automation-platform-24/ee-minimal-rhel8:latest

### INJECT A CUSTOM ANSIBLE CFG ###
additional_build_files:
  - src: files
    dest: configs

additional_build_steps:
  prepend_galaxy:
    - COPY _build/configs/ansible.cfg /etc/ansible/ansible.cfg

### IMPORTANT: THE SECTION YOU WILL "MAINTAIN" ###
dependencies:
  system:
    - curl
    - git
  python:
    - requests
    - jmespath
  galaxy:
    collections:
      - name: ansible.controller
        version: "4.5.0"
      - name: ansible.windows
        version: "1.9.0"
      - name: ansible.utils
        version: "2.9.0"
      - name: community.general
        version: "8.1.0"
      - name: containers.podman
        version: "1.11.0"
      - name: infra.ee_utilities
        version: "3.1.3"
      - name: servicenow.itsm
        version: "2.1.0"
```

##### defining dependencies <img src="/icons/important.png" class="title-icon">

[📖 Full Documentation](https://ansible.readthedocs.io/projects/builder/en/stable/definition/#dependencies)

!!! danger "Important"
    This is the single most important section when it comes to maintenance and lifecycle operations for execution environments. When you want to add content to an execution environment or take advantage of existing content updates, then you will make minor modifications to the dependencies section.

There are three types of dependencies you can define in the definition file:

1. <img src="/icons/pkg.png" class="list-item-icon"> **system** - these are binaries installed via {insert-pkg-mgr} to support automation. Any packages required to run ansible are handled by builder via instructions in the Containerfile, additional system dependencies would depend on collections being used. For example, to leverage any of the git modules, git should be added to the system dependencies list. Keep in mind, execution occurs in a container instance, so presence of a dependency (such as git) on the execution node itself is not sufficient.
2. <img src="/icons/python.png" class="list-item-icon"> **python** - here you add any python libraries needed. This list is used to populate a requirements.txt file for pip (see [format](https://pip.pypa.io/en/stable/reference/requirements-file-format/)). One of the key benefits of ansible-builder is that it will follow the dependency tree of a collection included, so you do not need to list all python dependencies for each collection you are using. However, not all collection metadata is perfect, so occasionally you will have to "support" the collection developer and add a requirement. Ideally, you can leverage open source communication channels to notify the collection owner of a collection which lacks a dependency on installation.
3. <img src="/icons/ansible.png" class="list-item-icon"> **galaxy** - the Ansible (fun) stuff! Here you are setting up the contents for a requirements.yml file to be consumed by ansible-galaxy (see [format](https://docs.ansible.com/ansible/latest/collections_guide/collections_installing.html#install-multiple-collections-with-a-requirements-file)). When your team wants to access a new collection, you would add it to this list. Typically, I recommend specifying an exact version for collection dependencies to provide a clear snapshot. To access updates to an existing collection, you would modify the definition file and cut a new version of your execution environment. I also recommend tagging your EE versions with the commit hash which creates an audit trail for compliance and debugging purposes.

```yaml
...

### IMPORTANT: THE SECTION YOU WILL "MAINTAIN" ###
dependencies:
  system:
    - curl
    - git
  python:
    - requests
    - jmespath
  galaxy:
    collections:
      - name: ansible.controller
        version: "4.5.0"
      - name: ansible.windows
        version: "1.9.0"
      - name: ansible.utils
        version: "2.9.0"
      - name: community.general
        version: "8.1.0"
      - name: containers.podman
        version: "1.11.0"
      - name: infra.ee_utilities
        version: "3.1.3"
      - name: servicenow.itsm
        version: "2.1.0"
```

##### inject custom ansible.cfg

[📖 Full Documentation](https://ansible.readthedocs.io/projects/builder/en/stable/definition/#additional-build-files)

A common use for the `additional_build_files` and `additional_build_steps` configuration is to inject your own ansible.cfg into the build process. It is important to understand that the ansible-builder process leverages a build image to create the execution environment - this impacts access to Ansible Galaxy, Red Hat Automation Hub, or a Private Automation Hub instance. In the example below, we include an `ansible.cfg` file in the build context directory and copy it to the default location for ansible-galaxy so the build image can access desired sources for galaxy content.

When developing CD pipelines for building EEs, I often have a templated ansible.cfg file using keys like `rh_ah_token` which will be overriden at runtime via the DevOps tool's secret management. For example, in GitHub I will have a secret for my Red Hat Automation Hub token (`RH_AH_TOKEN`) passed into the pipeline run via an environment variable which will be used to replace the templated `rh_ah_token` with a valid token. **ansible-builder** will then use the ansible.cfg to download Red Hat certified content during the build process.

```yaml
...

### INJECT A CUSTOM ANSIBLE CFG ###
additional_build_files:
  - src: files
    dest: configs

additional_build_steps:
  prepend_galaxy:
    - COPY _build/configs/ansible.cfg /etc/ansible/ansible.cfg
...
```

##### define images

[📖 Full Documentation](https://ansible.readthedocs.io/projects/builder/en/stable/definition/#images)

Here you can define the base image for your execution environment. The base image provides the operating system and may also provide some packages. I always recommend starting with the `registry.redhat.io/ansible-automation-platform-{aap-version}/ee-minimal-rhel{rhel-version}:latest` and adding content from there.

```yaml
...

### DEFINE IMAGES ###
images:
  base_image:
    name: registry.redhat.io/ansible-automation-platform-24/ee-minimal-rhel8:latest
...
```

##### define options

[📖 Full Documentation](https://ansible.readthedocs.io/projects/builder/en/stable/definition/#options)

Here you can define other options for the builder process. Most commonly, I find myself needing to specify the package manager path - determined by the base_image specified. By default, the path will be `/usr/bin/dnf`. As you can imagine, that doesn't work for all base images - not even the ee-minimal images. For the Red Hat provided ee-minimal images, you will want to specify `/usr/bin/microdnf`.

```yaml
...

### DEFINE OPTIONS ###
options:
  package_manager_path: /usr/bin/microdnf
...
```

## Automate It <img src="/icons/ansible.png" class="title-icon">

Once you have conquered the ansible-builder toolset and processes, shift your focus to implementing automation to minimize manual maintenance efforts. The desired state (IMHO) is to have a CD pipeline that only requires me to tweak a dependency in the definition file and commit a change. Everything else should be automated - with Ansible! Fortunately, Red Hat and the community have provided tools to help us achieve the desired state via a collection: [infra.ee_utilities](https://github.com/redhat-cop/ee_utilities). In [Part 4](./05_automate_the_process.md) of the Step-by-Step tutorial, I will document a pipeline for creating and updating execution environments.
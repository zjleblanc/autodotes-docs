---
title: "Part 4: Automate the Process"
---
# Part 4: Automate the Process <img src="/icons/ee.svg" class="title-icon">

## Create a GitLab project <img src="/icons/gitlab.png" class="title-icon">

If you haven't already, create a new, **empty** GitLab project and give it a meaningful name. For this example, I will be assuming the name is **ansible-execution-environments** and the group/namespace is **gitlabber**. The latter is unique to your environment, the former is whatever you want to call it.

Uncheck _**Initialize repository with a README**_

Once the empty project is created, you will have some instructions for populating the repository. Take note of the URL - hit the Code button to see HTTPS and SSH options - and move on the next step to fill it with my skeleton source code.

## Clone skeleton repository

For the automation process, I created a skeleton git repository containing the execution environment definition we used in Parts 1-3. Below are some additional important files in the repository:

```bash
$DEST_GITLAB_NS="gitlabber"
$DEST_REPO_NAME="ansible-execution-environments"
$DEST_REPO_URL="<paste-from-previous-step>"

git clone https://gitlab.com/zjleblanc/ansible-ee-builder-skeleton.git $DEST_REPO_NAME

git remote -v
# origin  https://gitlab.com/zjleblanc/ansible-ee-builder-skeleton.git (fetch)
# origin  https://gitlab.com/zjleblanc/ansible-ee-builder-skeleton.git (push)

git remote set-url origin $DEST_REPO_URL

git remote -v
# origin  $DEST_REPO_URL (fetch)
# origin  $DEST_REPO_URL (push)

git push --set-upstream origin main
# Now you should see the repository populated with skeleton code
```

| File | Purpose |
| --- | --- |
| `.gitlab-ci.yml` | This is the pipeline definition which identifies changed files and calls a Python script to integrate with AAP |
| `scripts/trigger_ansible.py` | This Python script will build the POST body to launch and AAP Job Template |
| `pb_build_ees.yml` | The playbook to build execution environments based on definition file(s) and push to Private Automation Hub |
| `filter_plugins/common.py` | A simple plugin to add a tag to each execution envrionment definition |
| `definitions/*` | Your execution environment definitions! One file per definition with a standard structured (see ee-crash-course example) |

## Create Project in AAP <img src="/icons/ansible.png" class="title-icon">

The playbook in our repository needs to be attached to a Job Template in AAP for the python script to launch. Before we can create a Job Template, we need to create a new Project pointing at this repository.

![Create Controller Project](/img/ee/create_project.png)

| Field | Note |
| --- | --- |
| Name | Something meaningful |
| Organization | Controller Organization managing the Project (probably team managing AAP) |
| Execution Environment | An execution environment with the required collections for `pb_build_ees.yml` |
| Source Control URL| **$DEST_REPO_URL** |
| Source Control Credential | Your repository probably wont be public, create an SCM Credential and attach here |
| Update Revision on Launch | ✅ Make sure you always run against the latest playbook revision and EE definitions |

## Create Job Template in AAP <img src="/icons/ansible.png" class="title-icon">

Now that we have a Project, we can create a Job Template that leverages our build playbook. Once you have completed the Job Template setup, take note of the id for use in the GitLab variables setup.

![Create Job Template](/img/ee/create_jt.png)

<div class="pre-table-wrap-text"></div>
| Field | Note |
| --- | --- |
| Name | Something meaningful |
| Inventory | This should contain your build host which we will set via a Survey - I recommend a RHEL box running the same version as your AAP infrastructure. |
| Project | The Project we just created |
| Execution Environment | Inherit from Project configuration |
| Playbook | `pb_build_ees.yml` |
| Credentials | See table below |

### Credentials

| Type | Purpose | Custom | Link |
| --- | --- | --- | --- |
| Machine | Connecting to the builder host | No | |
| Red Hat Ansible Automation Platform | Manage Controller Execution Environments | No | |
| Private Automation Hub | Credentials injected to ansible.cfg during build process | Yes | [🔗](https://docs.autodotes.com/Credential%20Types/private_automation_hub/) |
| EE Utilities | Purpose built for ee_builder role | Yes | [🔗](https://docs.autodotes.com/Credential%20Types/ee_utilities/) |

### Survey

<div class="pre-table-wrap-text"></div>
| Question | Answer Type | Answer Variable | Default | Required |
| --- | --- | --- | --- | :---: |
| Specify the build host | Text | `{{ build_host }}` | host in Inventory | |
| Specify the Execution Environment(s) version | Text | `{{ ee_tag }}` | `OVERRIDE_ME` | ✅ |
| Specify verbosity | Multiple Choice (Single) | `{{ ee_verbosity }}` | One of `0-3` | |
| Clean up build directory? | Multiple Choice (Single) | `{{ ee_builder_dir_clean }}` | `true` | |

## Define GitLab project variables <img src="/icons/gitlab.png" class="title-icon">

In GitLab, navigate to **&lt;YOUR PROJECT&gt;** > **Settings** > **Variables** > click **Expand**.

Your table will be empty, but when we are done it will look like this:
![GitLab Variables](/img/ee/gitlab_variables.png)

To add some variables, click **Add variable** and a blade will open for you to configure our AAP integration details.

| Variable | Value | Options |
| --- | --- | --- |
| AAP_HOST | controller.company.net | `Expand variable reference` |
| AAP_JOB_TEMPLATE_ID | **Job Template id** from previous step | `Expand variable reference` |
| AAP_TOKEN | 12345token67890 | `Expand variable reference` `Mask variable` |

## The Process You Built

![Process Diagram](/img/ee/process_diagram.png)

## Sit Back and Relax 🏖️

Congrats! You have successfully configured an E2E automation process for building and consuming Execution Environments. All you are responsible for now is updating definition files or adding new ones to your repository.
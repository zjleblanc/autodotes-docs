---
title: "Part 3: Update an EE"
---
# Part 3: Update an EE <img src="/icons/ee.svg" class="title-icon">

## Add Dependencies

Alright, let's say we want to do some Windows automation now. As of right now, we don't have any of the useful Windows collections in our Execution Environment, so we have two options:

!!! tip "Good"
    Add to our execution environment, then build and publish a new version. This allows us to disable collection downloads during project syncs in Controller. Doing so, we can implement tighter controls and feel confident no unwanted automation content can be executed against our environment. We are going to use this method 🙂

!!! danger "Bad"
    Add a requirements.yml file to the repository and download collections during project sync. This method adds unnecessary time to every project sync and prevents you from disabling collections downloads.

To add content, simply edit the definition file and add (or update) entries in your dependency structure. See the diff below for the changes I made for this demo:

```diff
--- execution-environment.yml.old	2024-03-05 14:20:41.389293727 -0500
+++ execution-environment.yml	2024-03-05 14:24:03.459884751 -0500
@@ -17,6 +17,14 @@
     collections:
       - name: ansible.controller
         version: "4.5.1"
+      - name: ansible.windows
+        version: "1.9.0"
+      - name: ansible.utils
+        version: "2.9.0"
+      - name: chocolatey.chocolatey
+        version: "1.4.0"
+      - name: community.windows
+        version: "1.9.0"
 
 additional_build_files:
   - src: files
```

## Build New Version

First off, confirm that:

- You are still logged into registry.redhat.io --> `podman login registry.redhat.io`
- You're ansible.cfg has the tokenized placeholders replaced with your information --> `cat files/ansible.cfg`

Now we can build a new version. The key difference is our new tags: from `v1` to `v2`. We also move the `latest` tag to our new image version.<br>
`ansible-builder build --tag ee-crash-course:latest --tag ee-crash-course:v2`

## Push New Version to Automation Hub Registry

Give your new version tags for the remote registry (you could also do this in the ansible-builder step) and push them to Automation Hub.

```bash
PRIVATE_AUTOMATION_HUB_HOST="hub.company.net"

podman tag localhost/ee-crash-course:v2 $PRIVATE_AUTOMATION_HUB_HOST/ee-crash-course:v2
podman tag localhost/ee-crash-course:latest $PRIVATE_AUTOMATION_HUB_HOST/ee-crash-course:latest

podman login $PRIVATE_AUTOMATION_HUB_HOST
podman push $PRIVATE_AUTOMATION_HUB_HOST/ee-crash-course:v2
podman push $PRIVATE_AUTOMATION_HUB_HOST/ee-crash-course:latest
```

Navigate to Automation Hub > **Execution Environments** (menu) > **Execution Environments** (tab) > **ee-crash-course** > **Images** (tab)<br>
Here you can see the new version and confirm the latest tag moved.

![Private Automation Hub Execution Environment Updates](/img/ee/ee_pah_details_updated.png)

## Update Reference in Controller

In your Controller instance, navigate to **Administration > Execution Environments > ee-crash-course** and click **Edit**.

![Controller Execution Environment Updates](/img/ee/ee_controller_update.png)

You simply need to update the tag to `v2`. Using the pull policy of "missing", the next Job Template run will trigger podman to pull the new version of the image before started execution.

## Party Time 🎉

Congrats, you have successfully added new automation content to an existing Execution Environment! However, why do all of these steps yourself when you want to make an update? To complete the crash course, let's use Ansible to automate the busy work. 

Move on to [Part 4](./05_update_ee.md) where we use Ansible to automate building Execution Environments for Ansible.

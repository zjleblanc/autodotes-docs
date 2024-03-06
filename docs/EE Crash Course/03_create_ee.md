---
title: "Part 2: Create an EE"
---
# Part 2: Create an EE <img src="/icons/ee.svg" class="title-icon">

## ansible-builder

After completing [Part 1](./02_create_definition_file.md), your working directory should look like this:

```
.
├── execution-environment.yml
└── files
    └── ansible.cfg

1 directory, 2 files
```

If you copy and pasted the example `ansible.cfg`, then make sure to replace the tokenized variables. The `sed` commands below will do the trick:

```bash
sed -i 's/<PRIVATE_AUTOMATION_HUB_HOST>/hub.company.net/g' files/ansible.cfg
sed -i 's/<PRIVATE_AUTOMATION_HUB_TOKEN>/12345token7890/g' files/ansible.cfg
```

To pull the base image, you will need to authenticate to registry.redhat.io with your RedHat account:<br>
`podman login registry.redhat.io`

Now let's run ansible-builder:<br>
`ansible-builder build --tag ee-crash-course:latest --tag ee-crash-course:v1`

## Push to Automation Hub Registry

Once builder is complete, we should have a fully-functional execution environment image on our build host:

```
# podman images

REPOSITORY                 TAG      IMAGE ID      CREATED         SIZE
localhost/ee-crash-course  latest   ab30c565ad49  52 seconds ago  430 MB
localhost/ee-crash-course  v1       ab30c565ad49  52 seconds ago  430 MB
...
```

Remember, we applied two tags so there are two entries, but there is only one image (check the hash). Now lets push them to our Private Automation Hub:

```bash
PRIVATE_AUTOMATION_HUB_HOST="hub.company.net"

podman tag localhost/ee-crash-course:v1 $PRIVATE_AUTOMATION_HUB_HOST/ee-crash-course:v1
podman tag localhost/ee-crash-course:latest $PRIVATE_AUTOMATION_HUB_HOST/ee-crash-course:latest

podman login $PRIVATE_AUTOMATION_HUB_HOST
podman push $PRIVATE_AUTOMATION_HUB_HOST/ee-crash-course:v1
podman push $PRIVATE_AUTOMATION_HUB_HOST/ee-crash-course:latest
```

Navigate to the Execution Environment in your Private Automation Hub:

![Private Automation Hub Execution Environment](/img/ee/ee_pah_details.png)

## Create Reference in Controller

Almost there - we need to create the Execution Environment resource in our Controller instance which points to the image hosted in our Private Automation Hub container registry. 

In your Controller instance, navigate to **Administration > Execution Environments** and click **Add**.

![Controller Execution Environment](/img/ee/ee_controller_add.png)

<div class="pre-table-wrap-text"></div>
| Input | Value |
| --- | --- |
| Name | Use a consistent naming convention - I like `ee-<purpose>` |
| Image | The image name and tag you pushed to Private Automation Hub. In this example, the value would be `hub.company.net/ee-crash-course:v1`. I do not recommend using latest - specifying the version tag is more explicit and will ensure you have an up-to-date image on your execution nodes for running jobs. |
| Pull | I almost exclusively use `Only pull the image if not present before running.`. This option has some weird behavior if you use the latest tag. Specify a version 🙂 |
| Description | Something meaningful |
| Organization | **[Optional]** to limit availability of the Execution Environment |
| Registry Credential | Select your `Automation Hub Container Registry` Credential |

## Celebrate 🥳

Congrats, you have successfully built your first Execution Environment! If you used the provided definition file, then you might be wondering what all you can do with an EE that only has the [ansible.controller](https://console.redhat.com/ansible/automation-hub/repo/published/ansible/controller/) collection. 

The short answer, not much - let's move on to [Part 3](./04_update_ee.md) and curate a purpose driven Execution Environment.

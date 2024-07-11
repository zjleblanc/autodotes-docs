# Austin RHUG: April 2024

Learn how Event-Driven Ansible integrates with observability solutions to deliver automatic remediation of issues and creates an audit trail via ticket management tools.

## General

<div class="pre-table-wrap-text"></div>
| Link | Description |
| --- | --- |
| [Ansible on YouTube](https://www.youtube.com/@AnsibleAutomation) | YouTube Channel ran by the Ansible BU with countless tutorials |
| [Zach's Blog](https://autodotes.com/posts) | My blog focused primarily on challenges that I help customers solve with Ansible |
| [Zach on YouTube](https://www.youtube.com/@zach.leblanc) | My YouTube channel with videos to accompany blog posts on Autodotes |

## Demo Source Code

<div class="pre-table-wrap-text"></div>
| Type | Link | Description |
| --- | --- | --- |
| Rulebook | [Dynatrace Problems](https://github.com/zjleblanc/ansible-eda-demos/blob/master/rulebooks/dynatrace_problems.yml) | Repository containing source code for the Summit Connect demos |
| Playbook  | [Create ServiceNow Incident](https://github.com/zjleblanc/ansible-cloud-mgmt/blob/master/playbooks/snow/create_incident.yml) | Repository containing the backups using Ansible's common data model, as well as golden configs for the configuration-as-code use case |
| Playbook  | [Expand EC2 Disk](https://github.com/zjleblanc/ansible-cloud-mgmt/blob/master/playbooks/aws/add_disk_space.yml) | Documentation for the first demo of the git configuration backup and restore process |
| Playbook  | [Update ServiceNow Incident](https://github.com/zjleblanc/ansible-cloud-mgmt/blob/master/playbooks/snow/update_incident.yml) | Documentation for the second demo of automated pipelines to deploy configuration on completion of a pull request |
| Collection  | [servicenow.itsm](https://github.com/ansible-collections/servicenow.itsm) | The Ansible Collection for ServiceNow IT Service Management (ITSM) includes a variety of Ansible content to help automate the management of ServiceNow IT Service Management. |
| Collection | [dynatrace.event_driven_ansible](https://github.com/Dynatrace/Dynatrace-EventDrivenAnsible) | This Event source plugin from Dynatrace captures all problems from your Dynatrace tenant and in conjunction with Ansible EDA rulebooks helps to enable auto-remediation in your environment.|

## Event-Driven Ansible

<div class="pre-table-wrap-text"></div>
| Link | Description |
| --- | --- |
| [EDA Lab](https://labs.demoredhat.com/webpages/eda.html) | Public landing page for the Event-Driven Ansible labs we walked through together (PDF of slides can be found here) |
| [Getting Started Guide](https://www.redhat.com/en/technologies/management/ansible/event-driven-ansible) | Red Hat's getting started guide with links to additional references | 
| [Ansible Rulebook Documentation](https://ansible.readthedocs.io/projects/rulebook/en/stable/) | Official documentation for developing and using Ansible rulebooks |
| [Building Custom Decision Environments](https://access.redhat.com/solutions/7018085) | Guide for building custom decision environments (requires customer login) |
| [ansible.eda Collection](https://github.com/ansible/event-driven-ansible) | Source code for the `ansible.eda` collection available in the default execution environment |
| [cloin.eda Collection](https://github.com/cloin/cloin.eda) | Source code for the `cloin.eda` collection \- useful reference for developing your own custom source plugins (example for ServiceNow available) |

## Demo Visuals

### Technology Stack

![EDA Tech Stack](/img/diagrams/eda_tech_stack.png)

### Follow an Event

![Event Animation](/img/diagrams/eda_event_path.gif)
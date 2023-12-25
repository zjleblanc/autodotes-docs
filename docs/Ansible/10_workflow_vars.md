# Workflow Variables

Ansible workflows inject variables into each job representating job metadata which can be useful for reporting, notifications, etc. Below is an example of the variables available to you from a dummy job run.

## Example

```json
{
    "awx_job_id": 3116,
    "awx_job_launch_type": "workflow",
    "tower_job_id": 3116,
    "tower_job_launch_type": "workflow",
    "awx_workflow_job_id": 3115,
    "awx_workflow_job_name": "Linux // Debug Workflow",
    "awx_workflow_job_launch_type": "manual",
    "tower_workflow_job_id": 3115,
    "tower_workflow_job_name": "Linux // Debug Workflow",
    "tower_workflow_job_launch_type": "manual",
    "awx_user_id": 1,
    "awx_user_name": "admin",
    "awx_user_email": "admin@example.com",
    "awx_user_first_name": "",
    "awx_user_last_name": "",
    "tower_user_id": 1,
    "tower_user_name": "admin",
    "tower_user_email": "admin@example.com",
    "tower_user_first_name": "",
    "tower_user_last_name": "",
    "awx_inventory_id": 2,
    "awx_inventory_name": "Example Inventory",
    "tower_inventory_id": 2,
    "tower_inventory_name": "Example Inventory",
    "awx_project_revision": "d718bbe54455e7c86b49103800bf3bce786e2dfe",
    "awx_project_scm_branch": "master",
    "tower_project_revision": "d718bbe54455e7c86b49103800bf3bce786e2dfe",
    "tower_project_scm_branch": "master",
    "awx_job_template_id": 59,
    "awx_job_template_name": "Linux // Debug",
    "tower_job_template_id": 59,
    "tower_job_template_name": "Linux // Debug",
    "awx_execution_node": "<controller_host>",
    "tower_execution_node": "<controller_host>",
    ...
}
```
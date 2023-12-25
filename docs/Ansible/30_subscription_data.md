---
title: Getting Subscription Data
---
# Getting Subscription Data <!-- omit in toc -->

Ansible Automation Platform provides a configuration endpoint for retrieving usage data as it relates to your subscription. To pull this data (assuming you have permission), use the following endpoint:

https://<AAP_HOST>/api/v2/config/

## Configuration Response

```json
{
    "time_zone": "UTC",
    "license_info": {
        "instance_count": 16,
        "license_date": 1697860799,
        "license_type": "enterprise",
        "subscription_name": "Red Hat Developer Subscription for Individuals",
        "sku": "RH00798",
        "support_level": "Self-Support",
        "product_name": "Red Hat Ansible Automation Platform",
        "valid_key": true,
        "satellite": null,
        "pool_id": "2c9490a583fae7300183fb33bbf12ede",
        "deleted_instances": 0,
        "reactivated_instances": 0,
        "current_instances": 10,
        "automated_instances": 12,
        "automated_since": 1671651864,
        "free_instances": 0,
        "time_remaining": 4529939,
        "trial": false,
        "grace_period_remaining": 7121939,
        "compliant": false,
        "date_warning": false,
        "date_expired": false
    },
    "version": "4.4.0",
    "eula": "...",
    "analytics_status": "detailed",
    "analytics_collectors": { ... },
    "become_methods": [ ... ],
    "ui_next": true,
    "project_base_dir": "/var/lib/awx/projects",
    "project_local_paths": [],
    "custom_virtualenvs": []
}
```
---
title: RedHat Subscription Manager
---
# RedHat Subscription Manager <img src="/icons/redhat.png" class="credential-type-icon">

The RedHat Subscription Manager configuration below is compatible with the [community.general.redhat_subscription](https://docs.ansible.com/ansible/latest/collections/community/general/redhat_subscription_module.html#ansible-collections-community-general-redhat-subscription-module) module.

## Input Configuration
```yaml
fields:
  - id: rhsm_user
    type: string
    label: RHSM Username
  - id: rhsm_password
    type: string
    label: RHSM Password
    secret: true
required:
  - rhsm_user
  - rhsm_password
```

## Injector Configuration
```yaml
extra_vars:
  rhsm_user: '{{ rhsm_user }}'
  rhsm_password: '{{ rhsm_password }}'
```

## Deploy with Controller Configuration

```
# Task to be included in a playbook
- name: Create  RedHat Subscription Manager Credential Type
  ansible.builtin.include_role:
    name: infra.controller_configuration.credential_types
  vars:
    controller_credential_types:
      - name:  RedHat Subscription Manager Credential
        description:  RedHat Subscription Manager credential for use with community.general.redhat_subscription module
        inputs:
          fields:
            - id: rhsm_user
                type: string
                label: RHSM Username
            - id: rhsm_password
                type: string
                label: RHSM Password
                secret: true
          required:
            - rhsm_user
            - rhsm_password
        injectors:
          extra_vars:
            rhsm_user: "{{ rhsm_user }}"
            rhsm_password: "{{ rhsm_password }}"
```
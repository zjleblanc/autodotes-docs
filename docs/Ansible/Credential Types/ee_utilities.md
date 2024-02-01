---
title: EE Utilities
---
# EE Utilities <img src="/icons/ansible.png" class="credential-type-icon"> 

The EE Utilities Credential configuration below is compatible with [infra.ee_utilities](https://github.com/redhat-cop/ee_utilities/) modules.

## Input Configuration
```yaml
fields:
  - id: ee_base_reg_user
    type: string
    label: Base Registry Username
  - id: ee_base_reg_password
    type: string
    label: Base Registry Password
    secret: true
  - id: ee_dest_reg
    type: string
    label: Destination Registry
    help_text: 'ex: quay.io/zleblanc'
  - id: ee_dest_reg_user
    type: string
    label: Destination Registry Username
  - id: ee_dest_reg_password
    type: string
    label: Destination Registry Password
    secret: true
required:
  - ee_base_reg_user
  - ee_base_reg_password
  - ee_dest_reg
  - ee_dest_reg_user
  - ee_dest_reg_password
```

## Injector Configuration
```yaml
extra_vars:
  ee_dest_reg: '{{ ee_dest_reg }}'
  ee_base_reg_user: '{{ ee_base_reg_user }}'
  ee_dest_reg_user: '{{ ee_dest_reg_user }}'
  ee_base_reg_password: '{{ ee_base_reg_password }}'
  ee_dest_reg_password: '{{ ee_dest_reg_password }}'
```

## Deploy with Controller Configuration

```
# Task to be included in a playbook
- name: Create Private Automation Hub Credential Type
  ansible.builtin.include_role:
    name: infra.controller_configuration.credential_types
  vars:
    controller_credential_types:
      - name: ServiceNow Credential
        description: Private Automation Hub credential for use with servicenow.itsm collection
        inputs:
          fields:
            - id: ee_base_reg_user
              type: string
              label: Base Registry Username
            - id: ee_base_reg_password
              type: string
              label: Base Registry Password
              secret: true
            - id: ee_dest_reg
              type: string
              label: Destination Registry
              help_text: 'ex: quay.io/zleblanc'
            - id: ee_dest_reg_user
              type: string
              label: Destination Registry Username
            - id: ee_dest_reg_password
              type: string
              label: Destination Registry Password
        injectors:
          extra_vars:
            ee_dest_reg: !unsafe "{{ ee_dest_reg }}"
            ee_base_reg_user: !unsafe "{{ ee_base_reg_user }}"
            ee_dest_reg_user: !unsafe "{{ ee_dest_reg_user }}"
            ee_base_reg_password: !unsafe "{{ ee_base_reg_password }}"
            ee_dest_reg_password: !unsafe "{{ ee_dest_reg_password }}"
```
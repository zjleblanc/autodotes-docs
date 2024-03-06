---
title: ServiceNow
---
# ServiceNow <img src="/icons/snow.png" class="title-icon"> 

The ServiceNow Credential configuration below is compatible with all [servicenow.itsm](https://github.com/ansible-collections/servicenow.itsm) modules.

## Input Configuration
```yaml
fields:
  - id: snow_host
    type: string
    label: ServiceNow Host
  - id: snow_user
    type: string
    label: ServiceNow User
  - id: snow_password
    type: string
    label: ServiceNow User"s Password
    secret: true
  - id: snow_client_id
    type: string
    label: ServiceNow Client Id
  - id: snow_client_secret
    type: string
    label: ServiceNow Client Secret
    secret: true
required:
  - snow_host
  - snow_user
  - snow_password
```

## Injector Configuration
```yaml
env:
  SN_HOST: '{{ snow_host }}'
  SN_PASSWORD: '{{ snow_password }}'
  SN_USERNAME: '{{ snow_user }}'
  SN_CLIENT_ID: '{{ snow_client_id }}'
  SN_CLIENT_SECRET: '{{ snow_client_secret }}'
```

## Deploy with Controller Configuration

```
# Task to be included in a playbook
- name: Create ServiceNow Credential Type
  ansible.builtin.include_role:
    name: infra.controller_configuration.credential_types
  vars:
    controller_credential_types:
      - name: ServiceNow Credential
        description: ServiceNow credential for use with servicenow.itsm collection
        inputs:
          fields:
            - id: snow_host
              type: string
              label: ServiceNow Host
            - id: snow_user
              type: string
              label: ServiceNow User
            - id: snow_password
              type: string
              label: ServiceNow User"s Password
              secret: true
            - id: snow_client_id
              type: string
              label: ServiceNow Client Id
            - id: snow_client_secret
              type: string
              label: ServiceNow Client Secret
              secret: true
          required:
            - snow_host
            - snow_user
            - snow_password
        injectors:
          env:
            SN_HOST: !unsafe "{{ snow_host }}"
            SN_PASSWORD: !unsafe "{{ snow_password }}"
            SN_USERNAME: !unsafe "{{ snow_user }}"
            SN_CLIENT_ID: !unsafe "{{ snow_client_id }}"
            SN_CLIENT_SECRET: !unsafe "{{ snow_client_secret }}"
```
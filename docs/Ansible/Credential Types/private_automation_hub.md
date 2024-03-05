---
title: Private Automation Hub
---
# Private Automation Hub <img src="/icons/ansible.png" class="title-icon"> 

The Private Automation Hub Credential configuration below is compatible with all [infra.ah_configuration](https://galaxy.ansible.com/ui/repo/published/infra/ah_configuration/) modules.

## Input Configuration
```yaml
fields:
  - id: pah_host
    type: string
    label: Host
  - id: pah_username
    type: string
    label: Username
  - id: pah_password
    type: string
    label: Password
    secret: true
required:
  - pah_host
  - pah_username
  - pah_password
```

## Injector Configuration
```yaml
env:
  AH_HOST: '{{ pah_host }}'
  AH_PASSWORD: '{{ pah_password }}'
  AH_USERNAME: '{{ pah_username }}'
```

## Deploy with Controller Configuration

```
# Task to be included in a playbook
- name: Create Private Automation Hub Credential Type
  ansible.builtin.include_role:
    name: infra.controller_configuration.credential_types
  vars:
    controller_credential_types:
      - name: Private Automation Hub Credential
        description: Private Automation Hub credential for use with servicenow.itsm collection
        inputs:
          fields:
            - id: pah_host
              type: string
              label: Host
            - id: pah_username
              type: string
              label: Username
            - id: pah_password
              type: string
              label: Password
              secret: true
          required:
            - pah_host
            - pah_username
            - pah_password
        injectors:
          env:
            AH_HOST: !unsafe "{{ pah_host }}"
            AH_PASSWORD: !unsafe "{{ pah_password }}"
            AH_USERNAME: !unsafe "{{ pah_username }}"
```
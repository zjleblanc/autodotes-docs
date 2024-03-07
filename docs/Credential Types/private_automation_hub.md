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
  - id: pah_token
    type: string
    label: Token
    secret: true
required:
  - pah_host
```

## Injector Configuration
```yaml
env:
  PAH_HOST: '{{ pah_host }}'
  PAH_USERNAME: '{{ pah_username }}'
  PAH_PASSWORD: '{{ pah_password }}'
  PAH_TOKEN: '{{ pah_password }}'
  AH_HOST: '{{ pah_host }}'
  AH_USERNAME: '{{ pah_username }}'
  AH_PASSWORD: '{{ pah_password }}'
  AH_TOKEN: '{{ pah_password }}'
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
        description: Private Automation Hub credential for use with infra.ah_configuration collection
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
            - id: pah_token
              type: string
              label: Token
              secret: true
          required:
            - pah_host
        injectors:
          env:
            PAH_HOST: !unsafe "{{ pah_host }}"
            PAH_USERNAME: !unsafe "{{ pah_username }}"
            PAH_PASSWORD: !unsafe "{{ pah_password }}"
            PAH_TOKEN: !unsafe "{{ pah_token }}"
            AH_HOST: !unsafe "{{ pah_host }}"
            AH_USERNAME: !unsafe "{{ pah_username }}"
            AH_PASSWORD: !unsafe "{{ pah_password }}"
            AH_TOKEN: !unsafe "{{ pah_token }}"
```
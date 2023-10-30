---
title: Dynatrace
---
# Dynatrace <img src="/icons/dynatrace.png" class="credential-type-icon"> 

The Dynatrace Credential configuration below is used for integrating with the Dynatrace API.

## Input Configuration
```yaml
fields:
  - id: dynatrace_host
    type: string
    label: Dynatrace Host
  - id: dynatrace_client_id
    type: string
    label: Dynatrace Client Id
  - id: dynatrace_client_secret
    type: string
    label: Dynatrace Client Secret
    secret: true
required:
  - dynatrace_host
  - dynatrace_client_id
  - dynatrace_client_secret
```

## Injector Configuration
```yaml
env:
  DYNATRACE_HOST: '{{ dynatrace_host }}'
  DYNATRACE_CLIENT_ID: '{{ dynatrace_client_id }}'
  DYNATRACE_CLIENT_SECRET: '{{ dynatrace_client_secret }}'
```

## Deploy with Controller Configuration

```
# Task to be included in a playbook
- name: Create Dynatrace Credential Type
  ansible.builtin.include_role:
    name: infra.controller_configuration.credential_types
  vars:
    controller_credential_types:
      - name: Dynatrace Credential
        description: Dynatrace credential for use with Dynatrace API
        inputs:
          fields:
            - id: dynatrace_host
                type: string
                label: Dynatrace Host
            - id: dynatrace_client_id
                type: string
                label: Dynatrace Client Id
            - id: dynatrace_client_secret
                type: string
                label: Dynatrace Client Secret
                secret: true
          required:
            - dynatrace_host
            - dynatrace_client_id
            - dynatrace_client_secret
        injectors:
          env:
            DYNATRACE_HOST: !unsafe "{{ dynatrace_host }}"
            DYNATRACE_CLIENT_ID: !unsafe "{{ dynatrace_client_id }}"
            DYNATRACE_CLIENT_SECRET: !unsafe "{{ dynatrace_client_secret }}"
```
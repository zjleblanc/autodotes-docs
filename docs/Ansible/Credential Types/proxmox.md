# Proxmox VE

The Proxmox VE Credential configuration below is compatible with all [community.general.proxmox*](https://docs.ansible.com/ansible/latest/collections/community/general/index.html) modules.

## Input Configuration
```yaml
fields:
  - id: pve_api_host
    type: string
    label: PVE API Host
  - id: pve_api_user
    type: string
    label: PVE API User
  - id: pve_api_token_id
    type: string
    label: PVE API Token Id
  - id: pve_api_token_secret
    type: string
    label: PVE API Token Secret
    secret: true
  - id: pve_api_password
    type: string
    label: PVE API Password
    secret: true
required:
  - pve_api_host
  - pve_api_user
  - pve_api_token_id
  - pve_api_token_secret
```

## Injector Configuration
```yaml
extra_vars:
  proxmox_api_host: '{{ pve_api_host }}'
  proxmox_api_user: '{{ pve_api_user }}'
  proxmox_api_password: '{{ pve_api_password }}'
  proxmox_api_token_id: '{{ pve_api_token_id }}'
  proxmox_api_token_secret: '{{ pve_api_token_secret }}'

```

## Deploy with Controller Configuration

```
# Task to be included in a playbook
- name: Create Proxmox VE Credential Type
  ansible.builtin.include_role:
    name: infra.controller_configuration.credential_types
  vars:
    controller_credential_types:
      - name: Proxmox VE Credential
        description: Proxmox VE credential for use with community.general.proxmox* modules
        inputs:
          fields:
            - id: pve_api_host
                type: string
                label: PVE API Host
            - id: pve_api_user
                type: string
                label: PVE API User
            - id: pve_api_token_id
                type: string
                label: PVE API Token Id
            - id: pve_api_token_secret
                type: string
                label: PVE API Token Secret
                secret: true
            - id: pve_api_password
                type: string
                label: PVE API Password
                secret: true
          required:
            - pve_api_host
            - pve_api_user
            - pve_api_token_id
            - pve_api_token_secret
        injectors:
          extra_vars:
            proxmox_api_host: "{{ pve_api_host }}"
            proxmox_api_user: "{{ pve_api_user }}"
            proxmox_api_password: "{{ pve_api_password }}"
            proxmox_api_token_id: "{{ pve_api_token_id }}"
            proxmox_api_token_secret: "{{ pve_api_token_secret }}"
```
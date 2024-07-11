---
title: SSH Proxy
---
# SSH Proxy <img src="/icons/bastion-host.svg" class="title-icon"> 

The SSH Proxy Credential configuration below is used for connecting to a host via a bastion server.

## Input Configuration
```yaml
fields:
  - id: ssh_proxy_username
    type: string
    label: SSH Proxy Username
  - id: ssh_proxy_password
    type: string
    label: SSH Proxy Password
    secret: true
  - id: ssh_proxy_host
    type: string
    label: SSH Proxy Host
  - id: ssh_proxy_key
    type: string
    label: SSH Proxy Private Key
    format: ssh_private_key
    secret: true
    multiline: true
required:
  - ssh_proxy_username
  - ssh_proxy_host
```

## Injector Configuration
```yaml
env:
  SSH_PROXY_KEY: '{{ tower.filename }}'
file:
  template: '{{ ssh_proxy_key }}'
extra_vars:
  ssh_proxy_host: '{{ ssh_proxy_host }}'
  ssh_proxy_password: '{{ ssh_proxy_password }}'
  ssh_proxy_username: '{{ ssh_proxy_username }}'
```

## Deploy with Controller Configuration

```
# Task to be included in a playbook
- name: Create SSH Proxy Credential Type
  ansible.builtin.include_role:
    name: infra.controller_configuration.credential_types
  vars:
    controller_credential_types:
      - name: SSH Proxy Credential
        description: Used for connecting to a host via a bastion server
        inputs:
          fields:
            - id: ssh_proxy_username
              type: string
              label: SSH Proxy Username
            - id: ssh_proxy_password
              type: string
              label: SSH Proxy Password
              secret: true
            - id: ssh_proxy_host
              type: string
              label: SSH Proxy Host
            - id: ssh_proxy_key
              type: string
              label: SSH Proxy Private Key
              format: ssh_private_key
              secret: true
              multiline: true
          required:
            - ssh_proxy_username
            - ssh_proxy_host
        injectors:
          env:
            SSH_PROXY_KEY: !unsafe '{{ tower.filename }}'
          file:
            template: !unsafe '{{ ssh_proxy_key }}'
          extra_vars:
            ssh_proxy_host: !unsafe '{{ ssh_proxy_host }}'
            ssh_proxy_password: !unsafe '{{ ssh_proxy_password }}'
            ssh_proxy_username: !unsafe '{{ ssh_proxy_username }}'
```

## Example Ansible SSH Configuration
```yaml
ansible_ssh_common_args: >-
  -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null 
  -o ProxyCommand="ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null 
  -i {{ lookup('env', 'SSH_PROXY_KEY') }} -W %h:%p -q {{ ssh_proxy_username }}@{{ ssh_proxy_host }}"
```
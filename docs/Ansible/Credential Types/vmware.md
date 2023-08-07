---
title: VMWare
---
# VMWare <img src="/icons/vmware.png" class="credential-type-icon">

The VMWare configuration below is compatible with the [community.vmware](https://docs.ansible.com/ansible/latest/collections/community/vmware/index.html) collection and the [vmware.vmware_rest](https://console.redhat.com/ansible/automation-hub/repo/published/vmware/vmware_rest/) certified collection.

## Input Configuration
```yaml
fields:
  - id: vmware_host
    type: string
    label: VMWare Host
    help_text: The hostname or IP address of the vSphere vCenter or ESXi server
  - id: vmware_port
    type: string
    label: VMWare Port
    help_text: The port number of the vSphere vCenter or ESXi server
  - id: vmware_user
    type: string
    label: VMWare User
    help_text: The username of the vSphere vCenter or ESXi server
  - id: vmware_password
    type: string
    label: VMWare Password
    help_text: The password of the vSphere vCenter or ESXi server
  - id: vmware_validate_certs
    type: boolean
    label: Validate Certs
    help_text: Allows connection when SSL certificates are not valid
  - id: vmware_proxy_host
    type: string
    label: VMWare Proxy Host
    help_text: Address of a proxy that will receive all HTTPS requests and relay them
  - id: vmware_proxy_port
    type: string
    label: VMWare Proxy Port
    help_text: Port of the HTTP proxy that will receive all HTTPS requests and relay them
required:
  - vmware_host
  - vmware_user
  - vmware_password
```

## Injector Configuration
```yaml
env:
  VMWARE_HOST: '{{ vmware_host }}'
  VMWARE_PORT: '{{ vmware_port }}'
  VMWARE_USER: '{{ vmware_user }}'
  VMWARE_PASSWORD: '{{ vmware_password }}'
  VMWARE_VALIDATE_CERTS: '{{ vmware_validate_certs }}'
  VMWARE_PROXY_HOST: '{{ vmware_proxy_host }}'
  VMWARE_PROXY_PORT: '{{ vmware_proxy_port }}'
```

## Deploy with Controller Configuration

```
# Task to be included in a playbook
- name: Create VMWare Credential Type
  ansible.builtin.include_role:
    name: infra.controller_configuration.credential_types
  vars:
    controller_credential_types:
      - name:  VMWare Credential
        description:  VMWare credential for use with community.vmware collection
        inputs:
          fields:
            - id: vmware_host
              type: string
              label: VMWare Host
              help_text: The hostname or IP address of the vSphere vCenter or ESXi server
            - id: vmware_port
              type: string
              label: VMWare Port
              help_text: The port number of the vSphere vCenter or ESXi server
            - id: vmware_user
              type: string
              label: VMWare User
              help_text: The username of the vSphere vCenter or ESXi server
            - id: vmware_password
              type: string
              label: VMWare Password
              help_text: The password of the vSphere vCenter or ESXi server
            - id: vmware_validate_certs
              type: boolean
              label: Validate Certs
              help_text: Allows connection when SSL certificates are not valid
            - id: vmware_proxy_host
              type: string
              label: VMWare Proxy Host
              help_text: Address of a proxy that will receive all HTTPS requests and relay them
            - id: vmware_proxy_port
              type: string
              label: VMWare Proxy Port
              help_text: Port of the HTTP proxy that will receive all HTTPS requests and relay them
          required:
            - vmware_host
            - vmware_user
            - vmware_password
        injectors:
          env:
            VMWARE_HOST: '{{ vmware_host }}'
            VMWARE_PORT: '{{ vmware_port }}'
            VMWARE_USER: '{{ vmware_user }}'
            VMWARE_PASSWORD: '{{ vmware_password }}'
            VMWARE_VALIDATE_CERTS: '{{ vmware_validate_certs }}'
            VMWARE_PROXY_HOST: '{{ vmware_proxy_host }}'
            VMWARE_PROXY_PORT: '{{ vmware_proxy_port }}'
```
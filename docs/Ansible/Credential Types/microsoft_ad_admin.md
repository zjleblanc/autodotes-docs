---
title: Microsoft AD Admin
---
# Microsoft AD Admin <img src="/icons/windows.png" class="credential-type-icon">

The Microsoft AD Admin configuration below is compatible with all [microsoft.ad](https://docs.ansible.com/ansible/latest/collections/community/general/index.html) modules. This credential will work with modules that require an administrator account **and** those that take an arbitrary user account.

## Input Configuration
```yaml
fields:
  - id: dns_domain_name
    type: string
    label: DNS Domain Name
    help_text: When state=domain, this is the DNS name of the domain to which the targeted Windows host should be joined.
  - id: domain_admin_user
    type: string
    label: Domain Admin User
    help_text: Username of a domain admin for the target domain (required to join or leave the domain).
  - id: domain_admin_password
    type: string
    label: Domain Admin Password
    secret: true
  - id: local_admin_password
    type: string
    label: Local Admin Password
    help_text: Password to be assigned to the local Administrator user (required when state=member_server).
    secret: true
required:
  - dns_domain_name
  - domain_admin_user
  - domain_admin_password
```

## Injector Configuration
```yaml
extra_vars:
  dns_domain_name: '{{ dns_domain_name }}'
  domain_admin_user: '{{ domain_admin_user }}'
  domain_admin_password: '{{ domain_admin_password }}'
  domain_username: '{{ domain_admin_user }}'
  domain_password: '{{ domain_admin_password }}'
  local_admin_password: '{{ local_admin_password }}'
```

## Deploy with Controller Configuration

```
# Task to be included in a playbook
- name: Create  Microsoft AD Admin Credential Type
  ansible.builtin.include_role:
    name: infra.controller_configuration.credential_types
  vars:
    controller_credential_types:
      - name:  Microsoft AD Admin Credential
        description:  Microsoft AD Admin credential for use with microsoft.ad collection
        inputs:
          fields:
            - id: dns_domain_name
              type: string
              label: DNS Domain Name
              help_text: When state=domain, this is the DNS name of the domain to which the targeted Windows host should be joined.
            - id: domain_admin_user
              type: string
              label: Domain Admin User
              help_text: Username of a domain admin for the target domain (required to join or leave the domain).
            - id: domain_admin_password
              type: string
              label: Domain Admin Password
              secret: true
            - id: local_admin_password
              type: string
              label: Local Admin Password
              help_text: Password to be assigned to the local Administrator user (required when state=member_server).
              secret: true
          required:
            - dns_domain_name
            - domain_admin_user
            - domain_admin_password
        injectors:
          extra_vars:
            dns_domain_name: !unsafe "{{ dns_domain_name }}"
            domain_admin_user: !unsafe "{{ domain_admin_user }}"
            domain_admin_password: !unsafe "{{ domain_admin_password }}"
            domain_username: !unsafe "{{ domain_admin_user }}"
            domain_password: !unsafe "{{ domain_admin_password }}"
            local_admin_password: !unsafe "{{ local_admin_password }}"
```
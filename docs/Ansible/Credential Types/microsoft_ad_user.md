---
title: Microsoft AD User
---
# Microsoft AD User <img src="/icons/windows.png" class="credential-type-icon">

The Microsoft AD User configuration below is compatible with all [microsoft.ad](https://docs.ansible.com/ansible/latest/collections/community/general/index.html) modules that do not require an Administrator credential.

## Input Configuration
```yaml
fields:
  - id: domain_user
    type: string
    label: Domain Username
    help_text: |
        The username to use when interacting with AD.
        If this is not set then the user that is used for authentication will be the connection user.
        Ansible will be unable to use the connection user unless auth is Kerberos with credential delegation or CredSSP, or become is used on the task.
  - id: domain_password
    type: string
    label: Domain Password
    secret: true
  - id: domain_server
    type: string
    label: Local Admin Password
    help_text: |
        Specified the Active Directory Domain Services instance to connect to.
        Can be in the form of an FQDN or NetBIOS name.
        If not specified then the value is based on the default domain of the computer running PowerShell.
required:
  - domain_user
  - domain_password
```

## Injector Configuration
```yaml
extra_vars:
  domain_user: '{{ domain_user }}'
  domain_password: '{{ domain_password }}'
  domain_server: '{{ domain_server }}'
```

## Deploy with Controller Configuration

```
# Task to be included in a playbook
- name: Create  Microsoft AD User Credential Type
  ansible.builtin.include_role:
    name: infra.controller_configuration.credential_types
  vars:
    controller_credential_types:
      - name:  Microsoft AD User Credential
        description:  Microsoft AD User credential for use with microsoft.ad collection
        inputs:
          fields:
            - id: domain_user
              type: string
              label: Domain Username
              help_text: |
                  The username to use when interacting with AD.
                  If this is not set then the user that is used for authentication will be the connection user.
                  Ansible will be unable to use the connection user unless auth is Kerberos with credential delegation or CredSSP, or become is used on the task.
            - id: domain_password
              type: string
              label: Domain Password
              secret: true
            - id: domain_server
              type: string
              label: Local Admin Password
              help_text: |
                  Specified the Active Directory Domain Services instance to connect to.
                  Can be in the form of an FQDN or NetBIOS name.
                  If not specified then the value is based on the default domain of the computer running PowerShell.
          required:
            - domain_user
            - domain_password
        injectors:
          extra_vars:
            domain_user: !unsafe "{{ domain_user }}"
            domain_password: !unsafe "{{ domain_password }}"
            domain_server: !unsafe "{{ domain_server }}"
```
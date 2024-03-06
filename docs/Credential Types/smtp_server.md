---
title: SMTP Server
---
# SMTP Server <img src="/icons/smtp.png" class="title-icon"> 

The SMTP Server Credential configuration below is intended for use with the [ansible.builtin.mail](https://docs.ansible.com/ansible/latest/collections/community/general/mail_module.html) module.

## Input Configuration
```yaml
fields:
  - id: email_smtp_server
    type: string
    label: Server
    help_text: Example - smtp.gmail.com
  - id: email_smtp_server_port
    type: string
    label: Port
    help_text: Example - 587
  - id: email_smtp_username
    type: string
    label: Username
    help_text: Username to authenticate with SMTP server
  - id: email_smtp_password
    type: string
    label: Password
    secret: true
    help_text: Password to authenticate with SMTP server
  - id: email_smtp_from_address
    type: string
    label: From Address
    help_text: Example - sender@gmail.com
required:
  - email_smtp_server
  - email_smtp_server_port
  - email_smtp_username
  - email_smtp_password
```

## Injector Configuration
```yaml
extra_vars:
  email_smtp_server: '{{ email_smtp_server }}'
  email_smtp_password: '{{ email_smtp_password }}'
  email_smtp_username: '{{ email_smtp_username }}'
  email_smtp_server_port: '{{ email_smtp_server_port }}'
  email_smtp_from_address: '{{ email_smtp_from_address }}'
```

## Deploy with Controller Configuration

```
# Task to be included in a playbook
- name: Create SMTP Server Credential Type
  ansible.builtin.include_role:
    name: infra.controller_configuration.credential_types
  vars:
    controller_credential_types:
      - name: SMTP Server Credential
        description: SMTP Server credential for use with ansible.builtin.mail module
        inputs:
          fields:
            - id: email_smtp_server
              type: string
              label: Server
              help_text: Example - smtp.gmail.com
            - id: email_smtp_server_port
              type: string
              label: Port
              help_text: Example - 587
            - id: email_smtp_username
              type: string
              label: Username
              help_text: Username to authenticate with SMTP server
            - id: email_smtp_password
              type: string
              label: Password
              secret: true
              help_text: Password to authenticate with SMTP server
            - id: email_smtp_from_address
              type: string
              label: From Address
              help_text: Example - sender@gmail.com
          required:
            - email_smtp_server
            - email_smtp_server_port
            - email_smtp_username
            - email_smtp_password
        injectors:
          extra_vars:
            email_smtp_server: !unsafe "{{ email_smtp_server }}"
            email_smtp_password: !unsafe "{{ email_smtp_password }}"
            email_smtp_username: !unsafe "{{ email_smtp_username }}"
            email_smtp_server_port: !unsafe "{{ email_smtp_server_port }}"
            email_smtp_from_address: !unsafe "{{ email_smtp_from_address }}"
```

## Example Usage

```yaml
- name: Sending notification email
  ansible.builtin.mail:
    host: "{{ email_smtp_server }}"
    port: "{{ email_smtp_server_port }}"
    secure: try
    from: "{{ email_smtp_from_address | default('ansible@gmail.com') }}"
    to: "recipient@gmail.com"
    subject: "Ansible Notification"
    body: "This is an Ansible notification"
    subtype: "plain"
    username: "{{ email_smtp_username }}"
    password: "{{ email_smtp_password }}"
```
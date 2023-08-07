---
title: Postgresql
---
# Postgresql <img src="/icons/pgsql.png" class="credential-type-icon">

The Postgresql configuration below is compatible with the [community.postgresql](https://docs.ansible.com/ansible/latest/collections/community/postgresql/index.html) collection.

## Input Configuration
```yaml
fields:
  - id: pgsql_login_host
    type: string
    label: Login Host
    help_text: Host running the database
  - id: pgsql_login_user
    type: string
    label: Login User
    help_text: The username this module should use to establish its PostgreSQL session
  - id: pgsql_login_password
    type: string
    label: Login Password
    help_text: The password this module should use to establish its PostgreSQL session
  - id: pgsql_port
    type: string
    label: Port
    help_text: "Database port to connect to (default: 5432)"
  - id: pgsql_ssl_cert
    type: string
    label: SSL Cert Path
    help_text: Specifies the file name of the client SSL certificate
  - id: pgsql_ssl_key
    type: string
    label: SSL Key Path
    help_text: Specifies the location for the secret key used for the client certificate
  - id: pgsql_ssl_mode
    type: string
    choices:
      - allow
      - disable
      - prefer
      - require
      - verify-ca
      - verify-full
    label: SSL Mode
    help_text: Determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the server
required:
  - pgsql_login_host
  - pgsql_login_user
  - pgsql_login_password
```

## Injector Configuration
```yaml
extra_vars:
  login_host: '{{ pgsql_login_host }}'
  login_user: '{{ pgsql_login_user }}'
  login_password: '{{ pgsql_login_password }}'
  login_port: '{{ pgsql_port }}'
  ssl_cert: '{{ pgsql_ssl_cert }}'
  ssl_key: '{{ pgsql_ssl_key }}'
  ssl_mode: '{{ pgsql_ssl_mode }}'
```

## Deploy with Controller Configuration

```
# Task to be included in a playbook
- name: Create Postgresql Credential Type
  ansible.builtin.include_role:
    name: infra.controller_configuration.credential_types
  vars:
    controller_credential_types:
      - name:  Postgresql Credential
        description:  Postgresql credential for use with community.postgresql collection
        inputs:
          fields:
            - id: pgsql_login_host
              type: string
              label: Login Host
              help_text: Host running the database
            - id: pgsql_login_user
              type: string
              label: Login User
              help_text: The username this module should use to establish its PostgreSQL session
            - id: pgsql_login_password
              type: string
              label: Login Password
              help_text: The password this module should use to establish its PostgreSQL session
            - id: pgsql_port
              type: string
              label: Port
              help_text: "Database port to connect to (default: 5432)"
            - id: pgsql_ssl_cert
              type: string
              label: SSL Cert Path
              help_text: Specifies the file name of the client SSL certificate
            - id: pgsql_ssl_key
              type: string
              label: SSL Key Path
              help_text: Specifies the location for the secret key used for the client certificate
            - id: pgsql_ssl_mode
              type: string
              choices:
                - allow
                - disable
                - prefer
                - require
                - verify-ca
                - verify-full
              label: SSL Mode
              help_text: Determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the server
          required:
            - pgsql_login_host
            - pgsql_login_user
            - pgsql_login_password
        injectors:
          extra_vars:
            login_host: unsafe! '{{ pgsql_login_host }}'
            login_user: unsafe! '{{ pgsql_login_user }}'
            login_password: unsafe! '{{ pgsql_login_password }}'
            login_port: unsafe! '{{ pgsql_port }}'
            ssl_cert: unsafe! '{{ pgsql_ssl_cert }}'
            ssl_key: unsafe! '{{ pgsql_ssl_key }}'
            ssl_mode: unsafe! '{{ pgsql_ssl_mode }}'
```
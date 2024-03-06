---
title: The Movie Database (TMDB)
---
# The Movie Database (TMDB) <img src="/icons/tmdb.png" class="title-icon"> 

The Movie Database Credential configuration below is intended for use with the [zjleblanc.tmdb](https://github.com/zjleblanc/zjleblanc.tmdb/blob/master/README.md) collection.

## Input Configuration
```yaml
fields:
  - id: tmdb_api_url
    type: string
    label: API URL
    help_text: version 3 - https://api.themoviedb.org/3
  - id: tmdb_api_key
    type: string
    label: API Key
    secret: true
  - id: tmdb_username
    type: string
    label: Username
    help_text: Username to validate TMDB token
  - id: tmdb_password
    type: string
    label: Password
    secret: true
    help_text: Password to validate TMDB token
  - id: tmdb_account_id
    type: string
    label: Account Id
    help_text: Required to make changes to user account
required:
  - tmdb_api_url
  - tmdb_api_key
  - tmdb_username
  - tmdb_password
```

## Injector Configuration
```yaml
extra_vars:
  tmdb_api_url: '{{ tmdb_api_url }}'
  tmdb_api_key: '{{ tmdb_api_key }}'
  tmdb_username: '{{ tmdb_username }}'
  tmdb_password: '{{ tmdb_password }}'
  tmdb_account_id: '{{ tmdb_account_id }}'
env:
  TMDB_API: '{{ tmdb_api_url }}'
  TMDB_API_KEY: '{{ tmdb_api_key }}'
  TMDB_USERNAME: '{{ tmdb_username }}'
  TMDB_PASSWORD: '{{ tmdb_password }}'
  TMDB_ACCOUNT_ID: '{{ tmdb_account_id }}'
```

## Deploy with Controller Configuration

```
# Task to be included in a playbook
- name: Create TMDB Credential Type
  ansible.builtin.include_role:
    name: infra.controller_configuration.credential_types
  vars:
    controller_credential_types:
      - name: TMDB Credential
        description: TMDB credential for use with zjleblanc.tmdb collection
        inputs:
          fields:
            - id: tmdb_api_url
              type: string
              label: API URL
              help_text: version 3 - https://api.themoviedb.org/3
            - id: tmdb_api_key
              type: string
              label: API Key
              secret: true
            - id: tmdb_username
              type: string
              label: Username
              help_text: Username to validate TMDB token
            - id: tmdb_password
              type: string
              label: Password
              secret: true
              help_text: Password to validate TMDB token
            - id: tmdb_account_id
              type: string
              label: Account Id
              help_text: Required to make changes to user account
          required:
            - tmdb_api_url
            - tmdb_api_key
            - tmdb_username
            - tmdb_password
        injectors:
          extra_vars:
            tmdb_api_url: !unsafe "{{ tmdb_api_url }}"
            tmdb_api_key: !unsafe "{{ tmdb_api_key }}"
            tmdb_username: !unsafe "{{ tmdb_username }}"
            tmdb_password: !unsafe "{{ tmdb_password }}"
            tmdb_account_id: !unsafe "{{ tmdb_account_id }}"
          env:
            TMDB_API: !unsafe "{{ tmdb_api_url }}"
            TMDB_API_KEY: !unsafe "{{ tmdb_api_key }}"
            TMDB_USERNAME: !unsafe "{{ tmdb_username }}"
            TMDB_PASSWORD: !unsafe "{{ tmdb_password }}"
            TMDB_ACCOUNT_ID: !unsafe "{{ tmdb_account_id }}"
```

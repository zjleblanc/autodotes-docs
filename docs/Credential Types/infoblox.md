---
title: Infoblox
---
# Infoblox <img src="/icons/infoblox.png" class="title-icon"> 

The Infoblox Credential configuration below is used for integrating with the [infoblox.nios_modules](https://console.redhat.com/ansible/automation-hub/repo/published/infoblox/nios_modules/) collection.

## Input Configuration
```yaml
fields:
  - id: infoblox_host
    type: string
    label: Infoblox Host
    help_text: Specifies the DNS host name or address for connecting to the remote instance of NIOS WAPI over REST
  - id: infoblox_username
    type: string
    label: Infoblox Username
    help_text: Configures the username to use to authenticate the connection to the remote instance of NIOS
  - id: infoblox_password
    type: string
    label: Infoblox Password
    help_text: Specifies the password to use to authenticate the connection to the remote instance of NIOS
    secret: true
  - id: infoblox_cert
    type: string
    label: Infoblox Cert
    help_text: Specifies the client certificate file with digest of x509 config for extra layer secure connection the remote instance of NIOS
  - id: infoblox_key
    label: Infoblox Key
    help_text: Specifies private key file for encryption with the certificate in order to connect with remote instance of NIOS
    secret: true
    format: ssh_private_key
  - id: infoblox_validate_certs
    type: boolean
    label: Infoblox Validate Certs
    help_text: Boolean value to enable or disable verifying SSL certificates
  - id: infoblox_max_results
    type: string
    label: Infoblox Max Results
    help_text: "Specifies the maximum number of objects to be returned, if set to a negative number the appliance will return an error when the number of returned objects would exceed the setting (default: 1000)"
  - id: infoblox_max_retries
    type: string
    label: Infoblox Max Retries
    help_text: "Configures the number of attempted retries before the connection is declared usable (default: 3)"
  - id: infoblox_wapi_version
    type: string
    label: Infoblox WAPI Version
    help_text: "Specifies the version of WAPI to use (default 2.9)"
  - id: infoblox_http_request_timeout
    type: string
    label: Infoblox HTTP Request Timeout
    help_text: The amount of time before to wait before receiving a response
required:
  - infoblox_host
```

## Injector Configuration
```yaml
env:
  INFOBLOX_HOST: '{{ infoblox_host }}'
  INFOBLOX_USERNAME: '{{ infoblox_username }}'
  INFOBLOX_PASSWORD: '{{ infoblox_password }}'
  INFOBLOX_CERT: '{{ infoblox_cert }}'
  INFOBLOX_KEY: '{{ infoblox_key }}'
  INFOBLOX_SSL_VERIFY: '{{ infoblox_validate_certs }}'
  INFOBLOX_MAX_RESULTS: '{{ infoblox_max_results }}'
  INFOBLOX_MAX_RETRIES: '{{ infoblox_max_retries }}'
  INFOBLOX_WAPI_VERSION: '{{ infoblox_wapi_version }}'
  INFOBLOX_HTTP_REQUEST_TIMEOUT: '{{ infoblox_http_request_timeout }}'
```

## Deploy with Controller Configuration

```
# Task to be included in a playbook
- name: Create Infoblox Credential Type
  ansible.builtin.include_role:
    name: infra.controller_configuration.credential_types
  vars:
    controller_credential_types:
      - name: Infoblox Credential
        description: The Infoblox Credential configuration below is used for integrating with the infoblox.nios_modules collection.
        inputs:
          fields:
            - id: infoblox_host
              type: string
              label: Infoblox Host
              help_text: Specifies the DNS host name or address for connecting to the remote instance of NIOS WAPI over REST
            - id: infoblox_username
              type: string
              label: Infoblox Username
              help_text: Configures the username to use to authenticate the connection to the remote instance of NIOS
            - id: infoblox_password
              type: string
              label: Infoblox Password
              help_text: Specifies the password to use to authenticate the connection to the remote instance of NIOS
              secret: true
            - id: infoblox_cert
              type: string
              label: Infoblox Cert
              help_text: Specifies the client certificate file with digest of x509 config for extra layer secure connection the remote instance of NIOS
            - id: infoblox_key
              label: Infoblox Key
              help_text: Specifies private key file for encryption with the certificate in order to connect with remote instance of NIOS
              secret: true
              format: ssh_private_key
            - id: infoblox_validate_certs
              type: boolean
              label: Infoblox Validate Certs
              help_text: Boolean value to enable or disable verifying SSL certificates
            - id: infoblox_max_results
              type: string
              label: Infoblox Max Results
              help_text: "Specifies the maximum number of objects to be returned, if set to a negative number the appliance will return an error when the number of returned objects would exceed the setting (default: 1000)"
            - id: infoblox_max_retries
              type: string
              label: Infoblox Max Retries
              help_text: "Configures the number of attempted retries before the connection is declared usable (default: 3)"
            - id: infoblox_wapi_version
              type: string
              label: Infoblox WAPI Version
              help_text: "Specifies the version of WAPI to use (default 2.9)"
            - id: infoblox_http_request_timeout
              type: string
              label: Infoblox HTTP Request Timeout
              help_text: The amount of time before to wait before receiving a response
          required:
            - infoblox_host
        injectors:
          env:
            INFOBLOX_HOST: !unsafe "{{ infoblox_host }}"
            INFOBLOX_USERNAME: !unsafe "{{ infoblox_username }}"
            INFOBLOX_PASSWORD: !unsafe "{{ infoblox_password }}"
            INFOBLOX_CERT: !unsafe "{{ infoblox_cert }}"
            INFOBLOX_KEY: !unsafe "{{ infoblox_key }}"
            INFOBLOX_SSL_VERIFY: !unsafe "{{ infoblox_validate_certs }}"
            INFOBLOX_MAX_RESULTS: !unsafe "{{ infoblox_max_results }}"
            INFOBLOX_MAX_RETRIES: !unsafe "{{ infoblox_max_retries }}"
            INFOBLOX_WAPI_VERSION: !unsafe "{{ infoblox_wapi_version }}"
            INFOBLOX_HTTP_REQUEST_TIMEOUT: !unsafe "{{ infoblox_http_request_timeout }}"
```
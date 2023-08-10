---
title: Microsoft AD LDAP
---
# Microsoft AD LDAP <img src="/icons/windows.png" class="credential-type-icon">

The Microsoft AD LDAP configuration below is compatible with all [microsoft.ad.ldap](https://docs.ansible.com/ansible/latest/collections/microsoft/ad/ldap_inventory.html) inventory plugin.

## Input Configuration
```yaml
fields:
  - id: ldap_server
    type: string
    label: LDAP Server
    help_text: The domain controller/server to connect to
  - id: ldap_port
    type: string
    label: LDAP Port
    help_text: Port 389 is used for LDAP and port 686 is used for LDAPS
  - id: ldap_username
    type: string
    label: LDAP Username
  - id: ldap_password
    type: string
    label: LDAP Password
    secret: true
  - id: ldap_auth_protocol
    type: string
    label: LDAP Auth Protocol
    choices:
      - simple
      - certificate
      - kerberos
      - negotiate
      - ntlm
  - id: ldap_cert_validation
    type: string
    label: LDAP Cert Validation
    choices:
      - always
      - ignore
      - ignore_hostname
    help_text: The certificate validation behaviour when using a TLS connection
  - id: ldap_ca_cert
    type: string
    label: LDAP CA Cert
    help_text: Can be the path to a CA certificate PEM or DER file, directory of PEM certificates, or the CA certificate PEM string that is used for certificate validation
  - id: ldap_certificate
    type: string
    label: LDAP Certificate
    help_text: The value can either be a path to a file containing the certificate or string of the PEM encoded certificate
  - id: ldap_certificate_key
    type: string
    label: LDAP Certificate Key
    help_text: The value can either be a path to a file containing the key in the PEM or DER encoded form, or it can be the string of a PEM encoded key
  - id: ldap_certificate_password
    type: string
    label: LDAP Certificate Password
    secret: true
    help_text: The password used to decrypt the certificate key specified by LDAP Certificate or LDAP Certificate Key
required:
  - ldap_server
```

## Injector Configuration
```yaml
env:
  MICROSOFT_AD_LDAP_SERVER: "{{ ldap_server }}"
  MICROSOFT_AD_LDAP_PORT: "{{ ldap_port | default('389') }}"
  MICROSOFT_AD_LDAP_USERNAME: "{{ ldap_username }}"
  MICROSOFT_AD_LDAP_PASSWORD: "{{ ldap_password }}"
  MICROSOFT_AD_LDAP_AUTH_PROTOCOL: "{{ ldap_auth_protocol | default('negotiate', true) }}"
  MICROSOFT_AD_LDAP_CERT_VALIDATION: "{{ ldap_cert_validation }}"
  MICROSOFT_AD_LDAP_CA_CERT: "{{ ldap_ca_cert }}"
  MICROSOFT_AD_LDAP_CERTIFICATE: "{{ ldap_certificate }}"
  MICROSOFT_AD_LDAP_CERTIFICATE_KEY: "{{ ldap_certificate_key }}"
  MICROSOFT_AD_LDAP_CERTIFICATE_PASSWORD: "{{ ldap_certificate_password }}"
```

## Deploy with Controller Configuration

```
# Task to be included in a playbook
- name: Create  Microsoft AD LDAP Credential Type
  ansible.builtin.include_role:
    name: infra.controller_configuration.credential_types
  vars:
    controller_credential_types:
      - name:  Microsoft AD LDAP Credential
        description: Microsoft AD LDAP credential for use with microsoft.ad.ldap inventory plugin
        inputs:
          fields:
            - id: ldap_server
              type: string
              label: LDAP Server
              help_text: The domain controller/server to connect to
            - id: ldap_port
              type: string
              label: LDAP Port
              help_text: Port 389 is used for LDAP and port 686 is used for LDAPS
            - id: ldap_username
              type: string
              label: LDAP Username
            - id: ldap_password
              type: string
              label: LDAP Password
              secret: true
            - id: ldap_auth_protocol
              type: string
              label: LDAP Auth Protocol
              choices:
                - simple
                - certificate
                - kerberos
                - negotiate
                - ntlm
            - id: ldap_cert_validation
              type: string
              label: LDAP Cert Validation
              choices:
                - always
                - ignore
                - ignore_hostname
              help_text: The certificate validation behaviour when using a TLS connection
            - id: ldap_ca_cert
              type: string
              label: LDAP CA Cert
              help_text: Can be the path to a CA certificate PEM or DER file, directory of PEM certificates, or the CA certificate PEM string that is used for certificate validation
            - id: ldap_certificate
              type: string
              label: LDAP Certificate
              help_text: The value can either be a path to a file containing the certificate or string of the PEM encoded certificate
            - id: ldap_certificate_key
              type: string
              label: LDAP Certificate Key
              help_text: The value can either be a path to a file containing the key in the PEM or DER encoded form, or it can be the string of a PEM encoded key
            - id: ldap_certificate_password
              type: string
              label: LDAP Certificate Password
              secret: true
              help_text: The password used to decrypt the certificate key specified by LDAP Certificate or LDAP Certificate Key
          required:
            - ldap_server
        injectors:
          env:
            MICROSOFT_AD_LDAP_SERVER: unsafe! "{{ ldap_server }}"
            MICROSOFT_AD_LDAP_PORT: unsafe! "{{ ldap_port | default('389') }}"
            MICROSOFT_AD_LDAP_USERNAME: unsafe! "{{ ldap_username }}"
            MICROSOFT_AD_LDAP_PASSWORD: unsafe! "{{ ldap_password }}"
            MICROSOFT_AD_LDAP_AUTH_PROTOCOL: unsafe! "{{ ldap_auth_protocol | default('negotiate', true) }}"
            MICROSOFT_AD_LDAP_CERT_VALIDATION: unsafe! "{{ ldap_cert_validation }}"
            MICROSOFT_AD_LDAP_CA_CERT: unsafe! "{{ ldap_ca_cert }}"
            MICROSOFT_AD_LDAP_CERTIFICATE: unsafe! "{{ ldap_certificate }}"
            MICROSOFT_AD_LDAP_CERTIFICATE_KEY: unsafe! "{{ ldap_certificate_key }}"
            MICROSOFT_AD_LDAP_CERTIFICATE_PASSWORD: unsafe! "{{ ldap_certificate_password }}"
```
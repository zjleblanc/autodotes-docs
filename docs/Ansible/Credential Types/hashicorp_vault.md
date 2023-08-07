---
title: HashiCorp Vault
---
# HashiCorp Vault <img src="/icons/hashi.png" class="credential-type-icon">

The HashiCorp Vault Credential configuration below is compatible with the [community.hashi_vault](https://docs.ansible.com/ansible/latest/collections/community/hashi_vault/index.html) collection.

!!! note "Authentication Methods"
    The hashi_vault collection accepts several different authentication methods, so this credential may need to be used in conjunction with another type (e.g. AWS or Azure). At its most basic usage, this credential would set the target HashiCorp vault address. In scenarios where a long-lived token is available, the credential becomes more useful.

## Input Configuration
```yaml
fields:
  - id: vault_addr
    type: string
    label: Vault Address
  - id: vault_namespace
    type: string
    label: Vault Namespace
  - id: vault_token
    type: string
    label: Vault Token
    secret: true
  - id: vault_ca_cert
    type: string
    label: Vault CA Certificate
  - id: vault_skip_verify
    type: boolean
    label: Verify SSL
required:
  - vault_addr
```

## Injector Configuration
```yaml
env:
  VAULT_ADDR: '{{ vault_addr }}'
  VAULT_NAMESPACE: '{{ vault_namespace }}'
  VAULT_TOKEN: '{{ vault_token }}'
  VAULT_CACERT: '{{ vault_ca_cert }}'
  VAULT_SKIP_VERIFY: '{{ vault_skip_verify }}'
```

## Deploy with Controller Configuration

```
# Task to be included in a playbook
- name: Create HashiCorp Vault Credential Type
  ansible.builtin.include_role:
    name: infra.controller_configuration.credential_types
  vars:
    controller_credential_types:
      - name: HashiCorp Vault Credential
        description: HashiCorp Vault credential for use with community.hashi_vault collection
        inputs:
          fields:
            - id: vault_addr
              type: string
              label: Vault Address
            - id: vault_namespace
              type: string
              label: Vault Namespace
            - id: vault_token
              type: string
              label: Vault Token
              secret: true
            - id: vault_ca_cert
              type: string
              label: Vault CA Certificate
            - id: vault_skip_verify
              type: boolean
              label: Verify SSL
          required:
            - vault_addr
        injectors:
          env:
            VAULT_ADDR: '{{ vault_addr }}'
            VAULT_NAMESPACE: '{{ vault_namespace }}'
            VAULT_TOKEN: '{{ vault_token }}'
            VAULT_CACERT: '{{ vault_ca_cert }}'
            VAULT_SKIP_VERIFY: '{{ vault_skip_verify }}'
```
---
title: Use Ansible to Generate RHEL for Edge Role Inputs
---
# Use Ansible to Generate RHEL for Edge Blueprint <!-- omit in toc -->

RHEL for Edge repos can be automated using the [infra.osbuild](https://github.com/redhat-cop/infra.osbuild/tree/main) collection maintained by Red Hat. The builder role accepts configuration to generate a new image (or commit). To accelerate the process of creating a baseline blueprint - the following playbook will pull package facts from an existing RHEL instance.

## Playbook

```yaml
- name: Basic fact gathering playbook
  hosts: "{{ _hosts | default(omit) }}"
  gather_facts: false

  tasks:
    - name: Gather the package facts
      become: true
      ansible.builtin.package_facts:
        manager: auto

    - name: Map to builder compose input
      ansible.builtin.set_fact:
        builder_compose_pkgs: "{{ ansible_facts.packages.keys() | list }}"

    - name: Print the result
      ansible.builtin.debug:
        var: builder_compose_pkgs
```

## Package Facts

```yaml
builder_compose_pkgs:
  - rpm-ostree
  - gettext-libs
  - kernel-headers
  - libreport-filesystem
  - redhat-logos
  - linux-firmware
  - json-c
  - libblkid
  - dbus-tools
  - python3-firewall
  ...
  - sos
  - iwl5150-firmware
  - python3-bind
  - libdb-utils
  - libnfsidmap
  - python3-schedutils
  - cracklib-dicts
  - selinux-policy-targeted
  - iptables
  - python3-ply
```
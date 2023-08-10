---
title: Common Installation Issues
---
# Common Installation Issues <!-- omit in toc -->

- [Elevated Privileges](#elevated-privileges)
- [Locale utf-8](#locale-utf-8)
- [Inventory FQDNs](#inventory-fqdns)
- [Custom Certs](#custom-certs)
	- [Controller (formerly Tower)](#controller-formerly-tower)
	- [Automation Hub](#automation-hub)

## Elevated Privileges

- override the `ansible_become_method` var depending on the host system
- ex: `ansible_become_method=sudo` for linux hosts

## Locale utf-8

- Check /etc/locale
- Use the localectl to set the locale system-wide
- `localectl set-locale`

## Inventory FQDNs

- make sure inventory in the installation bundle uses FQDN

## Custom Certs

### Controller (formerly Tower)

| arg | purpose |
| --- | ------- |
| web_server_ssl_cert | Path on the installer node to custom cert the tower web server will serve (it will be copied as /etc/tower/tower.cert) |
| web_server_ssl_key | Path on the installer node to private key the certificate has been generated with (it will be copied as /etc/tower/tower.key) |
| custom_ca_cert | Custom CA to add as trustworthy in the system bundle |

- restart nginx to copy changes to custom certs into tower.cert / tower.key
- [Reference](https://access.redhat.com/solutions/3109871)

### Automation Hub
| arg | purpose |
| --- | ------- |
| automationhub_ssl_cert | same as web_server_ssl_cert but for Automation Hub |
| automationhub_ssl_key | same as web_server_ssl_key but for Automation Hub |

- restart nginx service
- [Install Reference](https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/2.0-ea/html/red_hat_ansible_automation_platform_installation_guide/single-machine-scenario#red_hat_ansible_automation_platform_installation_settings)
- [Post-Install Reference](https://access.redhat.com/solutions/5731261)
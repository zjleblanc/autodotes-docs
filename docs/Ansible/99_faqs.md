# AAP FAQs

Frequently asked customer questions regarding Ansible Automation Platform (AAP)

[TOC]

## Collection Install SSL Error

Attempting to download collections with a valid galaxy server configuration fails due to certificate validation.

### Problem

Potential root causes for the error:

- the certificate is not valid
- user can't access the cert store

### Solution

Depending on the root cause, this may fix your issue:

- update your Private Automation Hub certificate (if that is your target)
- use the option to bypass cert validation `--ignore-certs`
- make sure the user can has read permissions on the cert store
    - error should print location, if not look at `/etc/pki/tls/certs`

## Cannot Retrieve Subscription

Can't retrieve subscriptions in controller (401 invalid credentials)

### Problem

In the controller UI, when attempting to attach a subscription using Red Hat or Satellite credentials the customer gets a 401 invalid credentials error. Customer is c/p password used to login to customer portal.

### Investigate

1.  Is the customer using the correct username and password?
2.  Check the rhsm config at `/etc/rhsm/rhsm.conf` on the control node:
    - If the \[server\] hostname attribute contains **subscription.rhsm.redhat.com**, then it will use Red Hat customer portal auth flow
    - If not, then it will attempt to get subs from satellite
    - [See source code](https://github.com/ansible/awx/blob/ac6a82eee41feb041ff3e4d16459d4b1a774175f/awx/main/utils/licensing.py)

### Solution

Customer was using customer portal credentials but the rhsm.conf was pointed at a Satellite server. We modified rhsm.conf (temporarily to validate):
```
[server]
# Server hostname:
hostname = subscription.rhsm.redhat.com

# Server prefix:
prefix = /subscription
```

Customer has options:

1. work with satellite admin to obtain appropriate credentials for pulling subscriptions from AAP
1. permanently modify rhsm config to point at **subscription.rhsm.redhat.com**

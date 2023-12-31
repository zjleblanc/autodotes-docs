---
title: AAP FAQs
---
# AAP FAQs <!-- omit in toc -->

Frequently asked customer questions regarding Ansible Automation Platform (AAP)

- [Collection Install SSL Error](#collection-install-ssl-error)
	- [Problem](#problem)
	- [Solution](#solution)
- [Cannot Retrieve Subscription](#cannot-retrieve-subscription)
	- [Problem](#problem-1)
	- [Investigate](#investigate)
	- [Solution](#solution-1)
- [Callback Provisioning Fails](#callback-provisioning-fails)
	- [Problem](#problem-2)
	- [Solution](#solution-2)
- [ansible-builder failing due to self-signed certificate error](#ansible-builder-failing-due-to-self-signed-certificate-error)
	- [Problem](#problem-3)
	- [Solution](#solution-3)


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

## Callback Provisioning Fails

### Problem

The Ansible callback provisioning fails with error `No matching host could be found!`, but the URL for controller and host key sent in the POST body are confirmed to be correct.

### Solution

When running Controller behind a proxy, there are some additional configuration settings you can set. Specifically, you want to use the `HTTP_X_FORWARDED_FOR` header when sending requests to ensure the originating IP address of the client can be determined. This can be done in the Settings > Miscellaneous System Settings page of the Controller UI.

![Remote Host Headers](/img/remote_host_headers.png)

Learn more about [HTTP_X_FORWARDED_FOR](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)

## ansible-builder failing due to self-signed certificate error

### Problem

Trying to build an execution-environment and build process consistently fails when install rpms from `cdn-ubi.redhat.com`. The full error looks something like the snippet below:

```
error: cannot update repo 'ubi-8-baseos-rpms': Cannot download repomd.xml: Cannot download repodata/repomd.xml: 
All mirrors were tried; Last error: Curl error (60): Peer certificate cannot be authenticated with given CA certificates 
for https://cdn-ubi.redhat.com/content/public/ubi/dist/ubi8/8/x86_64/baseos/os/repodata/repomd.xml 
[SSL certificate problem: self signed certificate in certificate chain]
```

### Solution

If you are trying to build an execution environment on a node that sits behind a proxy, it is likely that your proxy is intercepting the traffic to do an inspection and presenting it's own certificate. The execution environment receives the certificate which does not indicate a valid CA; therefore, the dnf command fails. There are two paths to resolve this issue:

1. Add a rule in your proxy to allow traffic to the destination `cdn-ubi.redhat.com`.
2. Copy the proxy's certificate pem to `/etc/pki/ca-trust/source/anchors` and run `update-ca-trust` during the build process
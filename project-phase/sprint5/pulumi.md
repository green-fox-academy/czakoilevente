# Pulumi

### What is [Pulumi](https://www.pulumi.com/)?

A single workflow for provisioning cloud apps and infrastructure, in any cloud environment, public, private, or hybrid.

Pulumi enables `developers` to write code in their favorite language (e.g., JavaScript, Python, Go), 
deploying cloud apps and infrastructure easily, without the need to learn specialized DSLs or YAML templating solutions.

Pulumi enables `operators` to achieve continuous delivery of cloud apps and infrastructure to any cloud environment like
AWS, Azure, GCP, Kubernetes, and even hybrid and on-premises envioronments.

*In other way?
Pulumi provides an easy way for teams and individuals to create, deploy, and manage multi-cloud software, 
using familiar languages and tools you already know.

---

### Install Pulumi CLI

For the installation for MAC, Windows, manual install, please [visit this site](https://pulumi.io/quickstart/install.html). 

**For Linux:**

This will install the `Pulumi CLI` to `~/.pulumi/bin` and add it to your path:

```
$ curl -fsSL https://get.pulumi.com | sh
```

check version to ensure successful install by typing:

```
$ pulumi version
```

should see something like this:

<img src="assets/pulumi-install.png">

---

## Setting up a project

According to it's official site Pulumi supports the follwing cloud services:
 * [AWS](https://aws.amazon.com/)
 * [Kubernetes](https://kubernetes.io/)
 * [Microsoft Azure](https://azure.microsoft.com/)
 * [Pulumi Cloud Framework](https://pulumi.io/quickstart/cloudfx/)
 * [Google Cloud Platform](https://cloud.google.com/)
 * [OpenStack](https://www.openstack.org/)
 
 <br>

### New project

To start your project using your choice of cloud provider, please [follow through this guide](https://pulumi.io/quickstart/) and select the corresponding provider from the menu on the left.

<br>

### Transforming - tf2pulumi

There is possibility of converting Terraform projects to Pulumi TypeScript programs by using [tf2pulumi](https://github.com/pulumi/tf2pulumi).

Please read and follow through this easy guide linked above.


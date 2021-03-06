# Infrastructure as Code

## How to create multiple environments automatically with Terraform

<br>

**Prerequisites**

1: Existing AWS Account(OR Setup a new account)

2: IAM full access(OR at least have AmazonEC2FullAccess)

3: Knowledge about AWS Credentials (Access Key / Secret Access Key)

<br>

### What is Terraform?

Terraform is a tool made by Hashicorp for building, changing, and versioning infrastructure safely and efficiently. Terraform can manage existing and popular service providers ( aws, azure, Google cloud) as well as custom in-house solutions.

**Development, Test/QA, and Production Environments**

A QA environment is where you test your upgrade procedure against data, hardware, and software that closely simulate the Production environment and where you allow intended users to test the resulting Waveset application.

[...from terraform documentation:](https://www.terraform.io/intro/use-cases.html)
It is common practice to have both a production and staging or QA environment. These environments are smaller clones of their production counterpart, but are used to test new applications before releasing in production. As the production environment grows larger and more complex, it becomes increasingly onerous to maintain an up-to-date staging environment.

Infrastructure is described using a high-level configuration syntax. This allows a blueprint of your datacenter to be versioned and treated as you would any other code. Additionally, infrastructure can be shared and re-used.

Terraform has a "planning" step where it generates an execution plan. The execution plan shows what Terraform will do when you call apply. This lets you avoid any surprises when Terraform manipulates infrastructure.

```
NOTES

* Terraform code is written in the HashiCorp Configuration Language(HCL)

* All the code ends with the extension of .tf

* It’s a declarative language(We need to define what infrastructure we want and terraform will figure out how to create it)
```

<br>

## Installation

[Go to terraform's download site.](https://www.terraform.io/downloads.html)

For linux installation follow these commands [source](https://askubuntu.com/questions/983351/how-to-install-terraform-in-ubuntu)

 **1. Install Unzip**

```
$ sudo apt-get install unzip
```

 **2. [Download](https://www.terraform.io/downloads.html) latest version of the terraform:**

```
$ wget https://releases.hashicorp.com/terraform/0.11.14/terraform_0.11.14_linux_amd64.zip
```

 **3. Extract the downloaded file archive:**

```
$ unzip terraform_0.11.14_linux_amd64.zip
```

 **4. Move the executable into a directory searched for executables:**

```
$ sudo mv terraform /usr/local/bin/
```

 **5. Run it:**

```
$ terraform --version 
```

Success should look like this in terminal:

<img src="assets/terraform-install.png">


<br>

## First project with Terraform 

**This step is OPTIONAL, though I _highly recommend_ to do one of the tutorials in case You are new to this tool.**

**It will guide You through the basics of managaging Workspaces with the help of descriptive explanations and screenshots.**

[TERRAFORM TUTORIAL by Hashicorp](https://learn.hashicorp.com/terraform/getting-started/install)
*Minimum estimated time of the full tutorial: 75 mins .*

[TERRAFORM TUTORIAL by medium.com (Prashant Lakhera)](https://medium.com/@devopslearning/introduction-to-terraform-part-1-30bca7efa436)
*Minimum estimated time of the full tutorial: 90 mins .*

<br>

## Create job

First you need to create a `.tf` file like: `exapmle.tf`.

The content will consist of main blocks:`resource` and `provider` and sub-blocks such as: `tags`, `connection` and `provisioner`. 

For transparency you can use separate `.tf` files for the blocks.

```
NOTEs:

For all files which match terraform.tfvars or *.auto.tfvars present in the current directory,
Terraform automatically loads them to populate variables. 

If the file is named something else, you can use the -var-file flag directly to specify a file.
```

<br>

### Provider block:

The `provider` block is used to configure the named provider, in our case `"aws"`. 
 
 <img src="assets/terraform_tf.png">
 
 <br>

**!!! WARNING !!!** <br>
**DO NOT IN ANY CASE HARD CODE CREDENTIALS IN .TF FILE!** <br>
**TO PROVIDE CREDENTIALS FOR TERRAFORM ALWAYS USE VARIABLES POINTING TO A SEPARATE FILE WHICH HAS BEEN PREVIOUSLY ADDED TO GITIGNORE!** <br>
**IF SOMETHING GOES WRONG WITH GIT COMMANDS AND YOU NEED TO RESET COMMITS <br> 
DO DOUBLE-TRIPLE-CHECK THAT LEAKING CREDENTIALS WILL NOT HAPPEN!** <br>
**IF THE CREDENTIALS LEAK OUT, DO !IMMEDIATELY! REMOVE FROM GITHUB AND DISABLE/DELETE/RECREATE IT IN AWS!!!**

<br>

**FOR CREDENTIALS:**

  * Create a file named `terraform.tfvars`
  * ADD TO GITIGNORE!
  * fill the file with the following contents:

```
access_key = "something"
secret_key = "anything"
```


<img src="assets/terraform-cred-tfvars-filee.png">

<br>


### Resource block

The `resource` block defines a resource that exists within the infrastructure. 

```
NOTES:

Creating multiple recource blocks will tell Terraform to create multiple instance in one build process.

To do so you should declare as "Dev", "Production" or "staging" in the following examples:

resource "aws_instance" "Dev" {
  ami = "ami-0f0fb38cd5492b1aa"
  instance_type = "t2.micro"
}

resource "aws_instance" "Production" { 
  ... 
}

resource "aws_instance" "staging" { 
  ... 
}

```
 
To improve our configuration by assigning an elastic IP to the EC2 instance we're managing.
Modify your `example.tf` and add the following:

<img src="assets/terraform-resource-block-eip.png">

<br>

To assign S3 bucket to the EC2 instance will look like this:

<img src="assets/terraform-recource-s3.png">

<br>

#### Provisioning

Provisioners are used to execute scripts on a local or remote machine as part of resource creation or destruction. Provisioners can be used to bootstrap a resource, cleanup before destroy, run configuration management, etc.

Provisioners are added directly to any resource:

<img src="assets/terraform-provisioners.png">

For transparency I suggest to use variables and separate file for the scripts to run in the instance. 

```
  provisioner "file" {
    source      = "script.sh"
    destination = "/tmp/script.sh"
  }  
```

For provisioners other than local execution, you must specify [connection settings](https://www.terraform.io/docs/provisioners/connection.html) so Terraform knows how to communicate with the resource.

```
  connection {
    type = "ssh"
    user = "ec2-user"
    private_key = "${file("./mal-ops-adm.pem")}"
  }
```

<br>

#### Tags

The `tags` section is used to provide a name for your EC2 instance. 

```
      tags {
    Name = "some-project-name"
  }
```

<br>

#### Maps

The name of the AMI-s can be also replaced by variables to avoid hard coding into .tf files.

Exctract AMI-s to maps should look like this:

<img  src="assets/terraform-ami-maps.png">

<br>

#### Output Values

[Outputs](https://www.terraform.io/docs/configuration/outputs.html) are a way to tell Terraform what data is important and to define an output to show us the public IP address of the elastic IP address that we create:

<img src="assets/terraform-outputs.png">

<br>

#### Modules

Modules in Terraform are self-contained packages of Terraform configurations that are managed as a group. Modules are used to create reusable components, improve organization, and to treat pieces of infrastructure as a black box.

<img src="assets/terraform-modules-warn.png">

If you need to configure modules, please visit [this page](https://learn.hashicorp.com/terraform/getting-started/modules).

<br>

#### [Remote State Storage](https://learn.hashicorp.com/terraform/getting-started/remote)

Terraform supports team-based workflows with a feature known as remote backends. Remote backends allow Terraform to use a shared storage space for state data, so any member of your team can use Terraform to manage the same infrastructure.

To be able to use this service you will need to have a [Terraform Cloud account](https://learn.hashicorp.com/terraform/cloud/tf_cloud_gettingstarted.html).

This is how the backend should look like in your configuration file:

<img src="assets/terraform-cloud.png">

<br>

#### [>>> YOU CAN FIND EXAMPLE CONFIGURATIONS HERE <<<](https://www.terraform.io/intro/examples/index.html) 

<br>

### RUN / MODIFY / TERMINATE THE JOB

#### Init

The first command to run for a new configuration -- or after checking out an existing configuration from version control -- is 

``` $ terraform init ```

which initializes various local settings and data that will be used by subsequent commands.<br> 
The command will automatically download and install all the things set within the configuration file.

<br>

#### Apply Changes 

In the same directory as the `example.tf` file you created, run: 

``` $ terraform apply ```

This will show the execution plan, describing which actions Terraform will take in order to change real infrastructure to match the configuration.

If the plan was created successfully, Terraform will now pause and wait for approval before proceeding. <br>
If anything in the plan seems incorrect or dangerous, it is safe to abort here with no changes made to your infrastructure. <br>
In this case the plan looks acceptable, so type `yes` at the confirmation prompt to proceed.

```
Executing the plan will take a few minutes since Terraform waits for the EC2 instance to become available.
```

**Upon changing the configuration, run `$ terraform apply` again for Terraform to apply all the changes to the existing resources.**

<br>

#### Destroy

Resources can be destroyed using the command:

```
$ terraform destroy
```

which is similar to terraform apply but it behaves as if all of the resources have been removed from the configuration.

Terraform will destroy resources in a suitable order to respect dependencies.




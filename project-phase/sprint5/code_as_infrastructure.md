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

**Development, Test, QA, and Production Environments**

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

First you need to create a `.tf` file like: `exapmle.tf`

**File content:**

<img src="assets/terraform_tf.png">

<br>

#### Explanation:

 1. The `provider` block is used to configure the named provider, in our case "aws". 
 
 <br>

**!!! WARNING !!!** <br>
**DO NOT IN ANY CASE HARD CODE CREDENTIALS IN .TF FILE!** <br>
**TO PROVIDE CREDENTIALS FOR TERRAFORM ALWAYS USE VARIABLES POINTING TO A SEPARATE FILE WHICH HAS BEEN PREVIOUSLY ADDED TO GITIGNORE!** <br>
**IF SOMETHING GOES WRONG WITH GIT COMMANDS AND YOU NEED TO RESET COMMITS <br> 
DO DOUBLE-TRIPLE-CHECK THAT LEAKING CREDENTIALS WILL NOT HAPPEN!** <br>
**IF THE CREDENTIALS LEAK OUT, DO !IMMEDIATELY! REMOVE FROM GITHUB AND DISABLE/DELETE/RECREATE IT IN AWS!!!**

<br>

**FOR CREDENTIALS:**

  A. Create a file named `terraform.tfvars`
  B. ADD TO GITIGNORE!
  C. fill the file with the following contents:

```
access_key = "something"
secret_key = "anything"
```

<img src="assets/terraform-cred-tfvars.png">

```
For all files which match terraform.tfvars or *.auto.tfvars present in the current directory,
Terraform automatically loads them to populate variables. 

If the file is named something else, you can use the -var-file flag directly to specify a file.
```

<img src="assets/terraform-cred-tfvars-file.png">

<br>

 2. The `resource` block defines a resource that exists within the infrastructure. 

To improve our configuration by assigning an elastic IP to the EC2 instance we're managing.
Modify your `example.tf` and add the following:

<img src="assets/terraform-resource-block-eip.png">

<br>

To assign S3 bucket to the EC2 instance will look like this:

<img src="assets/terraform-recource-s3.png">



# Elastic Cloud Computing Documentation (Linux)

### Prerequisites

  - AWS account
  - IAM user

<br>

## Create and launch EC2 Instance

Log into Amazon EC2 Console [link](https://console.aws.amazon.com/ec2/) .


On EC2 Dashboard (on the left) click on button "Launch Instance".

<br>

1. **Choose AMI**

Choose an Amazon Machine Image (AMI): "Amazon Linux AMI" then click on button "Select".

<br>


2. **Choose Instance Type**

Choose an Instance Type: "t2.micro" (free tier / general purpose) then click on button "Next: Configure Instance Details".

<br>

3. **Configure Instance**

You can go with default settings for now, then click on button "Next: Add Storage"

<br>

4. **Add storage**

You can go with default settings for now, then click on button "Next: Add Tags"

<br>

5. **Add tags**

Click on button "Add tag" and set a key.

[If help needed, click on this link.](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html?icmpid=docs_ec2_console)

Click on button: "Next: Configure Security Group"

<br>

6. **Configure Security Group**

On this page, you can add rules to allow specific traffic to reach your instance.

Here you can choose to assign an existing security group, or create new one.

  - Type: SSH
  - Protocol: TCP
  - Port Range: 22
  - Source: 0.0.0.0 !WARNING!

<img src="assets/aws-ec2-warn.png">

  - Description: [OPTIONAL]

<br>


**!NOTE!** You can configure the EFS file system to mount on your EC2 instance automatically. 

For more information, see [Configuring an EFS File System to Mount Automatically at EC2 Instance Launch](https://docs.aws.amazon.com/efs/latest/ug/mount-fs-auto-mount-onreboot.html#mount-fs-auto-mount-on-creation).

<br>
If ready, click on button: "Review and Launch"

If all in order, click on button: "Launch"

<br>

7. **Select Key Pair (.pem)**

"A key pair consists of a public key that AWS stores, and a private key file that you store. Together, they allow you to connect to your instance securely."

Now you have to provide existing key pair or create new one from dropdown.

**Download Key Pair** and make sure it is safely stored.

<img src="assets/aws-ec2-key-pair.png">

Click on button: "Launch Instance" and wait for 1-2 minutes for AWS to start your server.

<br>

8. **Launch status**

If all went well, you should see something like this:

<img src="assets/aws-ec2-launch-status.png">

Click on button: "View instances" (bottom right)

It will redirect to the list of instances where you can see on the "Instance State" tab the "running status" in green.

<img src="assets/aws-ec2-instance-state.png"> 

<br>

**Your instance is now ready to use!**


If error encounetered or needed more info, go [to this link](https://docs.aws.amazon.com/efs/latest/ug/gs-step-one-create-ec2-resources.html) 

<br>
<br>

## Hiding the private key file

Open terminal, navigate to the location where your .pem file is saved.

Enter the following command:

```
chmod 400 /path_to_key/my_key.pem

```
<br>
<br>

## Connect with SSH

Open terminal, enter the following command:

```
$ ssh -i /path_to_key/my_key.pem user_name@public_dns_name

```

**Note:** Since a Linux instance was created the user name is 'ec2-user'. You can check the public DNS name of your instance on the AWS Console page after creating the instance. 

<br>
<br>

## Deploying NodeJS application

#### Prerequisites

   - NVM (Node Version Manager)
   - NodeJS
   - Git [OPTIONAL]

For explanation and installation of NVM and NodeJS, follow through [this tutorial](https://www.keycdn.com/blog/node-version-manager) .

To install Git in EC2 environment, type in terminal:


```
$ sudo yum install -y git
``` 

<br>

### Run application on VM

You have possibilities to get it done:

  * Clone a Git repository (Git), install dependencies, and run app with node:

```
node example-hello-world.js
``` 

  * Manually wirte your application and run with node.

  * You can also run docker container.

<br>

**Make sure to test application by visiting EC2 instance's URL.** 

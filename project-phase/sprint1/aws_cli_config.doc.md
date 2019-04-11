
#Configuring the AWS CLI


For general use, the aws configure command is the fastest way to set up your AWS CLI installation.

```$ aws configure```


You will be prompted for the following inputs:
 - AWS Access Key ID 
 - AWS Secret Access Key 
 - Default region name
 - Default output format

**GETTING INFORMATIONS**

**"Access Key" and "Secret Access Key"**
Log into AWS Console and go to IAM panel (type "IAM" in search field)
Go to Users in NAV bar (left)
Click on preferred User
Go to "Security credential" tab 
Click on "Create access key" button if not exists

**Default region name**
By typing ```Default``` you will set the region closest to you.

For list of regions [click here](https://docs.aws.amazon.com/general/latest/gr/rande.html)


**Default output format**
By typing ```Default``` you will set output format as JSON string.

Options:
 - json
 - text
 - table




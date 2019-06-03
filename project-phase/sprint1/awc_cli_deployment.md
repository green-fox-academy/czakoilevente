# Deploying Docker to EBS via AWSCLI
## Install EB CLI 

To install EB CLI to your computer for Window, macOS, Linux, or virtualenv, click on the [link](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html) .

## Get Access key and Secret access key

 - Log into aws console, go to IAM Dashboard.
   (in AWS Management Console type in the search bar: IAM)

 - Select Users menupoint in the left
 - Select preferred user
 - Go to Security credential tab
 - Hit `Create access key` button (pops new window with credentials) 


## Set up your application

 - Create new folder for your EB
 - Enter into the folder
 - To start application, use command

```$ eb init ```

<br>

#### Region selection

Fist you have to select the Region. Terminal will show the following lines in your command line:

```
Select a default region
1) us-east-1 : US East (N. Virginia)
2) us-west-1 : US West (N. California)
3) us-west-2 : US West (Oregon)
4) eu-west-1 : EU (Ireland)
5) eu-central-1 : EU (Frankfurt)
6) ap-south-1 : Asia Pacific (Mumbai)
7) ap-southeast-1 : Asia Pacific (Singapore)
8) ap-southeast-2 : Asia Pacific (Sydney)
9) ap-northeast-1 : Asia Pacific (Tokyo)
10) ap-northeast-2 : Asia Pacific (Seoul)
11) sa-east-1 : South America (Sao Paulo)
12) cn-north-1 : China (Beijing)
13) us-east-2 : US East (Columbus)
14) ca-central-1 : Canada (Central)
15) eu-west-2 : EU (London)
(default is 3):
```

You can select one Region by writing it's number into console, and hit enter... or just hit enter for default if it's good for you.

<br>

#### Add Access key ID, and Secret access key

Terminal will ask for your access key, and secret access key. You can type manually, or use the "Shift+Ins" paste the code.

```You have not yet set up your credentials or your credentials are incorrect
You must provide your credentials.
(aws-access-id): AKIAJOUAASEXAMPLE
(aws-secret-key): 5ZRIrtTM4ciIAvd4EXAMPLEDtm+PiPSzpoK
```

**Note: If you want to reset credentials or set new user, log into aws console in browser, go to users menu and security credentials tab, and make it inactive or delete the actual one, create new access key with secret access key. Typing
```$ eb init```
will ask for it again. (In some cases you'll have to reenter the code if terminal does not ask for it.)**

<br>

#### Set application name

It's necessary to name your application. 
It will have a default name based on your folder name. If you want you can change it to anything you want, as long as it's no used by someone else.
If you want to choose default, just hit enter.

```
Enter Application Name
(default is "aws_with_docker"): 
Application aws_with_docker has been created.
```
<br>

#### Platform selection

Next you need to select what kind of platfrom do you want to run on AWS EB. A list of choice will appear in console, and you have to choose from it, as you did in the Region selection...

```
Select a platform.
1) Node.js
2) PHP
3) Python
4) Ruby
5) Tomcat
6) IIS
7) Docker
8) Multi-container Docker
9) GlassFish
10) Go
11) Java
(default is 1)
```
...for docker project, type: 7 

<br>

### [OPTIONAL] Set up SSH

Now you can choose to set up SSH for your instances.

```
Do you want to set up SSH for your instances?
(Y/n): 
```
**Select option of your choice. Don't just hit enter, it will mark it as "Yes" because of capital letter.**

<br>

## Deploy your application


#### Run your own program, or choose example application

Before deploy application you need to copy all files, and folder into the created folder. If you dont have any, then the process will use the basic application provided by AWS.


#### Set up AWS resources to run application

You can do it simply by typeing in the following code into console.

```
eb create
```


#### Enter enviroment name

You need to give a name to your application. It has a default name, but you can change it, as long there is no other application that is useing the same name. It will look like this:

```
Enter Environment Name
(default is sample-app-dev):
```
You can just hit enter for default selection.


#### Choose DNC Cname

You need to give a URL to your application. It has a default URL, but it can be changed of choice. Terminal will show you:

```
Enter DNS CNAME prefix
(default is sample-app-dev): 
```
You can just hit enter for default selection.


#### Choose balancer type

Now you need to select the load balancer. For basic server I reccomend "network", but default is also fine. Type the number of the selected balancer, or hit enter for default.

```
Select a load balancer type
1) classic
2) application
3) network
(default is 1)
```


#### Finish 

If everthing went as we planned, it will take a few minutes to set up the whole thing. It is totally fine to wait 5-10 minutes. In the end console will show us the following message:

```
INFO: Successfully Launched Environment:...
```

### Extra info

If you want to know more how to monitor, and shut down your server, click on the following [link](https://aws.amazon.com/getting-started/tutorials/deploy-app-command-line-elastic-beanstalk/).

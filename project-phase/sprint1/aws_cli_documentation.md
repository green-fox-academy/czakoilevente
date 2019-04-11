# Install AWS CLI on Linux 

## Description
The AWS Command Line Interface (AWS CLI) is an open source tool that enables you to interact with
AWS services using commands in your command-line shell.


## Prerequisites

**AWS CLI requires either Pyton 2.6.5+ or Python 3.3+ to be installed on the system.** 
Check if there's already present any of them by typing in terminal:

```$ python --version```

```$ python3 --version```


**We can install Python with following command:**

```$ sudo apt-get install python3 ```


## Install AWS CLI by using pip


#### Install pip

**Check if there's already present on your machine, type in terminal:**

```$ pip3 --version```



**We can install pip with following command:**

The curl command will download the installation script

```$ curl -O https://bootstrap.pypa.io/get-pip.py```

To download and install the latest version of pip and other required support packages:

```$ python get-pip.py --user```

or

```$ python3 get-pip.py --user```


To verify that pip is installed correctly:

```$ pip3 --version```


#### Install the AWS

Command:

```$ pip3 install awscli --upgrade --user```


Verify that the AWS CLI installed correctly:

```$ aws --version```

To upgrade to the latest version, run the installation command again:

```$ pip3 install awscli --upgrade --user```



#### Troubleshoot

If you encounter any errors during installation please visit the links under:

[AWS CLI Errors](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-troubleshooting.html).

[Install aws cli](https://docs.aws.amazon.com/cli/latest/userguide/install-linux.html)

[AWS CLI Using the Bundled](https://docs.aws.amazon.com/cli/latest/userguide/install-bundle.html)

[AWS CLI in a Virtual Environment](https://docs.aws.amazon.com/cli/latest/userguide/install-virtualenv.html)

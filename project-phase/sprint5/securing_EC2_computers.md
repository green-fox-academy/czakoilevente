# Securing EC2 computers

For understanding the building process and background infos, please [follow thorugh this guide](https://github.com/green-fox-academy/czakoilevente/blob/master/project-phase/sprint5/code_as_infrastructure.md).

In this repository I created the following blocks in the `instance.tf` file:

 * variables for storing credentials in separate file
 * aws provider: to connect credentials EC2 instance
 * recource: creating security group
 * resource: aws EC2 instance type
 * tags: name of the instance in EC2
 * provisioners: to provide .sh file, execute .sh file in instance
 * connections: to use ssh connection and be able to use password to log in as `developer user`
 
 ```
 NOTE: Creation of 'developer' user is set in script.sh file and commited during the terraform build process.
 ```
 
 [File contents here](https://github.com/green-fox-academy/czakoilevente/tree/master/project-phase/sprint5/Securing_EC2_Computers)
 
 <br>
 
 #### Connect to EC2 with SSH

Use this terminal command:

```
$ ssh -i /path/my-key-pair.pem ec2-user@ec2-198-51-100-1.compute-1.amazonaws.com
```

[See AWS Documentation for more](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html)

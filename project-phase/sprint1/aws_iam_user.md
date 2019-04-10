
# How to create IAM User

## Description
AWS Identity and Access Management (IAM) is a web service what you can use for securely controlling individual and group access to your AWS resources.


#### [LOGIN](https://console.aws.amazon.com/iam/) into AWS Console as root user
    

## 1)  Create Administrator IAM User and Group

On navigation bar (left vertical) click on menu point **"Users"** [page](https://console.aws.amazon.com/iam/home#/home)

Click on button **"Add user"** 


Set **"User details"**
- **User name**                 <YourFisrtUsername>
- **Access type**: AWS Management Console access
- **Console password**: Custom password
- **Require password reset**: Leave the checkbox EMPTY


Click on button **"Next: Permissions"** 
`this will redierct to a new page`


Under **"Set permissions"** 
- select "Add user to group" box
- click on button "Create group"
`this will pop up a window` 

        
for input field **"Group name"** type: Administrators
- in dropdown menu "Filter policies" (under button "Create policy")
choose check box "AWS managed - job function"
- from the result list choose check box: "AdministratorAccess"
- click on button "Create group" (blue button, bottom right corner of window)
`this will redirect back to list of groups (click on button "Refresh" to see the created group if necessary)` 


check if checkbox **"Administrators"** (the group you just created) is selected
- then click on button **"Next: Tags"** (blue button, bottom right corner)
`this will redirect, you will see "Add tags (optional)" title` 

    
[OPTIONAL] here you can add user tags as key-value pairs you can read more at [this link](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html)


- click on button **"Next: Review"** 
`this will redirect, you will see "Review" title (you can check selected options for the new user you are about to add)` 


- when finished, click on button "Create user" 


`for more question and detail, please visit ` [this site](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html)
        

        
    

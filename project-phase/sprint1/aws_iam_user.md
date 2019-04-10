
# How to create IAM User

## Description
AWS Identity and Access Management (IAM) is a web service what you can use for securely controlling individual and group access to your AWS resources.


#### [LOGIN](https://console.aws.amazon.com/iam/) into AWS Console as root user
    

##  Create Administrator IAM User and Group

**1.** On navigation bar (left vertical) click on menu point **"Users"** [page](https://console.aws.amazon.com/iam/home#/home)

**2.** Click on button **"Add user"** 


**3.** Set **"User details"**
  - **User name**:  yourFisrtUsername
  - **Access type**: AWS Management Console access
  - **Console password**: Custom password
  - **Require password reset**: Leave the checkbox EMPTY


**4.** Click on button **"Next: Permissions"** 
   `this will redierct to a new page`


**5.** Under **"Set permissions"** 
  - select "Add user to group" box
  - click on button "Create group"
  `this will pop up a window` 


**6.** for input field **"Group name"** type: 
    ```Administrators```
  - in dropdown menu "Filter policies" (under button "Create policy")
  - choose check box "AWS managed - job function"
  - from the result list choose check box: "AdministratorAccess"
  - click on button "Create group" 
  `this will redirect back to list of groups (click on button "Refresh" to see the created group if necessary)` 


**7.** check if checkbox **"Administrators"** (the group you just created) is selected
  - then click on button **"Next: Tags"** 
  `this will redirect, you will see "Add tags (optional)" title` 

    
**8.** **[OPTIONAL]** here you can add user tags as key-value pairs you can read more at [this link](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html)


**9.** click on button **"Next: Review"** 
   `this will redirect, you will see "Review" title (you can check selected options for the new user you are about to add)` 


**10.** when finished, click on button **"Create user"** 


`For more question and detail, please visit ` [this site](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html)
        

        
    

# SERVE STATIC FILE IN AWS USING S3

Amazon Simple Storage Service is storage for the Internet. It is designed to make web-scale computing easier for developers.

For more info, please visit [this sie](https://docs.aws.amazon.com/AmazonS3/latest/dev/Welcome.html)

#### Prerequisites

 - AWS account 
 - static HTML file


## Create bucket for sevring stativ file

Log into AWS console

It should display the AWS Management Console "dashboard".

Type in the searchbar:

```
"s3"
```

hit Enter

On the left side it should display "Amazon S3"

Here you can see your list of buckets.


### To create bucket

Hit button "+ Create bucket" (pops a new window)

1. Name and Region

Type bucket name

Select Region

Hit button "Next" (bottom rigth corner)

2. Configure options

If you dont need specific setup, you can hit button "Next" (bottom rigth corner).


3. Set permissions

Your new bucket will be private by default, so the static html will not be accessible by others.

To make it public untick all 4 options.

Hit button "Next" (bottom rigth corner)

4. Review

Hit button "Next" (bottom rigth corner)

Your new bucket is ready.

The window will disappear and the page will redirect you to bucket list.


### Upload file to bucket

Click on the bucket you wish to upload your html to.

To upload file hit button "Upload".

New window will pop up.

1. Seelect files

You can drag and drop the file or just click on button "Add files".

Hit button "Next".

2.  Set permissions

You can set up permissions, then hit button "Next".

3. Set properties

You can set which storage class, encryption and tag you want to use for your html file, then hit button "Next".

4. Review

You can check your setup, then hit button "Upload".

Now your file is uploaded to your bucket, and the page will show the bucket content with your file.


### One last setting

Watching the bucket content you can see 4 tabs: 

Overview
Properties
Permissions
Management

Now go to tab: Properties.

Select square named: "Static website hosting".

Tick in the option: "Use this bucket to host a website."

**To get the link where your html is reachable from outside look on top of this window. (Endpoint:)**

Hit button "Save".

Now you have an uploaded static website in your bucket and can paste it's URL where you need.





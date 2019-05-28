# Google Cloud Services

<br>

## Google Cloud Platform

#### Wiki: 

[Google Cloud or Google Cloud Platform (GCP)](https://cloud.google.com/) is a suite of cloud computing services 
that runs on the same infrastructure that Google uses internally for its end-user products.
Alongside a set of management tools, it provides a series of modular cloud services including computing, 
data storage, data analytics and machine learning.

Google Cloud Platform provides infrastructure as a service, platform as a service, and serverless computing environments.

Google is highly or madly focused about being super-easy, super-adaptive to scale so I won't highlight it in the descriptions of every Service, the company is simply one of the best if not the best in the world regarding this.

Overview from different aspects [in this guide](https://cloud.google.com/docs/).

<br>

---

## Google Cloud Compute

Google Compute Engine delivers virtual machines running in Google's innovative data centers and worldwide fiber network. 

[This service](https://cloud.google.com/compute/docs/how-to) provides detailed tutorials and wide scale of possibilities to:
 * Creating, configuring VM instances
 * Managing access to VM instances
 * Connceting to VM instances
 * Adding storage
 * Networking
 * Deploying containers
 * Scaling, Monitoring, Labeling recources
 
 ---
 
 ## Google App Engine
 
 This service in short is about to build and deploy applications on a fully managed platform.
 
 [Video (2 mins)](https://www.youtube.com/watch?v=2PRciDpqpko&autoplay=1)
 
 Advantages of the service: 
  * Quickly build and deploy applications
  * Supports many popular languages like Java, PHP, Node.js, Python, C#, .Net, Ruby and Go 
    also you can bring your own language runtimes and frameworks of choice.
  * Automatic scaling-up and scaling-down of application.
  * Pay only for what you use - utomatic scaling based on application traffic and consumes resources only when your code is running
  
[On this page](https://cloud.google.com/appengine/docs/) you can choose from tutorials based on your knowledge of language.
 
[Google App Engine](https://cloud.google.com/appengine/docs/) is about:
 * Choosing environment to suit your application
 * Set up environment to suit your programming language
 * Select region you wish to run your application in. Quite similar to AWS regions. 
 
 ---
 
## Cloud SQL 

[Cloud SQL](https://cloud.google.com/sql/) is a fully-managed database service.

With this service you can set up, maintain, manage, and administer your relational and server databases in the cloud.
You can use Cloud SQL with either [MySQL](https://cloud.google.com/sql/docs/mysql/) or [PostgreSQL](https://cloud.google.com/sql/docs/postgres/). 

To be able to select the database engine perfectly fit for your needs, [see this guide](https://cloud.google.com/products/storage/).

All the features and capabilities of this service you can find in: [Cloud SQL Features](https://cloud.google.com/sql/docs/features).

For launching a database first you might to see [this checklist](https://cloud.google.com/sql/docs/launch-checklist) 
then checkout [this descriptive guide with screenshots](https://cloud.google.com/sql/docs/mysql/quickstart).

---

## Google Cloud Storage

[Google Cloud Storage](https://cloud.google.com/storage/) is a unified object storage for developers and enterprises.

What this service provides:
 * Integrate storage into your apps with a single unified API
 * Optimize price/performance across four storage classes with Object Lifecycle Management
 * Access data instantly from any storage class
 * Designed for secure and durable storage
 * Reduce data storage carbon emissions to zero
 
Use cases:
 * Streaming videos and music
 * Serving images and website content
 * Mobile app development

To start this service, you can:
 1. [follow the interactive guide](https://console.cloud.google.com/getting-started?tutorial=storage_quickstart)
 2. for advanced users, developers there is a [guide for console](https://cloud.google.com/storage/docs/quickstart-console)
 3. and there is [the gsutil tool](https://cloud.google.com/storage/docs/quickstart-gsutil).

---

### Migration - how to move application to different server

Storage Transfer Service allows you to quickly import online data into Cloud Storage. You can also set up a repeating schedule for transferring data, as well as transfer data within Cloud Storage, from one bucket to another. 

If you need more overview on this service, please visit [this site](https://cloud.google.com/storage-transfer/docs/overview)

[This guide](https://cloud.google.com/storage-transfer/docs/how-to) will help you in the process of migrating your application through some steps like:
 * Creating a client
 * Configuring Access
 * Setting up data transfer
 
For API reference, check out [this guide](https://cloud.google.com/storage-transfer/docs/apis).

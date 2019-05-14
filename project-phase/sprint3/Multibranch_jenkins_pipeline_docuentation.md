
#### Prerequisites

  - GitHub repo
  - Jenkins account
  - AWS account
  - Docker account
  - Webhooks on GitHub repo

<br>

## GitHub setup

### Set collaborator

Might be needed to delegate permission to the repo. Go to:

   - Settings 
   - Collaborators & Teams
   - Add collaborator

### Set webhook

   - Settings 
   - Webhooks
   - Add webhook

<br>


## Jenkins setup

### Create Jenkins job

1. Go **"New item"**

<img src="assets/create_jenkins.png">


2. Name your project, and select:

```
**Multibranch Pipeline**
```

<br>

### Configure job

You will see tabs to go through:

<img src="assets/configure_pipeline.png">


1. **Branch sources**

Hit "Add source"

<img src="assets/conf_pipeline_branch.png">


Select "GitHub" from dropdown:

<img src="assets/conf_pipeline_branch2.png">

**Fill!!**

 - Credentials
 - Owner
 - Repository

```
NOTE: You might have to wait a bit for Jenkins to retreive Repositories after you set Owner.
```

Fill the rest accustomed by your needs, or go deafult, like:

<img src="assets/conf_pipeline_branch3.png">

<br>

2. Build configuration

<img src="assets/build_config.png">



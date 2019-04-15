# Utilizing artifact repositories

## How to push Docker image to Docker HUB


#### PREREQUISITES

**Istallation of Docker**
[Choose Docker versions:](https://docs.docker.com/install/overview/)  Docker versions:
   - CE = Community Edition (reccomended for individual developers, experimenting with container-based apps)
   - EE = Enterprise Edition

For Ubuntu installation guide click on links:
   - [Community Edition](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
   - [Enterprise Edition](https://docs.docker.com/install/linux/docker-ee/ubuntu/)

**NOTE: The installation guide contains Windows and MacOS, and the following Linux distributions: CentOS, Oracle, RHEL, SLES, Ubuntu and more on the link: [Complete Intallation Guide Menu](https://docs.docker.com/v17.12/install/)**



**Docker image**
For creating a base image, please [follow the guide](https://docs.docker.com/develop/develop-images/baseimages/) .


## Push images to Docker Cloud

Docker Cloud uses Docker Hub as its native registry for storing both public and private repositories. Once you push your images to Docker Hub, they are available in Docker Cloud.

### Log into Docker

To log into Docker HUB, type in termial:

```
$ docker login 
```

You will be prompted for credentials as follows:

```
Username:
Password:
```

After successful login you will see in terminal:

```
WARNING! Your password will be stored unencrypted in /home/lcd/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
```

### Tag image 

**Docker tags carry useful informations about a specific image version/variant. They are aliases to the ID of your image.**

Tag your image using command
```
$ docker tag my_image $DOCKER_ID_USER/my_image
```
**my_image = your image’s name**
**DOCKER_ID_USER = your Docker Cloud username**

### Now all you need is just a little PUSH

You can push your image with command:
```
$ docker push $DOCKER_ID_USER/my_image
```

**And that's it! Your image is pushed to the cloud! Yaay :)**
**Dont forget to check out if appears in Docker Cloud**
**Log into Docker Cloud and navigate to the Repositories tab**
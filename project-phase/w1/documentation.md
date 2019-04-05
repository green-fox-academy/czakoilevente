0) Install Docker CE in Linux Mint 19.1 or Ubuntu 18.04

    1. Update the packages index
        $ sudo apt-get update

    2. Install packages to allow apt to use repository over https
        $ sudo apt-get install \
        apt-transport-https \
        ca-certificates \
        curl \
        software-properties-common

    3. Add docker GPG key
        $ curl -fsSL https://download.docker.com/linux/ubuntu | sudo apt-key add -

    4. Add key fingerprint
        $ sudo apt-key fingerprint 0EBFCD88

    5. add the repository for Ubuntu 18.04 or Mint 19.1
        $ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"

    6. Update index
        $ sudo apt-get update

    7. Install docker
        $ sudo apt-get install docker-ce



    TEST DOCKER VERSION
        1. ensure that you have a supported version of Docker:
            $ docker --version

        2. to view even more details about your Docker installation:
            $ docker info 
        or  $ docker version 

    TEST DOCKER INSTALLATION
        $ docker run hello-world

        List the hello-world image that was downloaded to your machine:
        $ docker image ls


1) Manage Docker as a non-root user
         $ sudo groupadd docker
         $ sudo usermod -aG docker $USER
      > reboot/relogin to re-evaluate group membership
         $ docker run hello-world

2)  create working directory
    create file: server.js      (check file content in github)
    create file: Dockerfile     (checkfile content in github or at point 4 with explanations)

3)  dependencies (type in terminal in working directory)
        $ npm init -y
        $ npm install
        $ npm install node --save
        $ npm indtall express --save

4)  Dockerfile ---------------------------->    Explanation
        FROM alpine:latest                          * copy basic image
        RUN apk add --no-cache nodejs npm           * apk (alpine package manager) --no-cache (to reduce size of docker image) nodejs (copy nodejs to image) npm (copy npm to image)

        WORKDIR /app                                * create working directory in VM

        COPY . /app                                 * copy . (!from current location where command is to be run! -> copy all files to working directory in VM )

        RUN npm install                             * run command:   $ npm install

        EXPOSE 3000                                 * port number, what is set in server.js as $PORT -> inner port number

        ENTRYPOINT ["node"]                         * ENTRYPOINT keywords makes the docker container executable. it will say, fire the command:    $ node

        CMD ["server.js"]                           * CMD will provide argument to ENTRYPOINT. gonna look like this:  $ node server.js


5)  create docker image file 
        $ docker build -t myHelloWorld:latest . 
            ( . current folder)
            ( -t flag is for setting name )
            (STEP 1/8 --> number of commands in docker file as: FROM, RUN, WORKDIR, COPY, RUN, EXPOSE, ENTRYPOINT, CMD) 


    optional:
      * remove image (force command: -f )
            $ docker rmi myHelloWorld -f

      * list images
            $ docker images


5)  create container by running docker image
        $ docker run -it myHelloWorld:latest       
 
            //$ docker run -it <imageName:tag>
 

    run docker image in daemon mode or background (-d) on ports (-p)
        $ docker run -it -d -p 8080:3000 myHelloWorld:latest

            //$ docker run -it -d -p <hostPort>:<dockerPort> <imageName:tag>
                                               :
            //reachable from outside <hostPort>:<dockerPort> what is set in server.js file

    optional:
     to check container
        $ docker ps 
        or
        $ docker ps -a


     to stop container (containerName -> docker ps / names )
        $ docker stop myHelloWorld

        // $ docker stop <containerName>


6)  After running docker container...

        $ docker run -it -d -p 8080:3000 myHelloWorld:latest


    ...check in browser:

        https://localhost:8080


    browser will display:

        Hello World!
    





# README



About development with docker

nstead of installing Gasby and related tools in ypur machine, you can develop using a docker image. The following files in the project permits to execute a docker-compose for development:

- docker-compose.yml
- gatsby.Dockerfile
- entrypoint.sh



**Steps:**

1 -  Build the image

```
docker-compose build
```
docker-compose build to build your docker image

2 - Run with DockerCompose

```
docker-compose up
```
docker-compose up and you should be running an auto-reloading Gatsby dev server in Docker.



**Adding new package dependences**

The easy step is rebuild the docker image an remove the old container. That is because running docker-compose build on adding new node dependencies will only need to copy in the new package.json and package-lock.json files, run npm install, and copy the node_modules to the clean image. 

All other build steps should be cached.



More info:

https://medium.com/ultralight-io/getting-gatsby-to-run-on-docker-compose-6bf3b0d97efb
# Large Videos/Files Upload Scalable Service
## Introduction
This service enables you to set up a server and upload any type and any size of files on your server from a browser client. This service is highly scalable and optimized to handle a large load.
## Technical overview
In this service I have used following technology stack.
#### Front End
Angular - https://angular.io/
#### Backend
Nodejs - https://nodejs.org/
Multer - https://www.npmjs.com/package/multer
#### Process Manager tools
PM2 - http://pm2.keymetrics.io/
#### Build Tools
Webpack - https://webpack.js.org/
## Installation steps(Linux)
1. Unzip the zip file into your desired path.
2. Open terminal and navigate to the unziped folder
3. Install nodejs if you already not installed -  https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04
4. Install PM2 globally, using below command
```shell=
npm install -g pm2
```
5. Install all the dependecies from `package.json` using below command
```shell=
npm install
```
6. Build front end code using below command,
```shell=
npm run build
```
7. Run nodejs server using below command,
```shell=
npm start
```
8. Visit following link to open application in browser - [http://localhost:3000](http://localhost:3000)
9. Enjoy your demo, your setup completed successfully.

The above application setup is standalone for demo purpose. Now we will check how we can host it on production and make it highly scalable.

## Production deployment
To understand deployment strategy on production, I have prepared architecture diagram which will visualize complete system.
![](https://i.imgur.com/iuOzFRz.png)
#### Users groups
In the above diagram, there are two types of user groups who can use our system.
1. Video content producers(upload videos)
2. Brands or Customers(Downoad videos)

#### Load Balancer
Both user groups should access our system via **NGINX Load balancer**. 

#### VM or Kubernetes cluster 
Behind the load balancer, there will be kubernetes cluster or VM cluster running which should auto-scale using orchestration config file instructions.

#### PM2 services
In each VM or kubernetes pod, we will run PM2 service in cluster mode.
In the source code root directory, there is `process.yml` file, you can update this as per your requirements.
```shell=
apps:
  - script   : ./bin/www
    instances: "max"
    exec_mode: cluster
```
The above configuration will launce instances equal to your VM cores.
## Testing and benchmarking
After you set up your production environment, the next step is Testing benchmarking your system.
I personally recommend, Apache JMeter for benchmark your application. You may choose any tool of your choice.

Tested uploading 3GB file size with 5 concurrent users on a single instance PM2 cluster worked well.

## All the best!!
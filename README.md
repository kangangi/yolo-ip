# Yolo App
Nodejs, React and MongoDB e-commerce feature project

Deployed application: [http://35.201.151.143:3000](http://35.201.151.143:3000)

## Set up 
### Clone the project 
SSH: 
    `git clone git@github.com:kangangi/yolo-ip.git`

HTTPS:
    `git clone https://github.com/kangangi/yolo-ip.git`


### Set up database and environment variables
This project uses [MongoDB Atlas](https://www.mongodb.com/atlas/database) 
Set up your account and replace your MONGO_URI in the backend [Dockerfile](/backend/Dockerfile) as follows
    `ENV MONGODB_URI=mongodb+srv://<your_username>:<yourpassword>@cluster0.jsqhtza.mongodb.net/?retryWrites=true&w=majority`

### Build and run the project
To build the project:
    `docker-compose build`

To run the project:
`docker-compose up`

You can now access the application on 
`localhost:3000`

Go ahead a add a product (note that the price field only takes a numeric input)


### Images on dockerhub
Yolo client image
![yolo_client_image](/images/dockerhub_yolo_client.png)

Yolo backemd image
![yolo_backend_image](/images/dockerhub_yolo_backend.png)
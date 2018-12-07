# Authentication

This project is an example of how to setup authentication and authorization into an express and react app. 

If you prefer a step-by-step guide, you can watch the following video tutorials:

- [Authentication (1) : Setup Express.js](https://youtu.be/ah_1BavtnGw)
- [Authentication (2): Node.js and jsonwebtoken](https://youtu.be/GglTvLVFXDU)
- [Authentication (3): Passport.js](https://youtu.be/ZI2AJ8p89V8)
- [Authentication (4): React.js](https://youtu.be/9xmr9ubR0h4)



## Quick start

This project contains two seperated applications 

- `/client` - a React project bootstrapped with [create-react-app](https://github.com/facebook/create-react-app)

- `/api` - an [Express.js](http://expressjs.com) server


### Set up

1. Use the following commands to install the API and client app packages 

```
cd ./api && yarn install
cd ./client && yarn install
```

2. Set local environment configuration in a `.env ` file.

### Run the App

1. Start the API by running the following command:  

```
cd ./api
yarn dev
```

2. Start the client app by running the following command:

```
cd ./client
yarn start
```


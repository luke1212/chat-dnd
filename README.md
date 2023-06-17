# ChatDnd

This project is auto dialog generator for Dungeons & Dragons games. The robot could response randomly per user input.

## Set Up
Run `npm install` and add environment.ts file inside the src directory with following content:<br>

## Run Frontend Locally
Run `npm run start` to start the project in http://localhost:4200/.

## Run Backend
run `npm run start:server`to start the project in http://localhost:3000/.

## Run Frontend Github CodeSapce
1. `npm run ng serve -- --host=0.0.0.0 --disable-host-check`.
2. set port from private to public.

## Environment Setup
Create .env file at the root folder that contains enviornment variables.
```
OPENAI_API_KEY: ''
MONGODB_ATLAS_URI: 'mongodb+srv://slothbettyz:<password>@chatdnd.49dfejo.mongodb.net/?retryWrites=true&w=majority',
MONGODB_LOCAL_URI: 'mongodb://localhost:27017'
```
Generated OpenAI private key in OpenAI API page and paste into the `''` above.<br>
Generated MongoDb password paste into the `<passward>` above.<br>

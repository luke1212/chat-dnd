# ChatDnd

This project is auto dialog generator for Dungeons & Dragons games. The robot could response randomly per user input.

## Frontend Set Up
Add environment.ts file inside the src directory with following content:<br>
```
export class environment {
    public static openAI = {
        OPENAI_API_KEY: ''
    }
}
```
Generate OpenAI private key in OpenAI API page and paste into the `''` above.<br>
Run `npm install`<br>
Run `npm run start` to start the project in http://localhost:4200/.
  

# Geo Alert

This repository contains the source code for a simple alert tracking server.

It uses;

- Node
- ExpressJS
- MongoDB
- TypeScript

## Setup

To get this code running on your machine, you must have NodeJs installed on your system and you should have a valid mongodb url (you can get one from atlas).

```bash
# clone this repo on your system,
# you should have git installed
git clone https://github.com/onfranciis/geo-alert-server.git

# navigate to the directory geo-alert-server
cd geo-alert-server

# rename templateEnv to .env and
# update the details
mv templateEnv .env

# run the installation command
npm run onrenderBuild && npm run onrenderStart

# server should start running on the
# port specified in your .env file


```

## API

##### Get all alerts

- URL
  {{baseUrl}}/alert
- Method
  GET
- Response

```js
{
    "error":null,
    "result":[
        {
            "message": "Test",
            "date": "2024-04-29T18:28:59.083Z",
            "location": "Nnewi",
            "_id": "662fe6f99b9dd048ce5b70ba"
        }
    ]
}
```

<br>

##### Add new alert

- URL
  {{baseUrl}}/alert
- Method
  POST
- Body

```js
{
    message: "Test",
    location: "Nnewi",
}
```

- Response

```js
{
    "error":null,
    "result":[
        {
            "message": "Test",
            "date": "2024-04-29T18:28:59.083Z",
            "location": "Nnewi",
            "_id": "662fe6f99b9dd048ce5b70ba"
        }
    ]
}
```

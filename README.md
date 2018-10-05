# [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [**Productivy APP**](https://github.com/productivy/productivy) 




## API Documentation

## Overview
>Reading app with basic REST API.
This documentation covers the Task Management Service web API.


#### Media Type support
    All server response bodies and request bodies MUST be valid JSON Media Type messages.

## URLs and Operations

>Below are the URLs and the operations associated with them.


#### User
The User is the base token for reading objects and supports the following operations:

---
##### Authentication

| Route | HTTP | Description | Input | Output |
| ------ | ------ | ------ | ------ | ------ |
| ````/google-signin```` | POST | Sign in while get an access token based on credentials | [username], [password] | User

---
##### Reading

| Route | HTTP | Description | Input | Output |
| ------ | ------ | ------ | ------ | ------ |
| ````/anim```` | GET | Get random Ghibly movie including description, director, rating etc.  | none | Movie Detail
| ````/activity```` | GET | Get a single recomended activity to do  |  none | Activity list
| ````/randompic```` | GET | Get single random picture | none | Image
| ````/jokes```` | GET | Get single random joke, may contain dry humor | none | Joke String
| ````/books```` | GET | Get random recomended book include book detail | none | Book Object
___


## Usage
#### With only npm:
```
npm install
npm start
npm run dev
```

## Built With
1. axios
2.    cors
3.    dotenv
4.    express
5.    generate-password
6.    google-auth-library
7.    jsonwebtoken
8.    mongoose

## Authors
1. Hana
2. Indira
3. Fathul



Acces the website via http://localhost:3000 or via heroku http://productivy.heroku.com 
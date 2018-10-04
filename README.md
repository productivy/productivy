# productivy_app

by fathul

#JSON-CRUD API Documentation
[Productivy](https://github.com/productivy/productivy)

---
## Overview
This documentation covers the Task Management Service web API.

---
#### Media Type support
All server response bodies and request bodies MUST be valid JSON Media Type messages.

---
## URLs and Operations
---
Below are the URLs and the operations associated with them.
---
Main Route in Heroku

---
#### User
The User URL (/api/users/) is the base URL for creating, reading, updating, deleting User objects and supports the following operations:

---
###### Authentication
---
| Route | HTTP | Description | Input | Output |
| ------ | ------ | ------ | ------ | ------ |
| ````/api/signup```` | POST | Sign up with new user info | [username], [password], [email], [role] | User List
| ````/api/signin```` | POST | Sign in while get an access token based on credentials | [username], [password] | User List

---
###### CRUD User
---
| Route | HTTP | Description | Input | Output |
| ------ | ------ | ------ | ------ | ------ |
| ````/api/users```` | GET | Get all the users info (admin only) | none | User List
| ````/api/users/:id```` | GET | Get a single user info (admin and authenticated user) |  [id] [searched_parameter] | User List
| ````/api/users```` | POST | Create a user (admin only) | [username], [password], [email], [role] | User List
| ````/api/users/:id```` | DELETE | Delete a user (admin only) | [id] | none
| ````/api/users/:id```` | PUT | Update a user with new info (admin and authenticated user) | [id] [updated_parameter] | User List

User List is shown below

###### User List
---
````
{
  "user" : [
    {
      "id" : "1",
      "username" : "alice",
      "password" : "a1!c#",
      "email" : "allice@mail.co",
      "dateCreated" : "2016-01-18T02:12:55.747Z",
      "dateUpdated" : "2016-01-18T03:26:36.572Z"
    }
  ]
}
````
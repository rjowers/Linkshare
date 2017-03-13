#Linkshare

User
POST/users/create

Creates a user. Parameters are:
user: string
password: string

POST/users/login
user-string
password-string

Links
POST/links/create
Creates a link. The user most be logged in. Parameters are:
title: string
link: string

GET/links/findAll

Finds all the link submitted, ordered from descending order. No parameters.

Comment

POST/comment/create
Creates a comment to a link. The user most be logged in. Parameters are:
comment: string

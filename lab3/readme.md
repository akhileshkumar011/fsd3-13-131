localhost - URL
127.0.0.1 - IP address

ctrl+c - stop the server
every request from client have a pair of {request,response}


## Node package manager (NPM)
used to install , run , uninstall any program/project and package 
-npm install <packageName>
-npm uninstall <packageName>

to use npm , the  project must be npm project , 
to create npm project we can use 

- npm init  -y 
- it creates a package.json file automatically 
 package.json holds all the information related to install 
 packages from npm 
- update package.json , set type = 'module'
- it also create a folder node_modules automatically 
- node_modules holds the package/library files
- generadlly we ignore the node_modules by .gitignore

 Nodemon - it restart the server automatically when file changes, to install 

> npm i nodemon -D

Note: -D flag will install this package as developer dependency 

- to execute any program, update the package.json file then start the server as 
 <b>npm run dev </b>

- start -> it will execute the app on development 
- dev -> it will start server in development phase (only for developer )

- res: it will return contents (json/html/;plain) to the user/client 
- req : it will retrive the information from client to the server 
- server send also statusCodes to the client , that indicates the error/success message

## Status Codes 

- 200 -> Ok
- 201 -> Created
- 400 -> Bad Request 
- 401 -> Unauthorized
- 403 -> Forbidden 
- 404 -> Not Found
- 500 -> Internal Server Error



## Content Types 

- text/plain
- text/html
- application/json
- text/css

the content type and status code can be send back to client by two ways

1. res.writeHead 
2. res.setHeader
3. res.statusCode


## Response as html content

- res.end
    end("any html content/key)
- html file
   read by createReadstream
   pipr with res


## send html file to client 

1. html file 

- read html file using createReadStream
- pipe it with res object

2. html content 
     send any html tags/content by using 
     res.end('<any html tag>')

## JSON
   The server returns data, not HTML content, because the HTML content is written by the frontend developer.
   The data is usually sent in JSON format.
   JSON stores data in key-value pairs enclosed in curly braces {}. An array is stored using square brackets [].
 One pair of curly braces {} represents one object, and the properties inside the object are separated by commas.

```
{
    id:1,
    name:'Mobile',
    price:25000,
    rating:4.5,
    review : 200
}

```



## GET -
    - if no paramenter pass to the sever and we recive all items

## POST -
    - add records we pass the value from body section in JSON format of API tester (Echo API)
    

## DELETE -
    - To delete any product we pass parameter that is ID of the product from URL

## PUT/PATCH -
    - To update any product we pass ID from URL and Date update from 
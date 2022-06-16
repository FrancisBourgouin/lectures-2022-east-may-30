# W3D4 - Real World HTTP Servers

## Content

- SECURITY
- REST
- Middleware
- Organizing our code
- Build JSON API
- Alternative to Express

## Security

### Security Issue #1

- Storing Passwords - why not plaintext
- How to encrypt passwords (bcrypt)
- hashing

- [bcrypt](./images/bcrypt.jpg)

### Security Issue #2

- User can see data in cookie and modify, becoming any other user
  = Solution: encrypt the cookie

### Security Issue #3

- Stealing cookies
- HTTP is plain-text
- Man-in-the-middle (we know NSA, etc. do this)
- [Man-in-the-middle attack](./images/Man-In-The-Middle-Attack.png)
- Firesheep: https://en.wikipedia.org/wiki/Firesheep
- Solution: HTTPS (End-to-End Encryption)

- [Man-In-The-Middle-Attack.png](./Man-In-The-Middle-Attack.png)

## REST

Representational State Transfer

- REST is a pattern, a convention to organize our url structure

  - Resource based routes convention

  - The key abstraction of information in REST is a resource.

  - REST uses a resource identifier to identify the particular resource involved in an interaction between components.

  - It should use http verbs to express what the request wants to accomplish
  - Resource information must be part of the url
  - It uses common data formats (JSON for API)
  - Communication is stateless
  - Each request must pass all information needed to fulfill the request
  - Idempotency of requests

### http methods

What language does a client use to makes request to the server ? http

http protocol gives us verbs

- Create => Create a new ressource => Post
- Read => Get a resource => Get
- Update => Change a resource => Put
- Delete => Delete a resource => Delete

### Scoping information

- collections vs single entity
- which one?

### End Points

By following REST principles, it allows us to design our end points:

| Action                                | http verb | end point                |
| ------------------------------------- | --------- | ------------------------ |
| List all quotes                       | GET       | get '/quotes'            |
| Get a specific quote                  | GET       | get '/quotes/:id'        |
| Display the new form                  | GET       | get '/quotes/new         |
| Create a new quote                    | POST      | post '/quotes            |
| Display the form for updating a quote | GET       | get '/quotes/:id/update' |
| Update the quotes                     | PUT       | put '/quotes/:id         |
| Deleting a specific quote             | DELETE    | delete '/quotes:id'      |

#### Nested Resources

You may need to access a nested resources. For example, you need to create a new comment.

| Action               | http verb | end point                  |
| -------------------- | --------- | -------------------------- |
| Create a new comment | POST      | post '/quotes/:id/comments |

- [REST Exercise](https://gist.github.com/DominicTremblay/941afbe1295ec666d3539d448df7c776)

## Middleware

- Middleware is a piece of software that sits in between the request and the response.
- [middleware.png](./middleware.png)
  (ref: https://developer.okta.com/blog/2018/09/13/build-and-understand-express-middleware-through-examples)

- [Middleware](./images/middleware.png)

## Better Organize our Code

We can better organize our code to make more modular and to clean up our server file.

- Routing

  - We externalize to our routes into specific files
  - All the routes for a particular resource would be in one file

- We can use modules to externalize:

  - our DB files
  - our helper functions

### Common Data Format

In the case of an API, what do we expect when we do

GET users => a list of users returned with a JSON format

```json
[
  {"id": "1",
  "first_name": "Clark",
  "last_name": "Kent",
  ...},
  {"id": "2",
  "first_name": "Bruce",
  "last_name": "Wayne",
  ...},
]
```

### REST alternatives

- GraphQL

GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.

## Alternatives to Express

Koa.js (Javascript) - https://koajs.com/
Sinatra (Ruby) - http://sinatrarb.com/
Flask (Python) - http://flask.pocoo.org/

## Back-End API

- An API will only deliver data, typically in JSON
- The routes will add a version of the API

For example, if we were building an API, our routes would be modified.

- `GET /api/1.0/posts`
- `GET /api/1.0/posts/1`
  ...

## References

Interesting links
About REST and naming convention : https://restfulapi.net/resource-naming/
Express modular routing (end of document) : http://expressjs.com/en/guide/routing.html#routing
Method override : https://www.npmjs.com/package/method-override
Express middleware : https://expressjs.com/en/guide/using-middleware.html
JSON APIs responses : https://jsonapi.org/examples
WordPress REST API : https://developer.wordpress.org/rest-api/
https://restfulapi.net/

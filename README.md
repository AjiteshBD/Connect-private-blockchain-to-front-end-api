# Connect Private Blockchain to Front-end API

This is a Connect Private Blockchain to Front-end API using Node RestFul API Framework Hapi.js.

## Steps to follow

1. Clone the repository to your local computer.
2. Open the terminal and install the packages: `npm install`.
3. Run your application `node app.js`.
4. Test your Endpoints with Curl or Postman.

## Examples
Test the API GET Endpoint:
Once the application is Started test you GET Point with Curl or Postman by accessing the url :
'http://localhost:3000/api/block/{BlockHeight}' i.e 'http://localhost:3000/api/block/1'

Test the API POST Endpoint:
Once the application is Started test you POST Point with Curl or Postman by accessing the url :
'http://localhost:3000/api/block' i.e 'http://localhost:3000/api/block'

NOTE : if you had a provide request payload the POST request will add new Block to the chain else it will only display the current blocks in the chain.

Did you read this far? You're awesome :)

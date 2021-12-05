const { spawn } = require('child_process')
const url = require('url')
const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')

// Serial url: gives the url of the website

// console.log(myUrl.href)

// // Host(root domain) Gives port number also, if port number is available
// console.log(myUrl.host)

// // hostname, does no give port number even if the port number is available
// console.log(myUrl.hostname)

// // Pathname
// console.log(myUrl.pathname)

// // Serialized query
// console.log(myUrl.search)

// // Params Object, gives the serialize query as an object
// console.log(myUrl.searchParams)

// // Adding a Param
// myUrl.searchParams.append('abc', '123') // This statement creates a parameter 'abc' which has '123' 
// console.log(myUrl.searchParams)

// Loop through params, this is nothing but using forEach, we are printing the keys and values inside the searchParams object
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))


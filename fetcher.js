const request = require('request');
request('http://www.example.edu', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  writeToFile(body, './webfile.txt')
});
const fs = require('fs');

const writeToFile = (content, localfile) =>
{let size = content.length; 
  fs.writeFile(localfile, content, err => {
  if (err) {
    console.error(err);
  }
  console.log(`file of ${size} bytes written successfully to ${localfile} ➤`);
});}





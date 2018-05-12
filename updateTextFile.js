/*

Create a Node App to perform below
operations:
a)To Create a new folder
b)To retrieve the file names inside any folder in one depth
c)To delete a folder
d)To Read a Text file and display the content of text file in
console
e)To send new text into an existing text file.

Note:
All the functions should be written Asynchronously.

*/


//To send new text into an existing text file

var fs = require('fs');

fs.appendFile('akshay.txt',' appended Data',function(err){
    if(err) throw err;
    console.log('File updated');
});
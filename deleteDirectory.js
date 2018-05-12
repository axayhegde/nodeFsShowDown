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

//Deleting a directory

var fs = require('fs');
var directoryName = "akshay";

fs.rmdir(directoryName,function(){
    console.log('Directory ' + directoryName + ' deleted!');
});
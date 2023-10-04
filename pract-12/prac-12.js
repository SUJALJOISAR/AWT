import fs from 'fs';

function readFileAsync(filename,callback){
    fs.readFile(filename,'utf8',(error,data)=>{
        if(error){
            callback(error,null);
        }
        else{
            callback(null,data);
        }
    });
}

//callback function to display file contents
function displayFileContents(error,data){
    if (error) {
        console.error('Error:', error);
      } else {
        console.log('File Contents:\n', data);
      }
}



// Specify the complete file path for 'example.txt'
const filePath = 'D:/5th sem/AWT/pract-12/example.txt';

//call readFileAsync with tge filename and displayFileContents
readFileAsync(filePath,displayFileContents);

console.log('reading file...');
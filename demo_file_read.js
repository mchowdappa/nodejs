var fs = require('fs')
// All asyncronus function takes callback
// Error first callbacks.
fs.readFile('mydata.txt', 'utf8', function(err, data){
  if(err){
    console.log("Error in data read");
  }else{

    console.log("Res:"+data);
  }

});


fs.readdir('.', function(err, data){
  console.log(data);
});
console.log("Program end!");


var dir = ".";
readFiles(dir);

function readFiles(dir){
  fs.readdir(dir, function(err, data){

console.log(data);
/*
    for(var file in data){
      console.log(fs.statSync(file));
      if(stats.isDirectory()){
        readFiles(file);
      }else{
        console.log(file);
      }
}
*/
  })
};

// List of files in directory and sub directory.

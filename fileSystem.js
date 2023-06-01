const fs = require("fs");
console.log("readFile",fs.readFile);

/*fs.readFile("hola.txt",'utf8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
///
   console.log("Data "  + data);
})
*/
let data = "This is a file containing a collection of scarlett johanson photos.";
  
fs.writeFile("photosScarlets.txt", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File was created successfully\n");
    console.log("The file has the following contents:");
    console.log(fs.readFileSync("photosScarlets.txt", "utf8"));
  }
});
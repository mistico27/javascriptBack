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
/*
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
*/
////appendfile
/*
console.log("\nFile Content before the append:",
  fs.readFileSync("books.txt", "utf8"));
  
fs.appendFile("books.txt", "Maranatha,Dios Dios con nosotros", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  return fs.readFileSync("books.txt", "utf8");
  
});
*/

///unlink
//1.- check the files in your directory
/*getFilesInDirectory();
  
//2.- Delete your file
fs.unlink("hola.txt", (err => {
  if (err){
    console.log(err);
    return;
  }
  else {
    console.log("\nDeleted file: hola.txt");
//3.- get in your own deirectory
    getFilesInDirectory();
  }
}));
  
///get all your files 
function getFilesInDirectory() {
  console.log("\nFiles present in directory:");
  let files = fs.readdirSync(__dirname);
  files.forEach(file => {
    console.log(file);
  });
}
*/
/*
getCurrentFilenames();
console.log("\nFile Contents of books:",
  fs.readFileSync("books.txt", "utf8"));
 
// Copying the file to a the same name
fs.copyFile("books.txt", "booksCopied_file.txt", (err) => {
  if (err) {
    console.log("Error Found:", err);
    return;
  }

    getCurrentFilenames();
    return  fs.readFileSync("booksCopied_file.txt", "utf8");
  
});
 

function getCurrentFilenames() {
  console.log("\nCurrent filenames:");
  fs.readdirSync(__dirname).forEach(file => {
    console.log(file);
  });
}
*/
const leerArchivo =(archivo)=>{
    fs.readFile(archivo,'utf8',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
    ///
       console.log("Data "  + data);
    })
}

fs.readdir("Directory","utf-8",(err,file)=>{
    const directory ="Directory";
    if (err){
        console.log(err);
        return;
      }

     file.forEach(file=>{
             leerArchivo(`Directory/${file}`);   
     })
})



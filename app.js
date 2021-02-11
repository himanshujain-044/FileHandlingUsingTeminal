const fs=require('fs');
const readline = require("readline-sync");
const chalk=require("chalk")
let k=0;
let arr=[]
let uj={"notes":""}
while(true){
let userD =    readline.question(chalk.white.bgCyan.bold("Enter the no for\n 1 to enter note \n 2 to see the note \n 3 to delete the note \n 4 to update note  \n 0 to exit ")) 
if(userD==1){
          if(fs.existsSync("./notes.json")){
                   let a =  fs.readFileSync("./notes.json","utf-8");
                    a=JSON.parse(a);
                    for(let kk=0;kk<a.notes.length;kk++){
                        if(a.notes[kk]!=null){
                    k=a.notes[kk].ID;
                    arr[kk]=a.notes[kk];}}
         }
    
    let c =    readline.question(chalk.white.bgCyan.bold("Number of user ")) 
    for(let i=1;i<=c;i++){
       console.log(chalk.white.bgCyan.bold("Id: "+ (k+1).toString()));
        let title = readline.question(chalk.white.bgCyan.bold("Title: ")) 
        let body =  readline.question(chalk.white.bgCyan.bold("Body: ")) 
       arr[k]={"ID":k+1,"Title":title,"Body":body}
         k++;
    }
    uj.notes=arr;
let data = JSON.stringify(uj);
fs.writeFileSync('./notes.json', data);

}





if(userD==2){
    if(fs.existsSync("./notes.json")){
        
            let userD =    readline.question(chalk.white.bgCyan.bold("Enter 1 to see paticular note and 2 for all the notes "))
              if(userD==1){
                let id = readline.question(chalk.white.bgCyan.bold("Enter Id No "));
                let a =  fs.readFileSync("./notes.json");
                            let j=JSON.parse(a);
                if(id>0 && id <= j.notes.length){
                            
                            console.log(chalk.black.bgMagenta.bold("ID          Title           Body"));
                            console.log(chalk.white.bgMagenta(j.notes[id-1].ID+"            "+j.notes[id-1].Title+"         "+j.notes[id-1].Body))
              }
              else console.log(chalk.white.bgRed.bold("Please Enter valid User ID"))
            }
              if(userD==2){
                            let a =  fs.readFileSync("./notes.json","utf-8");
                            a=JSON.parse(a);
                                console.log(chalk.white.bgMagenta.bold("ID      Title       Body"));
                            a.notes.forEach((element, index) =>{
                                
                                if(element!=null)
			           console.log(chalk.white.bgMagenta(""+element.ID+"         "+element.Title+"        "+element.Body))
                            });
                          //  console.log((JSON.parse(a))); 
              }
              
        }
        else console.log(chalk.white.bgRed("File does not exit"));
}








if(userD==3){
            if(fs.existsSync("./notes.json")){
           // let file=fs.readFileSync("./users.json","utf-8");
            let id = readline.question(chalk.white.bgCyan.bold("Enter Id No "));
            let a =  fs.readFileSync("./notes.json");
            let uj=JSON.parse(a);
            if(id>0 && id<=uj.notes.length){
             for(let i=0;i<uj.notes.length;i++){
                 if(uj.notes[i]==null && i==(id-1)){
                    console.log(chalk.white.bgRed.bold("Already Deleted"))
                 }
                else if(i==(id-1)){
                   delete uj.notes[i];
                 }
                }
            
             let data = JSON.stringify(uj);
             fs.writeFileSync('./notes.json',data);
             console.log(chalk.white.bgMagenta("User Deleted"));
             }
            
            else console.log(chalk.white.bgRed.bold("Please Enter valid User ID"))}
            //  let data = JSON.stringify(uj);
            //  fs.writeFileSync('./users.json',data);
        
    
    else console.log(chalk.white.bgRed("File Does not exit"));}
            
        
    
    
    
    
    
    
    
    if(userD==4){
            if(fs.existsSync("./notes.json")){
            let file=fs.readFileSync("./notes.json","utf-8");
            let j=JSON.parse(file);
            let id = readline.question(chalk.white.bgCyan.bold("Enter Id No "));
            if(id>0 && id<=j.notes.length){
             let title = readline.question(chalk.white.bgCyan.bold("Enter the title"));
             let body = readline.question(chalk.white.bgCyan.bold("Enter the body"));
             for(let i=0;i<j.notes.length;i++){
                 if(i==(id-1)){
                     j.notes[i] = {"ID":id,"Title":title,"Body":body}
                 }
                 }
             let data = JSON.stringify(j);
             fs.writeFileSync('./notes.json',data);
             console.log(chalk.white.bgMagentaBright.bold("Note updated")); 
        }
        else console.log(chalk.white.bgRed.bold("Please Enter valid User ID"))
    }
    else console.log(chalk.white.bgRed("File does not exit"));}




if(userD==0)
break;
}


// if(userD==0) break; 
    
   

// }


// notes.forEach((element, index) =>
// 			console.log(chalk.blue.inverse(element.title))
// 		);
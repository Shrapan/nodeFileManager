let fs=require("fs");
let path=require("path");
let inputArr =process.argv.slice(2);
let command=inputArr[0];
switch(command)
{
    case "tree":
        treeFn(inputArr[1]);
        break;
    case "organise":
        organiseFn(inputArr[1]);
        break;
    case "help":
            help();
            break;
    default:
        console.log("Enter Valid Input");    
}

function treeFn(dirpath)
{
    console.log("Tree implementation");
}


function organiseFn(dirpath)
{
    let destPath;
    //if path is not given will check for that
    if(path==undefined)
    {
        console.log("kindly enter the path");
    }
    else{
        let doesExist=fs.existsSync(dirpath);
        if(doesExist)
        {
            destPath=path.join(dirpath,"organized_files");
           if(fs.existsSync(destPath)==false){

               fs.mkdirSync(destPath);
           }
           
            //E:\PC my path
        }
    }

    organiseHelper(dirpath,destPath);
}
function organiseHelper(src,dest)
{
let childName=fs.readdirSync(src);
// console.log(childName);
for(let i=0;i<childName.length;i++)
{
    let childAdd=path.join(src,childName[i]);
    let isFile=fs.lstatSync(childAdd).isFile();
    if(isFile){
console.log(childName[i]);
    } 
}
{

}
}



//help implemented
function help()
{
    console.log(` List of All the command:
                    node fileName.ext tree "dirpath"
                    node fileName.ext organise "dirpath"
                    node fileName.ext help
                    `);
}
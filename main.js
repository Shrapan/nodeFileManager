let fs=require("fs");
let path=require("path");
let inputArr =process.argv.slice(2);
let types={
    photo:["jpg","jpeg"],
    media:["mp4","mkv","3gp"],
    archives:["zip","7z","rar","tar","gz","ar","iso","xz"],
    documents:["docx","doc","pdf","xlsx","xls","odt","ods","odp","odg","odf","txt","ps","tex","json"],
    app:["exe","dmg","pkg","deb","js","msi"]
}
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
    //if path is not given will check for that
    if(dirpath==undefined)
    {
        console.log("kindly enter the path");
       
    }
    else{
        let doesExist=fs.existsSync(dirpath);
        if(doesExist)
        {
         treeHelper(dirpath,"");
        }
        else
        {
            console.log("kindly enter the coreect path");
            
        }
    }
    
}

function treeHelper(dirpath,indent)
{
    let isFile=fs.lstatSync(dirpath).isFile();
    if(isFile==true)
    {
        let fileName=path.basename(dirpath);
        console.log(indent+"├──"+fileName);
    }else
    {
        let dirName=path.basename(dirpath);
        console.log(indent+"└──"+dirName);
        let childrens=fs.readdirSync(dirpath);
        for (let i = 0; i < childrens.length; i++) {
            let childPath=path.join(dirpath,childrens[i]);
            treeHelper(childPath,indent+"\t");
            
        }
    }
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
    if(isFile)
            {
             
                let category=getCategory(childName[i]);
                // console.log(childName[i],"i belong to --->",category)
                sendFiles(childAdd,dest,category);
            } 
    }

}
function getCategory(name)
{
    let ext=path.extname(name);
    ext=ext.slice(1);
    for(let type in types)
    {
        let cTypeArray=types[type];
        for(let i=0;i<cTypeArray.length;i++)
        {
            if(ext==cTypeArray[i]){
                return type;
            }
        }
    }
    return "other";
}

function sendFiles(childAdd,dest,category)
{
    let categoryPath=path.join(dest,category);
    if(fs.existsSync(categoryPath)==false)
    {
        fs.mkdirSync(categoryPath);
    }
    let filename=path.basename(childAdd);
    let destFilePath=path.join(categoryPath,filename);
    fs.copyFileSync(childAdd,destFilePath);
    fs.unlinkSync(childAdd);
    console.log(filename,"copied to ",category)
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
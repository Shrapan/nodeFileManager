let fs=require("fs");
let path=require("path");
function organiseFn(dirpath)
{
    let destPath;
    //if path is not given will check for that
    if(path==undefined)
    {
        // console.log("kindly enter the path");
        destPath=process.cwd();
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

module.exports={
    organiseF:organiseFn
}
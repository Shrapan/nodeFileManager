let fs=require("fs");
let path=require("path");
function treeFn(dirpath)
{
    //if path is not given will check for that
    if(dirpath==undefined)
    {
        treeHelper(process.cwd(),"");
       
    }
    else{
        let doesExist=fs.existsSync(dirpath);
        if(doesExist)
        {
            // console.log("enter valid path");
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


module.exports={
    treeF:treeFn
}
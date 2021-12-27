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
    //if path is not given will check for that
    if(path==undefined)
    {
        console.log("kindly enter the path");
    }
    else{
        let doesExist=fs.existsSync(dirpath);
        if(doesExist)
        {
            let destPath=path.join(dirpath,"organized_files");
            fs.mkdirSync(destPath);
            //E:\PC my path
        }
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
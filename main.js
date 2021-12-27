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

function treeFn(path)
{
    console.log("Tree implementation");
}
function organiseFn(path)
{
    //if path is not given will check for that
    if(path==undefined)
    {
        console.log("kindly enter the path");
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
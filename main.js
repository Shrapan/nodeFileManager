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
    console.log("Organise implementation");
}
function help()
{
    console.log(" help implementation");
}
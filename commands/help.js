//help implemented
let fs=require("fs");
let path=require("path");
function helpFn()
{
    console.log(` List of All the command:
                    node fileName.ext tree "dirpath"
                    node fileName.ext organise "dirpath"
                    node fileName.ext help
                    `);
}
module.exports={
    help:helpFn
}
#!/usr/bin/env node
//above is hashbag syntax
let fs=require("fs");
let path=require("path");
let helpkey=require("./commands/help");
let treekey=require("./commands/tree");
let organisekey=require("./commands/organise");
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
        treekey.treeF(inputArr[1]);
        break;
    case "organise":
        organisekey.organiseF(inputArr[1]);
        break;
    case "help":
            helpkey.help()
            break;
    default:
        console.log("Enter Valid Input");    
}






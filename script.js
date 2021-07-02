let winLogo = document.getElementsByClassName("winLogo")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

let searchLogo = document.getElementsByClassName("searchLogo")[0]
let searchwin = document.getElementsByClassName("searchWin")[0]

let chromeLogo = document.getElementsByClassName("chromeLogo")[0]
let edgewin = document.getElementsByClassName("edgeWin")[0]

let vscLogo = document.getElementsByClassName("vscLogo")[0]
let vscwin = document.getElementsByClassName("vscWin")[0]

let fileLogo = document.getElementsByClassName("fileLogo")[0]
let filewin = document.getElementsByClassName("fileWin")[0]

let storeLogo = document.getElementsByClassName("storeLogo")[0]
let storewin = document.getElementsByClassName("storeWin")[0]

let widgetsButton = document.getElementsByClassName("widgetButton")[0]
let widgets = document.getElementsByClassName("widgets")[0]

let righ = document.getElementsByClassName("right")[0]
let nwin = document.getElementsByClassName("nWin")[0]

let deve = document.getElementsByClassName("develepor")[0]
let devwin = document.getElementsByClassName("devWin")[0]

let tikLogo = document.getElementsByClassName("tikIcon")[0]
let tikwin = document.getElementsByClassName("tikWin")[0]


winLogo.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{ 
        startmenu.style.bottom = "50px"
    }
})
//vscWin
searchLogo.addEventListener("click", ()=>{
    console.log("clicked");
    if(searchwin.style.bottom == "50px"){
        searchwin.style.bottom = "-655px"
    }
    else{
        searchwin.style.bottom = "50px"
    }
})

chromeLogo.addEventListener("click", ()=>{
    console.log("clicked");
    if(edgewin.style.bottom == "50px"){
        edgewin.style.bottom = "-690px"
    }
    else{
        edgewin.style.bottom = "50px"
    }
})

vscLogo.addEventListener("click", ()=>{
    console.log("clicked");
    if(vscwin.style.bottom == "60px"){
        vscwin.style.bottom = "-655px"
    }
    else{
        vscwin.style.bottom = "60px"
    }
})

fileLogo.addEventListener("click", ()=>{
    console.log("clicked");
    if(filewin.style.bottom == "55px"){
        filewin.style.bottom = "-720px"
    }
    else{
        filewin.style.bottom = "55px"
    }
})

storeLogo.addEventListener("click", ()=>{
    console.log("clicked");
    if(storewin.style.bottom == "55px"){
        storewin.style.bottom = "-720px"
    }
    else{
        storewin.style.bottom = "55px"
    }
})

widgetsButton.addEventListener("click", ()=>{
    console.log("clicked");
    if(widgets.style.left == "0px"){
        widgets.style.left = "-700px";  
    }
    else{
        widgets.style.left = "0";
    }
})

righ.addEventListener("click", ()=>{
    console.log("clicked");
    if(nwin.style.right == "0px"){
        nwin.style.right = "-700px";  
    }
    else{
        nwin.style.right = "0";
    }
})

tikLogo.addEventListener("click",()=>{
    console.log("click");
    if(tikwin.style.bottom =="30px"){
        tikwin.style.bottom = "-790px";
    }
    else{
        tikwin.style.bottom = "30px";
    }
})


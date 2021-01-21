let value="X";
let gameArr=[];
let winArr=[[0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]]
let turn=0;

let cell0=document.getElementById("cell0");
let cell1=document.getElementById("cell1");
let cell2=document.getElementById("cell2");
let cell3=document.getElementById("cell3");
let cell4=document.getElementById("cell4");
let cell5=document.getElementById("cell5");
let cell6=document.getElementById("cell6");
let cell7=document.getElementById("cell7");
let cell8=document.getElementById("cell8");

cell0.addEventListener("click",xORo);
cell1.addEventListener("click",xORo);
cell2.addEventListener("click",xORo);
cell3.addEventListener("click",xORo);
cell4.addEventListener("click",xORo);
cell5.addEventListener("click",xORo);
cell6.addEventListener("click",xORo);
cell7.addEventListener("click",xORo);
cell8.addEventListener("click",xORo);

function xORo(){
    
    if(value==="X"){
        value="O";
    }else{
        value="X";
    }
    this.innerHTML=value;
    this.removeEventListener("click", xORo);
    let id =this.id;
    let pos=parseInt(id.slice(-1));
    gameArr[pos]=value;
    checkwins(gameArr,pos,value);
}

function checkwins(gameArr,pos,value){
    console.log(value);
    turn++;
    for(let i=0;i<8;i++){
        let a=gameArr[winArr[i][0]];
        let b=gameArr[winArr[i][1]];
        let c=gameArr[winArr[i][2]];
        if(a===undefined || b===undefined || c===undefined){
            continue;
        }
        if(a===b && b===c){
            return displayMessage(value);
        }
    }
    if(turn===9){displayMessage("tie")}
}

function displayMessage(value){
    if(value==="tie"){
        document.getElementById("display-message").innerHTML="TIE";
    }else{
        document.getElementById("display-message").innerHTML=`'${value}' PLAYER WINS`;
        console.log(value)
    }
    document.getElementById("result-page").style.visibility="visible";
}

function restart(){
    gameArr=[];
    cell0.innerHTML="";
    cell1.innerHTML="";
    cell2.innerHTML="";
    cell3.innerHTML="";
    cell4.innerHTML="";
    cell5.innerHTML="";
    cell6.innerHTML="";
    cell7.innerHTML="";
    cell8.innerHTML="";
    document.getElementById("result-page").style.visibility="hidden"
    cell0.addEventListener("click",xORo);
    cell1.addEventListener("click",xORo);
    cell2.addEventListener("click",xORo);
    cell3.addEventListener("click",xORo);
    cell4.addEventListener("click",xORo);
    cell5.addEventListener("click",xORo);
    cell6.addEventListener("click",xORo);
    cell7.addEventListener("click",xORo);
    cell8.addEventListener("click",xORo);
    turn=0;
}
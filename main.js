
const container=document.getElementById("container")
const box1=document.getElementById("box1")
const box2=document.getElementById("box2")
const box3=document.getElementById("box3")
const box4=document.getElementById("box4")
const box5=document.getElementById("box5")
const box6=document.getElementById("box6")
const box7=document.getElementById("box7")
const box8=document.getElementById("box8")
const box9=document.getElementById("box9")

const logo=document.querySelectorAll(".box")

//crear el array bidimensional
const arrayP= new Array(3)
for(let i=0; i<3; i++){
    arrayP[i]= new Array(3)
}

let ganador=false;
const validatorHori=()=>{
    
    if((arrayP[0][0]!=null && arrayP[0][1]!=null && arrayP[0][2]!=null )&&(JSON.stringify(arrayP[0][0])===JSON.stringify(arrayP[0][1]) && JSON.stringify(arrayP[0][1])===JSON.stringify(arrayP[0][2]))){
        console.log("ha ganado en horizontal 1");
        ganador=true;
    }else if((arrayP[1][0]!=null && arrayP[1][1]!=null && arrayP[1][2]!=null )&&(JSON.stringify(arrayP[1][0])===JSON.stringify(arrayP[1][1]) && JSON.stringify(arrayP[1][1])===JSON.stringify(arrayP[1][2]))){
        console.log("ha ganado en horizontal 2");
        ganador=true;
    }else if((arrayP[2][0]!=null && arrayP[2][1]!=null && arrayP[2][2]!=null )&&(JSON.stringify(arrayP[2][0])===JSON.stringify(arrayP[2][1]) && JSON.stringify(arrayP[2][1])===JSON.stringify(arrayP[2][2]))){
        console.log("ha ganado en horizontal 3");
        ganador=true;
    }else{
        console.log("no hay ganador para la horizontal ");
        validatorVerti()
    }    
}

const validatorVerti=()=>{
    if((arrayP[0][0]!=null && arrayP[1][0]!=null && arrayP[2][0]!=null )&&(JSON.stringify(arrayP[0][0])===JSON.stringify(arrayP[1][0])&& JSON.stringify(arrayP[1][0])===JSON.stringify(arrayP[2][0]))){
        console.log("ha ganado el vertical 1");
        ganador=true;
    }else if((arrayP[0][1]!=null && arrayP[1][1]!=null && arrayP[2][1]!=null )&&(JSON.stringify(arrayP[0][1])===JSON.stringify(arrayP[1][1])&& JSON.stringify(arrayP[1][1])===JSON.stringify(arrayP[2][1]))){
        console.log("ha ganado el vertical 2");
        ganador=true;
    }else if((arrayP[0][2]!=null && arrayP[1][2]!=null && arrayP[2][2]!=null )&&(JSON.stringify(arrayP[0][2])===JSON.stringify(arrayP[1][2])&& JSON.stringify(arrayP[1][2])===JSON.stringify(arrayP[2][2]))){
        console.log("ha ganado el vertical 3");
        ganador=true;
    }else{
        console.log("no hay ganador en vertical");
        validatorDiago()
    }
}

const validatorDiago=()=>{
    if((arrayP[0][0]!=null && arrayP[1][1]!=null && arrayP[2][2]!=null )&&(JSON.stringify(arrayP[0][0])===JSON.stringify(arrayP[1][1])&& JSON.stringify(arrayP[1][1])===JSON.stringify(arrayP[2][2]))){
        console.log("ha ganado en la diagonal 1");
        ganador=true;
    }else if((arrayP[0][2]!=null && arrayP[1][1]!=null && arrayP[2][0]!=null )&&(JSON.stringify(arrayP[0][2])===JSON.stringify(arrayP[1][1])&& JSON.stringify(arrayP[1][1])===JSON.stringify(arrayP[2][0]))){
        console.log("ha ganado en diagonal 2");
        ganador=true;
    }else{
        console.log("no hay ganador en diagonal");
    }
}


const validarGanador=(numeroTurnos)=>{
    if(numeroTurnos>1){
    validatorHori()
    }
    console.log("hay ganador? ",ganador);
}

let numeroTurnos=0
const initGame=(numeroCaja, numeroTurnos)=>{
    if(numeroTurnos%2===0){
        juegaA(numeroCaja);
        validarGanador(numeroTurnos)
    }else{        
        juegaB(numeroCaja);
        validarGanador(numeroTurnos)
    }
}

const juegaA=(numeroCaja)=>{
    switch(numeroCaja){
        case numeroCaja="box1":
            box1.textContent="X";
            box1.classList.add("marca");
            arrayP[0][0]="x";
            break;
        case numeroCaja="box2":
            box2.textContent="X";
            box2.classList.add("marca");
            arrayP[0][1]="x";
            break;
        case numeroCaja="box3":
            box3.textContent="X";
            box3.classList.add("marca");
            arrayP[0][2]="x";
            break;
        case numeroCaja="box4":
            box4.textContent="X";
            box4.classList.add("marca");
            arrayP[1][0]="x";
            break;
            case numeroCaja="box5":
            box5.textContent="X";
            box5.classList.add("marca");
            arrayP[1][1]="x";
            break;
        case numeroCaja="box6":
            box6.textContent="X";
            box6.classList.add("marca");
            arrayP[1][2]="x";
            break;
        case numeroCaja="box7":
            box7.textContent="X";
            box7.classList.add("marca");
            arrayP[2][0]="x"
            break;
        case numeroCaja="box8":
            box8.textContent="X";
            box8.classList.add("marca");
            arrayP[2][1]="x";
            break;
        case numeroCaja="box9":
            box9.textContent="X";
            box9.classList.add("marca");
            arrayP[2][2]="x";
            break;
    }
}

const juegaB=(numeroCaja)=>{
    switch(numeroCaja){
        case numeroCaja="box1":
            box1.textContent="o";
            box1.classList.add("marca");
            arrayP[0][0]="o";
            break;
        case numeroCaja="box2":
            box2.textContent="o";
            box2.classList.add("marca");
            arrayP[0][1]="o";
            break;
        case numeroCaja="box3":
            box3.textContent="o";
            box3.classList.add("marca");
            arrayP[0][2]="o";
            break;
        case numeroCaja="box4":
            box4.textContent="o";
            box4.classList.add("marca");
            arrayP[1][0]="o";
            break;
            case numeroCaja="box5":
            box5.textContent="o";
            box5.classList.add("marca");
            arrayP[1][1]="o";
            break;
        case numeroCaja="box6":
            box6.textContent="o";
            box6.classList.add("marca");
            arrayP[1][2]="o";
            break;
        case numeroCaja="box7":
            box7.textContent="o";
            box7.classList.add("marca");
            arrayP[2][0]="o";
            break;
        case numeroCaja="box8":
            box8.textContent="o";
            box8.classList.add("marca");
            arrayP[2][1]="o";
            break;
        case numeroCaja="box9":
            box9.textContent="o";
            box9.classList.add("marca");
            arrayP[2][2]="o";
            break;
    }
}
let turno=0;
container.addEventListener('click', (e)=>{
    let caja=e.target.id
    let valor=e.target.textContent
    console.dir(turno);
    if(turno<9){
        if(valor==""&& ganador==false){
        initGame(caja, turno);
        turno++;
        mensajePri()
        }        
    }    
})

//boton para resetear el juego
const buttonReset= document.getElementById('buttonReset')
buttonReset.addEventListener('click', ()=>{
    turno=0
    for(let i=0; i<arrayP.length;i++ ){
        for(let j=0; j<arrayP.length; j++){
            arrayP[i][j]=null;
        }
    }
    for(let i=0;i<9; i++){
        logo[i].textContent=null;         
    }
    ganador=false;
})
//mandar mensaje ganador o empate
const winTie=document.getElementById('win_tie');

const mensajePri=()=>{
    if(turno==9 || ganador==true){
        const message=document.createElement('P');
        console.log(message);
        if(turno==9 && ganador==false){
            message.textContent="Es un empate";
            message.classList.add('alert')
            winTie.classList.add('background')
            winTie.append(message);
        }else{
            message.textContent=`Ganaron las ${turno%2===0? "O":"X"}`;
            message.classList.add('alert')    
            winTie.classList.add('background')
            winTie.append(message)
        }
    }
}
winTie.addEventListener('click', ()=>{
    winTie.classList.remove('background')
    winTie.innerHTML=""
})

var buttonOne=document.querySelector("#b1");
var display1=document.querySelector("#display1");
var buttonTwo=document.querySelector("#b2");
var display2=document.querySelector("#display2");
var Reset=document.querySelector("#reset");
var UserInput=document.querySelector("input[type='number']");
var winningScore=document.querySelector("#winscore");
var p1=0;
var p2=0;
var gameOver=true;
var winningScore=5


buttonOne.addEventListener("click",function(){
	if(gameOver){	
	p1++;
	display1.textContent=p1;
	if(p1=== winningScore){
		display1.classList.add("winner")
		gameOver= false;
		}
	}
	
})

buttonTwo.addEventListener("click",function(){
	if(gameOver){	
	p2++;
	display2.textContent=p2;
	if(p2=== winningScore){
		display2.classList.add("winner")
		gameOver= false;
		}
	}
	
})

Reset.addEventListener("click",function(){
	reset();
})

function reset(){
	p1=0;
	p2=0;
	display1.textContent=0;
	display2.textContent=0;
	display1.classList.remove("winner");
	display2.classList.remove("winner");
	UserInput.value=0;
	winscore.textContent=UserInput.value;
	gameOver=true;
}

UserInput.addEventListener("change",function(){
	winscore.textContent=UserInput.value;
	winningScore=Number(UserInput.value);
	gameOver=true;
	display1.classList.remove("winner");
	display2.classList.remove("winner");
})


// Model
let sound1 = new Audio();
sound1.src = "soundlist/Day ruined.mp3";
let sound2 = new Audio();
sound2.src = "soundlist/He's Lost It.mp3";
let sound3 = new Audio();
sound3.src = "soundlist/Here we go again.mp3";
let sound4 = new Audio();
sound4.src = "soundlist/I couldn't give a shit about death.mp3";
let sound5 = new Audio();
sound5.src = "soundlist/Mission Failed.mp3";
let sound6 = new Audio();
sound6.src = "soundlist/Moments later.mp3";
let sound7 = new Audio();
sound7.src = "soundlist/Oh Yeah It's All Coming Together.mp3";
let sound8 = new Audio();
sound8.src = "soundlist/salamisound-1020049-car-start-the-engine-and-the.mp3";
let sound9 = new Audio();
sound9.src = "soundlist/Thats what Ive been waiting for.mp3";
let sound10 = new Audio();
sound10.src = "soundlist/To be continued.mp3";
let sound11 = new Audio();
sound11.src = "soundlist/Stop It Get Some Help.mp3";
let sound12 = new Audio();
sound12.src = "soundlist/You are 100 Percent Wrong.mp3";
let sound13 = new Audio();
sound13.src = "soundlist/scratch-spoken.wav";
let sound14 = new Audio();
sound14.src = "soundlist/Airhorn.mp3";
let farge;
farge = "#0CFC06";
let farge1;
farge1 = "#E5FC06";
let farge2;
farge2 = "#FC2C00";
let farge3;
farge3 = "#0CFC06";
let Title1 = "Day ruined";
let Title2 = "He's Lost It ";
let Title3 = "Here we go again";
let Title4 = "I couldn't give a shit about death";
let Title5 = "Mission Failed";
let Title6 = "Moments later";
let Title7 = "Oh Yeah It's Al Coming Together";
let Title8 = "Car-start";
let Title9 = "Thats what Ive been waiting";
let Title10 = "To be continued";
let Title11 = "Stop It Get Some Help";
let Title12 = "You are 100 Percent Wrong";
let Title13 = "Scratch-spoken";
let Title14 = "Airhorn";

// View
updateView();
function updateView() {
  document.getElementById("app").innerHTML = `
	        <h1>Soundboard</h1>
            <audio id="sound1"> </audio>
            <button onclick="playSound1(this)"style="background:${farge}"> ${Title1} </button>
    
            <audio id="sound2"> </audio>
            <button onclick="playSound2()" style="background:${farge1}">${Title2} </button>
    
            <audio id="sound3"> </audio>
            <button onclick="playSound3()" style="background:${farge2}"> ${Title3} </button>
    
            <audio id="sound4"> </audio>
            <button onclick="playSound4()" style="background:${farge3}">${Title4}</button>
    
            <audio id="sound5"> </audio>
            <button onclick="playSound5()" style="background:${farge1}"> ${Title5} </button>
            <audio id="sound6"> </audio>
            <button onclick="playSound6()" style="background:${farge2}">${Title6}</button>
    
            <audio id="sound7"> </audio>
            <button onclick="playSound7()" style="background:${farge}">${Title7} </button>
    
            <audio id="sound8"> </audio>
            <button onclick="playSound8()" style="background:${farge1}">${Title8}</button>
    
            <audio id="sound9"> </audio>
            <button onclick="playSound9()" style="background:${farge2}">${Title9} </button>
    
            <audio id="sound10"> </audio>
            <button onclick="playSound10()" style="background:${farge}">${Title10}</button>
            <audio id="sound11"> </audio>
            <button onclick="playSound11()" style="background:${farge1}">${Title11}</button>
    
            <audio id="sound12"> </audio>
            <button onclick="playSound12()" style="background:${farge2}">${Title12} </button>
            <audio id="sound13"> </audio>
            <button onclick="playSound13()" style="background:${farge3}">${Title13} </button>
            <audio id="sound14"> </audio>
            <button onclick="playSound14()" style="background:${farge2}">${Title14}</button>
    
            `;
}

// Controller
function playSound1() {
  sound1.play();
  farge = "#7D3C98";
  updateView();
}
function playSound2() {
  sound2.play();
  farge = "#5499C7";
  updateView();
}
function playSound3() {
  sound3.play();
  farge = "#5499C7";
  updateView();
}
function playSound4() {
  sound4.play();
  farge = "#5499C7";
  updateView();
}
function playSound5() {
  sound5.play();
  farge = "#7D3C98";
  updateView();
}
function playSound6() {
  sound6.play();
  farge = "#CCCCFF";
  updateView();
}
function playSound7() {
  sound7.play();
  farge = "#CCCCFF";
  updateView();
}
function playSound8() {
  sound8.play();
  farge = "#CCCCFF";
  updateView();
}
function playSound9() {
  sound9.play();
  farge = "#FAD7A0";
  updateView();
}
function playSound10() {
  sound10.play();
  farge = "#FAD7A0";
  updateView();
}
function playSound11() {
  sound11.play();
  farge = "#F39C12";
  updateView();
}
function playSound12() {
  sound12.play();
  farge = "#CD6155";
  updateView();
}
function playSound13() {
  sound13.play();
  farge = "#F5CBA7";
  updateView();
}
function playSound14() {
  sound14.play();
  farge = "#45B39D";
  updateView();
}

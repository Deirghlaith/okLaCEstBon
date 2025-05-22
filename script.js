// Imports
import GameDiv from "./classes/GameDiv.js";

// Functions
function initializeGameDivs(){
    //constructor(textColor = "#232323", width = 100, color = "#000000", engine = "UE5", title = "leTitre", body = "leBody", detail = "leDetail", link = "leLien")
    var testGameDiv = new GameDiv("#ffe0b0", 200, "#627E57", "UE5", "Muse", "Jeu narratif", "<b>Genre :</b> Jeu narratif</br><b>Moteur :</b> Unreal Engine</br><b>Production :</b> 9 mois</br><b>Équipe :</b> 9 personnes</br><b>Rôles :</b></br>&nbsp;&nbsp;&nbsp;&nbsp;• Game design</br>&nbsp;&nbsp;&nbsp;&nbsp;• Programmation outils</br>&nbsp;&nbsp;&nbsp;&nbsp;• Programmation gameplay</br>&nbsp;&nbsp;&nbsp;&nbsp;• Narrative design</br>&nbsp;&nbsp;&nbsp;&nbsp;• Sound design");
    testGameDiv.render();
    
    var testGameDiv2 = new GameDiv("#ffe0b0", 200, "#722a00", "UE5", "Afnut's Awakening", "Platformer 2D", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    testGameDiv2.render();
    
    var testGameDiv3 = new GameDiv("#e0e0ff", 200, "#00020D", "UE5", "2-Ori-48", "Puzzle game", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    testGameDiv3.render();
}

function initializeBGColorChange(){
    const container = document.getElementsByClassName("container")[0];

  container.addEventListener("scrollsnapchange", (event) => {
    if ("page1" === event.snapTargetBlock.id) {
      container.style.backgroundColor = "#FEE2C6";
    }
    if ("page2" === event.snapTargetBlock.id) {
      container.style.backgroundColor = "#FCDCB4";
    }
    if ("page3" === event.snapTargetBlock.id) {
      container.style.backgroundColor = "#9A765F";
    }
  });
}

// Begin Play
initializeGameDivs();
initializeBGColorChange();
// Imports
import GameDiv from "./classes/GameDiv.js";

// Functions
function initializeGameDivs(){
    //constructor(textColor = "#232323", width = 100, color = "#000000", engine = "UE5", title = "leTitre", body = "leBody", detail = "leDetail", link = "leLien")
    var testGameDiv = new GameDiv("#ffe0b0", false, "#627E57", "UE5", "Muse", "Jeu narratif", "<b>Genre :</b> Jeu narratif</br><b>Moteur :</b> Unreal Engine</br><b>Production :</b> 9 mois</br><b>Équipe :</b> 9 personnes</br><b>Rôles :</b></br>&nbsp;&nbsp;&nbsp;&nbsp;• Game design</br>&nbsp;&nbsp;&nbsp;&nbsp;• Programmation outils</br>&nbsp;&nbsp;&nbsp;&nbsp;• Programmation gameplay</br>&nbsp;&nbsp;&nbsp;&nbsp;• Narrative design</br>&nbsp;&nbsp;&nbsp;&nbsp;• Sound design");
    testGameDiv.render();
    
    var testGameDiv2 = new GameDiv("#ffe0b0", true, "#722a00", "UE5", "Afnut's Awakening", "Platformer 2D", "<b>Genre :</b> Platformer 2D</br><b>Moteur :</b> Phaser</br><b>Production :</b> 3 mois</br><b>Équipe :</b> Solo</br><b>Rôles :</b></br>&nbsp;&nbsp;&nbsp;&nbsp;• Game design</br>&nbsp;&nbsp;&nbsp;&nbsp;• Programmation gameplay</br>&nbsp;&nbsp;&nbsp;&nbsp;• VFX design</br>&nbsp;&nbsp;&nbsp;&nbsp;• Sound design", "pages/momieDetail/momieDetail.html");
    testGameDiv2.render();
    
    var testGameDiv3 = new GameDiv("#e0e0ff", false, "#00020D", "UE5", "2-Ori-48", "Puzzle game", "<b>Genre :</b> Puzzle Game</br><b>Moteur :</b> Unity 3D</br><b>Production :</b> 1 mois</br><b>Équipe :</b> Solo</br><b>Rôles :</b></br>&nbsp;&nbsp;&nbsp;&nbsp;• Programmation</br>&nbsp;&nbsp;&nbsp;&nbsp;• UX Design</br>&nbsp;&nbsp;&nbsp;&nbsp;• VFX design</br>&nbsp;&nbsp;&nbsp;&nbsp;• Sound design");
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
      container.style.backgroundColor = "#ECC9A4";
    }
  });
}

// Begin Play
initializeGameDivs();
initializeBGColorChange();
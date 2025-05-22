export default class GameDiv{
    constructor(textColor = "#232323", width = 100, color = "#000000", engine = "UE5", title = "leTitre", body = "leBody", detail = "leDetail", link = "leLien"){
        this.textColor = textColor;
        this.width = width;
        this.color = color;
        this.engine = engine;
        this.title = title;
        this.body = body;
        this.detail = detail;
        this.link = link;
    }
    
    render() {
        const targetDiv = document.getElementById("gameDivs");
        
        // Le gameDiv
        const div = document.createElement("div");
        div.classList.add("gameDiv");
        div.style.color = this.textColor;

        //div.style.height = `${this.height}px`;
        //div.style.height = targetDiv.height * 0.9 + "px";
        //div.style.width = `${this.width}px`;
        //div.style.width = targetDiv.width * 0.3 + "px";
        div.style.backgroundColor = this.color;
        
        /*
        // L'image de l'engine
        switch (this.engine){
            case "UE5":
                div.style.backgroundImage = `url(../assets/images/ue5Logo.png)`;
        }
        */
        
        // Le titre
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("titleDiv");
        titleDiv.innerHTML = `<div class="title">${this.title}</div>`;
        
        // Le type de jeu
        const gameTypeDiv = document.createElement("div");
        gameTypeDiv.classList.add("gameTypeDiv");
        gameTypeDiv.innerHTML = `<div class="gameType">${this.body}</div>`;
        
        // Le logo du jeu
        const gameLogoDiv = document.createElement("div");
        gameLogoDiv.classList.add ("imgGameLogoDiv");
        switch (this.title){
            case "Muse":
                gameLogoDiv.innerHTML += `<img src="../assets/images/museLogo.png" class="imgGameLogo">`;
                break;
            case "Afnut's Awakening":
                gameLogoDiv.innerHTML += `<img src="../assets/images/momieLogo.png" class="imgGameLogo">`;
                break;
            case "2-Ori-48":
                gameLogoDiv.innerHTML += `<img src="../assets/images/oriLogo.png" class="imgGameLogo">`;
                break;
        }
        
        /*
        // L'image en fond qui marche pas
        const bg = document.createElement("div");
        bg.className = "bg-layer";
        bg.style.backgroundImage = `url(../assets/images/ue5Logo.png)`;
        */
        
        // C'est ici l'image qui casse tout là 🗣🗣
        const imgDiv = document.createElement("div");
        imgDiv.classList.add ("imgEngineLogoDiv");
        switch (this.engine){
            case "UE5":
                imgDiv.innerHTML += `<img src="../assets/images/ue5Logo.png" class="imgEngineLogo">`;
                break;
        }
        
        
        
        // Les détails qui s'affichent quand on hover
        const detailDiv = document.createElement("div");
        detailDiv.classList.add("detailDiv");
        detailDiv.innerHTML = `<div class="detail">${this.detail}</div>`;

        // Le bouton
        const buttonDiv = document.createElement("buttonDiv");
        buttonDiv.classList.add("buttonDiv");
        
        const button = document.createElement("button");
        button.classList.add("button");
        button.innerText = "Détails";
        button.color = this.textColor;
        buttonDiv.append(button);
        
        // Le append de tout
        div.appendChild(titleDiv);
        div.appendChild(gameTypeDiv);
        div.appendChild(gameLogoDiv);
        div.appendChild(detailDiv);
        div.appendChild(imgDiv); // Bouton panique ici
        div.appendChild(buttonDiv);

        targetDiv.appendChild(div);

        //console.log(this.width);
        return div;
    }


}
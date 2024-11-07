const grille = document.querySelector("#container");

const firstDiv = document.createElement("div");

for(let i = 0; i < 256; i++){
    const square2 = document.createElement("div");
    square2.style.backgroundColor = "";
    square2.style.minHeight = "20px";
    square2.style.minWidth = "20px";
    square2.className = "square";
    square2.addEventListener("mouseover", () => {
        square2.style.backgroundColor = "red";
    });
    firstDiv.appendChild(square2);
}
grille.appendChild(firstDiv);


const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    let numberasked = prompt("How many squares do you want?");
    let squareNumber = parseInt(numberasked);
    grille.removeChild(firstDiv);
    const newDiv = document.createElement("div");
    for(let i = 0; i < (squareNumber*squareNumber); i++){
        const square3 = document.createElement("div");
        square3.style.backgroundColor = "";
        let squareHeight = 320/squareNumber;
        square3.style.height = `${squareHeight}px`;
        console.log(square3.style.height = 320/20);
        square3.style.width = `${squareHeight}px`;
        square3.className = "square";
        square3.addEventListener("mouseover", () => {
            square3.style.backgroundColor = "red";
        });
        newDiv.appendChild(square3);
    }
    grille.appendChild(newDiv);
})

/* reste à faire : 
- recommencer la manip, que ça fonctionne autant de fois qu'on veut
=> changer les noms des div pour gérer ça
- gérer le nombre max de squares
- la suite de l'exo ! */
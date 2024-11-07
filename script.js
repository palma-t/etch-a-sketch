const grille = document.querySelector("#container");

const div = document.createElement("div");

for(let i = 0; i < 256; i++){
    const square2 = document.createElement("div");
    square2.style.backgroundColor = "blueviolet";
    square2.style.minHeight = "20px";
    square2.style.minWidth = "20px";
    square2.className = "square";
    square2.addEventListener("mouseover", () => {
        square2.style.backgroundColor = "red";
    });
    div.appendChild(square2);
}

grille.appendChild(div);


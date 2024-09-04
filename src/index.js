import "./styles.css";
import { Home } from "./home";
import { Menu } from "./menu";
import { Contact } from "./contact";

console.log("funciona");

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");
const container = document.querySelector(".content");
const backgroundButtonColor = "#1e1e1e";

updateBackground(Home());
updateButton(home);

home.addEventListener("click", () => {
    updateBackground(Home());
    updateButton(home);
});

menu.addEventListener("click", () => {
    updateBackground(Menu());
    updateButton(menu);
});

contact.addEventListener("click", () =>{
    updateBackground(Contact());
    updateButton(contact);
});

function backgroundGreen() {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class","main-container");
    newDiv.style.backgroundColor = "green";
    return newDiv;
}

function updateBackground(newContent) {
    // Limpiar el contenido actual del contenedor
    container.innerHTML = "";
    // Añadir el nuevo contenido al contenedor
    container.appendChild(newContent);
}

function updateButton(button){
    home.style.backgroundColor = backgroundButtonColor;
    menu.style.backgroundColor = backgroundButtonColor;
    contact.style.backgroundColor = backgroundButtonColor;

    button.style.backgroundColor = "#3C3D37";
}
import "animate.css";
import "../styles/menu.css";
import meringueImage from "../../img/meringue.jpg";
import mousseCakeImage from "../../img/mousse_cake.jpg";
import pompompurinDishImage from "../../img/pompompurin_dish.jpg";
import artboxImage from "../../img/artbox.jpg";
import { stopAnimation } from "../../scripts/animation";

const menu = function(){
    const foods = ["Hoppe Chan Meringue","Rilakkuma Mousse Cake","Pompompurin Dish","Artbox Lunch"];
    const foodsDescription = ["Hoppe-chan is a popular character from the Sanhoseki chain, popular for high school girls.",
        " Perfect for the hot summer, This would be great for a birthday party of high tea!",
        "All of the food and drink is amazingly presented to look like Pompompurin…it’s so cute you won’t want to eat it!",
        "Assortment of the cutest lunch you ever did see. Inlcludes Hello Kitty, Sanrio and other fun characters!"
    ];
    const foodsImage = [meringueImage,mousseCakeImage,pompompurinDishImage,artboxImage];
    const content = document.querySelector("#content");
    content.textContent = "";
    const menu_container = document.createElement("div");
    menu_container.setAttribute("id","menu_container");

    for(let i=0;i<foods.length;i++){
        const card = document.createElement("div");
        card.classList.add("jackInTheBox");
        card.setAttribute("id",`i${i}`);
        const currentImage = document.createElement("img");
        currentImage.src = foodsImage[i];
        currentImage.classList.add("menu-image");
        const title = document.createElement("h3");
        title.style.color = "white";
        title.textContent = foods[i];
        const description = document.createElement("p");
        description.textContent = `${foodsDescription[i]}`;
        description.style.marginTop = "20px";
        const right = document.createElement("div");
        right.appendChild(title);
        right.appendChild(description);

        card.appendChild(currentImage);  
        card.appendChild(right);
        card.classList.add("card");
        menu_container.appendChild(card);
    }


    content.appendChild(menu_container);
    const cards = Array.from(document.querySelectorAll(".card"));
    cards.forEach(card => stopAnimation(`#${card.id}`,"jackInTheBox"));
}


export default menu;
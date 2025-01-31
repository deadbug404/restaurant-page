import "./styles/main.css";
import homepage from "./pages/home";
import menu from "./pages/menu";
import about from "./pages/about";

homepage();

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(button => {
    const id = button.id;
    switch(id){
        case "home":
            button.addEventListener("click",homepage);
            break;
        case "menu":
            button.addEventListener("click",menu);
            break;
        case "about":
            button.addEventListener("click",about);
            break
    }
});



//make the ui phone compatible for home,menu and about

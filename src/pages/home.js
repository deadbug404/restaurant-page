import "../styles/home.css";
import coverImage from "../../img/gigi_murin_cover.gif";


const homepage = function(){
    const content = document.querySelector("#content");
    content.textContent = "";
    const cover = document.createElement("img");
    cover.src = coverImage;
    cover.classList.add("cover_img");
    const description = document.createElement("div");
    description.setAttribute("id","description");
    description.textContent = `Welcome to Gremstaurant! a charming and cozy restaurant inspired by the playful and 
        energetic spirit of Gigi Murin, the delightful Hololive VTuber! Just like Gigi’s love for mischief and adventure,
        our menu is packed with bold flavors and creative twists that promise to surprise and delight every guest.`;
    
    content.appendChild(cover);
    content.appendChild(description);
}

export default homepage;
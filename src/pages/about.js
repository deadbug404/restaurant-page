import "../styles/about.css";
import chibiGigiImage from "../../img/gigi_murin_chibi.png";
import { stopAnimation } from "../../scripts/animation";

let about = function(){
    const speeches = ["*chases u cutely*","yippee!","Ouchi!","women,women,women, where is the women","aaaaaaaaaaaaah"];
    const content = document.querySelector("#content");
    content.textContent = "";
    const container = document.createElement("div");
    container.setAttribute("id","about_container");
    const header = document.createElement("h1");
    header.textContent = "Who is Gigi Murin?";
    const chibiGigi = document.createElement("img");
    chibiGigi.src = chibiGigiImage;
    chibiGigi.setAttribute("id","chibi_image");
    chibiGigi.classList.add("wobble");
    const chatBubble = document.createElement("div");
    chatBubble.textContent = "Hey, Hover over me!";
    chatBubble.classList.add("speech_bubble");
    const center = document.createElement("div");
    center.appendChild(chibiGigi);
    center.appendChild(chatBubble);
    center.classList.add("center");
    const description = document.createElement("p");
    description.textContent = `Born and raised under the flag of Freedom, Gigi Murin is a free-spirited Chaser and mischievous gremlin.
    \r\nWhile she is proficient in chasing down targets with pure intuition, she struggles with memorizing directions and making calculated decisions. She states that she’d rather not spend much time thinking because it makes her head hurt.
    \r\nThese quirks are also present in her everyday life, where she tends to prioritize her instinctual craving for fun and being silly over anything else.
    \r\nShe is often the source of headaches for those around her, causing trouble because she "thought it would be funny." `;

    container.appendChild(header);
    container.appendChild(center);
    container.appendChild(description);

    content.appendChild(container);
    stopAnimation("#chibi_image","wobble"); 
    chibiGigi.addEventListener("mouseover",e=>chatBubble.textContent = speeches[[Math.floor(Math.random() * speeches.length)]]);
}


export default about;
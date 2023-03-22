document.getElementById("mainTitle").innerText="point and click adventure";

const offsetCharacter = 16;
const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");

gameWindow.onclick = function(e){
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    mainCharacter.style.left = x - offsetCharacter +"px";
    mainCharacter.style.top = y - offsetCharacter +"px";

    switch(e.target.id){
        case "statue":
        console.log("the statue of liberty");
        break

        case "grave1":
        console.log("someone is resting here");
        break
        default:
            console.log("nothing to do...");
        break
    }

    console.log(e.target.id);
}
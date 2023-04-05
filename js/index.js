document.getElementById("mainTitle").innerText="point and click adventure";

const offsetCharacter = 16;
const sec = 1000;
const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

let tempTimeOut;

const counterSpeech = document.getElementById("counterSpeech");
const counterCharacter = document.getElementById("counterCharacter");

const characterAudio = document.getElementById("characterAudio");
const counterAudio = document.getElementById("counterAudio");

gameWindow.onclick = function(e){
    if (counterSpeech.style.opacity == 0 && mainCharacterSpeech.style.opacity == 0) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        mainCharacter.style.left = x - offsetCharacter +"px";
        mainCharacter.style.top = y - offsetCharacter +"px";

        console.log(e.target.id);

        switch(e.target.id){
            case "statues":
                console.log("the statue of liberty");
                counterCharacter.style.opacity = 1;
                showMessage(mainCharacterSpeech, characterAudio, "What is this for holy statue?");
                setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "Finaly a human species to talk to");
                setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "What do you mean? Statues are not supose to talk anyway..");
                setTimeout(showMessage, 12 * sec, counterSpeech, counterAudio, "You should check one off the dead cat's");
                setTimeout(function () { counterPortrait.style.opacity = 0; }, 16 * sec);
                setTimeout(showMessage, 16 * sec, mainCharacterSpeech, characterAudio, "Which one?");
            break

            case "grave1":
                console.log("someone is resting here");
                showMessage(mainCharacterSpeech, characterAudio, "Someone is resting, be quit!");
            break

            case "grave2":
                console.log("This is grave 2");
                showMessage(mainCharacterSpeech, characterAudio, "Haha, I'm not dead I have nine lives. <br> Help me catch the bird in the tree");
            break

            case "bird":
                console.log("This is the hidden bird!")
                showMessage(mainCharacterSpeech, characterAudio, "OOH no you catched me, don't feed me to the holy cat PLS!")
            break

            default:
                console.log("nothing to do...");
                hideMessage(mainCharacterSpeech, characterAudio);
                hideMessage(counterSpeech, counterAudio);
            break
        }
    }
}

function showMessage(targetBalloon, targetSound, message) {
    targetSound.currentTime = 0;
    targetSound.play();
    targetBalloon.style.opacity = "1";
    targetBalloon.innerHTML = message;
    setTimeout(hideMessage, 4 * sec, targetBalloon, targetSound);
}

function hideMessage(targetBalloon, targetSound) {
    targetSound.pause();
    targetBalloon.style.opacity = "0";
    targetBalloon.innerHTML = "...";
}
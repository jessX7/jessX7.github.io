// JavaScript Document
// Game states
let character = '';
let slimeEncountered = false;

// Functions
function setText(text) {
    document.getElementById('text').innerText = text;
}

function setCharacterImage(imageSrc) {
    document.getElementById('character-img').src = imageSrc;
}

function chooseCharacter(char) {
    character = char;
    if (char === 'knight') {
        document.getElementById('knight-img').style.display = 'block';
        document.getElementById('mage-img').style.display = 'none';
    } else if (char === 'mage') {
        document.getElementById('knight-img').style.display = 'none';
        document.getElementById('mage-img').style.display = 'block';
    }
    setText(`You chose ${char}.`);
    encounterSlime();
}

function encounterSlime() {
    slimeEncountered = true;
    setText('You encounter a slime!');
    document.getElementById('knight-img').style.display = 'none';
    document.getElementById('mage-img').style.display = 'none';
    document.getElementById('slime-img').style.display = 'block';
    document.getElementById('option-buttons').innerHTML = `
        <button class="btn" onclick="attack()">Attack</button>
        <button class="btn" onclick="runAway()">Run Away</button>
    `;
}

function attack() {
    setText('You attack the slime and it devours you! Game over.');
    document.getElementById('slime-img').style.display = 'none';
    displayRestartButton();
}

function runAway() {
    document.getElementById('slime-img').style.display = 'none';
    summonedByKing();
}

function summonedByKing() {
    setText('You gained wisdom! You successfully run away from the slime. You are then summoned by the king. Will you go?');
    document.getElementById('slime-img').style.display = 'none';
    document.getElementById('option-buttons').innerHTML = `
        <button class="btn" onclick="acceptSummon()">Accept</button>
        <button class="btn" onclick="declineSummon()">Decline</button>
    `;
}

function acceptSummon() {
    if (character === 'knight') {
        setText('You, as a knight, accept the king\'s summon and is tasked with defeating the Demon Lord. After a long journey, you finally defeat the Demon Lord and live happily ever after. Congratulations, you win!');
    } else {
        setText('You, as a mage, accept the king\'s summon but the king sees you as a threat and orders your execution. Game over.');
    }
    displayRestartButton();
}

function declineSummon() {
    setText('You decline the king\'s summon and are executed for treason. Game over.');
    displayRestartButton();
}

function displayRestartButton() {
    document.getElementById('option-buttons').innerHTML = `
        <button class="btn" onclick="restartGame()">Restart</button>
    `;
}

function restartGame() {
    character = '';
    slimeEncountered = false;
    setText('You have been chosen as a hero! Choose your class');
    document.getElementById('option-buttons').innerHTML = `
        <button class="btn" onclick="chooseCharacter('knight')">Knight</button>
        <button class="btn" onclick="chooseCharacter('mage')">Mage</button>
    `;
    document.getElementById('knight-img').style.display = 'block';
    document.getElementById('mage-img').style.display = 'block';
    document.getElementById('slime-img').style.display = 'none';
}
let suspectsArray = [];
let weaponsArray = [];
let roomsArray = ["Dining Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"];

function Suspect(name, firstName, lastName, occupation, age, description, image, color) {
    this.name = name;
    this.firstName = firstName;
    this.lastName = lastName;
    this.occupation = occupation;
    this.age = age;
    this.description = description;
    this.image = image;
    this.color = color;
}

let mrGreen = new Suspect("mrGreen", "Jacob", "Green", "Entrepreneur", 45, "Has a lot of connections", "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "#1C6758");
let drOrchid = new Suspect("drOrchid", "Doctor", "Orchid", "Scientist", 26, "PhD in plant toxicology. Adopted daughter of Mr. Boddy", "https://images.unsplash.com/photo-1577378978713-9bebf3db8312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "#FFF")
let profPlum = new Suspect("profPlum", "Victor", "Plum", "Designer", 22, "Billionaire video game designer", "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg", "#512C62")
let missScarlet = new Suspect("missScarlet", "Kasandra", "Scarlet", "Actress", 31, "A-list movie star with a dark past", "https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/07/04/10/cluedo-miss-scarlett.jpg", "#C70D3A")
let mrsPeacock = new Suspect("mrsPeacock", "Eleanor", "Peacock", "Socialite", 36, "From a wealthy family, uses her status and money to earn popularity", "https://pm1.narvii.com/6722/3bd0d86d367315d9e81a12390c17343a27d8a4d9_hq.jpg", "#115173")
let mrMustard = new Suspect("mrMustard", "Jack", "Mustard", "Retired Football player", 62, "Former football player, tries to get by on his former glory", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg", "#FFBD39")

suspectsArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard)

function Weapon(weaponName, weaponWeight) {
    this.weaponName = weaponName;
    this.weaponWeight = weaponWeight;
}

let weaponRope = new Weapon("rope", 10)
let weaponKnife = new Weapon("knife", 8)
let weaponCandlestick = new Weapon("candlestick", 2)
let weaponDumbbell = new Weapon("dumbbell", 30)
let weaponPoison = new Weapon("poison", 2)
let weaponAxe = new Weapon("axe", 15)
let weaponBat = new Weapon("bat", 13)
let weaponTrophy = new Weapon("trophy", 25)
let weaponPistol = new Weapon("pistol", 20)

weaponsArray.push(weaponRope, weaponKnife, weaponCandlestick, weaponDumbbell, weaponPoison, weaponAxe, weaponBat, weaponTrophy, weaponPistol)

function selectRandom(arrayName) {
    let randomSelection = Math.floor(Math.random() * arrayName.length);
    let randomValue = arrayName[randomSelection];
    return randomValue;
}

let startElements = document.getElementById("startElements");
let whoDunitEl = document.getElementById("whoDunit");
let answerOutput = document.createElement("p");
whoDunitEl.appendChild(answerOutput);
let cardRevealEl = document.getElementById("cardReveal");
let suspectCard = document.getElementById("suspectCard");
let suspectCardImgEl = document.getElementById("suspectCardImg");
let suspectCardSuspectNameEl = document.getElementById("suspectCardSuspectName");
let suspectCardSuspectFirstLastAgeEl = document.getElementById("suspectCardSuspectFirstLastAge");
let suspectCardOccupationEl = document.getElementById("SuspectCardOccupation");
let suspectCardDescriptionEl = document.getElementById("SuspectCardDescription");
let weaponCardEl = document.getElementById("weaponCard");
let weaponCardOutput = document.getElementById("weaponCardOutput");
let roomCardOutput = document.getElementById("roomCardOutput");
let roomCardEl = document.getElementById("roomCard");
let playAgainButton = document.getElementById("playAgainButton");
let output;
let suspect;
let weapon;
let room;

function Result(suspectResult, weaponResult, roomResult, suspectColor) {
    this.suspectResult = suspectResult;
    this.weaponResult = weaponResult;
    this.roomResult = roomResult;
    this.suspectColor = suspectColor;
}


function pickMystery() {
    suspect = selectRandom(suspectsArray);
    weapon = selectRandom(weaponsArray);
    room = selectRandom(roomsArray);
    return output = new Result((suspect.firstName + " " + suspect.lastName), weapon.weaponName, room, suspect.color)
}

function revealMystery() {
    pickMystery();
    startElements.style.display = "none";
    answerOutput.innerHTML = `<span style=color:${suspect.color}>${output.suspectResult}</span> <br>killed Mr. Boddy using the ${weapon.weaponName} in the ${room}!`;
    suspectCard.style.display = "flex";
    weaponCardEl.style.display = "flex";
    roomCardEl.style.display = "flex";
    suspectCard.style.border = `8px double ${suspect.color}`;
    suspectCardImgEl.src = `${suspect.image}`;
    suspectCardSuspectNameEl.textContent = `${suspect.name}`;
    suspectCardSuspectNameEl.style.color = `${suspect.color}`
    suspectCardSuspectFirstLastAgeEl.textContent = `${suspect.firstName} ${suspect.lastName}, ${suspect.age}`;
    suspectCardOccupationEl.textContent = `${suspect.occupation}`;
    suspectCardDescriptionEl.textContent = `${suspect.description}`;
    roomCardOutput.textContent = `${room}`;
    weaponCardOutput.textContent = `${weapon.weaponName}`;
    playAgainButton.style.display = "block";
}

function playAgain() {
    startElements.style.display = "block";
    answerOutput.innerHTML = ``;
    suspectCard.style.display = "none";
    weaponCardEl.style.display = "none";
    roomCardEl.style.display = "none";
    playAgainButton.style.display = "none";
}
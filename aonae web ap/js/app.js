/*FUNCTIONS*/
//Function rollD66 produces of 10 to 60 plus 1 to 6.
function rollD66() {
  let ten = Math.floor(Math.random() * 6) + 1;
  let tens = ten * 10;
  let ones = Math.floor(Math.random() * 6) + 1;
  let d66 = tens + ones;
  return d66;
}

//Function generateModifiers produces random modifiers for each of the five attributes.
function generateModifiers() {
  let mod;
  let result = rollD66();
  if (result >= 64) {
    mod = 3;
  } else if (result >= 41) {
    mod = 2;
  } else if (result >= 14) {
    mod = 1;
  } else if (result <= 13) {
    mod = -1;
  }
  return mod;
}

function generateOrigin() {
  let result = rollD66();
  for (i = 0; i < origins.length; i++) {
    if (result >= 64) {
      origin = origins[11];
    } else if (result >= 61) {
      origin = origins[10];
    } else if (result >= 54) {
      origin = origins[9];
    } else if (result >= 51) {
      origin = origins[8];
    } else if (result >= 44) {
      origin = origins[7];
    } else if (result >= 41) {
      origin = origins[6];
    } else if (result >= 34) {
      origin = origins[5];
    } else if (result >= 31) {
      origin = origins[4];
    } else if (result >= 24) {
      origin = origins[3];
    } else if (result >= 21) {
      origin = origins[2];
    } else if (result >= 14) {
      origin = origins[1];
    } else if (result <= 13) {
      origin = origins[0];
    }
    originPick.innerHTML = `Origin: ${origin.origin} Language: ${origin.language} Faith: ${origin.faith}`;
    console.log("generateOrigin called");
  }
}

function applyBonus() {
  for (i = 0; i < attributes.length; i++) {
    if (origin.attributeBonus == attributes[i].id) {
      bonus = Number(attributes[i].textContent) + 1;
      attributes[i].textContent = bonus;
    }
  }
  console.log("applyBonus called");
}

/*VARIABLES*/
//Variables for manipulation of attributes in the dom.
const wisdom = document.getElementById("wisdom");
const awareness = document.getElementById("awareness");
const soul = document.getElementById("soul");
const strength = document.getElementById("strength");
const agility = document.getElementById("agility");

let attributes = [];
let origin = [];
let bonus;

const originPick = document.getElementById("origin_pick");

/*CONTROLS FOR BUTTONS AND SELECT*/
//Control for "Roll" button, generates random modifiers for attributes in the dom.
const rollAttributes = document.getElementById("roll_attributes");
rollAttributes.addEventListener("click", () => {
  let wis = generateModifiers();
  let awar = generateModifiers();
  let sou = generateModifiers();
  let str = generateModifiers();
  let agl = generateModifiers();
  wisdom.textContent = wis;
  awareness.textContent = awar;
  soul.textContent = sou;
  strength.textContent = str;
  agility.textContent = agl;
  attributes.push(wisdom);
  attributes.push(awareness);
  attributes.push(soul);
  attributes.push(strength);
  attributes.push(agility);
  console.log("attributes rolled");
  console.log(attributes);
});

//Get select_origin dropdown to load selected origin information.
const selectOrigin = document.getElementById("select_origin");
selectOrigin.addEventListener("change", (event) => {
  let selected = event.target;
  for (i = 0; i < origins.length; i++) {
    if (origins[i].origin == selected.value) {
      origin = origins[i];
      applyBonus();
      originPick.innerHTML = `Origin: ${origin.origin} Language: ${origin.language} Faith: ${origin.faith}`;
    }
  }
});

//Get roll_origin button to call function generateOrigin.
const rollOrigin = document.getElementById("roll_origin");
rollOrigin.addEventListener("click", () => {
  generateOrigin();
  applyBonus();
});

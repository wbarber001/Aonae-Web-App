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
    originPick.innerHTML = "";
    originPick.style.display = "block";
    //Create
    let choice = document.createElement("h3");
    let text = document.createElement("p");
    text.className = "info";
    let stats = document.createElement("ul");
    stats.className = "stats_ul";
    let language = document.createElement("li");
    language.className = "stats_li";
    let faith = document.createElement("li");
    faith.className = "stats_li";
    let attBonus = document.createElement("li");
    attBonus.className = "stats_li";
    let abilBonus = document.createElement("li");
    abilBonus.className = "stats_li";
    //Assign
    choice.textContent = origin.origin;
    text.textContent = origin.text;
    language.textContent = `Language: ${origin.language}`;
    faith.textContent = `Faith: ${origin.faith}`;
    attBonus.textContent = `${origin.attributeBonus.toUpperCase()} + 1`;
    abilBonus.textContent = `${origin.abilityBonus} + 1`;
    //Append
    originPick.appendChild(choice);
    originPick.appendChild(text);
    originPick.appendChild(stats);
    stats.appendChild(language);
    stats.appendChild(faith);
    stats.appendChild(attBonus);
    stats.appendChild(abilBonus);
    selectOrigin.value = origin.origin;
    console.log("generateOrigin called");
  }
}

function applyOrigin() {
  for (i = 0; i < attributes.length; i++) {
    if (origin.attributeBonus == attributes[i].type) {
      let bonus;
      bonus = attributes[i].modifier + 1;
      //Get the id matching the specified attribute to update on page.
      let newMod = document.getElementById(attributes[i].type);
      newMod.textContent = bonus;
      //Update attributes array.
      attributes[i].modifier = attributes[i].modifier + 1;
      for (i = 0; i < abilities.length; i++) {
        if (origin.abilityBonus == abilities[i].ability) {
          charAbilities.push(abilities[i]);
        }
      }
    }
  }
  console.log("applyOrigin called");
}

function generateJob() {
  let result = rollD66();
  for (i = 0; i < jobs.length; i++) {
    if (result >= 65) {
      job = jobs[17];
    } else if (result >= 63) {
      job = jobs[16];
    } else if (result >= 61) {
      job = jobs[15];
    } else if (result >= 55) {
      job = jobs[14];
    } else if (result >= 53) {
      job = jobs[13];
    } else if (result >= 51) {
      job = jobs[12];
    } else if (result >= 45) {
      job = jobs[11];
    } else if (result >= 43) {
      job = jobs[10];
    } else if (result >= 41) {
      job = jobs[9];
    } else if (result >= 35) {
      job = jobs[8];
    } else if (result >= 33) {
      job = jobs[7];
    } else if (result >= 31) {
      job = jobs[6];
    } else if (result >= 25) {
      job = jobs[5];
    } else if (result >= 23) {
      job = jobs[4];
    } else if (result >= 21) {
      job = jobs[3];
    } else if (result >= 15) {
      job = jobs[2];
    } else if (result >= 13) {
      job = jobs[1];
    } else if (result <= 12) {
      job = jobs[0];
    }
    jobPick.innerHTML = "";
    jobPick.style.display = "block";
    let choice = document.createElement("h3");
    let text = document.createElement("p");
    text.className = "info";
    let stats = document.createElement("ul");
    stats.className = "stats_ul";
    let firstAbility = document.createElement("li");
    firstAbility.className = "stats_li";
    let secondAbility = document.createElement("li");
    secondAbility.className = "stats_li";
    //Assign
    choice.textContent = job.job;
    text.textContent = job.text;
    firstAbility.textContent = `${job.firstAbility} + 1`;
    secondAbility.textContent = `${job.secondAbility} + 1`;
    //Append
    jobPick.appendChild(choice);
    jobPick.appendChild(text);
    jobPick.appendChild(stats);
    stats.appendChild(firstAbility);
    stats.appendChild(secondAbility);
  }
}

function applyClass() {
  for (i = 0; i < attributes.length; i++) {
    if (pcClass.plusTwoAtt == attributes[i].type) {
      let bonus;
      bonus = attributes[i].modifier + 2;
      //Get the id matching the specified attribute to update on page.
      let plusTwo = document.getElementById(attributes[i].type);
      plusTwo.textContent = bonus;
      //Update attributes array.
      attributes[i].modifier = attributes[i].modifier + 2;
    }
    if (pcClass.plusOneAtt == attributes[i].type) {
      bonus = attributes[i].modifier + 1;
      //Get the id matching the specified attribute to update on page.
      let plusOne = document.getElementById(attributes[i].type);
      plusOne.textContent = bonus;
      //Update attributes array.
      attributes[i].modifier = attributes[i].modifier + 1;
    }
  }
  //Push class abilities into charAbilities
  for (i = 0; i < abilities.length; i++) {
    if (pcClass.plusTwoAbi == abilities[i].ability) {
      charAbilities.push(abilities[i]);
    }
    if (pcClass.plusOneAbi == abilities[i].ability) {
      charAbilities.push(abilities[i]);
    }
  }
  //Remove duplicate abilities
  sortedCharAbilities = [...new Set(charAbilities)];
  console.log(sortedCharAbilities);
  //Apply class bonus
  for (i = 0; i < sortedCharAbilities.length; i++) {
    if (sortedCharAbilities[i].ability == pcClass.plusTwoAbi) {
      sortedCharAbilities[i].modifier = sortedCharAbilities[i].modifier + 2;
    }
    if (sortedCharAbilities[i].ability == pcClass.plusOneAbi) {
      sortedCharAbilities[i].modifier = sortedCharAbilities[i].modifier + 1;
    }
    applyAttributeMod();
  }
  console.log("applyClass called");
}
//Calculate stats
function calculateStats() {
  let action = { type: "action", modifier: 0 };
  let reflex = { type: "reflex", modifier: 0 };
  let spirit = { type: "spirit", modifier: 0 };
  let hp = { type: "hp", modifier: 0 };
  let ase = { type: "ase", modifier: 0 };

  action.modifier = attributes[1].modifier + attributes[4].modifier;
  reflex.modifier = 6 + attributes[4].modifier;
  spirit.modifier = 6 + attributes[2].modifier;

  for (i = 0; i < sortedCharAbilities.length; i++) {
    if (sortedCharAbilities[i].ability == "Evade") {
      reflex.modifier = reflex.modifier + sortedCharAbilities[i].modifier;
      reflex.modifier = reflex.modifier - attributes[4].modifier;
    }
    if (sortedCharAbilities[i].ability == "Ward") {
      spirit.modifier = spirit.modifier + sortedCharAbilities[i].modifier;
      spirit.modifier = spirit.modifier - attributes[2].modifier;
    }
  }
  hp.modifier = attributes[3].modifier * 2;
  if (pcClass.path == "strong") {
    hp.modifier = hp.modifier + 10;
    ase.modifier = ase.modifier + 5;
  } else if (pcClass.path == "wise") {
    hp.modifier = hp.modifier + 5;
    ase.modifier = ase.modifier + 10;
  }

  //Push stats
  charStats.push(action);
  charStats.push(reflex);
  charStats.push(spirit);
  charStats.push(hp);
  charStats.push(ase);

  //Displays generated modifiers.
  let act = document.getElementById("action");
  let ref = document.getElementById("reflex");
  let spir = document.getElementById("spirit");
  let hits = document.getElementById("hp");
  let as = document.getElementById("ase");
  act.textContent = `ACTION: ${action.modifier}`;
  ref.textContent = `REFLEX: ${reflex.modifier}`;
  spir.textContent = `SPIRIT: ${spirit.modifier}`;
  hits.textContent = `HP: ${hp.modifier}`;
  as.textContent = `ASE: ${ase.modifier}`;
  console.log("calculateStats");
}

function applyAttributeMod() {
  if (sortedCharAbilities[i].attribute == attributes[0].type) {
    sortedCharAbilities[i].modifier =
      sortedCharAbilities[i].modifier + attributes[0].modifier;
  }
  if (sortedCharAbilities[i].attribute == attributes[1].type) {
    sortedCharAbilities[i].modifier =
      sortedCharAbilities[i].modifier + attributes[1].modifier;
  }
  if (sortedCharAbilities[i].attribute == attributes[2].type) {
    sortedCharAbilities[i].modifier =
      sortedCharAbilities[i].modifier + attributes[2].modifier;
  }
  if (sortedCharAbilities[i].attribute == attributes[3].type) {
    sortedCharAbilities[i].modifier =
      sortedCharAbilities[i].modifier + attributes[3].modifier;
  }
  if (sortedCharAbilities[i].attribute == attributes[4].type) {
    sortedCharAbilities[i].modifier =
      sortedCharAbilities[i].modifier + attributes[4].modifier;
  }
  console.log("applyAttributeMod called");
}

function getInfo() {
  //Get background info and display in dom.
  let bgWrapper = document.getElementById("bg_wrapper");
  //Create
  let bgInfo = document.createElement("ul");
  bgInfo.className = "stats_ul";
  let bgClass = document.createElement("li");
  bgClass.className = "stats_li";
  let bgjob = document.createElement("li");
  bgjob.className = "stats_li";
  let bgOrigin = document.createElement("li");
  bgOrigin.className = "stats_li";
  let bgLanguage = document.createElement("li");
  bgLanguage.className = "stats_li";
  let bgFaith = document.createElement("li");
  bgFaith.className = "stats_li";
  //Assign
  bgClass.textContent = `CLASS: ${pcClass.type}`;
  bgjob.textContent = `JOB: ${job.job}`;
  bgOrigin.textContent = `ORIGIN: ${origin.origin}`;
  bgLanguage.textContent = `LANGUAGE: ${origin.language}`;
  bgFaith.textContent = `FAITH: ${origin.faith}`;
  //Append
  bgWrapper.appendChild(bgInfo);
  bgInfo.appendChild(bgClass);
  bgInfo.appendChild(bgjob);
  bgInfo.appendChild(bgOrigin);
  bgInfo.appendChild(bgLanguage);
  bgInfo.appendChild(bgFaith);
  //Get stat info and display in dom.
  let statWrapper = document.getElementById("stat_wrapper");

  //Create
  let statInfo = document.createElement("ul");
  statInfo.className = "stats_ul";
  let statAction = document.createElement("li");
  statAction.id = "action";
  statAction.className = "stats_li";
  let statReflex = document.createElement("li");
  statReflex.id = "reflex";
  statReflex.className = "stats_li";
  let statSpirit = document.createElement("li");
  statSpirit.id = "spirit";
  statSpirit.className = "stats_li";
  let statHp = document.createElement("li");
  statHp.id = "hp";
  statHp.className = "stats_li";
  let statAse = document.createElement("li");
  statAse.id = "ase";
  statAse.className = "stats_li";
  //Call function that calculates action, reflex, spirit, hp and ase, return info to global variable.

  //Append
  statWrapper.appendChild(statInfo);
  statInfo.appendChild(statAction);
  statInfo.appendChild(statReflex);
  statInfo.appendChild(statSpirit);
  statInfo.appendChild(statHp);
  statInfo.appendChild(statAse);
  //Get abilities and display in dom.
  let abilityWrapper = document.getElementById("ability_wrapper");
  //Create
  let abilityInfo = document.createElement("ul"); //for loop create li for each ablity
  for (i = 0; i < sortedCharAbilities.length; i++) {
    let anotherAbility = document.createElement("li");
    //Assign
    anotherAbility.textContent = `${sortedCharAbilities[i].ability} + ${sortedCharAbilities[i].modifier}`;
    //Append
    abilityInfo.appendChild(anotherAbility);
  }
  calculateStats();
  //Append
  abilityWrapper.appendChild(abilityInfo);
}

function generateMiracles() {
  for (i = 0; i < miracles.length; i++) {
    if (miracles[i].type == pcClass.type) {
      //Create
      let miracleWrapper = document.createElement("div");
      miracleWrapper.className = "wrapper";
      let choice = document.createElement("h2");
      let text = document.createElement("p");
      text.className = "info";
      let lock = document.createElement("button");
      lock.id = `${miracles[i].miracle}`;
      lock.className = "confirm";
      //Assign
      choice.textContent = `${miracles[i].miracle}`;
      text.textContent = `${miracles[i].text}`;
      lock.textContent = "Confirm";
      //Append
      miracleWrapper.appendChild(choice);
      miracleWrapper.appendChild(text);
      miracleWrapper.appendChild(lock);
      miracleSection.appendChild(miracleWrapper);
    }
  }
  let miracleConfirm = document.getElementsByClassName("confirm");
  for (i = 0; i < miracleConfirm.length; i++) {
    miracleConfirm[i].addEventListener("click", (event) => {
      let click = event.target;
      for (i = 0; i < miracles.length; i++) {
        if (miracles[i].miracle == click.id) {
          if (miracleCount >= 2) {
            console.log("You may choose no more than two miracles.");
          } else {
            charMiracles.push(miracles[i]);
            miracleCount = miracleCount + 1;
          }
        }
      }
    });
  }
}

/*VARIABLES*/

//Variables for manipulation of attributes in the dom.
const wisdom = document.getElementById("wisdom");
const awareness = document.getElementById("awareness");
const soul = document.getElementById("soul");
const strength = document.getElementById("strength");
const agility = document.getElementById("agility");

const intro = document.getElementById("introduction_div");

const stepOne = document.getElementById("step_one");
const attributeExplain = document.getElementById("attribute_explanation");
const attributeButtons = document.getElementById("attribute_buttons");

const stepTwo = document.getElementById("step_two");
const originSection = document.getElementById("origin");
const originControls = document.getElementById("origin_controls");
const originPick = document.getElementById("origin_pick");

const stepThree = document.getElementById("step_three");
const jobSection = document.getElementById("job");
const jobControls = document.getElementById("job_controls");
const jobPick = document.getElementById("job_pick");

const stepFour = document.getElementById("step_four");
const classSection = document.getElementById("class");
const classControls = document.getElementById("class_controls");
const classPick = document.getElementById("class_pick");

const info = document.getElementsByClassName("info");
const stats = document.getElementsByClassName("stats_ul");

const background = document.getElementById("background");
const derived = document.getElementById("derived_stats");
const abilityList = document.getElementById("ability_list");
const miracleSection = document.getElementById("miracles");
const items = document.getElementById("items");

originPick.style.display = "none";
jobPick.style.display = "none";
classPick.style.display = "none";
background.style.display = "none";
derived.style.display = "none";
abilityList.style.display = "none";
miracleSection.style.display = "none";
items.style.display = "none";

let attributes = [];
let charAbilities = [];
let origin = [];
let job = [];
let pcClass = [];
let sortedCharAbilities = [];
let charStats = [];
let charMiracles = [];
let miracleCount = 0;
let attributeCommit = false;
let attributesRolled = false;
let originSelected = false;
let originCommit = false;
let jobCommit = false;
let jobSelected = false;
let classSelected = false;
let classCommit = false;

/*CONTROLS FOR BUTTONS AND SELECT*/
//Control for "Roll" button, generates random modifiers for attributes in the dom.
const selectAttribute = document.getElementById("select_attribute");
selectAttribute.addEventListener("change", () => {
  let lookUp = selectAttribute.value;
  //Create
  let description = document.getElementById("attribute_decription");
  let choice = document.createElement("h3");
  let text = document.createElement("p");
  let br = document.createElement("br");
  text.className = "info";
  description.innerHTML = "";
  //Assign
  for (i = 0; i < attDescripts.length; i++) {
    if (lookUp == attDescripts[i].attribute) {
      let source = attDescripts[i];
      //Clear previous selection.
      choice.textContent = `${source.attribute}`;
      text.textContent = `${source.text}`;
    }
    //Append
    description.appendChild(choice);
    description.appendChild(text);
    description.appendChild(br);
  }
});

const rollAttributes = document.getElementById("roll_attributes");
rollAttributes.addEventListener("click", () => {
  //Checks if there has been a previous roll, if so clears it.
  if (attributes.length > 0) {
    for (i = 0; i <= 5; i++) {
      attributes.pop();
    }
  }
  //Generates random modifiers between -1 and 3 for each attribute.
  let wis = { type: "wisdom", modifier: 0 };
  let awar = { type: "awareness", modifier: 0 };
  let sou = { type: "soul", modifier: 0 };
  let str = { type: "strength", modifier: 0 };
  let agl = { type: "agility", modifier: 0 };
  wis.modifier = generateModifiers();
  awar.modifier = generateModifiers();
  sou.modifier = generateModifiers();
  str.modifier = generateModifiers();
  agl.modifier = generateModifiers();
  //Displays generated modifiers.
  wisdom.textContent = wis.modifier;
  awareness.textContent = awar.modifier;
  soul.textContent = sou.modifier;
  strength.textContent = str.modifier;
  agility.textContent = agl.modifier;
  //Pushes
  attributes.push(wis);
  attributes.push(awar);
  attributes.push(sou);
  attributes.push(str);
  attributes.push(agl);
  attributesRolled = true;
});

const confirmAttributes = document.getElementById("confirm_attributes");
confirmAttributes.addEventListener("click", () => {
  if (attributesRolled == true) {
    attributeCommit = true;
    intro.style.display = "none";
    stepOne.style.display = "none";
    attributeButtons.style.display = "none";
  } else {
    console.log("Roll for your attribute modifiers");
  }
});

//Get select_origin dropdown to load selected origin information.
const selectOrigin = document.getElementById("select_origin");
selectOrigin.addEventListener("change", (event) => {
  originSelected = true;
  if (attributeCommit == false) {
    console.log("Confirm your attributes first.");
  } else {
    let selected = event.target;
    originPick.innerHTML = "";
    originPick.style.display = "block";
    //Create
    for (i = 0; i < origins.length; i++) {
      if (origins[i].origin == selected.value) {
        origin = origins[i];
        let choice = document.createElement("h3");
        let text = document.createElement("p");
        text.className = "info";
        let stats = document.createElement("ul");
        stats.className = "stats_ul";
        let language = document.createElement("li");
        language.className = "stats_li";
        let faith = document.createElement("li");
        faith.className = "stats_li";
        let attBonus = document.createElement("li");
        attBonus.className = "stats_li";
        let abilBonus = document.createElement("li");
        abilBonus.className = "stats_li";
        //Assign
        choice.textContent = origins[i].origin;
        text.textContent = origins[i].text;
        language.textContent = `Language: ${origins[i].language}`;
        faith.textContent = `Faith: ${origins[i].faith}`;
        attBonus.textContent = `${origins[i].attributeBonus.toUpperCase()} + 1`;
        abilBonus.textContent = `${origins[i].abilityBonus} + 1`;
        //Append
        originPick.appendChild(choice);
        originPick.appendChild(text);
        originPick.appendChild(stats);
        stats.appendChild(language);
        stats.appendChild(faith);
        stats.appendChild(attBonus);
        stats.appendChild(abilBonus);
      }
    }
  }
});

//Get roll_origin button to call function generateOrigin.
const rollOrigin = document.getElementById("roll_origin");
rollOrigin.addEventListener("click", () => {
  if (attributeCommit == false) {
    console.log("Confirm your attributes first.");
  } else {
    generateOrigin();
    applyOrigin();
    originCommit = true;
    stepTwo.style.display = "none";
    originControls.style.display = "none";
  }
});

const confirmOrigin = document.getElementById("confirm_origin");
confirmOrigin.addEventListener("click", () => {
  if (attributeCommit == true && originSelected == true) {
    applyOrigin();
    originCommit = true;
    stepTwo.style.display = "none";
    originControls.style.display = "none";
  } else {
    console.log("Have you confirmed your attributes and selected an origin?");
  }
});

const selectJob = document.getElementById("select_job");
selectJob.addEventListener("change", (event) => {
  if (attributeCommit == false || originCommit == false) {
    console.log("You must confirm both your attributes and origin to proceed.");
  } else {
    let selected = event.target;
    jobPick.innerHTML = "";
    jobPick.style.display = "block";
    jobSelected = true;
    //Create
    for (i = 0; i < jobs.length; i++) {
      if (jobs[i].job == selected.value) {
        job = jobs[i];
        let choice = document.createElement("h3");
        let text = document.createElement("p");
        text.className = "info";
        let stats = document.createElement("ul");
        stats.className = "stats_ul";
        let firstAbility = document.createElement("li");
        firstAbility.className = "stats_li";
        let secondAbility = document.createElement("li");
        secondAbility.className = "stats_li";
        //Assign
        choice.textContent = jobs[i].job;
        text.textContent = jobs[i].text;
        firstAbility.textContent = `${jobs[i].firstAbility} + 1`;
        secondAbility.textContent = `${jobs[i].secondAbility} + 1`;
        //Append
        jobPick.appendChild(choice);
        jobPick.appendChild(text);
        jobPick.appendChild(stats);
        stats.appendChild(firstAbility);
        stats.appendChild(secondAbility);
      }
    }
  }
});

const rollJob = document.getElementById("roll_job");
rollJob.addEventListener("click", () => {
  if (attributeCommit == false || originCommit == false) {
    console.log("You must confirm both your attributes and origin to proceed.");
  } else {
    generateJob();
    jobCommit = true;
    stepThree.style.display = "none";
    jobControls.style.display = "none";
    for (i = 0; i < charAbilities.length; i++) {
      //Add + 1 to matches.
      if (charAbilities[i].ability == job.firstAbility) {
        charAbilities[i].modifier = charAbilities[i].modifier + 1;
        //If there's no matches push the ability to charAbilities.
      } else {
        for (i = 0; i < abilities.length; i++) {
          if (job.firstAbility == abilities[i].ability) {
            charAbilities.push(abilities[i]);
          }
        }
      }
    }
    //Check if charAbilities has ability matching jobs secondAbility.
    for (i = 0; i < charAbilities.length; i++) {
      //Add + 1 to matches.
      if (charAbilities[i].ability == job.secondAbility) {
        charAbilities[i].modifier = charAbilities[i].modifier + 1;
        //If there's no matches push the ability to charAbilities.
      } else {
        for (i = 0; i < abilities.length; i++) {
          if (job.secondAbility == abilities[i].ability) {
            charAbilities.push(abilities[i]);
          }
        }
      }
    }
  }
});

const confirmJob = document.getElementById("confirm_job");
confirmJob.addEventListener("click", () => {
  if (
    jobSelected == false ||
    attributeCommit == false ||
    originCommit == false
  ) {
    console.log(
      "You must confirm both your attributes and origin then select a job to proceed."
    );
  } else {
    jobCommit = true;
    stepThree.style.display = "none";
    jobControls.style.display = "none";
    //Check if charAbilities has ability matching jobs firstAbility.
    for (i = 0; i < charAbilities.length; i++) {
      //Add + 1 to matches.
      if (charAbilities[i].ability == job.firstAbility) {
        charAbilities[i].modifier = charAbilities[i].modifier + 1;
        //If there's no matches push the ability to charAbilities.
      } else {
        for (i = 0; i < abilities.length; i++) {
          if (job.firstAbility == abilities[i].ability) {
            charAbilities.push(abilities[i]);
          }
        }
      }
    }
    //Check if charAbilities has ability matching jobs secondAbility.
    for (i = 0; i < charAbilities.length; i++) {
      //Add + 1 to matches.
      if (charAbilities[i].ability == job.secondAbility) {
        charAbilities[i].modifier = charAbilities[i].modifier + 1;
        //If there's no matches push the ability to charAbilities.
      } else {
        for (i = 0; i < abilities.length; i++) {
          if (job.secondAbility == abilities[i].ability) {
            charAbilities.push(abilities[i]);
          }
        }
      }
    }
  }
});

const selectClass = document.getElementById("select_class");
selectClass.addEventListener("change", (event) => {
  let selected = event.target;
  if (attributeCommit == false || originCommit == false || jobCommit == false) {
    console.log("Have you confirmed your attributes, your origin and job?");
  } else {
    //Get selected.value from user.
    classPick.innerHTML = "";
    classPick.style.display = "block";
    classSelected = true;
    //Create
    for (i = 0; i < charClasses.length; i++) {
      if (selected.value == charClasses[i].type) {
        pcClass = charClasses[i];
        let choice = document.createElement("h3");
        let text = document.createElement("p");
        text.className = "info";
        let stats = document.createElement("ul");
        stats.className = "stats_ul";
        let plusTwoAtt = document.createElement("li");
        plusTwoAtt.className = "stats_li";
        let plusOneAtt = document.createElement("li");
        plusOneAtt.className = "stats_li";
        let plusTwoAbi = document.createElement("li");
        plusTwoAbi.className = "stats_li";
        let plusOneAbi = document.createElement("li");
        plusOneAbi.className = "stats_li";
        //Assign
        choice.textContent = charClasses[i].type;
        text.textContent = charClasses[i].text;
        plusTwoAtt.textContent = `${charClasses[
          i
        ].plusTwoAtt.toUpperCase()} + 2`;
        plusOneAtt.textContent = `${charClasses[
          i
        ].plusOneAtt.toUpperCase()} + 1`;
        plusTwoAbi.textContent = `${charClasses[i].plusTwoAbi} + 2`;
        plusOneAbi.textContent = `${charClasses[i].plusOneAbi} + 1`;
        //Append
        classPick.appendChild(choice);
        classPick.appendChild(text);
        classPick.appendChild(stats);
        stats.appendChild(plusTwoAtt);
        stats.appendChild(plusOneAtt);
        stats.appendChild(plusTwoAbi);
        stats.appendChild(plusOneAbi);
      }
    }
  }
});

const confirmClass = document.getElementById("confirm_class");
confirmClass.addEventListener("click", () => {
  if (classSelected == false || selectClass.value == "Classes") {
    console.log("Please select a Class");
  } else {
    //Hide build info
    originSection.style.display = "none";
    jobSection.style.display = "none";
    classSection.style.display = "none";
    //Show character info
    background.style.display = "block";
    derived.style.display = "block";
    abilityList.style.display = "block";
    miracleSection.style.display = "block";
    items.style.display = "block";
    applyClass();
    getInfo();
    generateMiracles();
  }
});

//Miracles, offer class miracles

//Roll gold and offer item list.

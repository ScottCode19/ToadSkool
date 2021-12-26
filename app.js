"use strict";

//////object constructor

function Mushroom(
  commonNames,
  latinName,
  habitat,
  habitatImages,
  generalImages,
  capImages,
  gillImages,
  stemImages,
  volvaImages,
  cutImages,
  bruiseImages,
  milkImages,
  sporePrintImages,
  feel,
  frequency,
  monthsAvaiable,
  edilbleRaw,
  edibleCooked,
  poisonous,
  deadly,
  hallucinogenic,
  confusedWith,
  bruises,
  brittleGills,
  milks,
  capWidth,
  height
) {
  this.commonNames = commonNames;
  this.latinName = latinName;
  this.habitat = habitat;
  this.habitatImages = habitatImages;
  this.generalImages = generalImages;
  this.capImages = capImages;
  this.gillImages = gillImages;
  this.stemImages = stemImages;
  this.volvaImages = volvaImages;
  this.cutImages = cutImages;
  this.bruiseImages = bruiseImages;
  this.milkImages = milkImages;
  this.sporePrintImages = sporePrintImages;
  this.feel = feel;
  this.frequency = frequency;
  this.monthsAvaiable = monthsAvaiable;
  this.edilbleRaw = edilbleRaw;
  this.edibleCooked = edibleCooked;
  this.poisonous = poisonous;
  this.deadly = deadly;
  this.hallucinogenic = hallucinogenic;
  this.confusedWith = confusedWith;
  this.bruises = bruises;
  this.brittleGills = brittleGills;
  this.milks = milks;
  this.capWidth = capWidth;
  this.height = height;
}

/////////////objects

//template

// const commonName = new Mushroom(
//   ["Common Name"],
//   "Latin name",
//   ["woods/grass", "treetypeetc"],
//   [habitat images],
//   [general images],
//   [cap images],
//   [gill images],
//   [stem images],
//   [volva images],
//   [cut images],
//   [bruise images],
//   [milk images],
//   [spore print images],
//   "feel",
//   "frequency",
//   ["Months", "Available"],
//   edibleRaw,
//   edibleCooked,
//   poisonous,
//   deadly,
//   hallucinogenic,
//   [confused with],
//   bruises,
//   brittlegills,
//   milks,
//   capwidth,
//   height,
// );

const flyAgaric = new Mushroom(
  ["Fly Agaric"],
  "Amanita muscaria",
  ["woods", "birch"],
  ["Images/Habitat/birch woodland.jpg"],
  ["Images/Fly Agaric/multiple.jpg"],
  ["Images/Fly Agaric/cap.jpg"],
  ["Images/Fly Agaric/gills.jpg"],
  ["Images/Fly Agaric/stem.jpg"],
  ["Images/Fly Agaric/dig.jpg"],
  ["Images/Fly Agaric/cut.jpg"],
  [],
  [],
  ["Images/Fly Agaric/sporeprint.jpg"],
  "pretty normal",
  "common",
  ["August", "Sept", "Oct", "Nov", "Dec"],
  false,
  false,
  true,
  true,
  true,
  ["theBlusher, greySpottedAmanita, pantherCap, JewelledAmanita"],
  false,
  false,
  false,
  25,
  20
);

const fieldMushroom = new Mushroom(
  ["Field Mushroom"],
  "Agaricus campestris",
  ["grasslands", "meadows", "fields", "parks"],
  ["Images/Habitat/grasslands.jpg"],
  ["Images/Field Mushroom/multiple.jpg"],
  ["Images/Field Mushroom/cap.jpg"],
  ["Images/Field Mushroom/gills.jpg"],
  ["Images/Field Mushroom/stem.jpg"],
  ["Images/Field Mushroom/dig.jpg"],
  ["Images/Field Mushroom/cut.jpg"],
  [],
  [],
  ["Images/Field Mushroom/sporeprint.jpg"],
  "pretty normal",
  "common",
  ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
  false,
  true,
  false,
  false,
  false,
  ["yellowStainer, agaricusPilatianus"],
  true,
  false,
  false,
  10,
  8
);

const beefsteakFungus = new Mushroom(
  ["Beefsteak Fungus"],
  "Fistulina hepatica",
  ["onTree", "Oak", "Sweet Chestnut"],
  ["Images/Habitat/oak woodland.jpg"],
  ["Images/Beefsteak Fungus/multiple.jpg"],
  ["Images/Beefsteak Fungus/cap.jpg"],
  ["Images/Beefsteak Fungus/pores.jpg"],
  [],
  [],
  ["Images/Beefsteak Fungus/cut.jpg"],
  [],
  [],
  [],
  "pretty normal",
  "common",
  ["Aug", "Sep", "Oct", "Nov"],
  true,
  true,
  false,
  false,
  false,
  [],
  false,
  false,
  false,
  20,
  0
);

const theBlusher = new Mushroom(
  ["The Blusher"],
  "Amanita rubescens",
  ["mixed woodland"],
  ["Images/Habitat/mixed woodland.jpg"],
  ["Images/The Blusher/multiple.jpg"],
  ["Images/The Blusher/cap.jpg"],
  ["Images/The Blusher/gills.jpg"],
  ["Images/The Blusher/stem.jpg"],
  ["Images/The Blusher/dig.jpg"],
  ["Images/The Blusher/cut.jpg"],
  ["Images/The Blusher/bruise.jpg"],
  [],
  [],
  "pretty normal",
  "very common",
  ["Months", "Available"],
  false,
  true,
  false,
  false,
  false,
  ["Panther Cap, Grey Spotted Amanita"],
  true,
  false,
  false,
  15,
  15
);

const theCharcoalBurner = new Mushroom(
  ["The Charcoal Burner"],
  "Russula cyanoxantha",
  ["woods", "beech"],
  ["Images/Habitat/beech woodland.jpg"],
  ["Images/The Charcoal Burner/general.jpg"],
  ["Images/The Charcoal Burner/cap.jpg"],
  ["Images/The Charcoal Burner/gills.jpg"],
  ["Images/The Charcoal Burner/stem.jpg"],
  ["Images/The Charcoal Burner/dig.jpg"],
  ["Images/The Charcoal Burner/cut.jpg"],
  [],
  [],
  [],
  "firm and thick",
  "common",
  ["Jul", "Aug", "Sept", "Oct"],
  true,
  true,
  false,
  false,
  false,
  [],
  true,
  false,
  false,
  15,
  11
);

const commonMorel = new Mushroom(
  ["Common Morel", "Grey Morel"],
  "Morchella vulgaris",
  ["woods", "pastures", "gardens", "wasteland", "dunes"],
  ["Images/Habitat/mixed woodland.jpg"],
  ["Images/Common Morel/multiple.jpg"],
  ["Images/Common Morel/cap.jpg"],
  [],
  ["Images/Common Morel/stem.jpg"],
  ["Images/Common Morel/dig.jpg"],
  ["Images/Common Morel/cut.jpg"],
  [],
  [],
  [],
  "thin and hollow",
  "uncommon",
  ["Mar", "Apr", "May"],
  false,
  true,
  false,
  false,
  false,
  ["Yellow Morel, False Morel, Black Morel"],
  false,
  false,
  false,
  15,
  20
);

const chanterelle = new Mushroom(
  ["Chanterelle"],
  "Cantharellus cibarius",
  ["woods", "beech", "birch"],
  ["Images/Habitat/beech woodland.jpg"],
  ["Images/Chanterelle/multiple.jpg"],
  ["Images/Chanterelle/cap.jpg"],
  ["Images/Chanterelle/gills.jpg"],
  ["Images/Chanterelle/stem.jpg"],
  ["Images/Chanterelle/dig.jpg"],
  ["Images/Chanterelle/cut.jpg"],
  [],
  [],
  [],
  "pretty normal",
  "common",
  ["May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov"],
  true,
  true,
  false,
  false,
  false,
  ["False Chanterelle", "Winter Chanterelle"],
  false,
  false,
  false,
  10,
  10
);

const deathCap = new Mushroom(
  ["Death Cap"],
  "Amanita phalloides",
  ["woods", "oak"],
  ["Images/Habitat/oak woodland.jpg"],
  ["Images/Death Cap/multiple.jpg"],
  ["Images/Death Cap/cap.jpg"],
  ["Images/Death Cap/gills.jpg"],
  ["Images/Death Cap/stem.jpg"],
  ["Images/Death Cap/dig.jpg"],
  ["Images/Death Cap/cut.jpg"],
  [],
  [],
  [],
  "pretty normal",
  "uncommon",
  ["Jul", "Aug", "Sep", "Oct", "Nov"],
  false,
  false,
  true,
  true,
  false,
  [],
  false,
  false,
  false,
  12,
  15
);

const inkyMushroom = new Mushroom(
  ["Inky Mushroom"],
  "Agaricus moelleri",
  ["woods", "grassland"],
  ["Images/Habitat/mixed woodland.jpg"],
  ["Images/Inky Mushroom/multiple.jpg"],
  ["Images/Inky Mushroom/cap.jpg"],
  ["Images/Inky Mushroom/gills.jpg"],
  ["Images/Inky Mushroom/stem.jpg"],
  ["Images/Inky Mushroom/dig.jpg"],
  ["Images/Inky Mushroom/cut.jpg"],
  [],
  [],
  [],
  "pretty normal",
  "common",
  ["Jun", "Jul", "Aug", "Sep", "Oct"],
  false,
  false,
  true,
  false,
  false,
  ["thePrince"],
  true,
  false,
  false,
  10,
  10
);

const yellowStainer = new Mushroom(
  ["Yellow Stainer"],
  "Agaricus xanthodermus",
  ["grassland", "hedgerows"],
  ["Images/Habitat/grasslands.jpg"],
  ["Images/Yellow Stainer/multiple.jpg"],
  ["Images/Yellow Stainer/cap.jpg"],
  ["Images/Yellow Stainer/gills.jpg"],
  ["Images/Yellow Stainer/stem.jpg"],
  ["Images/Yellow Stainer/dig.jpg"],
  ["Images/Yellow Stainer/cut.jpg"],
  ["Images/Yellow Stainer/bruise.jpg"],
  [],
  [],
  "pretty normal",
  "common",
  ["Jul", "Aug", "Sep", "Oct", "Nov"],
  false,
  false,
  true,
  false,
  false,
  [fieldMushroom],
  true,
  false,
  false,
  16,
  16
);

const gemmedAmanita = new Mushroom(
  ["Gemmed Amanita", "Jewelled Amanita"],
  "Amanita gemmata",
  ["woods", "conifer"],
  ["Images/Habitat/conifer woodland.jpg"],
  ["Images/Gemmed Amanita/multiple.jpg"],
  ["Images/Gemmed Amanita/cap.jpg"],
  ["Images/Gemmed Amanita/gills.jpg"],
  ["Images/Gemmed Amanita/stem.jpg"],
  ["Images/Gemmed Amanita/dig.jpg"],
  ["Images/Gemmed Amanita/cut.jpg"],
  ["Images/Gemmed Amanita/cut.jpg"],
  [],
  [],
  "pretty normal",
  "uncommon",
  ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
  false,
  false,
  true,
  true,
  false,
  [],
  true,
  false,
  false,
  7,
  11
);

const pantherCap = new Mushroom(
  ["Panther Cap"],
  "Amanita pantherina",
  ["woods", "beech"],
  ["Images/Habitat/beech woodland.jpg"],
  ["Images/Panther Cap/multiple.jpg"],
  ["Images/Panther Cap/cap.jpg"],
  ["Images/Panther Cap/gills.jpg"],
  ["Images/Panther Cap/stem.jpg"],
  ["Images/Panther Cap/dig.jpg"],
  ["Images/Panther Cap/cut.jpg"],
  [],
  [],
  [],
  "pretty normal",
  "uncommon",
  ["Jul", "Aug", "Sep", "Oct", "Nov"],
  false,
  false,
  true,
  true,
  false,
  [theBlusher, "Excelsa"],
  false,
  false,
  false,
  10,
  13
);

const falseChanterelle = new Mushroom(
  ["False Chanterelle"],
  "Hygrophoropsis aurantiaca",
  ["woods", "conifer"],
  ["Images/Habitat/conifer woods.jpg"],
  ["Images/False Chanterelle/main.jpg"],
  ["Images/False Chanterelle/cap.jpg"],
  ["Images/False Chanterelle/gills.jpg"],
  ["Images/False Chanterelle/stem.jpg"],
  ["Images/False Chanterelle/dig.jpg"],
  ["Images/False Chanterelle/cut.jpg"],
  [],
  [],
  [],
  "like any old mushroom",
  "common",
  ["Jul", "Aug", "Sep", "Oct", "Nov"],
  false,
  false,
  false,
  false,
  false,
  [chanterelle, "winterChanterelle"],
  false,
  false,
  false,
  8,
  5
);

const destroyingAngel = new Mushroom(
  ["Destroying Angel"],
  "Amanita virosa",
  ["woods", "mixed"],
  ["Images/Habitat/mixed woodland.jpg"],
  ["Images/Destroying Angel/general.jpg"],
  ["Images/Destroying Angel/cap.jpg"],
  ["Images/Destroying Angel/gills.jpg"],
  ["Images/Destroying Angel/stem.jpg"],
  ["Images/Destroying Angel/dig.jpg"],
  ["Images/Destroying Angel/cut.jpg"],
  [],
  [],
  [],
  "like any old mushroom",
  "rare",
  ["Jul", "Aug", "Sep", "Oct", "Nov"],
  false,
  false,
  true,
  true,
  false,
  [],
  false,
  false,
  false,
  12,
  12
);

const horseMushroom = new Mushroom(
  ["Horse Mushroom"],
  "Agaricus arvensis",
  ["grasslands", "meadows", "fields", "parks"],
  ["Images/Habitat/grasslands.jpg"],
  ["Images/Horse Mushroom/multiple.jpg"],
  ["Images/Horse Mushroom/cap.jpg"],
  ["Images/Horse Mushroom/gills.jpg"],
  ["Images/Horse Mushroom/stem.jpg"],
  ["Images/Horse Mushroom/dig.jpg"],
  ["Images/Horse Mushroom/cut.jpg"],
  ["Images/Horse Mushroom/cut.jpg"],
  [],
  [],
  "like any old mushroom",
  "common",
  ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  false,
  true,
  false,
  false,
  false,
  ["Yellow Stainer", "Horse Mushroom"],
  true,
  false,
  false,
  25,
  10
);

const mushrooms = [
  flyAgaric,
  fieldMushroom,
  beefsteakFungus,
  theBlusher,
  theCharcoalBurner,
  commonMorel,
  chanterelle,
  deathCap,
  inkyMushroom,
  yellowStainer,
  gemmedAmanita,
  pantherCap,
  falseChanterelle,
  destroyingAngel,
  horseMushroom,
];

//////////Elements

const mushroomImage = document.querySelector(".main-image");
const titleWelcome = document.querySelector(".welcome-title");
const answerContainer = document.querySelector(".answer-container");
const answerName = document.querySelector(".answer-name");
const answerInfo = document.querySelector(".answer-info");
const mainContainer = document.querySelector(".main-container");
const overlayContainer = document.querySelector(".overlay-container");
const appContainer = document.querySelector(".app-container");

const btnRevealAnswer = document.querySelector(".btn-reveal-answer");
const btnPlay = document.querySelector(".btn-play");
const btnCap = document.querySelector(".btn-cap");
const btnUnderCap = document.querySelector(".btn-under-cap");
const btnStem = document.querySelector(".btn-stem");
const btnFeel = document.querySelector(".btn-feel");
const btnBruise = document.querySelector(".btn-bruise");
const btnDig = document.querySelector(".btn-dig");
const btnCut = document.querySelector(".btn-cut");
const btnTouchGills = document.querySelector(".btn-touch-gills");
const btnSporePrint = document.querySelector(".btn-sporeprint");

////////global variables
let currentMushroom;
let nextMushroom = false;

//////////////////functions///////////////////////

//initialisation
const init = function () {
  appContainer.style.opacity = 0.1;
  appContainer.style.zIndex = -1;
  titleWelcome.textContent = "🍄 Welcome to ToadSkool 🍄";
  mushroomImage.setAttribute("src", "images/Fly Agaric/cap.jpg");
};

const loadRandom = function () {
  //set currentMushroom
  currentMushroom = mushrooms[Math.floor(Math.random() * mushrooms.length)];
  // set the initial image to a random from multiple
  mushroomImage.setAttribute("src", currentMushroom.generalImages[0]);
};
/////////event handlers////////////////////////

btnPlay.addEventListener("click", function () {
  appContainer.style.opacity = 1;
  appContainer.style.zIndex = 1;
  overlayContainer.remove();
  loadRandom();
});

btnCap.addEventListener("click", function () {
  mushroomImage.setAttribute("src", currentMushroom.capImages[0]);
});

btnUnderCap.addEventListener("click", function () {
  mushroomImage.setAttribute("src", currentMushroom.gillImages[0]);
});

btnStem.addEventListener("click", function () {
  currentMushroom.stemImages
    ? mushroomImage.setAttribute("src", currentMushroom.stemImages[0])
    : alert(`There isn't really a stem to look at on this mushroom`);
});

btnFeel.addEventListener("click", function () {
  alert(`It feels ${currentMushroom.feel}`);
});

btnBruise.addEventListener("click", function () {
  currentMushroom.bruises
    ? mushroomImage.setAttribute("src", currentMushroom.bruiseImages[0])
    : alert(`Nothing really happens when you bruise it`);
});

btnDig.addEventListener("click", function () {
  currentMushroom.volvaImages
    ? mushroomImage.setAttribute("src", currentMushroom.volvaImages[0])
    : alert(`You can't dig up something that ain't in the ground!`);
});

btnCut.addEventListener("click", function () {
  mushroomImage.setAttribute("src", currentMushroom.cutImages[0]);
});

btnRevealAnswer.addEventListener("click", function () {
  if (nextMushroom) {
    nextMushroom = !nextMushroom;
    btnRevealAnswer.textContent = "Reveal Answer";
    answerName.textContent = "";
    answerInfo.textContent = "";
    answerName.style.backgroundColor = "";
    answerInfo.style.backgroundColor = "";

    loadRandom();
  } else {
    let edibilityDetail;
    if (currentMushroom.edilbleRaw) {
      edibilityDetail = "can be eaten raw 😀";
    } else if (currentMushroom.edibleCooked) {
      edibilityDetail = "can be eaten, but only when its cooked 🔥";
    } else if (currentMushroom.deadly) {
      edibilityDetail = "is deadly poisonous, DO NOT EAT! ⚠";
    } else if (currentMushroom.poisonous) {
      edibilityDetail =
        "probably won't kill you but will make you unwell if you eat it 😷";
    } else {
      edibilityDetail =
        "likely won't poison you (unless you're one of those unlucky people who react to it) but it doesnt taste nice anyway 🤮";
    }

    answerName.textContent = `${currentMushroom.commonNames[0]} (${currentMushroom.latinName})`;
    answerInfo.textContent = `This mushroom ${edibilityDetail}`;
    btnRevealAnswer.textContent = "Next Mushroom!";
    nextMushroom = !nextMushroom;
    answerName.style.backgroundColor = "#004400";
    answerInfo.style.backgroundColor = "#004400";
  }
});
/////////////////////main/////////////////////////

init();

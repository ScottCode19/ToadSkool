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
  height,
  bruiseColor
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
  this.bruiseColor = bruiseColor;
}

/////////////objects

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
  false,
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
  8,
  "slightly pink"
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
  false,
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
  ["grasslands", "meadows", "fields", "parks"],
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

const greyOyster = new Mushroom(
  ["Grey Oyster"],
  "	Pleurotus ostreatus",
  ["woods", "beech"],
  ["Images/Habitat/beech woodland.jpg"],
  ["Images/Grey Oyster/multiple.jpg"],
  ["Images/Grey Oyster/cap.jpg"],
  ["Images/Grey Oyster/gills.jpg"],
  ["Images/Grey Oyster/stem.jpg"],
  [],
  ["Images/Grey Oyster/cut.jpg"],
  ["Images/Grey Oyster/cut.jpg"],
  [],
  [],
  "pretty tough at the stem",
  "common",
  ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
  false,
  true,
  false,
  false,
  false,
  ["Other Oyster Mushrooms", "Oysterlings", "Angel Wings"],
  false,
  false,
  false,
  15,
  0
);

const fairyRingChampignon = new Mushroom(
  ["Fairy Ring Champignon", "Fairy Ring Mushrooms", "Mouserron"],
  "Marasmius oreades",
  ["grasslands", "meadows", "fields", "parks"],
  ["Images/Habitat/grasslands.jpg"],
  ["Images/Fairy Ring Champignon/multiple.jpg"],
  ["Images/Fairy Ring Champignon/cap.jpg"],
  ["Images/Fairy Ring Champignon/gills.jpg"],
  ["Images/Fairy Ring Champignon/stem.jpg"],
  ["Images/Fairy Ring Champignon/dig.jpg"],
  ["Images/Fairy Ring Champignon/cut.jpeg"],
  [],
  [],
  [],
  "like the flesh is pretty thin",
  "common",
  ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
  false,
  true,
  false,
  false,
  false,
  ["Clitocybe rivulosa", "Clitocybe dealbata"],
  false,
  false,
  false,
  5,
  8
);

const porcelainFungus = new Mushroom(
  ["Porcelain Fungus"],
  "Oudemansiella mucida",
  ["woodland", "beech"],
  ["Images/Habitat/beech woodland.jpg"],
  ["Images/Porcelain Fungus/multiple.jpg"],
  ["Images/Porcelain Fungus/cap.jpg"],
  ["Images/Porcelain Fungus/gills.jpg"],
  ["Images/Porcelain Fungus/stem.jpg"],
  [],
  ["Images/Porcelain Fungus/cut.jpeg"],
  [],
  [],
  [],
  "thin and delicate, it's also slimy on the top",
  "common",
  ["Aug", "Sep", "Oct", "Nov"],
  false,
  true,
  false,
  false,
  false,
  [],
  false,
  false,
  false,
  8,
  10
);

const saffronMilkcap = new Mushroom(
  ["Saffron Milkcap"],
  "Lactarius deliciosus",
  ["woods", "pine"],
  ["Images/Habitat/pine woodland.jpg"],
  ["Images/Saffron Milkcap/multiple.jpg"],
  ["Images/Saffron Milkcap/cap.jpg"],
  ["Images/Saffron Milkcap/gills.jpg"],
  ["Images/Saffron Milkcap/stem.jpg"],
  ["Images/Saffron Milkcap/dig.jpg"],
  ["Images/Saffron Milkcap/cut.jpg"],
  ["Images/Saffron Milkcap/bruises.jpg"],

  ["Images/Saffron Milkcap/milk.jpg"],
  [],
  "pretty normal",
  "common",
  ["Jul", "Aug", "Sep", "Oct", "Nov"],
  false,
  true,
  false,
  false,
  false,
  ["False Saffron Milkcap", "The Woolly Milkcap"],
  true,
  false,
  true,
  10,
  7
);

const velvetShank = new Mushroom(
  ["Velvet Shank"],
  "Flammulina velutipes",
  ["woods", "elm"],
  ["Images/Habitat/mixed woodland.jpg"],
  ["Images/Velvet Shank/multiple.jpg"],
  ["Images/Velvet Shank/cap.jpg"],
  ["Images/Velvet Shank/gills.jpg"],
  ["Images/Velvet Shank/stem.jpg"],
  [],
  ["Images/Velvet Shank/cut.jpg"],
  [],
  [],
  [],
  "almost slimey on the top and has a fuzzy, velvety stem",
  "common",
  ["Dec", "Jan", "Feb", "Mar", "Apr"],
  false,
  true,
  false,
  false,
  false,
  ["Funeral Bell", "Sulphur Tuft"],
  false,
  false,
  false,
  10,
  0
);

const libertyCap = new Mushroom(
  ["Liberty Cap", "Magic Mushroom"],
  "Psilocybe semilanceata",
  ["grasslands", "meadows", "fields"],
  ["Images/Habitat/cow field.jpeg"],
  ["Images/Liberty Cap/multiple.jpg"],
  ["Images/Liberty Cap/cap.jpg"],
  ["Images/Liberty Cap/gills.jpeg"],
  ["Images/Liberty Cap/stem.jpg"],
  ["Images/Liberty Cap/dig.jpg"],
  ["Images/Liberty Cap/cut.jpg"],
  [],
  [],
  [],
  "spindly and delicate",
  "common",
  ["Sep", "Oct", "Nov", "Dec"],
  false,
  false,
  true,
  false,
  true,
  [],
  false,
  false,
  false,
  1,
  5
);

const greenCrackedRussula = new Mushroom(
  [
    "Green Cracked Russula",
    "Green Cracking Russula",
    "Green Cracked Brittlegill",
    "Green Cracking Brittlegill",
  ],
  "Russula virescens",
  ["woods", "beech"],
  ["Images/Habitat/beech woodland.jpg"],
  ["Images/Green Cracked Russula/multiple.jpg"],
  ["Images/Green Cracked Russula/cap.jpg"],
  ["Images/Green Cracked Russula/gills.jpg"],
  ["Images/Green Cracked Russula/stem.jpg"],
  ["Images/Green Cracked Russula/dig.jpg"],
  ["Images/Green Cracked Russula/cut.jpg"],
  [],
  [],
  [],
  "pretty solid, the gills break easily",
  "uncommon",
  ["Jul", "Aug", "Sep", "Oct"],
  true,
  true,
  false,
  false,
  false,
  [],
  false,
  true,
  false,
  13,
  9
);

const commonYellowRussula = new Mushroom(
  ["Common Yellow Russula", "Common Yellow Brittlegill"],
  "Russula ochroleuca",
  ["woods", "mixed"],
  ["Images/Habitat/mixed woodland.jpg"],
  ["Images/Common Yellow Russula/general.jpg"],
  ["Images/Common Yellow Russula/cap.jpg"],
  ["Images/Common Yellow Russula/gills.jpg"],
  ["Images/Common Yellow Russula/stem.jpg"],
  ["Images/Common Yellow Russula/dig.jpg"],
  ["Images/Common Yellow Russula/cut.jpg"],
  [],
  [],
  [],
  "pretty solid, the gills break easily",
  "common",
  ["Aug", "Sep", "Oct", "Nov"],
  false,
  true,
  false,
  false,
  false,
  ["Geranium Scented Russula"],
  false,
  true,
  false,
  10,
  8
);

const yellowSwampRussula = new Mushroom(
  ["Yellow Swamp Russula"],
  "Russula claroflava",
  ["woods", "mixed", "bogs", "birch"],
  ["Images/Habitat/mixed woodland.jpg"],
  ["Images/Yellow Swamp Russula/general.jpg"],
  ["Images/Yellow Swamp Russula/cap.jpg"],
  ["Images/Yellow Swamp Russula/gills.jpg"],
  ["Images/Yellow Swamp Russula/stem.jpg"],
  ["Images/Yellow Swamp Russula/dig.jpg"],
  ["Images/Yellow Swamp Russula/cut.jpg"],
  [],
  [],
  [],
  "brittle, the stem snaps like chalk and the gills break off easily",
  "uncommon",
  ["Aug", "Sep", "Oct"],
  false,
  true,
  false,
  false,
  false,
  ["Geranium Scented Russula"],
  false,
  true,
  false,
  10,
  10
);

const geraniumScentedRussula = new Mushroom(
  ["Geranium Scented Russula"],
  "Russula fellea",
  ["woods", "beech"],
  ["Images/Habitat/beech woodland.jpg"],
  ["Images/Geranium Scented Russula/general.jpg"],
  ["Images/Geranium Scented Russula/cap.jpg"],
  ["Images/Geranium Scented Russula/gills.jpg"],
  ["Images/Geranium Scented Russula/stem.jpg"],
  ["Images/Geranium Scented Russula/dig.jpg"],
  ["Images/Geranium Scented Russula/cut.jpg"],
  [],
  [],
  [],
  "brittle, the stem snaps like chalk and the gills break off easily",
  "common",
  ["Aug", "Sep", "Oct", "Nov"],
  false,
  false,
  true,
  false,
  false,
  ["Yellow Swamp Russula"],
  false,
  true,
  false,
  10,
  7
);

const cep = new Mushroom(
  ["Cep", "Penny Bun", "Porcini", "King Bolete"],
  "Boletus edulis",
  ["woods", "beech", "oak", "pine"],
  ["Images/Habitat/mixed woodland.jpg"],
  ["Images/Cep/general.jpg"],
  ["Images/Cep/cap.jpg"],
  ["Images/Cep/gills.jpg"],
  ["Images/Cep/stem.jpg"],
  ["Images/Cep/dig.jpg"],
  ["Images/Cep/cut.jpg"],
  [],
  [],
  [],
  "pretty solid",
  "common",
  ["Aug", "Sep", "Oct"],
  false,
  true,
  false,
  false,
  false,
  ["Bitter Bolete", "Summer Bolete"],
  false,
  false,
  false,
  20,
  25
);

const falseMorel = new Mushroom(
  ["False Morel"],
  "	Gyromitra esculenta",
  ["woods", "pine"],
  ["Images/Habitat/pine woodland.jpg"],
  ["Images/False Morel/multiple.jpg"],
  ["Images/False Morel/cap.jpg"],
  ["Images/False Morel/gills.jpg"],
  ["Images/False Morel/stem.jpg"],
  ["Images/False Morel/dig.jpg"],
  ["Images/False Morel/cut.jpg"],
  [],
  [],
  [],
  "pretty much like it looks",
  "uncommon",
  ["Mar", "Apr", "May"],
  false,
  false,
  true,
  true,
  false,
  ["Common Morel", "Black Morel", "Yellow Morrel"],
  false,
  false,
  false,
  9,
  8
);

const devilsBolete = new Mushroom(
  ["Devil's Bolete"],
  "Rubroboletus satanas",
  ["woods", "oak", "beech"],
  ["Images/Habitat/pine woodland.jpg"],
  ["Images/Devil's Bolete/general.jpg"],
  ["Images/Devil's Bolete/cap.jpg"],
  ["Images/Devil's Bolete/stem.jpg"],
  ["Images/Devil's Bolete/stem.jpg"],
  ["Images/Devil's Bolete/stem.jpg"],
  ["Images/Devil's Bolete/cut.jpg"],
  ["Images/Devil's Bolete/cut.jpg"],
  [],
  [],
  "kinda spogey on the cap but otherwise pretty normal",
  "very rare",
  ["Jul", "Aug", "Sep"],
  false,
  false,
  true,
  false,
  false,
  ["Scarletina Bolete"],
  true,
  false,
  false,
  20,
  15,
  "blue"
);

const scarletinaBolete = new Mushroom(
  ["Scarletina Bolete"],
  "Boletus luridiformis",
  ["woods", "mixed", "beech", "oak", "conifer"],
  ["Images/Habitat/mixed woodland.jpg"],
  ["Images/Scarletina Bolete/multiple.jpg"],
  ["Images/Scarletina Bolete/cap.jpg"],
  ["Images/Scarletina Bolete/pores.jpg"],
  ["Images/Scarletina Bolete/stem.jpg"],
  ["Images/Scarletina Bolete/dig.jpg"],
  ["Images/Scarletina Bolete/cut.jpg"],
  ["Images/Scarletina Bolete/cut.jpg"],
  [],
  [],
  "kinda spogey on the cap but otherwise pretty normal",
  "common",
  ["Jul", "Aug", "Sep", "Oct"],
  false,
  true,
  false,
  false,
  false,
  ["Devil's Bolete"],
  true,
  false,
  false,
  20,
  15,
  "blue"
);

const bayBolete = new Mushroom(
  ["Bay Bolete"],
  "Boletus badius",
  ["woods", "mixed"],
  ["Images/Habitat/mixed woodland.jpg"],
  ["Images/Bay Bolete/multiple.jpg"],
  ["Images/Bay Bolete/cap.jpg"],
  ["Images/Bay Bolete/pores.jpg"],
  ["Images/Bay Bolete/stem.jpg"],
  ["Images/Bay Bolete/dig.jpg"],
  ["Images/Bay Bolete/dig.jpg"],
  ["Images/Bay Bolete/dig.jpg"],
  [],
  [],
  "a little on the soft side",
  "common",
  ["Aug", "Sep", "Oct", "Nov"],
  false,
  true,
  false,
  false,
  false,
  [cep],
  true,
  false,
  false,
  15,
  13,
  "blue"
);

const commonPuffball = new Mushroom(
  ["Common Puffball"],
  "Lycoperdon perlatum",
  ["woods", "mixed"],
  ["Images/Habitat/mixed woodland.jpg"],
  ["Images/Common Puffball/multiple.jpg"],
  ["Images/Common Puffball/cap.jpg"],
  [],
  ["Images/Common Puffball/stem.jpg"],
  ["Images/Common Puffball/cut.jpg"],
  ["Images/Common Puffball/cut.jpg"],
  [],
  [],
  [],
  "spongy and the little spines rub of pretty easily",
  "very common",
  ["Jul", "Aug", "Sep", "Oct", "Nov"],
  false,
  true,
  false,
  false,
  false,
  ["Amanita egg sacks", "other Puffballs", "Earthballs", "Stinkhorn egg sack"],
  false,
  false,
  false,
  5,
  8
);

const stumpPuffball = new Mushroom(
  ["Stump Puffball"],
  "Lycoperdon pyriforme",
  ["woods", "mixed"],
  ["Images/Habitat/mixed woodland.jpg"],
  ["Images/Stump Puffball/multiple.jpg"],
  ["Images/Stump Puffball/cap.jpg"],
  [],
  ["Images/Stump Puffball/multiple.jpg"],
  ["Images/Stump Puffball/cut.jpg"],
  ["Images/Stump Puffball/cut.jpg"],
  [],
  [],
  [],
  "spongy",
  "very common",
  ["Jul", "Aug", "Sep", "Oct", "Nov"],
  false,
  true,
  false,
  false,
  false,
  ["Amanita egg sacks", "other Puffballs", "Earthballs"],
  false,
  false,
  false,
  4,
  7
);

const giantPuffball = new Mushroom(
  ["Giant Puffball"],
  "Calvatia gigantea",
  ["grass", "pasture", "meadows", "nettle beds"],
  ["Images/Habitat/grasslands.jpg"],
  ["Images/Giant Puffball/multiple.jpg"],
  ["Images/Giant Puffball/cap.jpg"],
  [],
  [],
  ["Images/Giant Puffball/cut.jpg"],
  ["Images/Giant Puffball/cut.jpg"],
  [],
  [],
  [],
  "smooth and papery",
  "frequency",
  ["Months", "Available"],
  false,
  true,
  false,
  false,
  false,
  [],
  false,
  false,
  false,
  30,
  0
);

const meadowWaxcap = new Mushroom(
  ["Meadow Waxcap"],
  "Cuphophyllus/Hygrocybe pratensis",
  ["grass", "pasture", "meadows"],
  ["Images/Habitat/grasslands.jpg"],
  ["Images/Meadow Waxcap/multiple.jpg"],
  ["Images/Meadow Waxcap/cap.jpg"],
  ["Images/Meadow Waxcap/gills.jpg"],
  ["Images/Meadow Waxcap/stem.jpg"],
  ["Images/Meadow Waxcap/dig.jpg"],
  ["Images/Meadow Waxcap/cut.jpg"],
  [],
  [],
  [],
  "thick and waxy",
  "common",
  ["Sep", "Oct", "Nov", "Dec"],
  false,
  true,
  false,
  false,
  false,
  [],
  false,
  false,
  false,
  10,
  8
);

//////////TEMPLATE////////////////////

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
//   bruiseColor
// );

////////////////////////////////////////////////

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
  greyOyster,
  fairyRingChampignon,
  porcelainFungus,
  saffronMilkcap,
  velvetShank,
  libertyCap,
  greenCrackedRussula,
  commonYellowRussula,
  yellowSwampRussula,
  geraniumScentedRussula,
  cep,
  falseMorel,
  devilsBolete,
  scarletinaBolete,
  bayBolete,
  commonPuffball,
  stumpPuffball,
  giantPuffball,
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
  // appContainer.style.opacity = 0.1;
  // appContainer.style.zIndex = -1;
  // TODO - UNCOMMENT OPACITY AND ZINDEX
  titleWelcome.textContent = "🍄 Welcome to ToadSkool 🍄";
  mushroomImage.setAttribute("src", "images/Fly Agaric/cap.jpg");
};

const loadRandom = function () {
  //set currentMushroom
  currentMushroom = mushrooms[Math.floor(Math.random() * mushrooms.length)];
  // set the initial image to a random from multiple
  mushroomImage.setAttribute("src", currentMushroom.generalImages[0]);
  // answerName.style.display = "none";
  // answerInfo.style.display = "none";
  ///TODO POSSIBLY REMOVE COMMENTS
};
/////////event handlers////////////////////////

btnPlay.addEventListener("click", function () {
  // appContainer.style.opacity = 1;
  appContainer.style.zIndex = 1;
  overlayContainer.remove();
  loadRandom();
});

btnCap.addEventListener("click", function () {
  mushroomImage.setAttribute("src", currentMushroom.capImages[0]);
});

btnUnderCap.addEventListener("click", function () {
  currentMushroom.gillImages[0]
    ? mushroomImage.setAttribute("src", currentMushroom.gillImages[0])
    : alert("That doesn't make sense");
});

// habitatImages,
// generalImages,
// capImages,
// gillImages,
// stemImages,
// volvaImages,
// cutImages,
// bruiseImages,

btnStem.addEventListener("click", function () {
  currentMushroom.stemImages[0]
    ? mushroomImage.setAttribute("src", currentMushroom.stemImages[0])
    : alert(`There isn't really a stem to look at on this mushroom`);
});

btnFeel.addEventListener("click", function () {
  alert(`It feels ${currentMushroom.feel}`);
});

btnBruise.addEventListener("click", function () {
  if (currentMushroom.bruises) {
    if (currentMushroom.bruiseImages[0]) {
      mushroomImage.setAttribute("src", currentMushroom.bruiseImages[0]);
    } else {
      alert(`This mushroom bruises ${currentMushroom.bruiseColor}`);
    }
  } else {
    alert(`Nothing really happens when you bruise it`);
  }
});

btnDig.addEventListener("click", function () {
  if (currentMushroom.volvaImages[0]) {
    mushroomImage.setAttribute("src", currentMushroom.volvaImages[0]);
  } else {
    alert(`You can't dig up something that ain't in the ground!`);
  }
});

btnCut.addEventListener("click", function () {
  mushroomImage.setAttribute("src", currentMushroom.cutImages[0]);
});

btnRevealAnswer.addEventListener("click", function () {
  // answerName.style.display = "block";
  // answerInfo.style.display = "block";
  if (nextMushroom) {
    nextMushroom = !nextMushroom;
    btnRevealAnswer.textContent = "Reveal Answer";
    answerName.textContent = "";
    answerInfo.textContent = "";
    // answerName.style.backgroundColor = "";
    // answerInfo.style.backgroundColor = "";

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
    // answerName.style.backgroundColor = "#552700";
    // answerInfo.style.backgroundColor = "#552700";
  }
});
/////////////////////main/////////////////////////
console.log(theCharcoalBurner.bruises);
init();

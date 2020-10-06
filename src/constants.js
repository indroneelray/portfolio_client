import Photography from "./views/Photography";
import Homepage from "./views/Homepage";
import Innovations from "./views/Innovations";
import Internships from "./views/Internships";
import StanfordSummer from "./views/StanfordSummer";
import AwardsHonour from "./views/AwardsHonour";

import mm1 from "./assets/mm/mm1.png";
import mm2 from "./assets/mm/mm2.png";
import mm3 from "./assets/mm/mm3.png";
import mm4 from "./assets/mm/mm4.png";
import mm5 from "./assets/mm/mm5.png";

import theos1 from "./assets/theos/theos1.png";
import theos2 from "./assets/theos/theos2.png";
import theos3 from "./assets/theos/theos3.png";
import theos4 from "./assets/theos/theos4.png";

import in1 from "./assets/innovation/in1.png";
import in2 from "./assets/innovation/in2.png";
import in3 from "./assets/innovation/in3.png";

import zl1 from "./assets/zoroloo/zl1.png";
import zl2 from "./assets/zoroloo/zl2.png";
import zl3 from "./assets/zoroloo/zl3.png";
import zl4 from "./assets/zoroloo/zl4.png";

import Photo1 from "./assets/photography/photo1.png";
import Photo2 from "./assets/photography/photo2.png";
import Photo3 from "./assets/photography/photo3.png";
import Photo4 from "./assets/photography/photo4.png";
import Photo5 from "./assets/photography/photo5.png";
import Photo6 from "./assets/photography/photo6.png";
import Photo7 from "./assets/photography/photo7.png";
import Photo8 from "./assets/photography/photo8.png";
import Photo9 from "./assets/photography/photo9.png";
import Photo10 from "./assets/photography/photo10.png";
import Photo11 from "./assets/photography/photo11.png";
import Photo12 from "./assets/photography/photo12.png";
import Photo13 from "./assets/photography/photo13.png";
import Photo14 from "./assets/photography/photo14.png";

import intern1 from "./assets/internships/1.png";
import intern7 from "./assets/internships/2.png";
import intern8 from "./assets/internships/3.png";
import intern4 from "./assets/internships/4.png";
import intern5 from "./assets/internships/5.png";
import intern6 from "./assets/internships/6.png";
import intern2 from "./assets/internships/7.png";
import intern3 from "./assets/internships/8.png";
import intern9 from "./assets/internships/9.png";
import intern10 from "./assets/internships/10.png";
import intern11 from "./assets/internships/11.png";
import cad from "./assets/internships/cad.png";
import foundation from "./assets/internships/foundation.png";
import universe from "./assets/internships/universe.png";

export const routes = [
  { id: 1, name: "Home", path: "/", component: Homepage },
  { id: 2, name: "Innovations", path: "/innovations", component: Innovations },
  { id: 3, name: "Internships", path: "/internships", component: Internships },
  {
    id: 4,
    name: "Stanford Summer",
    path: "/stanford-summer",
    component: StanfordSummer,
  },
  { id: 5, name: "Photography", path: "/photography", component: Photography },
  {
    id: 6,
    name: "Awards & Honours",
    path: "/awards-and-honours",
    component: AwardsHonour,
  },
];

export const innovationItems = [
  { id: 1, title: "Miss Mistake", image: in1 },
  { id: 2, title: "The ZoroLoo", image: in3 },
  { id: 3, title: "THEOS", image: in2 },
];

export const mmImages = [mm1, mm2, mm3, mm4, mm5];
export const mmText = {
  title: "Miss Mistake",
  description: `A progressive web application where users can anonymously share the mistakes they've made growing up and learn from each other`,
  patent: "www.missmistake.com",
};

export const theosImages = [theos1, theos2, theos3, theos4];
export const theosText = {
  title: "THEOS",
  description: `A 5-feet-tall cupboard that uses Ozone (O3) gas to sterilize everyday items like wallets, shoes and bags killing 99.9999% (log 6) of viruses or superbugs in under 2 minutes.`,
  patent: "Patent pending",
};

export const zoroImages = [zl1, zl2, zl3, zl4];
export const zoroText = {
  title: "The ZoroLoo",
  description: `
      A fully automated, disabled-friendly and vandal-resistant public toilet. The toilet’s self-cleaning apparatus ensures a germ-free and stain-free floor, WC and walls. It’s made of Polyurethane Foam to provide structural integrity and climate control.`,
  patent: "Patent pending",
};

export const Tabs = {
  MissMistake: 1,
  ZoroLoo: 2,
  Theos: 3,
};

export const photographs = [
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo7,
  Photo8,
  Photo9,
  Photo10,
  Photo11,
  Photo12,
  Photo13,
  Photo14,
];

export const internshipAssets = {
  bulkImages: [
    intern1,
    intern2,
    intern3,
    intern4,
    intern9,
    intern5,
    intern7,
    intern6,
    intern8,
    intern10,
    intern11,
  ],
  cad: cad,
  foundation: foundation,
  universe: universe,
};

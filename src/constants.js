import Photography from "./views/Photography";
import Homepage from "./views/Homepage";
import Innovations from "./views/Innovations";
import Internships from "./views/Internships";
import StanfordSummer from "./views/StanfordSummer";
import AwardsHonour from "./views/AwardsHonour";

export const routes = [
  { id: 1, name:"Home",path: "/", component: Homepage },
  { id: 2, name: "Innovations" , path: "/innovations", component: Innovations },
  { id: 3, name: "Internships", path: "/internships", component: Internships },
  { id: 4, name: "Stanford Summer", path: "/stanford-summer", component: StanfordSummer },
  { id: 5, name: "Photography", path: "/photography", component: Photography },
  { id: 6, name: "Awards & Honours" , path: "/awards-and-honours", component:AwardsHonour },
];

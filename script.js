let states = [
  {
    name: "Baden-Württemberg",
    population: 11.1,
    url: "https://www.baden-wuerttemberg.de/de/startseite/",
    comments: [],
  },
  {
    name: "Bayern",
    population: 13.1,
    url: "https://www.bayern.de/",
    comments: [
      "Tolles Wetter und gute Wander-Routen",
      "München ist eine schöne Stadt",
    ],
  },
  {
    name: "Berlin",
    population: 3.7,
    url: "https://www.berlin.de/",
    comments: [],
  },
  {
    name: "Brandenburg",
    population: 2.5,
    url: "https://www.brandenburg.de/",
    comments: [],
  },
  {
    name: "Bremen",
    population: 0.7,
    url: "https://www.bremen.de/",
    comments: ["Die Stadtmusikanten haben mir schon immer gefallen!"],
  },
  {
    name: "Hamburg",
    population: 1.8,
    url: "https://www.hamburg.de/",
    comments: ["Ein wirklich tolles Bundesland"],
  },
  {
    name: "Hessen",
    population: 6.3,
    url: "https://www.hessen.de/",
    comments: [],
  },
  {
    name: "Mecklenburg-Vorpommern",
    population: 1.6,
    url: "https://www.mecklenburg-vorpommern.de/startseite/",
    comments: [],
  },
  {
    name: "Niedersachsen",
    population: 8,
    url: "https://www.niedersachsen.de/startseite/",
    comments: [],
  },
  {
    name: "Nordrhein-Westfalen",
    population: 17.9,
    url: "https://www.land.nrw/",
    comments: [],
  },
  {
    name: "Rheinland-Pfalz",
    population: 4.1,
    url: "https://www.rlp.de/de/startseite/",
    comments: [],
  },
  {
    name: "Saarland",
    population: 1,
    url: "https://www.saarland.de/DE/home/home_node.html",
    comments: [],
  },
  {
    name: "Sachsen",
    population: 4.1,
    url: "https://www.sachsen.de/",
    comments: [],
  },
  {
    name: "Sachsen-Anhalt",
    population: 2.2,
    url: "https://www.sachsen-anhalt.de/startseite/",
    comments: [],
  },
  {
    name: "Schleswig-Holstein",
    population: 2.9,
    url: "https://www.schleswig-holstein.de/DE/Home/home_node.html",
    comments: [],
  },
  {
    name: "Thüringen",
    population: 2.1,
    url: "https://thueringen.de/",
    comments: [],
  },
];

let stateContainer = document.getElementById("state-container");

function render() {
  for (let i = 0; i < states.length; i++) {
    stateContainer.innerHTML = `
    <div class="state-item">${states[i]["name"]}</div>
    `;
  }
}

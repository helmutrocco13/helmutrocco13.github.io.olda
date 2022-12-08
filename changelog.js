var data = [
  {
    version: "1.2.0",
    date: "Monday, November 21, 2022",
    changes: [
      { type: "Remove", desc: "Remove some games du to an issue with 3kh0" },
      { type: "Update", desc: "Update EmulatorJS" },
      { type: "New", desc: "Add Google Snake" },
      { type: "New", desc: "Add Fireboy & Watergirl: Forest Temple" },
      { type: "New", desc: "Add Chrome Dino" },
      { type: "New", desc: "Add Wounded Summer" },
      { type: "New", desc: "Add Qatar World Cup Streams" },
    ],
  },
  {
    version: "1.1.2",
    date: "Friday, November 4, 2022",
    changes: [
      { type: "Fix", desc: "Fix Knife Hit not loading error" },
      { type: "New", desc: "Add Papa's Taco Mia" },
      { type: "New", desc: "Add Unfair Mario" },
    ],
  },
  {
    version: "1.1.1",
    date: "Monday, October 31, 2022",
    changes: [
      {
        type: "Fix",
        desc: "I think I fixed PortaBoy+ but if there are any errors please report them",
      },
      { type: "New", desc: "Add George and the Printer" },
      { type: "New", desc: "Add Getaway Shootout" },
      { type: "New", desc: "Add Papa's Hot Doggeria" },
      { type: "New", desc: "Add Papa Louie: When Pizzas Attack!" },
      { type: "New", desc: "Add Soccer Random" },
      { type: "New", desc: "Add Boxing Physics 2" },
      { type: "New", desc: "Add Hole.io" },
    ],
  },
  {
    version: "1.1.0",
    date: "Monday, October 24, 2022",
    changes: [
      { type: "Fix", desc: "Fix Papa's Pizzeria" },
      { type: "New", desc: "Add There Is No Game" },
      { type: "New", desc: "Add Pressing Under Pressure" },
      { type: "New", desc: "Add PortaBoy+" },
      { type: "New", desc: "Add Deepest Sword" },
      { type: "New", desc: "Add Tunnel Rush" },
    ],
  },
  {
    version: "1.0.0",
    date: "Wednesday, October 19, 2022",
    changes: [
      { type: "New", desc: "Changelog page to know the latest update" },
      { type: "Fix", desc: "Fix all the games that ran from replit" },
      { type: "Fix", desc: "Fix Papa's Freezeria" },
      { type: "Fix", desc: "Fix some bugs" },
    ],
  },
];
const changesdiv = (change) => {
  const main = document.createElement("div");
  main.classList.add(
    "flex",
    "flex-col",
    "gap-y-2",
    "p-6",
    "rounded-xl",
    "max-w-5xl",
    "w-full"
  );
  main.setAttribute("style", "background-color: var(--bg);");
  const div1 = document.createElement("div");
  const version = document.createElement("h1");
  version.classList.add("font-bold", "text-2xl");
  version.innerHTML = change.version;
  const datediv = document.createElement("div");
  datediv.classList.add("flex", "flex-col");
  const datetxt = document.createElement("h2");
  datetxt.classList.add("font-semibold", "text-lg");
  datetxt.innerHTML = change.date;
  const div2 = document.createElement("div");
  div2.classList.add("flex", "flex-col", "gap-y-6");

  main.appendChild(div1);
  div1.appendChild(version);
  div1.appendChild(datediv);
  datediv.appendChild(datetxt);
  main.appendChild(div2);
  console.log(change.version, change.date);
  for (let i = 0; i < change.changes.length; i++) {
    let changes = changestext(change.changes[i]);
    div2.appendChild(changes);
  }
  return main;
};
const changestext = (text) => {
  const allchanges = document.createElement("div");
  allchanges.classList.add(
    "flex",
    "flex-row",
    "gap-x-2",
    "2xl:gap-x-3",
    "items-center"
  );
  const type = document.createElement("div");
  type.classList.add(
    "px-2",
    "py-1",
    "rounded-xl",
    "tracking-tighter",
    "font-medium",
    "text-xs",
    "md:text-sm",
    "2xl:text-base"
  );
  if (text.type == "New") {
    type.setAttribute("style", "background-color: #124bc7;");
  } else if (text.type == "Fix") {
    type.setAttribute("style", "background-color: #ecc118;");
  } else if (text.type == "Remove") {
    type.setAttribute("style", "background-color: red;");
  } else if (text.type == "Update") {
    type.setAttribute("style", "background-color: orange;");
  }
  type.innerHTML = text.type;
  const desc = document.createElement("p");
  desc.classList.add(
    "text-sm",
    "md:text-base",
    "2xl:text-lg",
    "tracking-tighter",
    "font-semibold"
  );
  desc.innerText = text.desc;
  allchanges.appendChild(type);
  allchanges.appendChild(desc);
  return allchanges;
};
const topdiv = document.getElementById("changelog");
for (let i = 0; i < data.length; i++) {
  let main = changesdiv(data[i]);
  topdiv.appendChild(main);
}

// $.each(data, function(i, field){
// console.log(data.date[i]);
//  console.log(data.version[i]);
// $.each(data.changes[i], function (change) {
//      console.log(change.type[i])
//       console.log(change.desc[i])
//  });
//  const main = document.createElement('div');
// $('changelog').appendTo(main);

const levels = [
  {
    id: "level1",
    name: "Level 1",
    image: "./images/level1.jpg",
    leaderboard: [
      { name: "Moki", time: 29246 },
      { name: "Bobby", time: 98006 },
      { name: "Park", time: 107030 },
    ],
    characters: [
      {
        id: 0,
        name: "Waldo",
        image: "./images/characters/waldo-avatar.png",
        xChar: Math.round((968 / 1200) * 100),
        yChar: Math.round((40 / 675) * 100),
        found: false,
      },
      {
        id: 1,
        name: "Wenda",
        image: "./images/characters/wenda-avatar.png",
        xChar: Math.round((1066 / 1200) * 100),
        yChar: Math.round((192 / 675) * 100),
        found: false,
      },
      {
        id: 2,
        name: "Odlaw",
        image: "./images/characters/odlaw-avatar.png",
        xChar: Math.round((59 / 1200) * 100),
        yChar: Math.round((540 / 675) * 100),
        found: false,
      },
    ],
  },
  {
    id: "level2",
    name: "Level 2",
    image: "./images/level2.png",
    leaderboard: [
      { name: "Tim", time: 89246 },
      { name: "Tammy", time: 98006 },
      { name: "Tomato", time: 107030 },
    ],
    characters: [
      {
        id: 3,
        name: "Waldo",
        image: "./images/characters/waldo-avatar.png",
        xChar: Math.round((560 / 1840) * 100),
        yChar: Math.round((1081 / 1300) * 100),
        found: false,
      },
      {
        id: 4,
        name: "Wenda",
        image: "./images/characters/wenda-avatar.png",
        xChar: Math.round((1446 / 1840) * 100),
        yChar: Math.round((380 / 1300) * 100),
        found: false,
      },
      {
        id: 5,
        name: "Odlaw",
        image: "./images/characters/odlaw-avatar.png",
        xChar: Math.round((1040 / 1840) * 100),
        yChar: Math.round((938 / 1300) * 100),
        found: false,
      },
    ],
  },
];

export default levels;

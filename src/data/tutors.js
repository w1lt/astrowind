const COLORS = {
	PURPLE: "#9C27B0",
	GREEN: "#4CAF50",
	BURGANDY: "#800020",
	INDIGO: "#3F51B5",
	AMBER: "#FFC107",
	PINK: "#E91E63",
	DEEP_PURPLE: "#673AB7",
	LIGHT_BLUE: "#03A9F4",
	BLUE_GRAY: "#607D8B",
  ORANGE: "#FF9800",
  RED: "#F44336",
  BROWN: "#795548",
  MAGENTA: "#E91E63",
  NAVY: "#000080",
  DARK_BEIGE: "#FFCC99",
  DARK_GREEN: "#006400",
  

};

const colorKeys = Object.keys(COLORS);
let colorIndex = 0;

export const TUTORS = [
  {
    name: 'Raven Duong',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [
      ['M', 9, 10],
      ['T', 9, 10],
    ],
    courses: ['EECS 140', 'EECS 210', 'EECS 510', 'MATH 125', 'MATH 126', 'MATH 127', 'MATH 290'],
  },
  {
    name: 'Chris Cooper',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [
      ['W', 15, 16],
      ['F', 9, 10],
    ],
    courses: [
      'EECS 140',
      'EECS 168',
      'EECS 210',
      'EECS 268',
      'MATH 125',
      'MATH 126',
      'MATH 127',
      'MATH 290',
      'PHSX 210/211',
      'PHSX 212',
      'PHSX 216',
      'PHSX 236',
    ],
  },
  {
    name: 'Ibrahim Sufi',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [['M', 10, 12]],
    courses: ['EECS 168', 'MATH 125', 'MATH 126'],
  },
  {
    name: 'Jacky Lin',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [['M', 14, 15.5]],
    courses: [
      'EECS 168',
      'EECS 268',
      'EECS 330',
      'EECS 348',
      'EECS 468',
      'EECS 560',
      'MATH 125',
      'MATH 126',
      'MATH 127',
    ],
  },
  {
    name: 'Nabeel Ahmad',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [['M', 15.5, 16]],
    courses: ['EECS 168', 'MATH 125'],
  },
  {
    name: 'Roop Singh',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [
      ['T', 10, 11],
      ['F', 13, 14],
    ],
    courses: ['EECS 168', 'EECS 210', 'EECS 268', 'EECS 348', 'EECS 510'],
  },
  {
    name: 'Aniketh Aatipamula',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [
      ['T', 11.5, 12.5],
      ['R', 11, 12],
    ],
    courses: ['EECS 140', 'EECS 168', 'EECS 268', 'MATH 125', 'MATH 126'],
  },
  {
    name: 'Tram-Anh Ho',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [['T', 12.5, 13.5]],
    courses: [
      'EECS 140',
      'EECS 168',
      'EECS 210',
      'EECS 268',
      'EECS 348',
      'EECS 388',
      'EECS 468',
      'MATH 125',
      'MATH 126',
    ],
  },
  {
    name: 'John Rader',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [
      ['T', 13.5, 14.5],
      ['R', 12, 14],
    ],
    courses: ['MATH 125'],
  },
  {
    name: 'Edbert Jensen',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [
      ['T', 15, 16],
      ['R', 15, 15.5],
    ],
    courses: [
      'EECS 140',
      'EECS 168',
      'EECS 210',
      'EECS 268',
      'MATH 125',
      'MATH 126',
      'MATH 127',
      'MATH 290',
      'PHSX 210/211',
      'PHSX 212',
      'PHSX 216',
      'PHSX 236',
    ],
  },
  {
    name: 'Anh Hoang',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [
      ['W', 9, 9.5],
      ['R', 9, 9.5],
    ],
    courses: ['MATH 125'],
  },
  {
    name: 'Andrew Huang',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [
      ['W', 9.5, 11],
      ['R', 9.5, 11],
    ],
    courses: ['EECS 138', 'EECS 168', 'MATH 125', 'MATH 126', 'MATH 290'],
  },
  {
    name: "Lauren D'Souza",
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [
      ['W', 11, 12],
      ['F', 11, 12],
    ],
    courses: ['EECS 138', 'EECS 140', 'EECS 168', 'EECS 268', 'MATH 127', 'MATH 290'],
  },
  {
    name: 'Adair Torres',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [['W', 12.5, 15]],
    courses: [
      'EECS 140',
      'EECS 168',
      'EECS 210',
      'EECS 268',
      'EECS 330',
      'EECS 348',
      'EECS 388',
      'EECS 461',
      'EECS 510',
      'MATH 125',
      'MATH 126',
      'MATH 127',
      'MATH 290',
    ],
  },
  {
    name: 'Sean Hammel',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [['F', 10, 11]],
    courses: ['EECS 140', 'EECS 168', 'EECS 268'],
  },
  {
    name: 'Dellie Wright',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [['F', 12, 13]],
    courses: ['EECS 140', 'EECS 168', 'MATH 125'],
  },
  {
    name: 'Omar Mohammed',
    color: COLORS[colorKeys[colorIndex++ % colorKeys.length]],
    times: [['F', 14, 15]],
    courses: ['EECS 140', 'EECS 168', 'MATH 125'],
  },
];
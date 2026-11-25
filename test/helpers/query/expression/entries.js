"use strict";

const entries = [
  {
    "special": "^(?:@|!|\\*|\\||\\/|\\[|\\]|\\.\\.\\.)"
  },
  {
    "number": "^[0-9]+"
  },
  {
    "name": "^[\\w~]+"
  },
  {
    "unassigned": "^."
  }
];

module.exports = entries;

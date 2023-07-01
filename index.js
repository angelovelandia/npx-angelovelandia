"use strict";

const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

const log = console.log;

const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

const data = {
  name: chalk.white("Angelo Velandia /"),
  handle: chalk.cyan("angelovelandia"),
  work: chalk.white("Developer"),
  twitter: chalk.cyan("https://twitter.com/avcodev"),
  github: chalk.cyan("https://github.com/angelovelandia"),
  linkedin: chalk.cyan(
    "https://www.linkedin.com/in/angelo-velandia-703438237/"
  ),
  npx: chalk.white("npx angelovelandia"),
  labelWork: chalk.white.bold("      Work:"),
  labelTwitter: chalk.white.bold("   Twitter:"),
  labelGitHub: chalk.white.bold("    GitHub:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  labelCard: chalk.white.bold("      Card:"),
};

const newline = "\n";
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const carding = `${data.labelCard}  ${data.npx}`;

const output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  carding;

//Mostrando mensaje
log(chalk.green(boxen(output, options)));

# Advent of Code 2021 in TypeScript

My [Advent of Code](https://adventofcode.com) solutions, written in Typescript with Node.

## Usage

The project use [Node.js](https://nodejs.org) as javascript runtime, [esbuild](https://esbuild.github.io) as typescript transpiler and [swc](https://swc.rs) with [Jest](https://jestjs.io) for testing.

After cloning repo and installing dependencies, I've copy the daily puzzle(s) into their respective ```day##/README.md``` files and my personal input into their respective ```day##/resources/input.txt```

Then after coding a solution:

    # check syntax with eslint
    $ npm run lint day01

    # run tests for day01
    $ npm test day01

    # run the day01
    # npm start day01

## Generate

The template generates each day's files with a simple command:

    $ npm run gen day##

This command generate these files:

    * creating src/day##/resources/input.txt
    * creating src/day##/index.ts
    * creating src/day##/main.ts
    * creating src/day##/part1.ts
    * creating src/day##/part2.ts
    * creating src/day##/README.md
    * creating test/day##.test.ts

- `/src/day##/resources/input.txt`: the input data.
- `/src/day##/index.ts`: export the modules for testing.
- `/src/day##/main.ts`: the main module.
- `/src/day##/part1.ts`: solution for part 1.
- `/src/day##/part2.ts`: solution for part 2.
- `/src/day##/README.md`: you can write the challenge statement.
- `/tests/day##.test.ts`: the module where you write the tests.

## Config

You can configure the automatic input download from the Advent of Code
session token.

For dowload the inputs from web, you needs to set the environment var
`AOC_SESSION`. You can to get the session token from the cookie web browser.

Also can you set the `AOC_YEAR` to select a certain year.
(It is not mandatory use the `AOC_YEAR`, the `npm run gen` can get the year automatically)

You can set an `.env` file with these variables.

Folder structure:

    ├── src
    │   └── day01
    │       ├── index.ts
    │       ├── main.ts
    │       ├── part1.ts
    │       ├── part2.ts
    │       ├── README.md
    │       └── resources
    │           └── input.txt
    └── test
        └── day01.test.ts


[MIT License](LICENSE)

Created using [a template starter](https://github.com/ljgago/advent-of-code-typescript-starter)

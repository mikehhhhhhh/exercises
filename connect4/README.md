# Connect4

Connect4 is a grid-based game, where players take it in turns to add
tokens. The winner is whoever manages to line up 4 pieces, in any
direction, first. Diagonals are allowed.

https://en.wikipedia.org/wiki/Connect_Four

An online version can be found [here](https://www.mathsisfun.com/games/connect4.html).

## Tasks

The aim is to develop an interactive version of the game which the
candidate and interviewer can play together.

A simple, text-based, representation of the grid is encouraged to
start with. For example, you might use '.' for empty slots, and 'x'
and 'o' for pieces of the two players. Players can input their turns
via the REPL.

A minimal version of the game should support:

-   a 6 x 7 grid
-   players play pieces sequentially
-   the game identifies winning turns and ends at that point

## Running tests
- Javascript: `npm run co4-js` 
- Typescript: `npm run co4-ts` 

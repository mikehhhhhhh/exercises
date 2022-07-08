const { createGrid, iterate, render } = require('./game');

describe('connect 4', () => {

  it('should do something', () => {
    const grid = createGrid();

    console.log(render());

    // player 1 plays a move
    iterate()

    console.log(render());

    // player 2 plays a move
    iterate()

    console.log(render());
    // ...
  });
})
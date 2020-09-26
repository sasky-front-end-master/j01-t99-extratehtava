// Luodaan console.login "matkija" global-kontekstiin.
global.console = {
  log: jest.fn(),
}

describe('Tarkistetaan console.login sisältö', () => {
  it('pitäisi sisältää BINGO -teksti', () => {
    
    const tehtava = require('../tehtava.js');

    tehtava();

    expect(global.console.log).toHaveBeenCalledWith(
      'BINGO'
    )
  });
});


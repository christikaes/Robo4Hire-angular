import { Robo4HirePage } from './app.po';

describe('robo4-hire App', () => {
  let page: Robo4HirePage;

  beforeEach(() => {
    page = new Robo4HirePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

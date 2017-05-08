import { BaseBuildPage } from './app.po';

describe('base-build App', () => {
  let page: BaseBuildPage;

  beforeEach(() => {
    page = new BaseBuildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ModulesAndRouterPage } from './app.po';

describe('modules-and-router App', () => {
  let page: ModulesAndRouterPage;

  beforeEach(() => {
    page = new ModulesAndRouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

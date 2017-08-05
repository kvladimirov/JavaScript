import { DirectivesAndFormsExercisesPage } from './app.po';

describe('directives-and-forms-exercises App', () => {
  let page: DirectivesAndFormsExercisesPage;

  beforeEach(() => {
    page = new DirectivesAndFormsExercisesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { AngularDependencyInjectionAndServicesExercisesPage } from './app.po';

describe('angular-dependency-injection-and-services-exercises App', () => {
  let page: AngularDependencyInjectionAndServicesExercisesPage;

  beforeEach(() => {
    page = new AngularDependencyInjectionAndServicesExercisesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

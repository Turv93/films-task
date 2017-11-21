import { FilmsTaskPage } from './app.po';

describe('films-task App', () => {
  let page: FilmsTaskPage;

  beforeEach(() => {
    page = new FilmsTaskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

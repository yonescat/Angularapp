import { NgDrupalPocPage } from './app.po';

describe('ng-drupal-poc App', function() {
  let page: NgDrupalPocPage;

  beforeEach(() => {
    page = new NgDrupalPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ndp works!');
  });
});

import { browser, element, by } from 'protractor';

export class NgDrupalPocPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ndp-root h1')).getText();
  }
}

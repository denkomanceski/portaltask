import { browser, element, by } from 'protractor';

export class SubjectMokrioPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mokrio-root h1')).getText();
  }
}

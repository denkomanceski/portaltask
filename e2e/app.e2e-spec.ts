import { SubjectMokrioPage } from './app.po';

describe('subject-mokrio App', function() {
  let page: SubjectMokrioPage;

  beforeEach(() => {
    page = new SubjectMokrioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mokrio works!');
  });
});

import { NgMapsPage } from './app.po';

describe('ng-maps App', function() {
  let page: NgMapsPage;

  beforeEach(() => {
    page = new NgMapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

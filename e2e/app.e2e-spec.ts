import { AngularLotteryPage } from './app.po';

describe('angular-lottery App', function() {
  let page: AngularLotteryPage;

  beforeEach(() => {
    page = new AngularLotteryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

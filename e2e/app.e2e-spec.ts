import { MyPersonalSitePage } from './app.po';

describe('my-personal-site App', function() {
  let page: MyPersonalSitePage;

  beforeEach(() => {
    page = new MyPersonalSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

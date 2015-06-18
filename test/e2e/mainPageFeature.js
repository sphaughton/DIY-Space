describe('My application', function() {
  beforeEach(function(){
    browser.get('http://localhost:8000');
  });

  it('has a site title', function(){
    expect(browser.getTitle()).toEqual('DIY Space');
  });

  it('displays "Hello world"', function(){
    expect(element(by.id('test')).getText()).toEqual('Hello world');
  });
});

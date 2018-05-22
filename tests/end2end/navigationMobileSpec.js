describe('index page - ', function() {

	beforeAll(function() {
			// navigate to landing page
		browser.get('/');
			// set browser to mobile screen size
		var width = 360;
		var height = 640;
		browser.driver.manage().window().setSize(width, height);
	});

	describe('navigation test', function() {

		beforeEach(function() {
			baseUrl = 'http://localhost:8080';
		});

		afterEach(function() {
			browser.get('/');
		})

		it('should navigate to about page', function() {

			$$('.navbar-header button').click();
			browser.sleep(500);
			
			$$('#navMenu li').then(function(links) {
				links[0].click();
			});
			
			var location = browser.getCurrentUrl();

			expect(location).toEqual(baseUrl + '/about');
		});

		it('should navigate to work page', function() {

			$$('.navbar-header button').click();
			browser.sleep(500);

			$$('#navMenu li').then(function(links) {
				links[1].click();
			});
			
			var location = browser.getCurrentUrl();

			expect(location).toEqual(baseUrl + '/work');
		});

		it('should navigate to contact page', function() {

			$$('.navbar-header button').click();
			browser.sleep(500);

			$$('#navMenu li').then(function(links) {
				links[2].click();
			});

			var location = browser.getCurrentUrl();

			expect(location).toEqual(baseUrl + '/contact');
		});

		it('should navigate back to home page', function() {

			$$('#navLogo a').click();

			var location = browser.getCurrentUrl();

			expect(location).toEqual(baseUrl + '/');
		});
	});

});

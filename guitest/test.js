var webdriverio = require('webdriverio')
var options = { desiredCapabilities:  {browserName: 'chrome' }};
var client = webdriverio.remote(options);

client
.init()
.url('')
.setValue('#id-1-1', 'Barcelona')
.click("id-1-2")
.click('#id-1-3')

// need to add selection of barcelona from drop down list


// Need to add the test case which verifies barcelona was selected
// and displays barcelona


//

.end()


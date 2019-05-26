var webdriverio = require('webdriverio')
var options = { desiredCapabilities:  {browserName: 'chrome' }};
var client = webdriverio.remote(options);


client
.init()
.url('https://weather-app-hs2019.herokuapp.com/')
.setValue('#id-1-1', 'Spain')
.click("#id-1-2")




// need to add selection of barcelona from drop down list


// Need to add the test case which verifies barcelona was selected
// and displays barcelona


//

.end()


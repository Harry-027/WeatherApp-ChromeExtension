# README #

##Necessary Steps To Get Our Application Up And Running##


* Quick summary : A Weather app which will fetch the Forecast  details based on current   location.

* Version : 1.0

###Background & Main Goal:###
 
The main functionality of this app is to identify the current location of User and then output the weather forecast of next 7 days based on his location. It can be installed over chrome as an extension. It provides an option to user to enter his current city manually which is effective and helpful in case app fails to identify User’s current location.
 
###How to Use:###
 
1)Move the WeatherReport.crx file on your local machine from Github repository.

2)Click the three-line button in the top right-hand corner and go to Tools > Extensions. Add a check to the box next to Developer mode at the top of the page.

3)Locate the WeatherReport.crx file on your computer, then drag and drop it onto the Extensions page. A pop-up will appear showing you the permissions the extension will have, and asking you to confirm the install. Click Add to finish the installation.

4)Once installation is complete , an icon will be displayed next to the Omnibox.

5)Click over the icon. It will open a new tab and run the app.
 
###App functionality:###
 
1)As soon as the App starts it will try to get your current location.

2)Once your location is identified it will fetch the forecast details of next 7 days for the same location.

3)If there is an error response from API, it will ask you to try again (refresh the page).

4)If it was not able to fetch your current location, it will output the forecast for Pune by default.

5)In case current city was unidentified, User can input his current city manually in the search bar and fetch the forecast results accordingly.
 
 
###App Design:###

1)The App first requests an API: https://freegeoip.net/json/,  to fetch the User current location based on his IP address.

2)Once the Location is identified the Weather API http://api.openweathermap.org/data/2.5/forecast/daily, is requested for forecast results of identified location.

3)If Location API send an error response, App asks User to retry the same by refreshing the page.

4)If Location API sends no location name in its response, App shares the forecast for default location : Pune and gives an option to user of entering  the city name manually in searchbar and get the results accordingly.

5)App extension has been designed / created using Angularjs , Bootstrap , Javascript , Html, Css.
# CovA // SpaceApps Hackathon May 2020
CovA is playful and very interactive for a modern website. It will have the opportunity to look different depending on country and current situation. The main focus is to educate in a playful way, which can be done by integrationg NASA services like

    https://earthdata.nasa.gov/
    https://earthdata.nasa.gov/eosdis/science-system-description/eosdis-components/gibs
    https://neo.sci.gsfc.nasa.gov/about/wms.php

Unfortunately I was not able to integrate these in this short period of time, but data about carbondioxide, nitrogendioxide, humidty and temperature would be very interesting to compare against Covid19 data. 

With this setup both young and old could easily learn about how scientific approaches to solving problems are made and learn to understand correlations between different events. Of course the website will also be updated to be mobile friendly. I have written a lot of interesting things and ideas about CovA on my about page.

I even began specifiying an API for CovAs own backend. Although it only has a few endpoints and is not really REST conform yet, I'd like to keep on developing an own API to be more flexible when serving the data to the users. Another thought is to include a sophisticated GIS system using Postgresql. 

Services

As mentioned earlier, at least the following NASA endpoints are interesting to use for this project. Of course more data can always be added during production.

    https://earthdata.nasa.gov/
    https://earthdata.nasa.gov/eosdis/science-system-description/eosdis-components/gibs
    https://neo.sci.gsfc.nasa.gov/about/wms.php

Besides those endpoints CovA already consumes two other endpoints:

    Country Autocomplete (Python / Flask in own backend)
    Covid19 API


Concepts of CovA:

Features

CovA allows to access NASA and ESA research data to playfully get comfortable with reading and interpreting data. Users will have a whole lot of features available as soon as CovA is out of version alpha.

Map

CovA allows users to explore  environmental data in their region by submitting their country. This  includes Carbondioxide, Nitrogendioxide, humidity and temperature data. This also helps to understand basic statistical  correlations between weather and the spread of a virus.

CovA is there to inform young and old about the current situation. Whether it is in their own country or worldwide - by using a sophisticated API endpoint the numbers will always be up to date.

Children friendly

We would like to help especially children to understand the biology and science behind viruses and their spread. We think it is important to not scare children,  but rather give them the right material to work and play with. Oh did we  mention that our website will be mobile friendly and  packed with interactivity?

Secure

Privacy is super important to  us. That's why we, instead of using a third party interface, set up our  own autocompletion API endpoint for our users to safely enter their country. No personal data  is collected on this webpage. In future releases we also want to focus  on security and performance.


Possible features:

CovA API
This API will be the main datasource for CovA providing selected data already formatted and bundled - ready to use. Some features will be server-side statistical analysis of potentially interesting data combinations or an integrated JavaScript Sandbox to learn young and old how to interpret data with state of the art web languages.

Data Integration

To properly run both the API and the other consumed interfaces CovA needs to support all sorts of satellite data. Therefore it might be necessary to write small interpreter modules server side.

Code Playground

At some point we would like to be able to integrate a JavaScript Sandbox for playing around with sample data from our own APi but also relevant data from third parties.

Social Feature

Besides being able to play around with all sorts of data on CovA users should at some point be able to create an account, preferably with third-party options.

Github
https://drive.google.com/drive/folders/1YpBLuWdC3J1IumY-gHB3QLR9gLa0PqA7?usp=sharing

Swagger
https://app.swaggerhub.com/apis/tombjarne/CovA/1.0.0

Demo
https://drive.google.com/drive/folders/1YpBLuWdC3J1IumY-gHB3QLR9gLa0PqA7?usp=sharing

### To Run Application

### Install Software

* Latest Node JS : from https://nodejs.org/en/
* Git Client : https://git-scm.com/downloads
* Angular Cli : on command prompt: npm install -g @angular/cli


### Clone the Application

* open the command line
* git clone https://github.com/sumitkumar2019/search-outlet.git
* go to the directory search-outlet: add command to the command line : CD search-outlet


### Install Dependencies

```
npm install
```

### Create Google Api key and place inside app.module.ts : line no 15 like below:
AgmCoreModule.forRoot({
      apiKey:'XXXXSyCm60JE2uXXXXXXXGYuWKIRXXXXXXXX',
      libraries:['places', 'geometry' ]
    });

#Note:
       
* Enter your google api key and enable all the google map
* For More Information on how to create see: https://developers.google.com/maps/documentation/javascript/get-api-key
* Also Enable all the Geo Api like: from https://console.cloud.google.com/google/maps-apis/api-list?project=(as per google project project_name)
        - Directions API
        - Distance Matrix
        - Geocoding API
        - Maps Elevation API
        - Maps JavaScript API
        - Places API

### Run the Application

```
ng serve
```

Now browse to the app at [`localhost:4200'].

Thank You
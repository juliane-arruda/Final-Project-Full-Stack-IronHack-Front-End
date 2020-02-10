This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The app is currently live in https://i-cat-your-pet.herokuapp.com/

## Running the project

You need a Google Cloud account access key, with access to Maps Embed API, Maps JavaScript API, Maps Static API

1. You need to run `npm install` in the root of the application to install the dependencies.
2. Start the [backend](https://github.com/juliane-arruda/Final-Project-Full-Stack-IronHack-Back-End) express app
3. Create a .env file with the following

```
REACT_APP_API=http://localhost:5000/
REACT_APP_GOOGLE_MAPS_API=<Google maps API Key>
```

Then run `npm start` and open `http://localhost:3000`

# [Social network v2.0.0](https://social-network-legabog.web.app/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/Legabog/social-network-v2.0.0_legabog/blob/master/LICENSE)

This social network was built by using the UI and style features of [Facebook](https://www.facebook.com/).

* **The main concept** The main concept of this project is to try to create a social network as similar to [Facebook](https://www.facebook.com/) as possible.

* **Practise** The side goal of the project is to improve skills and experiment with the technology stack.

## What’s In This Document

- [Getting started](#getting-started)
- [Learning Gatsby](#learning-gatsby)
- [Migration Guides](#migration-guides)
- [Contact](#contact)
- [License](#license)
- [Powered by](#powered-by)

## 🚀 Getting started

You can set up the project locally on your machine with these steps:

1. **Clone the "master" branch in the repository.**

   ```shell
   git clone -b master https://github.com/Legabog/social-network-v2.0.0_legabog.git

   ```
2. **Install the packages using the command.**
   ```shell
   npm install
   ```

## **Environment File**

- Create a `.env` file in the root directory of the project. Add these lines with your parameters:

  ```shell

    # Firebase config
    REACT_APP_FIREBASE_API_KEY = "Your Firebase Api key"
    REACT_APP_FIREBASE_AUTH_DOMAIN = "your_project.com"
    REACT_APP_FIREBASE_DATABASE_URL = "https://your_project.firebaseio.com"
    REACT_APP_FIREBASE_PROJECT_ID = "your_project"
    REACT_APP_FIREBASE_STORAGE_BUCKET = "your_project.appspot.com"
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "your_project id"
    REACT_APP_FIREBASE_API_ID = "your_project id"

    # Music-api
    REACT_APP_FIREBASE_MUSIC_API_URL = "https://social-network-backend-legabog.herokuapp.com"

    # Openweathermap.org
    REACT_APP_WEATHER_URL = "https://api.openweathermap.org/data/2.5"
    REACT_APP_WEATHER_API_KEY = "Your openweather.org Api key"

    # Openstreetmap.org
    REACT_APP_ADDRESS_URL = "https://nominatim.openstreetmap.org"
    ```
## **Basic Scripts**

List of available scripts:

1. **start** - this script runs your app (using Dev mode). You can open browser and insert `http://localhost:3000/`.

   ```shell
   npm run start

   ```
2. **Install the packages using the command.**
   ```shell
   npm install
   ```
1. **Clone the "master" branch in the repository.**

   ```shell
   git clone -b master https://github.com/Legabog/social-network-v2.0.0_legabog.git

   ```
2. **Install the packages using the command.**
   ```shell
   npm install
   ```   

"start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js",
    "size": "npm run build && size-limit",
    "flow": "flow" 
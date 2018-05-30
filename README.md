# tdd

There is a file missing from this repo!

*__./src/environments/firebase-config.json__*

It looks like:

{
  "apiKey": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "authDomain": "xxxx-xxxx-xxxx.firebaseapp.com",
  "databaseURL": "https://xxxx-xxxx-xxxx.firebaseio.com",
  "projectId": "xxxx-xxxx-xxxx",
  "storageBucket": "",
  "messagingSenderId": "0000000000000"
}

1. In the directory: src/environments, create an empty file firebase-config.json
1. Click: Add Firebase to your web app
1. Find the section beginning with "var config = {"
1. Copy everything from the opening curly brace to the closing curly brace including the braces
1. Paste the contents from above into the firebase.json file
1. You will also need to open up your Realtime Database in Firebase
    1. Click Database in the Navigation column
    1. Under Realtime Database, click Get Started
    1. Under Security rules for Realtime Database, click Start in test mode
    1. Click Enable

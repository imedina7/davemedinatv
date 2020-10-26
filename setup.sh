#!/bin/bash

npm install
npm run build

if [ $? -eq 0 ]; then
    echo "---> All set! "
    echo " [*] To test both back and front end: add your environment vars values to the .env.template, rename it to .env and run 'heroku local'"
    echo " [*] To test front end only run: npm run serve"
else
    echo "---> Something failed :c" 
    echo " [!] See the errors above." 
    echo " [!] Fix what's necessary and try again"
fi
# Kipsu Hotel App

# Instructions 
This app runs on yarn, to run the app in terminal type "yarn install." When that is finished type in "yarn start" The app was made using react and will auto-deploy to LocalHost:3000, if there is already something running on 3000 the terminal will prompt to run on a different port.

# Design Decisions
I wanted to use React hooks, because I wanted the app to auto update the message in real time, so the user could see how the message would look when making changes. I at first was going to do multiple pages, but ultimately felt it better to have it all in one. I used bootstrap for some of the CSS since the job I'm applying for is not a designer, so getting into small details of look was not as important to me as the functionality, and how easily I could make sure the app worked.

# Languages
I used React.js functional components. It's my favorite framework to code in, it makes it easy to design something once and reuse it, passing state is relatively easy, and I think it's a good language overall to use.

# My process for verifying the correctness of you program
I am still learning how to set up testing for React, so I did not do any automated testing. What I did was step by step when setting up my hooks start with hardcoding in answers so instead of choosing from a list of different things I set up my setGreetingVariables to equal an object I copy and pasted in. Then from there I set it into the dropdown menu. I then console.logged to make sure the object from my mapping was correct, then set up the setGreetingVariables function to equal that object. 

# What didn't you get to, or what else might you do with more time?
If this was an app that I was going to be using I would have set it up to a Mongo database so that the templates the user adds can be saved to a database and used again. I would have spent some more time making sure that the app looks nicer. I would have added more templates to choose from, maybe changed how they're presented to the user. I would finally learn more about testing inside the React world and setup automated testing.

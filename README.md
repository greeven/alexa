# Alexa Skills with Node.js on Heroku

After getting [Amazon Echo](https://www.amazon.de/gp/product/B01GAGVCUY/ref=as_li_tl?ie=UTF8&camp=1638&creative=6742&creativeASIN=B01GAGVCUY&linkCode=as2&tag=koonys-21)![](http://ir-de.amazon-adsystem.com/e/ir?t=koonys-21&l=as2&o=3&a=B01GAGVCUY) I wanted to know how one can make skills on its own.

Using [this post](https://iwritecrappycode.wordpress.com/2016/04/01/create-an-alexa-skill-in-node-js-and-hosting-it-on-heroku/) as a starting point I ended up with this repository which can be pushed to heroku and used to get skills for alexa up and running.

Following you will read about how to get going.


## Before You Start
1. Get Echo or an Dot and set it up on their web app under http://alexa.amazon.com
   
   *(I found myself googling "alexa web app" for that. The actual android app from the store seems to be just a webview app version of that url.)*
2. Get an developer account on amazon under https://developer.amazon.com
3. Get an heroku account under https://www.heroku.com


## How It Works
**Nutshell:** You develop your project with a node.js framework for alexa skills and push it to heroku. This project contains all your skills you developed in the apps folder. 
Every skill has its own url.
Each skill needs to be created in your amazon developer console and uses its url in your heroku project.


### Node.js Project
The project has one dependency in its package.json.
```json
"dependencies": {
    "alexa-app-server": "^3.0.1"
  },
```
The starting file is `server.js`. This file is just the server serving away all your awesome skills being in the apps folder. More here: [alexa-app-server](https://github.com/alexa-js/alexa-app-server).

The skills are folders in the apps folder. Each skill having a index.js and a package.json file.
The index.js is the actual skill one develops. The package.json needs to be there telling the skill his basic dependency.
```json
"dependencies": {
    "alexa-app": "^4.0.0"
  },
```
You'll find more of what you can do here: [alexa-app](https://github.com/alexa-js/alexa-app).

### Heroku
Just push it to heroku and remember: the project pushed is not just one skill. It holds all your skills in the apps folder. Each skill will be an skill on amazon.
This brings us to..

### Skill Setup On Amazon
With you logged in on https://developer.amazon.com find ALEXA in the menu and click on "Alexa Skills Kit". There you'll find a button "Add a New Skill". Click it. It will bring you to your skill where you'll set it up. Some aspects and learnings setting it up are..

**Skill Information / Language**
If you set up german as the language and follow an english tutorial you have to remember that alexa won't recognize you telling it numbers in english.

**Interaction Model / Intent Schema**
Your skill has an url in your project like `www.heroku-url-to-your-project.com/alexa/my-test-skill-yo`. If you open this url in your browser you request it with GET. It will show you a site where you can test it. On this site you will also find the intent schema. Copy that into the Intent Schema field of your skill.

**Interaction Model / Sample Utterance**
After copying the intent schema make sure you copy all the utterances into the Sample Utterances field.
You tell amazon that people will utter something (utterances) and wanting something based of it (intents). Alexa hears your uttering, understands your intent and then it sends the intent with POST to your skill url which brings us to..

**Configuration / Endpoint**
Choose HTTPS, the geographical region and copy your `www.heroku-url-to-your-project.com/alexa/my-test-skill-yo` into the input field.

**SSL Certificate / Certificate for EU Endpoint**
If that pops up for you choose the second option:
*My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority*

**Test**
Done. You can test your skill here before publishing it. You will also see your skill on the alexa web app (http://alexa.amazon.de) under the "Skills" menu tab. (Click on the "Skills" tab and then on "Your Skills" in the top right corner. This GUI.. weird, right?)

### The End
Hope it helps some of you. If you have questions, just ask.
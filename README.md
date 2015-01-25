#Grunt Project Base

Created this project to quickly have a grunt base that watches all the files for changes, concats javascript, compiles SASS, and spins up a quick local environment.

##Dependencies

- [NPM](https://www.npmjs.com/)
- [Grunt](http://gruntjs.com/)
- [Sass](http://sass-lang.com/install)
- [Susy](http://susydocs.oddbird.net/en/latest/install/) Install Susy and uncomment the lines in _grids.scss to begin using Susy

##How to use this repo

###Install Node modules
```bash
npm i
```

###Build your files & spin up your local server
```bash
grunt
```

###Clean out your dist folder
```bash
grunt clean
```

###Prepare files for production
```bash
grunt production
```

##Questions/Comments
Feel free to submit an issue or pull request for a fix

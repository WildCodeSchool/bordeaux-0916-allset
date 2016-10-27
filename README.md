# ALLSET // w/ Tiny-mean-cms

[![Licence](https://img.shields.io/badge/licence-MIT-blue.svg?maxAge=2592000)](https://github.com/jbehuet/tiny-mean-cms/blob/master/LICENCE) [![Release](https://img.shields.io/github/release/jbehuet/tiny-mean-cms.svg?maxAge=2592000)](https://github.com/jbehuet/tiny-mean-cms/releases)
[![GitHub forks](https://img.shields.io/github/forks/jbehuet/tiny-mean-cms.svg)](https://github.com/jbehuet/tiny-mean-cms/network) [![GitHub issues](https://img.shields.io/github/issues/jbehuet/tiny-mean-cms.svg)](https://github.com/jbehuet/tiny-mean-cms/issues)

Tiny-mean-cms : CMS Project with [MEAN stack](http://mean.io/#!/)

### Context

Refonte du site ALLSET.

<!-- ### Previews
| Home   |      Edition      | Dashboard |
|:----------:|:-------------:|:------:|
| <img src="http://jbehuet.fr/files/screens/mean-starter/001.png" width="400px" />   |  <img src="http://jbehuet.fr/files/screens/mean-starter/002.png" width="400px" />   | <img src="http://jbehuet.fr/files/screens/mean-starter/003.png" width="400px" /> |

[Show demo](http://tiny-mean-cms.herokuapp.com/#/) -->

### Prerequisites
* [NodeJS](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [Brunch](http://brunch.io/)
* [Bower](https://bower.io/)

### Installation

```bash
git clone https://github.com/WildCodeSchool/bordeaux-0916-allset.git   
cd bordeaux-0916-allset
bower i
npm i
```

__Default account__
> Email : admin@domain.ext  
> Password : admin

### Development

`npm run dev`

### Production

`npm start`

### Git Workflow

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Git checkout dev
5. Git pull origin dev
6. Git merge my-new-feature
4. Git push origin dev
5. Submit a pull request


### Database

Export Database :  
-users : mongoexport --db allset --collection users --type=json --out ~/YOUR_PATH/bordeaux-0916-allset/users.json  
-pages : mongoexport --db allset --collection pages --type=json --out ~/YOUR_PATH/bordeaux-0916-allset/db.json  
  
Import Database :   
-users : mongoimport --db allset --collection users --type=json ~/YOUR_PATH/bordeaux-0916-allset/users.json   
-pages : mongoexport --db allset --collection pages --type=json ~/YOUR_PATH/bordeaux-0916-allset/db.json   




### Licence

This project is licensed under the MIT Open Source license. For more information, see the LICENSE file in this repository.

Thanks to @jbehuet and the WildCodeSchool

# handlebars-imgix

![nodei.co](https://nodei.co/npm/handlebars-imgix.png?downloads=true&downloadRank=true&stars=true)

![npm](https://img.shields.io/npm/v/handlebars-imgix.svg)

![github-issues](https://img.shields.io/github/issues/leviwheatcroft/handlebars-imgix.svg)

![stars](https://img.shields.io/github/stars/leviwheatcroft/handlebars-imgix.svg)

![forks](https://img.shields.io/github/forks/leviwheatcroft/handlebars-imgix.svg)

[handlebars](http://handlebarsjs.com/) / [imgix][imgix]
helper to generate imgix urls.

## install

`npm i --save handlebars-imgix`

## usage

```javascript
import { handlebarsImgix } from 'handlebars-imgix'
import { handlebars } from 'handlebars'
Handlebars.registerHelper('imgix', handlebarsImgix('mycloud'))

handlebars.compile('<img src="{{imgix images/cat.jpg "{ width:400, height:300, crop:\'fill\' }"}}" alt="image alt">').template({})
// <img src="http://res.imgix.com/mycloud/image/upload/c_fill,h_300,w_400/v1/imgix_id" alt="image alt">
```

## quotes

The example above shows a problem you run into if trying to declare strings in
js. The escaped quotes will work fine in this case.

In a handlebars template file, you can just use single quotes.

## compatibility

`dist/index.js` should be fully compatible with node 6

## Author

Levi Wheatcroft <levi@wht.cr>

## Contributing

Contributions welcome; Please submit all pull requests against the master
branch.

## License

[MIT](http://opensource.org/licenses/MIT)


[imgix]: https://www.imgix.com/

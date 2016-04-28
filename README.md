
# cheerio-req [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/cheerio-req.svg)](https://www.npmjs.com/package/cheerio-req) [![Downloads](https://img.shields.io/npm/dt/cheerio-req.svg)](https://www.npmjs.com/package/cheerio-req) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> An http request module sending back a Cheerio object.

## :cloud: Installation

```sh
$ npm i --save cheerio-req
```


## :clipboard: Example



```js
const cheerioReq = require("cheerio-req");

cheerioReq("http://ionicabizau.net", (err, $) => {
    let $links = $("a.article-title");
    for (let i = 0; i < $links.length; ++i) {
        console.log($links.eq(i).text());
    }
});
```

## :memo: Documentation

### `cheerioReq(opts, cb)`
An http request module sending back a Cheerio object.

#### Params
- **Object** `opts`: An object containing the following fields:
- **Function** `cb`: The callback function.

#### Return
- **Request** The [`Tinyrequest`](https://github.com/IonicaBizau/tinyreq) object.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md

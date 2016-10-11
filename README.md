
# cheerio-req

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/cheerio-req.svg)](https://www.npmjs.com/package/cheerio-req) [![Downloads](https://img.shields.io/npm/dt/cheerio-req.svg)](https://www.npmjs.com/package/cheerio-req) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

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
    // =>
    // Pi Day, Raspberry Pi and Command Line
    // How I ported Memory Blocks to modern web
    // How to convert JSON to Markdown using json2md
});
```

## :memo: Documentation


### `cheerioReq(opts, cb)`
An http request module sending back a Cheerio object.

You can change the `request` function by overriding the `request` field.

#### Params
- **Object|String** `opts`: The request url or an object passed to [`tinyrequest`](https://github.com/IonicaBizau/tinyreq).
- **Function** `cb`: The callback function.

#### Return
- **Request** The [`tinyrequest`](https://github.com/IonicaBizau/tinyreq) object.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`scrape-it`](https://github.com/IonicaBizau/scrape-it#readme)—A Node.js scraper for humans.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md

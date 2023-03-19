## Documentation

You can see below the API reference of this module.

### `cheerioReq(opts, cb)`
An http request module sending back a Cheerio object.

You can change the `request` function by overriding the `request` field.

#### Params

- **Object|String** `opts`: The request url or an object passed to [`axios`](https://github.com/axios/axios).
- **Function** `cb`: The callback function.

#### Return
- **Promise** The [`axios`](https://github.com/axios/axios) resolving with the data.


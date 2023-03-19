"use strict";

const req = require("axios")
    , Cheerio = require("cheerio")
    ;

/**
 * cheerioReq
 * An http request module sending back a Cheerio object.
 *
 * You can change the `request` function by overriding the `request` field.
 *
 * @name cheerioReq
 * @function
 * @param {Object|String} opts The request url or an object passed to
 * [`axios`](https://github.com/axios/axios).
 * @param {Function} cb The callback function.
 * @returns {Promise} The [`axios`](https://github.com/axios/axios) resolving with the data.
 */
module.exports = async (opts) => {
    const res = await module.exports.request(opts)
    res.$ = Cheerio.load(res.data)
    return res
};

module.exports.request = req;

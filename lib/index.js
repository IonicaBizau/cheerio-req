"use strict";

const Tinyreq = require("tinyreq")
    , Cheerio = require("cheerio")
    ;

/**
 * cheerioReq
 * An http request module sending back a Cheerio object.
 *
 * @name cheerioReq
 * @function
 * @param {Object|String} opts The request url or an object passed to
 * [`tinyrequest`](https://github.com/IonicaBizau/tinyreq).
 * @param {Function} cb The callback function.
 * @returns {Request} The [`tinyrequest`](https://github.com/IonicaBizau/tinyreq) object.
 */
module.exports = function cheerioReq (opts, cb) {
    return Tinyreq(opts, (err, body, res) => {
        if (err) { return cb(err); }
        cb(null, Cheerio.load(body), res, body);
    });
};

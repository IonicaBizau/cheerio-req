"use strict";

const cheerioReq = require("../lib");

cheerioReq("http://ionicabizau.net", (err, $) => {
    let $links = $("a.article-title");
    for (let i = 0; i < $links.length; ++i) {
        console.log($links.eq(i).text());
    }
});

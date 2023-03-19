"use strict";

const cheerioReq = require("../lib");

(async () => {
    const { $ } = await cheerioReq("http://ionicabizau.net")
    let $links = $("a.article-title");
    for (let i = 0; i < $links.length; ++i) {
        console.log($links.eq(i).text());
    }
    // =>
    // Pi Day, Raspberry Pi and Command Line
    // How I ported Memory Blocks to modern web
    // How to convert JSON to Markdown using json2md
})()

"use strict";
exports.__esModule = true;
var client = require("cheerio-httpcli");
var word = "node.js";
client.fetch("http://www.google.com/search", { q: word }, function (err, $, res, body) {
    // レスポンスヘッダを参照
    console.log(res.headers);
    // HTMLタイトルを表示
    console.log($("title").text());
    // リンク一覧を表示
    $("h3").each(function (idx, element) {
        console.log(element.children[0].data);
    });
});

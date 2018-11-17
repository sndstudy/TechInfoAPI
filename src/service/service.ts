import * as client from "cheerio-httpcli";

const word = "node.js";

client.fetch("http://www.google.com/search", { q: word },  (err, $, res, body) => {
  // レスポンスヘッダを参照
  console.log(res.headers);

  // HTMLタイトルを表示
  console.log($("title").text());

  // リンク一覧を表示
  $("h3").each((idx: number, element: CheerioElement) => {
    console.log(element.children[0].data);
  });
});

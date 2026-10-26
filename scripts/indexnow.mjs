// Notifica a Bing/Yandex (protocollo IndexNow) tutte le URL della sitemap pubblicata.
// Bing alimenta anche la ricerca di ChatGPT e Copilot. Usare dopo ogni deploy: npm run indexnow
const host = "www.sancarlotraslochi.it";
const key = "631018952a21cfe690b9c0b8245f5f0f"; // deve coincidere con public/<key>.txt

const sitemap = await fetch(`https://${host}/sitemap.xml`).then((r) => r.text());
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} — ${urlList.length} URL inviate`);

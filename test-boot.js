const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf-8');

const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("error", (err) => { console.error("JSDOM Error:", err); });
virtualConsole.on("warn", (warn) => { console.warn("JSDOM Warn:", warn); });
virtualConsole.on("info", (info) => { console.info("JSDOM Info:", info); });
virtualConsole.sendTo(console, { omitJSDOMErrors: false });

const dom = new JSDOM(html, {
  url: "http://localhost/",
  runScripts: "dangerously",
  resources: "usable",
  virtualConsole
});

dom.window.addEventListener('load', () => {
  setTimeout(() => {
    const grid = dom.window.document.getElementById('formGrid');
    console.log("formGrid innerHTML length:", grid ? grid.innerHTML.length : "null");
    
    const landing = dom.window.document.getElementById('viewLanding');
    console.log("viewLanding class:", landing ? landing.className : "null");
    
    const overlay = dom.window.document.getElementById('bootLoadingOverlay');
    console.log("overlay exists:", !!overlay);
  }, 2000);
});

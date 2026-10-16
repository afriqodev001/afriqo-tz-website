import puppeteer from 'puppeteer';
import fs from 'fs';
const chromeCandidates = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
];
const executablePath = chromeCandidates.find(p => fs.existsSync(p));
const browser = await puppeteer.launch({ executablePath, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
await new Promise(r => setTimeout(r, 2000));
const el = await page.$('#top');
await el.screenshot({ path: 'temporary screenshots/hero-focus.png' });
await browser.close();
console.log('done');

import puppeteer from 'puppeteer';
import fs from 'fs';
const executablePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const browser = await puppeteer.launch({ executablePath, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
await new Promise(r => setTimeout(r, 2500));
// find the "In the field" section — it's the 3rd section after hero
const sections = await page.$$('section');
await sections[2].screenshot({ path: 'temporary screenshots/field-focus.png' });
await browser.close();
console.log('done');

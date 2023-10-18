import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, expect } from "@playwright/test";

let browser;
let context;
let page;
let newPage;

Given(/^I open IOV website$/, async function () {
	browser = await chromium.launch({ headless: false  });
	context = await browser.newContext();
	page = await context.newPage();
	await page.goto("https://www.iovlabs.org/");
	
});

When(/^I navigate to open positions$/, async function () {
	await page.locator("a[href='careers']").click();
	const pagePromise = context.waitForEvent('page');
	await page.locator("a[href='https://jobs.lever.co/iovlabs']").click();
	newPage = await pagePromise;
	await newPage.waitForLoadState();
});

Then(/^I verify the job openings are displayed$/, async function () {
	const title = await newPage.title();
    await expect(title).toEqual("IOVLabs");
	await browser.close();
});

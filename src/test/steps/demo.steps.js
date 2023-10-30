import { Given, When, Then } from '@cucumber/cucumber';
//import { expect } from "../../hooks/fixtures.js";
import metamask from "@synthetixio/synpress/commands/metamask.js";
import DemoPage from "../../pages/demo.page.js"

Given(/^I open Dapp website$/, async function () {
	await DemoPage.navigateToDapp(global.BASE_URL);
});

When(/^I navigate to Rollup Explorer$/, async function () {
	await DemoPage.navigateToRollupExplorer();
});

Then(/^I validate Rollup Explorer opens$/, async function () {
	await DemoPage.validateExplorer();
});

Then(/^I connect metamask$/, async function () {
	await DemoPage.connectWallet();
	await metamask.getExtensionDetails();
	// await metamask.goToHome();
	// await metamask.disconnectWalletFromAllDapps();
	// await metamask.importAccount(
	// 	"0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97"
	//   );
	// await page.click("#connectButton");
});
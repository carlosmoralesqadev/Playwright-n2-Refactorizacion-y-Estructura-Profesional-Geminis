import { test , expect } from "@playwright/test";

import {interLocators} from "./14-b-locators";

test.describe("14 - B", () => {

    test.beforeEach( async ({page}) => {
        await page.goto("https://the-internet.herokuapp.com");
    });

    test("Login exitoso", async ({page}) => {

        await page.getByText(interLocators.linkToLogin).click();

        await page.getByLabel(interLocators.inputUserName).fill(interLocators.userName);

        await page.getByLabel(interLocators.inputPassword).fill(interLocators.userPassword)

        await page.getByRole("button", {name : interLocators.buttonLogin}).click(),

        await expect(page.getByText(interLocators.messageLoginSuccesfull)).toBeVisible()
    })
    test("Login fallido", async ({page}) => {

        await page.getByText(interLocators.linkToLogin).click();

        await page.getByLabel(interLocators.inputUserName).fill(interLocators.userNameWrong);

        await page.getByLabel(interLocators.inputPassword).fill(interLocators.userPasswordWrong)

        await page.getByRole("button", {name : interLocators.buttonLogin}).click(),

        await expect(page.getByText(interLocators.messageLoginFailed)).toBeVisible()
    })
    

})
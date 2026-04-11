import { test, expect } from "@playwright/test";

import { interLocators } from "./14-b-locators";
import { hacerLogin } from "./14-b-funciones";
import { hacerLogout } from "./14-b-funciones";

test.describe("14 - B", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(interLocators.page);
    });

    test("Login exitoso", async ({ page }) => {
        await hacerLogin(page, interLocators.login.userName, interLocators.login.userPassword, interLocators.login.messageLoginSuccesfull);

        await page.getByRole("link", { name: interLocators.login.buttonLogout }).click();

        await expect(page.getByText(interLocators.login.messageLoginLogout)).toBeVisible();
    });

    test("Logout", async ({ page }) => {
        await hacerLogout(page, interLocators.login.userName, interLocators.login.userPassword, interLocators.login.messageLoginSuccesfull,  interLocators.login.buttonLogout, interLocators.login.messageLoginLogout)
    });

    test("Login fallido", async ({ page }) => {
        await hacerLogin(page, interLocators.login.userNameWrong, interLocators.login.userPasswordWrong, interLocators.login.messageLoginFailed);
    });
});

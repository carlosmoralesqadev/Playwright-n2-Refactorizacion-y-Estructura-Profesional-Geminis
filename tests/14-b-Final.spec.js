import { test, expect } from "@playwright/test";

import { interLocators } from "./14-b-locators";
import { hacerLogin } from "./14-b-funciones";
import { hacerLogout } from "./14-b-funciones";

test.describe("14 - B", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(interLocators.page);
    });

    test("Login exitoso", async ({ page }) => {
        await hacerLogin(page, interLocators.login.userName, interLocators.login.userPassword);
    });

    test("Logout", async ({ page }) => {
        await hacerLogout(page, interLocators.login.userName, interLocators.login.userPassword);
    });

    test("Login fallido", async ({ page }) => {
        await hacerLogin(page, interLocators.login.userNameWrong, interLocators.login.userPasswordWrong, interLocators.login.messageLoginFailed);

        await expect(page.getByRole("button", { name: interLocators.login.buttonLogin })).toBeVisible();
    });
});

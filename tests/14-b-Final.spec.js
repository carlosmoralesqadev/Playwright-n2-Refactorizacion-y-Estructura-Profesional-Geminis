import { test, expect } from "@playwright/test";

import { interLocators } from "./14-b-locators";
import { hacerLogin } from "./14-b-funciones";

test.describe("14 - B", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(interLocators.page);
    });

    test("Login exitoso", async ({ page }) => {
        await hacerLogin(page, interLocators.login.userName, interLocators.login.userPassword, true);
    });

    test("Logout", async ({ page }) => {
        await hacerLogin(page, interLocators.login.userName, interLocators.login.userPassword, "logout");
    });

    test("Login fallido", async ({ page }) => {
        await hacerLogin(page, interLocators.login.userNameWrong, interLocators.login.userPasswordWrong, false);
    });
});

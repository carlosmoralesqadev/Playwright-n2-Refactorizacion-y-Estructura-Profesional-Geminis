import { test, expect } from "@playwright/test";

import { intLocators } from "./consolidacion_data_locators.js";
import { intentarLogin } from "./consolidacion_utils_functions.js";

test.describe("Pruebas de seguridad y acceso", () => {
    test.beforeEach(async ({ page }) => {

        await page.goto(intLocators.page);
        await page.getByLabel(intLocators.userInput).fill(intLocators.correctUser);
        await page.getByLabel(intLocators.passwordInput).fill(intLocators.correctPassword)
        await page.getByText(intLocators.loginButton).click()
    });

    test("login", async ({page}) => {
        await expect(page.getByText(intLocators.messageLogin)).toBeVisible()
    })
});
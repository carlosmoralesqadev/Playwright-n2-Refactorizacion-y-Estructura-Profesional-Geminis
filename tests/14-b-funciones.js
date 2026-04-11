import { test, expect } from "@playwright/test";

import { interLocators } from "./14-b-locators";

export const hacerLogin = async (page, user, password, mensajeEsperado) => {
    await page.getByText(interLocators.login.linkToLogin).click();

    await page.getByLabel(interLocators.login.inputUserName).fill(user);

    await page.getByLabel(interLocators.login.inputPassword).fill(password);

    await page.getByRole("button", { name: interLocators.login.buttonLogin }).click();

    await expect(page.getByText(mensajeEsperado)).toBeVisible();
};

export const hacerLogout = async (page, buttonLogout, messageLogout) => {
    await page.getByRole("link", { name: buttonLogout }).click();

    await expect(page.getByText(messageLogout)).toBeVisible();
};

import {test, expect} from "@playwright/test";

import { interLocators } from "./14-b-locators";

export const hacerLogin = async (page, user, password, mensajeEsperado) => {
    await page.getByText(interLocators.linkToLogin).click();

    await page.getByLabel(interLocators.inputUserName).fill(user);

    await page.getByLabel(interLocators.inputPassword).fill(password);

    await page.getByRole("button", { name: interLocators.buttonLogin }).click();

    await expect(page.getByText(mensajeEsperado)).toBeVisible();
};

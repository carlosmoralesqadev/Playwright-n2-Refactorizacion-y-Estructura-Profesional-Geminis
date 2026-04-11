import { test, expect } from "@playwright/test";
import { interLocators } from "./14-b-locators";



export const hacerLogin = async (page, user, password) => {
    //Input userName
    const inputUserName = await page.getByLabel(interLocators.login.inputUserName);
    //Input userName
    const inputPassword = await page.getByLabel(interLocators.login.inputPassword);
    //Boton Login
    const buttonLogin = await page.getByRole("button", { name: interLocators.login.buttonLogin });
    //Boton logout
    const buttonLogout = await page.getByRole("link", { name: interLocators.login.buttonLogout });
    //Mensaje login exitoso
    const messageLoginSuccesfull = await page.getByText(interLocators.login.messageLoginSuccesfull);

    //Ir a la sesscion de login
    await page.getByText(interLocators.login.linkToLogin).click();

    //Localizar y llenar input User Name
    await inputUserName.fill(user);

 //* HASTA ACA HE COLOCADO LOS MISMO NOMBRE


    //Localizar y llenar input Password
    await inputPassword.fill(password);

    //Localizar y hacer click en el boton de Login
    await botonLogin.click();

    //Validar mensaje de login exitoso
    await expect(messageLoginSuccesfull).toBeVisible();

    //Validar no este visible el boton de Login
    await expect(botonLogin).not.toBeVisible();

    //Validar este visible el boton de Logout
    await expect(botonLogout).toBeVisible();
};;

export const hacerLogout = async (page, user, password, mensajeLogin) => {
    await hacerLogin(page, user, password, mensajeLogin);

    await page.getByRole("link", { name: interLocators.login.buttonLogout }).click();

    await expect(page.getByText(interLocators.login.messageLogout)).toBeVisible();

    await expect(page.getByRole("button", { name: interLocators.login.buttonLogin })).toBeVisible();
};

import { test, expect } from "@playwright/test";
import { interLocators } from "./14-b-locators";

export const hacerLogin = async (page, user, password, statusEsperado) => {
    //*Elementos
    //Input userName
    const inputUserName = await page.getByLabel(interLocators.login.inputUserName);
    //Input userName
    const inputPassword = await page.getByLabel(interLocators.login.inputPassword);
    //Boton Login
    const buttonLogin = await page.getByRole("button", { name: interLocators.login.buttonLogin });








    //*Acciones

    await completarFormulario(page, user, password);


    if(statusEsperado === true ){
        loginExitoso(page)
    }else if(statusEsperado === false ){
        loginFailed;(page)
    }else{
        console.log("NO ENVIASTE EL PARAMETRO de estatus esperado")
    }
};

const loginExitoso = async (page) => {
    //Boton Login
    const buttonLogin = await page.getByRole("button", { name: interLocators.login.buttonLogin });

    //Mensaje login exitoso
    const messageLoginSuccesfull = await page.getByText(interLocators.login.messageLoginSuccesfull);

    //Boton logout
    const buttonLogout = await page.getByRole("link", { name: interLocators.login.buttonLogout });

    //Validar mensaje de login exitoso
    await expect(messageLoginSuccesfull).toBeVisible();

    //Validar no este visible el boton de Login
    await expect(buttonLogin).not.toBeVisible();

    //Validar este visible el boton de Logout
    await expect(buttonLogout).toBeVisible();
};

const loginFailed = async (page) => {
    //Boton Login
    const buttonLogin = await page.getByRole("button", { name: interLocators.login.buttonLogin });

    //Boton logout
    const buttonLogout = await page.getByRole("link", { name: interLocators.login.buttonLogout });
    //Mensaje login FALLIDO
    const messageLoginFailed = await page.getByText(interLocators.login.messageLoginFailed);

    //Validar este visible el boton de Login
    await expect(buttonLogin).toBeVisible();

    //Validar NO este visible el boton de Logout
    await expect(buttonLogout).not.toBeVisible();

    //Validar este visible el mensaje de login fallido
    await expect(messageLoginFailed).toBeVisible();

};

const completarFormulario = async (page, user, password) => {
    //Input userName
    const inputUserName = await page.getByLabel(interLocators.login.inputUserName);
    //Input userName
    const inputPassword = await page.getByLabel(interLocators.login.inputPassword);
    //Boton Login
    const buttonLogin = await page.getByRole("button", { name: interLocators.login.buttonLogin });

    //*Acciones
    //Ir a la sesscion de login
    await page.getByText(interLocators.login.linkToLogin).click();

    //Localizar y llenar input User Name
    await inputUserName.fill(user);

    //Localizar y llenar input Password
    await inputPassword.fill(password);

    //Localizar y hacer click en el boton de Login
    await buttonLogin.click();
};



export const hacerLogout = async (page, user, password) => {
    //Boton Login
    const buttonLogin = await page.getByRole("button", { name: interLocators.login.buttonLogin });
    //Boton logout
    const buttonLogout = await page.getByRole("link", { name: interLocators.login.buttonLogout });
    //Mensaje logout
    const messageLogout = await page.getByText(interLocators.login.messageLogout);

    await hacerLogin(page, user, password);

    //* HASTA ACA HE COLOCADO LOS MISMO NOMBRE

    await buttonLogout.click();

    await expect(messageLogout).toBeVisible();

    await expect(buttonLogout).not.toBeVisible();
    await expect(buttonLogin).toBeVisible();
};

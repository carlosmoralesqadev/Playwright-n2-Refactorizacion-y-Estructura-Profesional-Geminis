import { test , expect } from "@playwright/test";

import {interLocators} from "./14-b-locators";

import {hacerLogin} from "./14-b-funciones";

test.describe("14 - B", () => {

    test.beforeEach( async ({page}) => {
        await page.goto(interLocators.page);
    });

    test("Login exitoso", async ({page}) => {
        await hacerLogin(page, interLocators.userName, interLocators.userPassword, interLocators.messageLoginSuccesfull);
    })

    test("Login fallido", async ({page}) => {

        await hacerLogin(page, interLocators.userNameWrong, interLocators.userPasswordWrong, interLocators.messageLoginFailed )
    })
    

})
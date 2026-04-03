import { test, expect } from "@playwright/test";

test.describe("Tienda Online - Refactorizada", () => {

    test.beforeEach( async ({page}) => {

        await page.goto("https://www.saucedemo.com/");
        await page.getByRole("checkbox", {name : "/username/i"}).fill("standard_user");
        await page.getByRole("checkbox", {name : "/password/i"}).fill("secret_sauce");
        await page.locator("#login-button").click();


    })



})


/*Usa un test.beforeEach para entrar a la URL y hacer el Login. Así, el cuerpo de tu test empezará directamente en la tienda.

Dentro del test, crea constantes para los elementos que vas a usar (por ejemplo: const cartBadge = page.locator('.shopping_cart_badge')).

Usa Regex (/.../i) en todos tus getByRole y getByText.

Realiza el mismo flujo de compra de la mochila, pero ahora el código debe verse mucho más corto y legible. */
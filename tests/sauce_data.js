export const sauceLocators = {
    //*Pages
    page: "https://www.saucedemo.com",

    //*Login
    inputUsuario: /username/i,
    inputPassword: /password/i,
    buttonLogin: /login/i,

    //*Credenciales
    userName: "standard_user",
    userPassword: "secret_sauce",

    //*Products
    titleProducts: /Products/i,
    addBackpack: "add-to-cart-sauce-labs-backpack", //id
    addBikeLight: "add-to-cart-sauce-labs-bike-light", //id
    iconoCart: "shopping-cart-badge", //id

    //*Check buy
    titleYourCart : "title", //id
    cartList : "cart-list", //id
    quantityProducts : "inventory-item", //id
    buttonCheckout: /Checkout/i,

    //*Form pay
    titleForm : "title", //id
    titleFormInfo : /Checkout: Your Information/,
    inputFirstName: /First Name/i,
    inputLastName: /Last Name/i,
    inputPostalCode: /Zip\/Postal Code/i,
    buttonContinue: "#continue",

    //*Confirm Pay
    buttonFinish: /Finish/i,

    //*Susscefull buy
    messageConfirm: /Thank you for your order!/i,
};
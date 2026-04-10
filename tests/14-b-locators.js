export const interLocators = {
    //*Pages
    page: "https://the-internet.herokuapp.com",

    //*Login
    linkToLogin: /Form Authentication/i, // byText
    inputUserName: /Username/i, //label
    inputPassword: /Password/i, //label
    userName: "tomsmith", //string
    userPassword: "SuperSecretPassword!", //string
    userNameWrong: "tomsmi", //string
    userPasswordWrong: "SuperSecretPasswo", //string
    buttonLogin: /Login/i,
    messageLoginSuccesfull: /You logged into a secure area!/i, //string
    messageLoginFailed: /Your username is invalid!/i, //string
};
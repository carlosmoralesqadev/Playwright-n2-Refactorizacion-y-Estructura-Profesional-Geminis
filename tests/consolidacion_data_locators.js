
export const intLocators = {
    page: "https://the-internet.herokuapp.com/login",

    //Login
    userInput: /Username/i, //bylabel
    passwordInput: /Password/i, //bylabel
    loginButton: /Login/i, //bytext

    correctUser: /tomsmith/i,
    correctPassword: /SuperSecretPassword!/i,

    incorrectUser: /xxxxtomsmith/i,
    incorrectUser: /xxxxSuperSecretPassword!/i,

    messageLogin : /you logged into a secure area/i,
};
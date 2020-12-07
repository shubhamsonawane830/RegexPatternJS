const prompt = require('prompt-sync')();
const ZIPCODE = RegExp("^[0,9]{6}||[0,9]{3}[: :][0,9]{3}$");
const EMAIL = RegExp("^[A-Za-z0-9]+([._%+-][0-9a-zA-Z]+)*@[A-Za-z0-9]+([.]([a-zA-Z]{2,3})*)+$");
let zip1 = "400088";// UC1 - Regex pattern to validate zip code 400088 should pass
let zip2 = "A400088";// UC2 - Regex pattern to validate zip code A400088 should fail
let zip3 = "400088B";// UC3 - Regex pattern to validate zip code 400088B should fail
let zip4 = "400 088";// UC4 - Regex pattern to validate zip code 400 088 should pass
let email1 = "abc.xyz@bridgelabz.co.in";// UC1 - Regex pattern to validate email to check abc part and should pass
let email2 = "abc.xyz@bridgelabz.co.in";// UC2 - Regex pattern to validate email to check @ part and should pass
try{
    if(!ZIPCODE.test(zip4)) throw "Invalid Zip code"
    {
        console.log("Valid Zip code");
    }
}catch(Exception){
    console.log(Exception);
}
try{
    if(!EMAIL.test(email2)) throw "Invalid emailId"
    {
        console.log("Valid emailId");
    }
}catch(Exception){
    console.log(Exception);
}


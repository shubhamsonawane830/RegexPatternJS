const prompt = require('prompt-sync')();
const ZIPCODE = RegExp("^[0-9]{6}$");
let zip1 = "400088";// UC1 - Regex pattern to validate zip code 400088
try{
    if(!ZIPCODE.test(zip1)) throw "Invalid Zip code"
    {
        console.log("Valid Zip code");
    }
}catch(Exception){
    console.log(Exception);
}


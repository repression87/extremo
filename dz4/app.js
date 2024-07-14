function hidePhone(phoneNumber) {
    return phoneNumber.slice(0, -2) + 'xx';
}

const phone = "+996 555 123 123";
const hiddenPhone = hidePhone(phone);
console.log(hiddenPhone);  

function myReverse(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

const originalString = "123456789";
const reversedString = myReverse(originalString);
console.log(reversedString);  

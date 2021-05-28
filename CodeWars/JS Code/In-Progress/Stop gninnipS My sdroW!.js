function spinWords(string) {
var reversedString = (string = "") => {
    var stringArray = string.split(" ");


    if (stringArray.length > 1){
        for(var i = 0; i < stringArray.length; i++){
            const el = stringArray[i];
            if(el.length < 5){
            }
            else {
                stringArray[i] = el
                .split("")
                .reverse()
                .join("");
            }
        }        
    return stringArray.join(" ");

    }
    else {
        return string.split("").reverse().join("")
    }
}
console.log(reversedString(string));
}

spinWords("fbby");

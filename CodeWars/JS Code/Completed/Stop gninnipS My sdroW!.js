function spinWords(string) {
  // set string to new var
  var reversedString = (string = "") => {
    // set new var of string to split off all the spaces (" ")
    var stringArray = string.split(" ");

    // IF there were more than 1 word in the string, this will run the FOR LOOP
    if (stringArray.length > 1) {
      // FOR LOOP taking index of the String-Array and setting it to a var for easier use
      for (var i = 0; i < stringArray.length; i++) {
        const el = stringArray[i];
            // IF the word is longer than 5 letters, the word is split up for each letter, reversed, and joined back to the String-Array
        if (el.length < 5) {
        } else {
          stringArray[i] = el.split("").reverse().join("");
        }
      }
        // Returns string to the array after going through IF/ELSE Statement
      return stringArray.join(" ");
        // If the string is only 1 word, this ELSE Statement RUNS
    } else {
      return string.split("").reverse().join("");
    }
  };
    // console.log for personal testing
  console.log(reversedString(string));
}
// For personal testing
spinWords("fbby");

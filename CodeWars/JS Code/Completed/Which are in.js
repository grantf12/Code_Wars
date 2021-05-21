function inArray(a1, a2) {
  var a1 = [];
  var a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
  var r = [];
  var noDuplicates;


//   Nested for loops that loops through a1 using indexOf();
  for (var i = 0; i < a1.length; i++) {
    //  Was getting errors when putting a1 first when the array is empty
    for (var ii = 0; ii < a2.length; ii++) {
    //   using the string in the 2nd loop runs through a1 to see if that word can be used in a2
        if (a2[ii].indexOf(a1[i]) > -1) {
            r.push(a1[i]);
    }
}
}
// This if/else statement is needed when a1 is an empty array
    if (r.length !== 0) {
      noDuplicates = [...new Set(r)];
    }
    else(noDuplicates = r)

  console.log(noDuplicates);

}

// Tested the current a1 using tests from website
inArray();


    // INSTRUCTIONS:

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

    // Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

// Beware: r must be without duplicates.


    // TESTS FROM WEBSITE

// describe("Tests", () => {
//   it("test", () => {
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// a1 = ["xyz", "live", "strong"]
// Test.assertSimilar(inArray(a1, a2), ["live", "strong"])
// a1 = ["live", "strong", "arp"]
// Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"])
// a1 = ["tarp", "mice", "bull"]
// Test.assertSimilar(inArray(a1, a2), [])

//   });
// });

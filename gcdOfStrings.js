function gcdOfStrings(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return '';
    }

    const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
    return str1.substring(0, gcd(str1.length, str2.length));
}

console.log(gcdOfStrings("ABCABC", "ABC")); // Output: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // Output: "AB"
console.log(gcdOfStrings("LEET", "CODE")); // Output: ""
function numberToWords(num: number): string {
  const units = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
  const teens = [
    "",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (num === 0) return "zero";

  let words = "";

  if (num >= 10000000) {
    const crores = Math.floor(num / 10000000);
    words += `${numberToWords(crores)} crore `;
    num %= 10000000;
  }

  if (num >= 100000) {
    const lakhs = Math.floor(num / 100000);
    words += `${numberToWords(lakhs)} lakh `;
    num %= 100000;
  }

  if (num >= 1000) {
    const thousands = Math.floor(num / 1000);
    words += `${numberToWords(thousands)} thousand `;
    num %= 1000;
  }

  if (num >= 100) {
    const hundreds = Math.floor(num / 100);
    words += `${units[hundreds]} hundred `;
    num %= 100;
  }

  if (num >= 20) {
    const tensDigit = Math.floor(num / 10);
    words += `${tens[tensDigit]}`;
    num %= 10;
    if (num !== 0) {
      words += `-${units[num]}`;
      num = 0;
    }
  } else if (num >= 11) {
    words += `${teens[num - 10]}`;
    num = 0;
  } else if (num >= 1) {
    words += `${units[num]}`;
    num = 0;
  }

  return words.trim();
}

// Example usage:
console.log(numberToWords(10)); // Output: "ten"
console.log(numberToWords(11)); // Output: "eleven"
console.log(numberToWords(12)); // Output: "eleven"
console.log(numberToWords(19)); // Output: "nineteen"
console.log(numberToWords(100)); // Output: "one hundred"
console.log(numberToWords(1000)); // Output: "one thousand"
console.log(numberToWords(10000)); // Output: "ten thousand"
console.log(numberToWords(100000)); // Output: "one lakh"
console.log(numberToWords(1000000)); // Output: "ten lakh"
console.log(numberToWords(10000000)); // Output: "one crore"

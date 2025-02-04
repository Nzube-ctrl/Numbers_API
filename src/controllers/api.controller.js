const axios = require(`axios`);

const classifyNumber = async (req, res) => {
  const number = req.query.number;

  if (!number || isNaN(Number(number))) {
    return res.status(400).json({ number, error: true });
  }

  const num = parseInt(number);
  let properties = [];
  let isArmstrong = false;
  let isPrime = true;
  let isPerfect = false;

  const sumOfDigits = num
    .toString()
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);

  // Check if Armstrong Number
  isArmstrong =
    num ===
    num
      .toString()
      .split("")
      .reduce(
        (sum, digit) => sum + Math.pow(parseInt(digit), num.toString().length),
        0
      );
  if (isArmstrong) properties.push("armstrong");

  // Check if Prime Number
  if (num < 2) isPrime = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  // Check if  Perfect Number
  let sumOfDividers = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sumOfDividers += i;
      if (i !== num / i) sumOfDividers += num / i;
    }
  }
  if (sumOfDividers === num && num !== 1) {
    isPerfect = true;
    properties.push("perfect");
  }

  // Determine Even or Odd
  properties.push(num % 2 === 0 ? "even" : "odd");

  try {
    const factResponse = await axios.get(
      `http://numbersapi.com/${num}/math?json`
    );
    res.status(200).json({
      number: num,
      is_prime: isPrime,
      is_perfect: isPerfect,
      properties,
      digit_sum: sumOfDigits,
      fun_fact: factResponse.data.text,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message || "Failed to fetch fun fact." });
  }
};

module.exports = classifyNumber;

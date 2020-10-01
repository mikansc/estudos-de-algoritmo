// Converter Celsius em Fahrenheit

const celsiusToFahrenheit = (temperature) => (temperature * 9) / 5 + 32;

const temperatureConversion = (temperature, grade = 'c') => {
  if (grade.toLowerCase() === 'f') {
    console.log(`Converting ${temperature} to Celsius`);
    return (temperature * 9) / 5 + 32;
  } else {
    console.log(`Converting ${temperature} to Fahrenheit`);
    return ((temperature - 32) * 5) / 9;
  }
};

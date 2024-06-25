export default function formatNumber(number:  number) {
    if (isNaN(number)) {
      console.log("Input must be a valid number");
    }
  
    // Convert the number to a fixed 2 decimal points string
    // let numberString = number.toFixed(2);
  
    // Split the number into the integer and decimal parts
    // let parts = numberString.split(".");
    // let integerPart = parts[0];
    // let decimalPart = parts[1];
  
    // Use a regular expression to add commas every three digits
    let formattedIntegerPart = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    // Combine the formatted integer part and the decimal part
    // let formattedNumber = `${formattedIntegerPart}.${decimalPart}`;
  
    return formattedIntegerPart
  }
  
  // Example usage:
  // let inputNumber = 132323.434234;
  // let formattedNumber = formatNumber(inputNumber);
  // console.log(formattedNumber);  // Output: 132,323.43
  
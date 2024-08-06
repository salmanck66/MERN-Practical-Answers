function mean(array) {
    if (array.length === 0) {
      return NaN; // Return NaN for empty arrays
    } else {
      const sum = array.reduce((acc, curr) => acc + curr, 0);
      return sum / array.length;
    }
  }
  
  console.log(mean([12,213,12,3,213,,123]))
//present a floating-point number as a percentage
//unless the result would be over 100%

function percentegized(num) {
  if (num > 1) {
    return num.toFixed(2);
  }
  return (100 * num).toFixed() + "%";
}

export default percentegized;

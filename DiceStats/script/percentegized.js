//present a floating-point number as a percentage
//or if it's over 100%, round it down to 2 decimal points

export default function percentegized(num) {
  if (num > 1) {
    return num.toFixed(2);
  }
  return (100 * num).toFixed(2) + "%";
}

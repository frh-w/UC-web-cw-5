function BMI(h = 150, w = 52) {
  let result = w / (h * h);
  return result;
}
console.log(BMI(160, 55));

function Status_Body(result) {
  if (result < 18.5) {
    status_Body_result = "You are underweight.";
  } else if (result >= 18.5 && result < 25) {
    status_Body_result = "You have a healthy weight.";
  } else if (result >= 25) {
    status_Body_result = "You are overweight";
  }
  return status_Body_result;
}
console.log(status_Body_result);

function BMI(h = 150, w = 52) {
  let result = w / (h * h);
  return result;
}
console.log(BMI(160, 55));
function calculate(w = 52, h = 150) {
  let desc = BMI(h, w);
  return desc;
}

function Status_Body(bmi) {
  if (bmi < 18.5) {
    status_Body_bmi = "You are underweight.";
  } else if (bmi >= 18.5 && bmi < 25) {
    status_Body_bmi = "You have a healthy weight.";
  } else if (bmi >= 25) {
    status_Body_bmi = "You are overweight";
  }
  return status_Body_bmi;
}
console.log(status_Body_bmi);
function BMI(h = 150, w = 52) {
  let result = w / (h * h);
  return result;
  let bmi = w / (h * h);
  return bmi;
}
console.log(BMI(160, 55));
function calculate(w = 52, h = 150) {
  let bmi = BMI(h, w);
  return bmi;
}

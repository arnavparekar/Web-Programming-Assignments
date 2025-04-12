function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let feet = parseFloat(document.getElementById("feet").value);
    let inches = parseFloat(document.getElementById("inches").value);
    let gender = document.getElementById("gender").value;
    if (isNaN(weight) || isNaN(feet) || isNaN(inches) || weight <= 0 || feet < 0 || inches < 0) {
        alert("Please enter valid weight and height values.");
        return;
    }
    let totalHeightInches = (feet * 12) + inches;
    let bmi = (703 * weight) / (totalHeightInches * totalHeightInches);
    bmi = bmi.toFixed(2);
    document.getElementById("bmiResult").textContent = bmi;
    let status = "";
    if (gender === "male") {
        if (bmi < 17.5) status = "Anorexia";
        else if (bmi >= 17.501 && bmi <= 20.70) status = "Underweight";
        else if (bmi >= 20.71 && bmi <= 26.40) status = "Ideal Range";
        else if (bmi >= 26.41 && bmi <= 27.80) status = "Marginally Overweight";
        else if (bmi >= 27.81 && bmi <= 31.10) status = "Overweight";
        else status = "Very Overweight or Obese";
    } else {
        if (bmi < 17.5) status = "Anorexia";
        else if (bmi >= 17.51 && bmi <= 19.10) status = "Underweight";
        else if (bmi >= 19.11 && bmi <= 25.80) status = "Ideal Range";
        else if (bmi >= 25.81 && bmi <= 27.30) status = "Marginally Overweight";
        else if (bmi >= 27.31 && bmi <= 32.30) status = "Overweight";
        else status = "Very Overweight or Obese";
    }
    alert("Your BMI is: " + bmi + "\nStatus: " + status);
}
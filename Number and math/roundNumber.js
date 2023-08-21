a = 2095;
b = 799;
totalTax = Math.round((a + b) * 0.1 ) / 100;
total= Math.round(a + b) / 100;
document.getElementById("OutputTotalTax").innerHTML = totalTax;
document.getElementById("OutputTotal").innerHTML = total;
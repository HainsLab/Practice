// calculate toaster $18.50 and 2 shirt ($7.50 each)
// to prevent innacurate when calculating with float, i use cent
toaster = 1850;
shirt = 750;
total = (1850 + (750 * 2)) / 100;
tax = ((1850 + (750 * 2)) * 0.1) / 100;
document.getElementById("toaster").innerHTML = toaster;
document.getElementById("shirt").innerHTML = shirt;
document.getElementById("TotalCost").innerHTML = total;
document.getElementById("Tax").innerHTML = tax;
//tax by 20 percent
tax20 = ((1850 + (750 * 2)) * 0.2) / 100;
document.getElementById("Tax20").innerHTML = tax20;
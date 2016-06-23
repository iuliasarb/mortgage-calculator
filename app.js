
//the formula: c = (r * p) * Math.pow((1 + r), n) / (Math.pow((1 + r), n) - 1);

//@param p float Amount borrowed
//@param r interest as a percentage
//@param n term in years

function calculateMortgage(p, r, n) {

	//convert this percentage to a decimal
	r = percentToDecimal(r);
	
	//convert years to months
	n = yearsToMonths(n);

	return (r * p) * Math.pow((1 + r), n) / (Math.pow((1 + r), n) - 1);
}

function percentToDecimal(percent) {
	return (percent/12)/100;
}
function yearsToMonths(year) {
	return year * 12;
}
console.log(calculateMortgage(200000, 6.5, 30));
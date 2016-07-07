
//the formula: c = (r * p) * Math.pow((1 + r), n) / (Math.pow((1 + r), n) - 1);

//@param p float Amount borrowed
//@param r interest as a percentage
//@param n term in years

function calculateMortgage(p, r, n) {

	//convert this percentage to a decimal
	r = percentToDecimal(r);
	
	//convert years to months
	n = yearsToMonths(n);

	var pmt = (r * p) * Math.pow((1 + r), n) / (Math.pow((1 + r), n) - 1);
	if(isNaN(pmt)) {
		alert('numbers please');
		return '-';
	} else {
	return parseFloat(pmt.toFixed(2));
	}
}

function percentToDecimal(percent) {
	return (percent/12)/100;
}
function yearsToMonths(year) {
	return year * 12;
}

function postPayment(payment){
	var htmlEl = document.getElementById('outMonthly');
	htmlEl.innerText = payment + ' euro';
}

var btn = document.getElementById('btnCalculate');
btn.onclick = function() {
	var cost = document.getElementById('inCost').value;
	var downPayment = document.getElementById('inDown').value;
	var interest = document.getElementById('inAPR').value;
	var term = document.getElementById('inPeriod').value;


	var amountBorrowed = cost - downPayment;
	var pmt = calculateMortgage(amountBorrowed, interest, term);

	postPayment(pmt);
};
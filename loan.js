document.getElementById('loan-form').addEventListener('submit',getResults);

function getResults(e) {
// UI Variables

const loanAmount = document.getElementById('loanAmount');
const interest =  document.getElementById('interest');
const years =  document.getElementById('years');
const monthlyPayment =  document.getElementById('monthlyPayment');
const totalPayment =  document.getElementById('totalPayment');
const totalInterest =  document.getElementById('totalInterest');

const principal = parseFloat(loanAmount.value);
const calcInterest = parseFloat(interest.value) / 100 /12;
const calcPayment = parseFloat(years.value) * 12;
const x = Math.pow(1 + calcInterest, calcPayment);
const monthly = (principal * x * calcInterest)/ (x -1);

// if(isFinite(monthly)) {
//   document.getElementById('results').style.display = 'none';
//   document.getElementById('loading').style.display = 'block';
// monthlyPayment.value =  monthly.toFixed(2);
// totalPayment.value = (monthly * calcPayment).toFixed(2);
// totalInterest.value = ((monthly* calcPayment) - principal).toFixed(2);
// setTimeout(displayResults, 3000);



// }else {
//     document.getElementById('results').style.display = 'none';
//     document.getElementById('loading').style.display = 'none';
// console.log('Check Values submitted');
// showError('Please check the values submitted');
// }  
// e.preventDefault();

// }

// function displayResults() {
//   document.getElementById('results').style.display = 'block';
//   document.getElementById('loading').style.display = 'none';
// }

// function showError(error) {
//   window.scrollTo(0, 0);
//   const card = document.querySelector('.card');
//   const heading = document.querySelector('.heading');
//   const errorDiv = document.createElement('div');
//   errorDiv.className = 'error-alert';
//   errorDiv.appendChild(document.createTextNode(error));
//   card.insertBefore(errorDiv, heading);
//   setTimeout(function() {
//     document.querySelector('.error-alert').remove()}, 3000
//   );
// }
}
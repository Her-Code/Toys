// function calculateSalary() {
//     const basicSalary = parseFloat(document.getElementById('basicSalary').value);
//     const benefits = parseFloat(document.getElementById('benefits').value);

//        //PAYE calculation
//     const annualSalary = basicSalary * 12;
//      let paye = 0;
//      if (annualSalary <= 288000) {
//       paye = annualSalary * 0.10 / 12;
//     } else if (annualSalary <= 388000) {
//       paye = (annualSalary - 288000) * 0.25 / 12 + 400;
//     } else if (annualSalary <= 6000000) {
//       paye = (annualSalary - 388000) * 0.30 / 12 + 9400;
//     } else if (annualSalary <= 9600000) {
//       paye = (annualSalary - 6000000) * 0.325 / 12 + 221900;
//     } else {
//      paye = (annualSalary - 9600000) * 0.35 / 12 + 318950;
//    }

    //  // NHIF deduction calculation
    // const nhifDeductions = calculateNHIF(basicSalary);

    //  // NSSF deduction calculation
    //  const nssfDeductions = calculateNSSF(basicSalary);

    //  // Gross salary calculation
    // const grossSalary = basicSalary + benefits;

    // // Net salary calculation
    //  const netSalary = grossSalary - paye - nhifDeductions - nssfDeductions;

//     // Display results
//     document.getElementById('grossSalary').textContent = grossSalary.toFixed(2);
//     document.getElementById('paye').textContent = paye.toFixed(2);
//     document.getElementById('nhifDeductions').textContent = nhifDeductions.toFixed(2);
//     document.getElementById('nssfDeductions').textContent = nssfDeductions.toFixed(2);
//     document.getElementById('netSalary').textContent = netSalary.toFixed(2);

//     document.getElementById('result').style.display = 'block';
//   }

//    function calculateNHIF(grossPay) {
//    const nhifTable = [
//       { min: 0, max: 5999, deduction: 150 },
//      { min: 6000, max: 7999, deduction: 300 },
//       { min: 8000, max: 11999, deduction: 400 },
//       { min: 12000, max: 14999, deduction: 500 },
//       { min: 15000, max: 19999, deduction: 600 },
//        { min: 20000, max: 24999, deduction: 750 },
//        { min: 25000, max: 29999, deduction: 850 },
//        { min: 30000, max: 34999, deduction: 900 },
//       { min: 35000, max: 39999, deduction: 950 },
//       { min: 40000, max: 44999, deduction: 1000 },       
//       { min: 45000, max: 49999, deduction: 1100 },       
//       { min: 50000, max: 59999, deduction: 1200 },
//      { min: 60000, max: 69999, deduction: 1300 },
//       { min: 70000, max: 79999, deduction: 1400 },
//       { min: 80000, max: 89999, deduction: 1500 },
//       { min: 90000, max: 99999, deduction: 1600 },
//       { min: 100000, max: Infinity, deduction: 1700 }

//     for (const range of nhifTable) {
//        if (grossPay >= range.min && grossPay <= range.max) {
//         return range.deduction;
//        }
//     }
//    }

//   function calculateNSSF(pensionablePay) {
//     if (pensionablePay <= 7000) {
//        return pensionablePay * 0.06;
//      } else if (pensionablePay <= 36000) {
//       return pensionablePay * 0.06;
//     } else {
//       return 0;
//     }
//    }
// document.getElementById("salaryForm").addEventListener("button", function (event) {
//     event.preventDefault();

//     let basicSalary = parseFloat(document.getElementById("basicSalary").value);
//     let benefits = parseFloat(document.getElementById("benefits").value);

//     if (isNaN(basicSalary) || isNaN(benefits)) {
//         alert("Please enter valid numbers.");
//         return;
//     }

//     let salaryDetails = calculateNetSalary(basicSalary, benefits);

//     document.getElementById("result").innerHTML = `
//         <h2>Salary Details</h2>
//         <p><strong>Gross Salary:</strong> Ksh. ${salaryDetails.grossSalary.toFixed(2)}</p>
//         <p><strong>Monthly Tax:</strong> Ksh. ${salaryDetails.monthlyTax.toFixed(2)}</p>
//         <p><strong>NHIF Deduction:</strong> Ksh. ${salaryDetails.nhifDeduction.toFixed(2)}</p>
//         <p><strong>NSSF Deduction:</strong> Ksh. ${salaryDetails.nssfDeduction.toFixed(2)}</p>
//         <p><strong>Net Salary:</strong> Ksh. ${salaryDetails.netSalary.toFixed(2)}</p>
//     `;
// });
// // function calculateNetSalary(basicSalary, benefits) {
// //     // Your calculation logic here (same as previous JavaScript example)
// //     // Note: Paste the function calculateNetSalary() from the previous JavaScript example here.
// //     let basicSalary = 50000; // Example basic salary
// //     let benefits = 20000;
// // }
document.getElementById("salaryForm").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateSalary();
  });
  
  function calculateSalary() {
    const basicSalary = parseFloat(document.getElementById("basicSalary").value);
    const benefits = parseFloat(document.getElementById("benefits").value);
    
    // Tax bands
    const taxBands = [
      { amount: 24000, rate: 0.1 },
      { amount: 288000, rate: 0.25 },
      { amount: 8333, rate: 0.3 },
      { amount: 100000, rate: 0.325 },
      { amount: 467667, rate: 0.35 },
      { amount: 5600000, rate: 0.35 },
      { amount: Infinity, rate: 0.35 }
    ];
  
    // NHIF deductions
    const nhifRates = [
      { min: 0, max: 5999, deduction: 150 },
      { min: 6000, max: 7999, deduction: 300 },
      { min: 8000, max: 11999, deduction: 400 },
      { min: 12000, max: 14999, deduction: 500 },
      { min: 15000, max: 19999, deduction: 600 },
      { min: 20000, max: 24999, deduction: 750 },
      { min: 25000, max: 29999, deduction: 850 },
      { min: 30000, max: 34999, deduction: 900 },
      { min: 35000, max: 39999, deduction: 950 },
      { min: 40000, max: 44999, deduction: 1000 },
      { min: 45000, max: 49999, deduction: 1100 },       
      { min: 50000, max: 59999, deduction: 1200 },
     { min: 60000, max: 69999, deduction: 1300 },
      { min: 70000, max: 79999, deduction: 1400 },
      { min: 80000, max: 89999, deduction: 1500 },
      { min: 90000, max: 99999, deduction: 1600 },
      { min: 100000, max: Infinity, deduction: 1700 }

    ];
  
    // NSSF contributions
    const nssfTierIRate = 0.06; // Employee contribution rate for Tier I
    const nssfTierIILimit = 36000; // Monthly limit for Tier II contributions
    const nssfTierIIMax = 0.06; // Employee contribution rate for Tier II
    let nssfContribution = 0;
    
    // Calculate taxable income
    const taxableIncome = basicSalary + benefits;
    
    // Calculate tax
    let tax = 0;
    let remainingIncome = taxableIncome;
    for (const band of taxBands) {
      if (remainingIncome <= 0) break;
      const amountInBand = Math.min(remainingIncome, band.amount);
      tax += amountInBand * band.rate;
      remainingIncome -= amountInBand;
    }
  
    // Apply personal tax relief
    const personalRelief = 2400;
    tax = Math.max(0, tax - personalRelief);
    
    // Calculate NHIF deduction
    let nhifDeduction = 0;
    for (const rate of nhifRates) {
      if (taxableIncome >= rate.min && taxableIncome <= rate.max) {
        nhifDeduction = rate.deduction;
        break;
      }
    }
  
    // Calculate NSSF contributions
    const nssfTierIContribution = Math.min(basicSalary, 7000) * nssfTierIRate;
    const nssfTierIIContribution = Math.min(basicSalary, nssfTierIILimit) * nssfTierIIMax;
    nssfContribution = nssfTierIContribution + nssfTierIIContribution;
  
    // Calculate net salary
    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - tax - nhifDeduction - nssfContribution;
  
    // Display results
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
      <p><strong>Gross Salary:</strong> Ksh ${grossSalary.toFixed(2)}</p>
      <p><strong>Tax:</strong> Ksh ${tax.toFixed(2)}</p>
      <p><strong>NHIF Deduction:</strong> Ksh ${nhifDeduction.toFixed(2)}</p>
      <p><strong>NSSF Contribution:</strong> Ksh ${nssfContribution.toFixed(2)}</p>
      <p><strong>Net Salary:</strong> Ksh ${netSalary.toFixed(2)}</p>
    `;
  }
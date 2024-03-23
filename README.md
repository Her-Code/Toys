<<<<<<< HEAD
# **This is my project**
## _It is my code challenge_

---
It has 3 challenges which are:

* Student Grade Generator - 

#### [Grade Generator] ('https://github.com/Her-Code/Toys/tree/main/gradeGenerator')

* Speed Detector - 
#### [Speed Detector] ('https://github.com/Her-Code/Toys/tree/main/speedDetector')

* Net Salary Calculator - 
#### [Net Salary folder] ('https://github.com/Her-Code/Toys/tree/main/Net%20Salary')


This is Net Salary Calculator code it uses `conditional statements` AND `Variables`.

I am calculating the `net salary` (I get through calculating `NSSF,NHIF deductions  and Gross Salary`).

Under Net Salary Calculator,there are 3 files:

* index.html
* styles.css
* index.js

``` JavaScript 
let tax = 0;
    let remainingIncome = taxableIncome;
    for (const band of taxBands) {
      if (remainingIncome <= 0) break;
      const amountInBand = Math.min(remainingIncome, band.amount);
      tax += amountInBand * band.rate;
      remainingIncome -= amountInBand;
```


----
This is a Speed Detector code it uses `conditional statements`.

I am calculating the `demeritPoints`. Speed limit is `70kmh`.Every `5kmh `more you get 1 point and `12 `points gets your `license suspended`.

Under Speed Detector,there are 3 files:

* index.html
* styles.css
* index.js

``` JavaScript 
et demeritPoints = Math.floor((speed-70)/5);
    if (speed <= 70){
        document.getElementById("result").textContent = "Ok";
    }else if (demeritPoints >= 12){
        document.getElementById("result").textContent = "License suspended";
    }else{
        document.getElementById("result").textContent = "Points: " + demeritPoints ;
    }
```



----
This is a Student Grade Generator code it uses `conditional statements`.

I am calculating the `grade`. Marks are between 0-100.A > 79, B - 60 to 79, C - 59 to 49,D - 40 to 49, E - less than 40.

Under Student Grade Generator,there are 3 files:

* index.html
* styles.css
* index.js


<!-- ```Input code``` -->


---
### Author
## [@Her-Code] ('https://github.com/Her-Code')
## [@Her-Code] ('https://github.com/Her-Code')
=======
# **This is my project**
## _It is my code challenge_

---
It has 3 challenges which are:

* Student Grade Generator - 

#### [Grade Generator] ('https://github.com/Her-Code/Toys/tree/main/gradeGenerator')

* Speed Detector - 
#### [Speed Detector] ('https://github.com/Her-Code/Toys/tree/main/speedDetector')

* Net Salary Calculator - 
#### [Net Salary folder] ('https://github.com/Her-Code/Toys/tree/main/Net%20Salary')


This is Net Salary Calculator code it uses `conditional statements` AND `Variables`.

I am calculating the `net salary` (I get through calculating `NSSF,NHIF deductions  and Gross Salary`).

Under Net Salary Calculator,there are 3 files:

* index.html
* styles.css
* index.js

``` JavaScript 
let tax = 0;
    let remainingIncome = taxableIncome;
    for (const band of taxBands) {
      if (remainingIncome <= 0) break;
      const amountInBand = Math.min(remainingIncome, band.amount);
      tax += amountInBand * band.rate;
      remainingIncome -= amountInBand;
```


----
This is a Speed Detector code it uses `conditional statements`.

I am calculating the `demeritPoints`. Speed limit is `70kmh`.Every `5kmh `more you get 1 point and `12 `points gets your `license suspended`.

Under Speed Detector,there are 3 files:

* index.html
* styles.css
* index.js

``` JavaScript 
et demeritPoints = Math.floor((speed-70)/5);
    if (speed <= 70){
        document.getElementById("result").textContent = "Ok";
    }else if (demeritPoints >= 12){
        document.getElementById("result").textContent = "License suspended";
    }else{
        document.getElementById("result").textContent = "Points: " + demeritPoints ;
    }
```



----
This is a Student Grade Generator code it uses `conditional statements`.

I am calculating the `grade`. Marks are between 0-100.A > 79, B - 60 to 79, C - 59 to 49,D - 40 to 49, E - less than 40.

Under Student Grade Generator,there are 3 files:

* index.html
* styles.css
* index.js


<!-- ```Input code``` -->


---
### Author
## [@Her-Code] ('https://github.com/Her-Code')
>>>>>>> bbce5da (create a styles.css file)

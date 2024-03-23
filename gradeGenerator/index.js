//call  function
function calculateGrade(){

    // const marks = parseFloat(document.getElementById('marks').value);

    // declare variables
    let css =document.getElementById("css").value;
    let js =document.getElementById("js").value;
    let html =document.getElementById("html").value;
    let skill =document.getElementById("skill").value;
 //calculate sum
    let sum = parseFloat(html) + parseFloat(css) + parseFloat(js) + parseFloat(skill);

// return sum
    document.getElementById("demo").innerHTML =`Total mark is =${sum}`;

//declare percentage and ensure it can be reassigned
    let percentage = (sum/400*100);

//return percentage
    document.getElementById("demo").innerHTML = `Percentage is = ${percentage}`;

//introduce grade by declaring it
let grade;

//conditional statement min=0 max=100
if (percentage > 79){
    document.getElementById("demo2").innerHTML = `Excellent`;
    grade = 'A' ;
}else if(percentage >= 60){
    document.getElementById("demo2").innerHTML = `Very good`;
    grade = 'B' ;
}else if (percentage >= 50){
    document.getElementById("demo2").innerHTML = `Good`;
    grade = 'C'
}else if(percentage >= 40){
    document.getElementById("demo2").innerHTML = `Need hardwork`;
    grade = 'D' ;
}else{
    document.getElementById("demo2").innerHTML = `Fail`;
    grade = 'E'
}

//return grade
document.getElementById('demo').innerText = `Student grade: ${grade}`;
}


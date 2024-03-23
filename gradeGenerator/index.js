
function calculateGrade(){

    // const marks = parseFloat(document.getElementById('marks').value);
    let html =document.getElementById("html").value;
        css =document.getElementById("css").value;
        js =document.getElementById("js").value;
        skill =document.getElementById("skill").value;

    let sum = parseFloat(html) + parseFloat(css) + parseFloat(js) + parseFloat(skill)
   
let grade;

if (marks > 79){
    grade = 'A' ;
}else if(marks >= 60){
    grade = 'B' ;
}else if (marks >= 50){
    grade = 'C'
}else if(marks >= 40){
    grade = 'D' ;
}else{
    grade = 'E'
}

document.getElementById('result').innerText = `Student grade: ${grade}`;
}


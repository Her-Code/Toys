function calGrade(){
    const marks = parseFloat(document.getElementById('marks').value);

let grade;

document.getElementById('result').innerText = 'Student grade: ${grade}';

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
}

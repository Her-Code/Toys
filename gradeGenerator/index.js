
function calculateGrade(){

    // const marks = parseFloat(document.getElementById('marks').value);

    
    let css =document.getElementById("css").value;
    let js =document.getElementById("js").value;
    let html =document.getElementById("html").value;
    let skill =document.getElementById("skill").value;

    let sum = parseFloat(html) + parseFloat(css) + parseFloat(js) + parseFloat(skill);

    document.getElementById("demo").innerHTML =`Total mark is =${sum}`;

    let percentage = (sum/400*100);

    document.getElementById("demo").innerHTML = `Percentage is = ${percentage}`;

let grade;

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

document.getElementById('demo').innerText = `Student grade: ${grade}`;
}


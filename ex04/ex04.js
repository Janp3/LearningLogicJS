function getAverageGrade(){
    let grade1 = document.getElementById('n4').value
    let grade2 = document.getElementById('n5').value
    let result = (Number(grade1) + Number(grade2)) / 2
    showResult = document.getElementById('result04')
    if (Number(result) == 10){
        showResult.innerHTML = "You got <strong>&#34;Approved with Distinction&quot;</strong>"
    } else if (Number(grade1) > 10 || Number(grade2) > 10){
        return alert('The maximum for partial grade 10')
    } else if(Number(grade1) < 0 || Number(grade2) < 0){
        return alert('The minimum for partial is 0')
    } else if(Number(result) > 10){
        showResult.innerHTML = "The maximum grade is 10"
    } else if (Number(result) < 7){
        showResult.innerHTML = "You <strong>&#34;“Failed”&quot;</strong>"
    } else {
        showResult.innerHTML = "You got <strong>&#34;Approved&quot;</strong>"
    }


}
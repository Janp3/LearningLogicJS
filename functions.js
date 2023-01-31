/*
ex01
*/
function getHigher(){
    var a = document.getElementById('n1').value
    var b = document.getElementById('n2').value
    var result = document.getElementById('result01')
    if(Number(a) < Number(b)){
        return result.innerHTML = 'Result: ' + b
    }else {
        return result.innerHTML = 'Result: ' + a
    }
}
/*
ex02
*/
function getGender(){
    var input = document.getElementById('txt2').value.toUpperCase()
    var result02 = document.getElementById('result02')
    if (input == "M"){
        return result02.innerHTML = 'Result: Masculino'
    } else if (input == "F") {
        return result02.innerHTML = 'Result: Feminino'
    } else {
        return result02.innerHTML = 'Result: Other gender'
    }
}
/*
ex03
*/
function getVowels(){
    let letter = document.getElementById('txt3').value.toLowerCase()
    let result03 = document.getElementById('result03').value
    vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i=0; i<vowels.length;i+=1){
        if(letter == vowels[i]){
            result03.innerHTML = "Essa é uma vogal"
        } else if (letter == ''){
            alert('Digite uma letra!')
        } else {
            result03.innerHTML = "Essa é uma consoante"
        }
    }

}    
/*
ex04
*/
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
/*
ex05
*/


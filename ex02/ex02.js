function getGender(){
    var input = document.getElementById('txt2').value.toUpperCase()
    var result02 = document.getElementById('result02')
    if (input == "M"){
        return result.innerHTML = 'Result: Masculino'
    } else if (input == "F") {
        return result.innerHTML = 'Result: Feminino'
    } else {
        return result.innerHTML = 'Result: Other gender'
    }
}
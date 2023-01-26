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
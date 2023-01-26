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

function getVowels(){
    letter = document.getElementById('txt3').value
    vowels = ['a', 'e', 'i', 'o', 'u']
    for (let letter in vowels){
        console.log(letter)
    }
}
getVowels()
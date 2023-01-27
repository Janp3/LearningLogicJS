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
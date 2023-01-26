// still not working
function getVowels(){
    letter = document.getElementById('txt3').value.toLowerCase()
    let result03 = document.getElementsByName(result03)
    vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i; i < vowels.length; i++){
        if (letter[0] == vowels[i]){
            return result03.innerText = 'Sim é uma vogal'
        } else {
            return result03.innerText = 'Essa é uma consoante'
        }
    }
}
getVowels()

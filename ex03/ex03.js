// functions works but not the frontend
function getVowels(){
    let letter = document.getElementById('txt3').value.toLowerCase()
    let result03 = document.getElementById('result03')
    vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i=0; i<vowels.length;i+=1){
        if(letter == vowels[i]){
            return result03.innerHTML = "Essa é uma vogal"
        } else if (letter == ''){
            return alert('Digite uma letra!')
        } else {
            return result03.innerHTML = "Essa é uma consoante"
        }
        console.log(letter, vowels[i])
    }

}    

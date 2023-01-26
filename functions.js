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
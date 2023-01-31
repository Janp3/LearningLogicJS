function getProduct(){
    product = ''
    var p1 = document.getElementById('product1').value
    var p2 = document.getElementById('product2').value
    var p3 = document.getElementById('product3').value

    if (p1 <= p2 && p2 <= p3) {
        product = 'Buy product 1'
    } else if(p2 <= p1 && p1 <= p3) {
        product = 'Buy product 2'
    } else if (p3 <= p2 && p2<= p1) {
        product = 'Buy product 3'
    }
    else{
        product = 'Buy product 3'
    }
    return document.getElementById('result05').innerHTML = product
}
let a, b, c, x1, x2, delta;

function calc() {
    console.log('Button Pressed!');
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;

    delta = b*b - (4*a*c);
    console.log('delta =' + delta);

    if (a == 0){
        window.alert('Đây không phải phương trình bậc 2');
    }else if (delta < 0){
        document.getElementById('result').innerHTML = 'Vô nghiệm';
    }else if (delta == 0){
        x1 = -b/(2*a);
        document.getElementById('result').innerHTML = 'x1 = x2 = ' + x1;
    }else{
        x1 = (-b + Math.sqrt(delta))/(2*a);
        x2 = (-b - Math.sqrt(delta))/(2*a);
        document.getElementById('result').innerHTML = 'x1 = ' + x1 + '; x2 = ' + x2;
    }
}
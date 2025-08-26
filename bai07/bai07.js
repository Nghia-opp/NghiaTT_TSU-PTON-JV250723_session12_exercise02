let a = +prompt("nhập số a");
let b = +prompt("nhập số b");
let c = +prompt("nhập số c");

const d = b**2 - 4*a*c;

if (d > 0) {
    alert(`phương trình có 2 nghiệm phân biệt 
        x(1) = ${((-b) + Math.sqrt(d))/2*a}
        x(2) = ${((-b) - Math.sqrt(d))/2*a}  `);
} else if (d == 0 ) {
    alert(`phương trình có nghiệm kép x(1) = x(2) = ${-(b/2*a)}`);
} else {
    alert( "phương trình vô nghiệm");
}
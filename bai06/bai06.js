let a = +prompt("nhập số a");
let b = +prompt("nhập số b");

if (a == 0 && b == 0) {
    alert( "phương trình vô số nghiệm");
} else if (a == 0 && b != 0 ) {
    alert("Phương trình vô nghiệm");
} else if (a != 0 && b == 0) {
    alert("Phương trình có nghiệm x = 0");
} else {
    alert(`Phương trình có nghiệm x = ${-(b/a)}`)
}
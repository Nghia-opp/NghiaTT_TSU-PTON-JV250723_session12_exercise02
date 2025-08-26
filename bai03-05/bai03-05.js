let a = +prompt("nhập số của cạnh a(m)");
let b = +prompt("nhập số của cạnh b(m)");

let acreage = prompt("Bán muốn tính diện tích hình: Hình vuông, Hình chữ nhật, Hình tam giác vuông");

if (a > 0 && b > 0) {
    switch (acreage) {
        case "Hình vuông":
            alert(`diện tích hình vuông là ${a * a} m²`);
            break;
        case "Hình chữ nhật":
            alert(`diện tích hình chữ nhật là ${a * b} m²`);
            break;  
        case "Hình tam giác vuông":
            alert(`diện tích hình tam giác vuông là ${(a * b)/2} m²`);
            break;  
        default:
            break;
    }
} else {
    alert("Mời bạn nhập lại!!");
}
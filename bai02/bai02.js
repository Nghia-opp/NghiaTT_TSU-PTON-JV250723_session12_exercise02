let met = +prompt("nhập số mét(m) muốn đổi");

let feet = met * 0.3048 ;

if (met > 0) {
    alert(`${met}m được quy đổi bằng ${feet} ft`);
} else {
    alert("Mời bạn nhập lại số")
}
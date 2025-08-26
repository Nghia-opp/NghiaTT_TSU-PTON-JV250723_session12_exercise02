let celSius = +prompt("Mời nhập Độ C (°C) cần đổi");

let fahRenheit = (celSius * (9/5)) + 32;

if (fahRenheit >= 122 && fahRenheit <= 212) {
    console.log("Cực nóng, nguy hiểm");
} else if (fahRenheit >= 104) {
    console.log("Rất nóng, có thể gây sốt");
} else if (fahRenheit >= 93 && fahRenheit <= 98.6) {
    console.log("Nhiệt độ cơ thể bình thường");
} else if (fahRenheit >= 68) {
    console.log("Nhiệt độ phòng lý tưởng");
} else if (fahRenheit >= 50) {
    console.log("Mát lạnh");
} else if (fahRenheit >= 32) {
    console.log("Điểm đóng băng của nước");
} else {
    console.log("Lạnh sâu");
}

// if (fahRenheit >= 93) {
//     console.log("Nhiệt độ cơ thể bình thường");
//     if(fahRenheit >= 122 && fahRenheit <= 212) {
//         console.log("Cực nóng, nguy hiểm");
//     } else {
//         console.log("Rất nóng, có thể gây sốt");
//     }
// } else {
//     console.log("Nhiệt độ phòng lý tưởng");
//     if(fahRenheit >= 50) {
//         console.log("Mát lạnh");
//     }
//     else if (fahRenheit >= 32) {
//         console.log("Điểm đóng băng của nước");
//     } else {
//         console.log("Lạnh sâu");
//     }
// }
let number = +prompt("Please input your age");

if (number > 0 && number <= 120){
    if (number >= 18) {
        console.log("Bạn đủ tuổi trưởng thành");
        if (number >= 70) {
            console.log("Bạn thuộc nhóm tuổi nghỉ hưu");
        } else if (number >= 30) {
            console.log("Bạn thuộc nhóm tuổi trung niên");
        } else {
            console.log("Bạn thuộc nhóm thanh niên trẻ");
        }
        
    } else {
        if(number >= 5 && number < 18 ) {
            console.log( "Bạn là trẻ vị thành niên");
        } else {
            console.log("bạn là em bé");
            
        }
    }
} else {
    console.log("Không xác minh được tuổi của bạn, mời nhập lại");
}
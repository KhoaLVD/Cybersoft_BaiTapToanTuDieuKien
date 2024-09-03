//Kiểm tra số dương
const kiemTraSoDuong = () =>{
    let txtSoCanKiemTra = document.getElementById("soCanKiemTra").value *1;
    let result = document.getElementById("ketQuaSoDuong");
    result = "";

    if(txtSoCanKiemTra > 0){
        result+=`<div class="p-4 mb-4 text-base font-medium text-blue-800 rounded-lg bg-blue-50 text-center" role="alert">
                ${txtSoCanKiemTra} là số dương</div>`;
        ketQuaSoDuong.innerHTML = result;
    } else{
        result+=`<div class="p-4 mb-4 text-base font-medium text-red-800 rounded-lg bg-red-50 text-center" role="alert">
                ${txtSoCanKiemTra} không phải là số dương</div>`;
        ketQuaSoDuong.innerHTML = result;
    }
}
//Kiểm tra số tuổi
const kiemTraSoTuoi = () =>{
    let txtSoTuoi = document.getElementById("soTuoiCanKiemTra").value *1;
    let result = document.getElementById("ketQuaSoTuoi");
    result = "";

    if(txtSoTuoi>=6){
        result+=`<div class="p-4 mb-4 text-base font-medium text-blue-800 rounded-lg bg-blue-50 text-center" role="alert">
                Bé đủ tuổi vào lớp 1</div>`;
        ketQuaSoTuoi.innerHTML = result;
    }else if(txtSoTuoi<6 && txtSoTuoi>=0){
        result+=`<div class="p-4 mb-4 text-base font-medium text-red-800 rounded-lg bg-red-50 text-center" role="alert">
                Bé chưa đủ tuổi vào lớp 1</div>`;
        ketQuaSoTuoi.innerHTML = result;
    }else {
        result+=`<div class="p-4 mb-4 text-base font-medium text-red-800 rounded-lg bg-red-50 text-center" role="alert">
                Số tuổi không hợp lệ!</div>`;
        ketQuaSoTuoi.innerHTML = result;
    }
}

//Kiểm tra số chẵn hay lẻ
const kiemTraSoChanHayLe = () =>{
    let txtSoCanKiemTra = document.getElementById("soChanHayLe").value *1;
    let result = document.getElementById("ketQuaChanHayLe");
    result = "";

    if(txtSoCanKiemTra%2 === 0){
        result+=`<div class="p-4 mb-4 text-base font-medium text-blue-800 rounded-lg bg-blue-50 text-center" role="alert">
                ${txtSoCanKiemTra} là số chẵn</div>`;
        ketQuaChanHayLe.innerHTML = result;
    } else{
        result+=`<div class="p-4 mb-4 text-base font-medium text-red-800 rounded-lg bg-red-50 text-center" role="alert">
                ${txtSoCanKiemTra} là số lẻ</div>`;
         ketQuaChanHayLe.innerHTML = result;
    }
}

//Kiểm tra độ tuổi lái xe
const kiemTraDoTuoiLaiXe = () =>{
    let txtSoCanKiemTra = document.getElementById("soTuoiLaiXe").value *1;
    let result = document.getElementById("ketQuaLaiXe");
    result = "";

    if(txtSoCanKiemTra>=16){
        result+=`<div class="p-4 mb-4 text-base font-medium text-blue-800 rounded-lg bg-blue-50 text-center" role="alert">
                Bạn đã đủ tuổi lái xe</div>`;
        ketQuaLaiXe.innerHTML = result;
    }else if(txtSoCanKiemTra>0 && txtSoCanKiemTra<16){
        result+=`<div class="p-4 mb-4 text-base font-medium text-red-800 rounded-lg bg-red-50 text-center" role="alert">
                Bạn chưa đủ tuổi lái xe</div>`;
        ketQuaLaiXe.innerHTML = result;
    } 
    else{
        result+=`<div class="p-4 mb-4 text-base font-medium text-red-800 rounded-lg bg-red-50 text-center" role="alert">
                Số tuổi không hợp lệ</div>`;
        ketQuaLaiXe.innerHTML = result;
    }

}

//Kiểm thưởng
const kiemTraThuong = () =>{
    let txtDoanhThu = document.getElementById("doanhThu").value *1;
    let txtSanPham = document.getElementById("sanPham").value *1;
    let result = document.getElementById("ketQuaThuong");
    result = "";

    if(txtSanPham >=100){
        result+=`<div class="p-4 mb-4 text-base font-medium text-blue-800 rounded-lg bg-blue-50 text-center" role="alert">
                Nhân viên được thưởng ${txtDoanhThu *10 /100} triệu đồng</div>`;
        ketQuaThuong.innerHTML = result;
    } else {
        result+=`<div class="p-4 mb-4 text-base font-medium text-red-800 rounded-lg bg-red-50 text-center" role="alert">
                Nhân viên không có thưởng</div>`;
        ketQuaThuong.innerHTML = result;
    }
}

//Kiểm tra chiết khấu
const kiemTraChietKhau = () =>{
    let txtMuaHang = document.getElementById("muaHang").value *1;
    let result = document.getElementById("ketQuaChietKhau");
    result = "";

    if(txtMuaHang >=501){
        result+=`<div class="p-4 mb-4 text-base font-medium text-blue-800 rounded-lg bg-blue-50 text-center" role="alert">
                Số tiền bạn cần trả là ${txtMuaHang - (txtMuaHang*20/100)} đô, bạn đã được giảm 20% tổng giá trị đơn hàng</div>`;
        ketQuaChietKhau.innerHTML = result;
    } else {
        result+=`<div class="p-4 mb-4 text-base font-medium text-red-800 rounded-lg bg-red-50 text-center" role="alert">
                Số tiền bạn cần trả là ${txtMuaHang} đô, hãy mua thêm ${501-txtMuaHang} đô để được giảm 20% tổng giá trị đơn hàng nhé!</div>`;
        ketQuaChietKhau.innerHTML = result;
    }
}

//Kiểm tra mật khẩu
const kiemTraMatKhau = () =>{
    let txtMuaHang = document.getElementById("checkPass").value;
    let result = document.getElementById("ketQuaMatKhau");
    result = "";

    if(txtMuaHang.length >=8){
        result+=`<div class="p-4 mb-4 text-base font-medium text-blue-800 rounded-lg bg-blue-50 text-center" role="alert">
                Mật khẩu của bạn đủ mạnh</div>`;
        ketQuaMatKhau.innerHTML = result;
    } else{
        result+=`<div class="p-4 mb-4 text-base font-medium text-red-800 rounded-lg bg-red-50 text-center" role="alert">
                Mật khẩu của bạn không đủ mạnh</div>`;
        ketQuaMatKhau.innerHTML = result;
    }
}

//Kiểm tra khoảng điểm
const kiemTraDiem = () =>{
    let txtstudentScore = document.getElementById("studentScore").value*1;
    let result = document.getElementById("ketQuaDiem");
    result = "";

    if(txtstudentScore >=80 && txtstudentScore<=100){
        result+=`<div class="p-4 mb-4 text-base font-medium text-blue-800 rounded-lg bg-blue-50 text-center" role="alert">
                Học sinh giỏi</div>`;
        ketQuaDiem.innerHTML = result;
    } else if(txtstudentScore >=65 && txtstudentScore<80){
        result+=`<div class="p-4 mb-4 text-base font-medium text-blue-800 rounded-lg bg-blue-50 text-center" role="alert">
                Học sinh khá</div>`;
        ketQuaDiem.innerHTML = result;
    } else if(txtstudentScore >=50 && txtstudentScore<65){
        result+=`<div class="p-4 mb-4 text-base font-medium text-blue-800 rounded-lg bg-blue-50 text-center" role="alert">
                Học sinh trung bình</div>`;
        ketQuaDiem.innerHTML = result;
    } else if(txtstudentScore >=25 && txtstudentScore<50){
        result+=`<div class="p-4 mb-4 text-base font-medium text-blue-800 rounded-lg bg-blue-50 text-center" role="alert">
                Học sinh yếu</div>`;
        ketQuaDiem.innerHTML = result;
    } else if(txtstudentScore >=0 && txtstudentScore<25){
        result+=`<div class="p-4 mb-4 text-base font-medium text-blue-800 rounded-lg bg-blue-50 text-center" role="alert">
                Học sinh kém</div>`;
        ketQuaDiem.innerHTML = result;
    }else{
        result+=`<div class="p-4 mb-4 text-base font-medium text-blue-800 rounded-lg bg-blue-50 text-center" role="alert">
                Số điểm không hợp lệ</div>`;
        ketQuaDiem.innerHTML = result;
    }
}
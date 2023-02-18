function tuyenSinh() {
    var kvA = document.getElementById("khuVucA");
    var kvB = document.getElementById("khuVucB");
    var kvC = document.getElementById("khuVucC");

    var dt1 = document.getElementById("doiTuong1");
    var dt2 = document.getElementById("doiTuong2");
    var dt3 = document.getElementById("doiTuong3");

    var diemCh = document.getElementById("diemChuan").value;
    var diem1 = Number(document.getElementById("diemMon1").value);
    var diem2 = Number(document.getElementById("diemMon2").value);
    var diem3 = Number(document.getElementById("diemMon3").value);

    var diemKhuVuc = 0;

    if (kvA.selected) {
        diemKhuVuc = 2;
    } else if (kvB.selected) {
        diemKhuVuc = 1;
    } else if (kvC.selected) {
        diemKhuVuc = 0.5;
    } else {
        diemKhuVuc = 0;
    }

    var diemDoiTuong = 0;

    if (dt1.selected) {
        diemDoiTuong = 2.5;
    } else if (dt2.selected) {
        diemDoiTuong = 1.5;
    } else if (dt3.selected) {
        diemDoiTuong = 1;
    } else {
        diemDoiTuong = 0;
    }

    var tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;
    var ketQua = "";

    if (diemCh > 30 || diemCh <= 0 || diem1 < 0 || diem2 < 0 || diem3 < 0 || diem1 > 10 || diem2 > 10 || diem3 > 10) {
        alert("Có gì đó sai sai, mời nhập lại!")
    } else if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
        document.getElementById("txtTinhDiem").innerHTML = "Kêt quả: Not Pass vì có môn 0 điểm"
    } else {
        if (tongDiem >= diemCh) {
            ketQua = "Pass";
        } else {
            ketQua = "Not Pass";
        }
        document.getElementById("txtTinhDiem").innerHTML = "Kết quả: " + ketQua + ". Tổng điểm: " + tongDiem.toLocaleString();
    }
}
document.getElementById("btnTinhDiem").onclick = tuyenSinh;
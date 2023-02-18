function tinhThue() {
    var hoTen = document.getElementById("hoTen").value;
    var thuNhapNam = Number(document.getElementById("thuNhapNam").value);
    var phuThuoc = Number(document.getElementById("phuThuoc").value);

    var tnSauThue = thuNhapNam - 4e+6 - 1.6e+6 * phuThuoc;

    // Mức thu nhập
    var listThuNhap = new Array(
        60e+6,
        120e+6,
        210e+6,
        384e+6,
        624e+6,
        960e+6,
    );

    // Phần trăm thuế
    var listPhanTram = new Array(
        0.05,
        0.1,
        0.15,
        0.2,
        0.25,
        0.3,
        0.35,
    );

    // Thuế thu nhập từng mốc
    var listThue = [];


    for (var i = 0; i < listThuNhap.length; i++) {
        listThue[i] = listThuNhap[i] * listPhanTram[i];
    }
    var listThue2 = [];
    listThue2[0] = listThue[0];


    for (var i = 1; i < listThue.length; i++) {
        listThue2[i] = listThue[i] + listThue2[i - 1];
    }

    if (thuNhapNam < 10e+6 || phuThuoc < 0) {
        alert("Thu nhập 1 năm sao ít vậy, hãy nhập tiền theo ước mớ của bạn. Ước mơ càng lớn động lực càng lớn.");
    } else if (phuThuoc < 0 || Number.isInteger(phuThuoc) == false) {
        alert("Người phụ thuộc phải là 1 số nguyên dương");
    } else if (thuNhapNam <= listThuNhap[0]) {

        var thue = tnSauThue * listPhanTram[0];

    } else if (thuNhapNam <= listThuNhap[1]) {

        var thue = listThue2[0] + (tnSauThue - listThuNhap[0]) * listPhanTram[1];

    } else if (thuNhapNam <= listThuNhap[2]) {

        var thue = listThue2[1] + (tnSauThue - listThuNhap[1]) * listPhanTram[2];

    } else if (thuNhapNam <= listThuNhap[3]) {

        var thue = listThue2[2] + (tnSauThue - listThuNhap[2]) * listPhanTram[3];

    } else if (thuNhapNam <= listThuNhap[4]) {

        var thue = listThue2[3] + (tnSauThue - listThuNhap[3]) * listPhanTram[4];

    } else if (thuNhapNam <= listThuNhap[5]) {

        var thue = listThue2[4] + (tnSauThue - listThuNhap[4]) * listPhanTram[5];
    }
    if (thuNhapNam > listThuNhap[5]) {

        var thue = listThue2[5] + (tnSauThue - listThuNhap[5]) * listPhanTram[6];

    }


    document.getElementById("txtThue").innerHTML = "Họ tên: " + hoTen + " ; Thuế thu nhập cá nhân: " + new Intl.NumberFormat('vn-VN').format(thue);
}

document.getElementById("btnThue").onclick = tinhThue;
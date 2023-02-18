function tinhTienDien() {
    var chuNha = document.getElementById("chuNha").value;
    var soKw = Number(document.getElementById("soKw").value);

    // Các mốc tiêu thụ điện
    var listSumKw = new Array(
        50,
        100,
        200,
        350,
    );
    // Các mức điện có mức tiền khác nhau
    var listKw = new Array(
        50,
        50,
        100,
        150,
    );

    // Mốc tiền theo mức kw
    var listTra = new Array(
        500,
        650,
        850,
        1100,
        1300,
    );

    // Tiền phải trả ở mỗi mức
    var listTnhRieng = [];

    for (var i = 0; i < listKw.length; i++) {
        listTnhRieng[i] = listKw[i] * listTra[i];
    }
    var listTnhRieng2 = [];
    listTnhRieng2[0] = listTnhRieng[0];




    for (var i = 1; i < listTnhRieng.length; i++) {
        listTnhRieng2[i] = listTnhRieng[i] + listTnhRieng2[i - 1];
    }

    if (soKw <= 0) {
        alert("Bạn phải dùng điện thì mới tính tiền được");
    } else if (soKw <= 50) {

        var tienDien = soKw * listTra[0];

    } else if (soKw <= 100) {

        var tienDien = listTnhRieng2[0] + (soKw - listSumKw[0]) * listTra[1];

    } else if (soKw <= 200) {

        var tienDien = listTnhRieng2[1] + (soKw - listSumKw[1]) * listTra[2];

    } else if (soKw <= 350) {

        var tienDien = listTnhRieng2[2] + (soKw - listSumKw[2]) * listTra[3];

    } else if (soKw > 350) {

        var tienDien = listTnhRieng2[3] + (soKw - listSumKw[3]) * listTra[4];

    }


    document.getElementById("txtTienDien").innerHTML = "Họ tên: " + chuNha + " ; Tiền điện phải trả: " + new Intl.NumberFormat('vn-VN').format(tienDien);
}

document.getElementById("btnTienDien").onclick = tinhTienDien;
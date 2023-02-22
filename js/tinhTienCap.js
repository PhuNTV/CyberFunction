const hoaDon_nDan = 4.5;
const dichVu_nDan = 20.5;
const kenh_nDan = 7.5;

const hoaDon_dNghiep = 15;
const dichVu_dNghiep_10 = 75;
const dichVu_dNghiep_them = 5;
const kenh_dNghiep = 50;

function toggleKetNoi() {
    var kNoi = document.getElementById("ketNoi");
    var dNghiep = document.getElementById("doanhNghiep");

    if (dNghiep.selected) {
        kNoi.style.display = "block";
    } else {
        kNoi.style.display = "none";
    }
}

function kiemTraKhachHang(kh1, kh2) {
    if (kh1.selected) {
        return "nDan";
    } else if (kh2.selected) {
        return "dNghiep";
    } else {
        alert("Chưa chọn loại khách hàng!!!");
        return "";
    }
}


function tinhTienDichVu_dNghiep(soKetNoi) {
    if (soKetNoi < 0 || Number.isInteger(soKetNoi) == false) {
        alert("Số kết nối không hợp lệ!!!")
    } else if (soKetNoi >= 0 && soKetNoi <= 10) {
        return dichVu_dNghiep_10;
    } else {
        return dichVu_dNghiep_10 + (soKetNoi - 10) * dichVu_dNghiep_them;
    }
}




function tinhTienCap() {
    var nDan = document.getElementById("nhaDan");
    var dNghiep = document.getElementById("doanhNghiep");

    var maKH = document.getElementById("maKhachHang").value;
    var soKenh = Number(document.getElementById("kenh").value);
    var soKetNoi = Number(document.getElementById("ketNoi").value);
    0

    var khachHang = "";
    khachHang = kiemTraKhachHang(nDan, dNghiep);

    var tienCap = 0;

    if (soKenh < 0 || Number.isInteger(soKenh) == false) {
        alert("Số kênh cao cấp không hợp lệ!!!");
    } else {
        switch (khachHang) {
            case "nDan":
                tienCap = hoaDon_nDan + dichVu_nDan + kenh_nDan * soKenh;
                break;

            case "dNghiep":
                tienCap = hoaDon_dNghiep + tinhTienDichVu_dNghiep(soKetNoi) + kenh_dNghiep * soKenh;
                break;
            default:
                break;
        }
    }

    document.getElementById("txtTienCap").innerHTML = "Mã khách hàng: " + maKH + ". Tiền cáp: $" + new Intl.NumberFormat('en-IN').format(tienCap);

}

document.getElementById("btnTienCap").onclick = tinhTienCap;
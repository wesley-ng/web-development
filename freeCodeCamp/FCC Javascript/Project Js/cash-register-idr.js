const STATUS_KASIR = {tutup: "TUTUP", kurangDana: "KURANG_DANA", buka: "BUKA"};

function cekUangKasir(harga, uangBayar, uangKasir) {
    let mesinKasir = {status: '', kembalian: uangKasir};
    const kembalianDibutuhkan = uangBayar - harga;
    const kembalianTersedia = getTotalUangKasir(uangKasir);
    mesinKasir.status = getStatusTotalUangKasir(kembalianDibutuhkan, kembalianTersedia);

    if (mesinKasir.status === STATUS_KASIR.kurangDana) {
        mesinKasir.kembalian = [];

        return mesinKasir;
    }

    mesinKasir.kembalian = getKembalianPelanggan(kembalianDibutuhkan, uangKasir);

    if (kembalianDibutuhkan > getTotalUangKasir(mesinKasir.kembalian)){ 
        mesinKasir.status = STATUS_KASIR.kurangDana;
        mesinKasir.kembalian = [];
    }

    if (mesinKasir.status === mesinKasir.tutup) {
        mesinKasir.kembalian = [...uangKasir];
    }

    return mesinKasir;

}

function getKembalianPelanggan(kembalianDibutuhkan, uKasir) {
    const kembalian = [];
    const besaranUang = {   
        "SERATUS": 100,
        "DUA RATUS": 200,
        "LIMA RATUS": 500,
        "SERIBU": 1000,
        "DUA RIBU": 2000,
        "LIMA RIBU": 5000,
        "SEPULUH RIBU": 10000,
        "DUA PULUH RIBU": 20000,
        "LIMA PULUH RIBU": 50000,
        "SERATUS RIBU": 100000
    };

    for (let i = uKasir.length - 1; i >= 0; i--) {
        const namaUang = uKasir[i][0];
        console.log(namaUang);

        const totalUang = uKasir[i][1];
        console.log(totalUang);
        
        const nilaiUang = besaranUang[namaUang];
        console.log(nilaiUang);

        let banyakUang = (totalUang / nilaiUang);
        let uangYangDikembalikan = 0;

        while (kembalianDibutuhkan >= nilaiUang && banyakUang > 0) {
            console.log(kembalianDibutuhkan);
            kembalianDibutuhkan -= nilaiUang;
            
            console.log(banyakUang);
            banyakUang--;

            console.log(uangYangDikembalikan);
            uangYangDikembalikan++;
        }

        if (uangYangDikembalikan > 0) {
            kembalian.push([namaUang, uangYangDikembalikan * nilaiUang]);
        }
    }
    return kembalian;
}

function getStatusTotalUangKasir(kembalianDibutuhkan, kembalianTersedia) {
    if (Number(kembalianDibutuhkan) > Number(kembalianTersedia)) {
        return STATUS_KASIR.kurangDana;
    }

    if (Number(kembalianDibutuhkan) < Number(kembalianTersedia)) {
        return STATUS_KASIR.buka;
    }

    return STATUS_KASIR.tutup;
}

function getTotalUangKasir(uKasir) {
    let total = 0;
    for (let kembalian of uKasir) {
        let nilaiKembalian = kembalian[1];
        total += nilaiKembalian;
    }
    return total;
}

console.log(cekUangKasir(199900, 200000, [
    ["SERATUS", 0],
    ["DUA RATUS", 6000],
    ["LIMA RATUS", 1000],
    ["SERIBU", 5000],
    ["DUA RIBU", 10000],
    ["LIMA RIBU", 50000],
    ["SEPULUH RIBU", 100000],
    ["DUA PULUH RIBU", 180000],
    ["LIMA PULUH RIBU", 150000],
    ["SERATUS RIBU", 300000]
]));
import { API } from "../env.js";
import { getApi } from "../data.js";
import { checkSession } from "../session.js";

document.addEventListener('DOMContentLoaded', () => {

    checkSession();

    getApi(API + 'company_help_information/' + getDetailByID("id")).then( data => {
        
        const imgJob = document.getElementById('img-job');
        const titleJobDetail = document.getElementById('title-job-detail');
        const gajiJobDetail = document.getElementById('gaji-job-detail');
        const listCategoryJob = document.getElementById('list-category-job');
        const locationJob = document.getElementById('location-job');
        const kualifikasiJob = document.getElementById('kualifikasi-job');
        const contactJob = document.getElementById('contact-job');
        const descriptionJob = document.getElementById('description-job');
        const lamar = document.getElementById('lamar');
    
        imgJob.src = data.logo;
        titleJobDetail.innerText = data.nama;
        gajiJobDetail.innerText = 'Gaji Kisaran : ' + data.gaji;
        data.kategori.forEach(element => {
            let list =`<li class="mb-3"><span class="fa fa-tools fs-5 px-2"></span>${element}</li>`;
            listCategoryJob.insertAdjacentHTML("afterbegin", list);
        });
    
        locationJob.innerText = 'LOKASI : ' + data.lokasi;
        kualifikasiJob.innerText = 'KUALIFIKASI : ' + data.kualifikasi;
        contactJob.innerText = 'KONTAK : ' + data.kontak;
        descriptionJob.innerText = data.deskripsi;
    
        lamar.setAttribute('href', `mailto:${data.kontak}?subject=[BANGKIT] ${data.namaPerusahaan}: ${data.nama} Job Application&body=Dengan hormat,%0D%0A%0D%0APerkenalkan saya,%0D%0ANama : %0D%0AUmur  : %0D%0AJenis Kelamin : %0D%0APendidikan Terakhir  : %0D%0ANo. Telepon  : %0D%0A%0D%0ADengan surat lamaran ini saya mengajukan permohonan kerja di perusahaan yang Bapak/Ibu pimpin untuk menempati posisi sebagai posisi ${data.nama}. [Masukkan kelebihan dan pengalaman Anda pada posisi yang dipilih].%0D%0A%0D%0ASebagai bahan pertimbangan saya telah melampirkan beberapa berkas penting sebagai berikut:%0D%0A1. Daftar Riwayat Hidup%0D%0A2. Scan Kartu Tanda Penduduk (KTP)%0D%0A3. Scan Ijazah Terakhir%0D%0A4. Scan Surat Keterangan Dokter%0D%0A5. Pas Photo format .jpeg (1 file)%0D%0A6. Sertifikat%0D%0A5. Surat Keterangan bukti bahwa anda sebelumnya pekerja yang terkena dampak PHK(Opsional)%0D%0A%0D%0ADemikian surat lamaran kerja yang saya buat, dengan lamaran ini kami berharap agar dapat diterima di perusahaan yang Bapak/Ibu pimpin. Terima kasih.%0D%0A%0D%0AHormat saya,%0D%0A[Masukkan Nama]`);
    
    } );

});







function getDetailByID(id){
    const queryUrl = window.location.search
    const urlParams = new URLSearchParams(queryUrl)
    const getDetailID = urlParams.get(id)
    return getDetailID
}
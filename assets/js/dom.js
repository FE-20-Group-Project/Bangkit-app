
const renderInformation = data => {

    const infoKasus = document.getElementById('total-kasus');
    const infoRujukan = document.getElementById('total-rujukan');

    const totalKasus = data.reduce( (sum, item) => {
        return sum += item.kasus;
    }, 0);
    const totalRujukan = data.reduce( (sum, item) => {
        return sum += item.dirawat;
    }, 0);

    infoKasus.innerText = totalKasus;
    infoRujukan.innerText = totalRujukan;

}

const renderInformationProv = data => {
    const titleProvinsi = document.createElement('h4');
    titleProvinsi.classList.add('text-dark', 'h4-sm', 'h3-md');
    titleProvinsi.innerText = data.provinsi;

    const titleRujukan = document.createElement('h6');
    titleRujukan.classList.add('text-third', 'h5-sm', 'h4-md');
    titleRujukan.innerText = 'Dirawat';
    const dataRujukan = document.createElement('span');
    dataRujukan.classList.add('text-dark', 'fs-5', 'fw-lighter');
    dataRujukan.innerText = data.dirawat;

    const titleKasus = document.createElement('h6');
    titleKasus.classList.add('text-danger', 'h5-sm', 'h4-md');
    titleKasus.innerText = 'Kasus';
    const dataKasus = document.createElement('span');
    dataKasus.classList.add('text-dark', 'fs-5', 'fw-lighter');
    dataKasus.innerText = data.kasus;

    const card = document.createElement('div');
    card.classList.add('col-6', 'col-md-3', 'm-3', 'text-center', 'border', 'border-danger', 'p-3', 'rounded');

    card.append(titleProvinsi, titleRujukan,  dataRujukan, titleKasus,  dataKasus);

    return card;
      
}

const renderArticle = article => {

        // Make Row
        const row = document.createElement('div');
        // Add class to row
        row.classList.add('row', 'd-flex', 'justify-content-center', 'justify-content-sm-start', 'flex-wrap', 'mb-3');

        // Make img column
        const colImg = document.createElement('div');
        // Add class to img column
        colImg.classList.add('col-10', 'col-md-3', 'm-2');
        // Add img element
        const img = document.createElement('img');
        // Add attribute src to img
        img.setAttribute('src', article.image);
        // Add class to img element
        img.classList.add('w-100', 'h-100', 'rounded');

        // Append img to column img
        colImg.append(img);

        // Add description column
        const colDesc = document.createElement('div');
        // Add class to description column
        colDesc.classList.add('col-10', 'col-md-8', 'm-2');
        // Add title element
        const title = document.createElement('a');
        // Add class to title element
        title.classList.add('fw-semibold', 'text-danger', 'h3', 'd-block');
        // Add attribute href to title
        title.setAttribute('href', article.link_url);
        title.setAttribute('target', '_blank');
        // Insert text to title element
        title.innerText = article.title;

        // Add publisher element
        const publish = document.createElement('small');
        // Insert text to publisher element
        publish.innerText = article.createdAt;

        // Add description element
        const description = document.createElement('p');
        // Add class to description
        description.classList.add('flex-wrap');
        // Insert text to description element
        description.innerText = article.description;

        // Append title, publish, description to nested column of description
        colDesc.append(title, publish, description);

        //Append column img & column description to row
        row.append(colImg, colDesc);

        return row;


}

const renderJobList = (list) => {
    //make card
    const card = document.createElement('div');
    card.classList.add('col-10', 'col-sm-4', 'col-md-3', 'p-2', 'shadow-md', 'border-start', 'border-third',  'border-5', 'm-3', 'rounded', 'd-flex', 'flex-column', 'justify-content-between');
    // Teks
    const title = document.createElement('h5');
    title.classList.add('text-primary');
    title.innerText = list.nama;
    //make card-body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'p-1');
    //company label
    const nameCompanyTitle = document.createElement('small');
    nameCompanyTitle.classList.add('mb-1', 'd-block', 'text-primary', 'fw-semibold');
    nameCompanyTitle.innerText = "Perusahaan :";
    //company text
    const nameCompanyText = document.createElement('p');
    nameCompanyText.innerText = list.namaPerusahaan;

    //description label
    const typeJobs = document.createElement('small');
    typeJobs.classList.add('mb-1', 'd-block', 'text-primary', 'fw-semibold');
    typeJobs.innerText = "Jenis Pekerjaan :";
    //description text
    const typeJobsText = document.createElement('p');
    typeJobsText.innerText = list.jenisPekerjaan;

    cardBody.append(nameCompanyTitle, nameCompanyText, typeJobs, typeJobsText);

    const rowBtn = document.createElement('div');
    rowBtn.classList.add('row', 'w-100', 'text-center');
    const btn = document.createElement('a');
    btn.classList.add('btn', 'btn-sm', 'btn-primary', 'ms-3');
    const font = document.createElement('span');
    font.classList.add('fa', 'fa-info', 'fs-5', 'mx-2');
    btn.append(font);
    btn.innerHTML += "Lihat Info"

    btn.setAttribute('href', '../../view/detailLowongan.html' + '?id=' + list.id);
    rowBtn.append(btn);

    card.append(title, cardBody, rowBtn);

    return card;
}


export { renderInformation, renderInformationProv, renderArticle, renderJobList };
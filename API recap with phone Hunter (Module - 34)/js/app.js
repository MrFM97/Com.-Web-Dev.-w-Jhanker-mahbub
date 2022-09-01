const loadPhones = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}

const displayPhones = (phones, dataLimit) => {
    const phonesContainer = document.getElementById('phoneContainer');
    phonesContainer.innerText = ''; //textContent also allowed
    // display 10 phones only
    const showAll = document.getElementById('showAll');
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none');
    }

    // display no phones found
    const noPhone = document.getElementById('noPhoneMessage');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none');
    }
    else {
        noPhone.classList.add('d-none');
    }
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-5">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
                <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
            </div>
          </div>`;
        phonesContainer.appendChild(phoneDiv);
        // 

    });
    // stop spinner or loader
    toggleSpinner(false);
}

const processSearch = (dataLimit) => {
    // start loader
    toggleSpinner(true);
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}

// handle search button click

document.getElementById('btnSearch').addEventListener('click', function () {
    processSearch(10);
});

// search input field enter click handler
document.getElementById('searchField').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch(10);
    }
});    // search input field   enter keyup handler 

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }
}

// Not the best way to handle this, but doing this for API limitations

document.getElementById('btnShowAll').addEventListener('click', function () {

    processSearch();
});

const loadPhoneDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url);
    const data = await res.json(); // JSON.parse(response  .json() 
    displayPhoneDetails(data.data);
}

const displayPhoneDetails = phone => { 
    console.log(phone);
    const modalTitle = document.getElementById('phoneDetailModalLabel');
    modalTitle.innerText = phone.name;
    const phoneDetails = document.getElementById('phoneDetails');   
    phoneDetails.innerHTML = `<p>release Date : ${phone.releaseDate ? phone.releaseDate : 'No release date found'}</p>
    <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.sorage : 'No storage information found'}</p>
    <p>Others : ${phone.others ? phone.others.Bluetooth : 'No Bloototh devices found'}</p>`
}

loadPhones('apple');
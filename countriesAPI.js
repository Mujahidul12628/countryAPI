const getAllData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(json => getData(json))
}

const getData = (data) => {
    console.log(data);
    const mainContainer = document.getElementById('mainContainer')
    for (const countryData of data) {
        console.log(countryData.cca2);
        const dataItem = document.createElement('div');
        dataItem.classList.add('dataClass')
        dataItem.innerHTML = `
        <h3>Name:${countryData.name.common}</h3>
        <h5>Capital:${countryData.capital ? countryData.capital[0] : 'no capital'}</h5>
        <button onclick="getItemData('${countryData.cca2}')" class="btn_reload">Click for data</button>
        `;
        mainContainer.appendChild(dataItem);


    }

}
const getItemData = (countryCode) => {
    console.log(countryCode);
    const url = `https://restcountries.com/v3.1/alpha/${countryCode}`
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(countryData => showCountryData(countryData[0]))
}
const showCountryData = (showData) => {
    console.log(showData.name.common);
    const itemSection = document.getElementById('specificDataShow');
    itemSection.innerHTML = `
    <h3>Country:${showData.name.common}</h3>
    <img src="${showData.flags.png}">
    `
}
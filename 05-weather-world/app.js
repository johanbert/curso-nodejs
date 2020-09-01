const place = require('./place/place');
const weather = require('./weather/weather');
const optionsYargs = {
    address: {
        demand: true,
        alias: 'a',
        desc: 'Direccion de la ciudad para obtener el clima'
    }
}
const argv = require('yargs').options(optionsYargs).argv;

const getInfo = async(address) => {
    try {
        const coords = await place.getPlaceLatLng(address);
        const temp = await weather.getWeather(coords.lat, coords.lng);
        return `El clima de ${coords.address} es de ${ temp }`
    } catch (error) {
        console.log(`No se pudo determinar el clima de ${coords.address}`);
    }
}

getInfo(argv.address)
    .then(console.log)
    .catch(console.log)
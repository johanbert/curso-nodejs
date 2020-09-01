const axios = require('axios');
const apiKey = 'd32cbc04fb3b4ddd560fca027ff48bcd';

const getWeather = async(lat, lng) => {
    // const encodeUrl = encodeURI(addressToFind)
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`);

    return res.data.main.temp
}

module.exports = {
    getWeather
};
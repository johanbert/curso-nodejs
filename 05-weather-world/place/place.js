const axios = require('axios');
const getPlaceLatLng = async(addressToFind) => {
    const encodeUrl = encodeURI(addressToFind)
    const instance = axios.create({
        baseURL: `https://geocode.xyz?locate=${encodeUrl}&auth=537106526258704545995x127518&json=1`,
        // headers: { 'x-rapidapi-host': 'aa2464bdfdmshe681dc4a2cf268cp14efacjsn07222ab69238' }
    });


    const res = await instance.get();
    if (res.data.matches) {
        throw new Error(`No hay resultados para ${addressToFind}`)
    }
    const address = res.data.standard.city;
    const lat = res.data.latt
    const lng = res.data.longt
        // .then((res) => {
        //         console.log(res.data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

    return {
        address,
        lat,
        lng
    }
}

module.exports = {
    getPlaceLatLng
};
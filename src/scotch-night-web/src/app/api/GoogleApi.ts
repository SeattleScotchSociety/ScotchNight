export default class GoogleApi {
    public async getLocationDataAsync(address: string) {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDyxSigzGBK0sr5JjNaEJlHk9grFZuBkE0`, {
            method: "get"
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((geoData: any) => {
                if (!geoData) {
                    return;
                }

                return geoData.results[0].geometry.location;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
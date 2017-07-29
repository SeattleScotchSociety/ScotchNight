export const getAllBottles = () => {
    return fetch('https://scotchnightapi.azurewebsites.net/api/bottles', {
        Accept: 'application/json'
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return null;
        })
        .then(bottles => {
            if (!bottles) {
                return;
            }

            return bottles;
        })
        .catch(error => {
            console.log(error);
        });
};

export const addBottle = (bottle) => {
    return fetch('https://scotchnightapi.azurewebsites.net/api/bottles', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bottle)
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
        })
        .catch(error => {
            console.log(error);
        });
};

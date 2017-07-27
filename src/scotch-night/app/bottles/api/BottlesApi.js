import Bottles from './Bottles';

export const getAllBottles = () => {
    return Bottles;
    // fetch('https://scotchnightapi.azurewebsites.net/api/bottles', {
    //     Accept: 'application/json'
    // })
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(bottles => {
    //         if (!bottles) {
    //             return;
    //         }

    //         return bottles;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
};

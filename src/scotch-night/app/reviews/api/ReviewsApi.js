import Reviews from '../Reviews';

export const getAllReviews = () => {
    return Reviews;

    // fetch('http://seattlescotchsocietyscotchnightapi20170429083006.azurewebsites.net/api/bottles', {
    //     Accept: 'application/json'
    // })
    //     .then(response => response.json())
    //     .then(bottles => {
    //         if (!bottles) {
    //             return;
    //         }

    //         this.setState({ bottles });
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
};
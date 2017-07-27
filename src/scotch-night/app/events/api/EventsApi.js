export const getAllEvents = () => {
    return fetch('https://scotchnightapi.azurewebsites.net/api/events', {
        Accept: 'application/json'
    })
        .then(response => response.json())
        .then(events => {
            if (!events) {
                return;
            }

            return events;
        })
        .catch(error => {
            console.log(error);
        });
};

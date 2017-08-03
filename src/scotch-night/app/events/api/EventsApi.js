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

export const updateEvent = (event) => {
    return fetch('https://scotchnightapi.azurewebsites.net/api/events', {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
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

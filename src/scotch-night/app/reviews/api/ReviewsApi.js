export const getReviews = (bottleId) => {
    return fetch(`https://scotchnightapi.azurewebsites.net/api/notes/bottle/${bottleId}`, {
        method: 'get',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(reviews => {
            if (!reviews) {
                return;
            }

            return reviews;
        })
        .catch(error => {
            console.log(error);
        });
};

export const addReview = (review) => {
    return fetch('https://scotchnightapi.azurewebsites.net/api/notes', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(review => {
            if (!review) {
                return;
            }

            return review.id;
        })
        .catch(error => {
            console.log(error);
        });
};
export const getReviews = (bottleId) => {
    return fetch(`https://scotchnightapi.azurewebsites.net/api/notes/summary/${bottleId}`, {
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
        .then(summaryReview => {
            if (!summaryReview) {
                return;
            }

            return summaryReview;
        })
        .catch(error => {
            console.log(error);
        });
};

export const getMemberReview = (memberId) => {
    return fetch(`https://scotchnightapi.azurewebsites.net/api/notes/member/${memberId}`, {
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
        .then(review => {
            if (!review) {
                return;
            }

            return review;
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
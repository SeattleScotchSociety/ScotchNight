const events = [
    {
        id: 1,
        date: '5/30/2017',
        title: 'The First',
        location: 'Phillabaums',
        public: false,
        description: 'The very first Seattle Scotch Society night. Join us for scotch and pizza!'
    },
    {
        id: 2,
        title: 'The Second',
        date: '8/5/2017',
        location: 'Fixs',
        public: false,
        description: `The first was a success, now let's keep them coming... onto our second scotch night!`,
        menu: [
            {
                id: 1,
                distillery: 'Aberlour',
                name: `A'bunadh`,
                who: 'Louis',
                notes: {
                    rating: 3.4,
                    finish: 80,
                    fruity: 30,
                    vanilla: 20,
                    smoky: 10,
                    citrus: 99,
                    oily: 10,
                    peppery: 50
                },
                memberNotes: {
                    finish: 80
                }
            },
            {
                id: 2,
                distillery: 'Grangestone',
                name: '21yr Single Malt',
                who: 'Travis',
                notes: {
                    rating: 3.4,
                    finish: 80,
                    fruity: 30,
                    vanilla: 20,
                    smoky: 10,
                    citrus: 99,
                    oily: 10,
                    peppery: 50
                },
                memberNotes: {
                    thoughts: 'This stuff is amazing!'
                }
            }
        ]
    }
];
export default events;

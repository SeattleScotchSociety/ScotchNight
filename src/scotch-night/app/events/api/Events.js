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
                who: 'Louis'
            },
            {
                id: 2,
                distillery: 'Grangestone',
                name: '21yr Single Malt',
                who: 'Travis'
            }
        ]
    }
];
export default events;

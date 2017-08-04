const bottles = [
    {
        id: 1,
        distillery: 'Westland',
        name: 'Peated',
        description: 'I bought this because I like smoke.',
        bottleUrl: 'http://www.westlanddistillery.com/whiskey/peated-malt',
        distilleryUrl: 'http://www.westlanddistillery.com',
        bottleImageUrl: 'http://www.westlanddistillery.com/assets/media/whiskeys/5e4a5c3c6cdbfabdcf67941c83f9e7d9.jpg',
        member: 'adamb0mb',
        memberRatings: [
            { member: 'Shannon Andrews', rating: '4', notes: 'Reminds me of my trip to Islay' },
            { member: 'Travis Merkel', rating: '5', notes: 'I own 27 bottles of this!' }
        ],
        notes: {
            rating: 3.4,
            finish: 80,
            fruity: 30,
            vanilla: 20,
            smokey: 10,
            citrus: 99,
            oily: 10,
            peppery: 50
        },
        memberNotes: {
            finish: 80,
            thoughts: 'Here are some notes'
        }
    },
    { id: 2, distillery: 'Laphroaig', name: '18 Year', member: 'tmerkel' }
];
export default bottles;

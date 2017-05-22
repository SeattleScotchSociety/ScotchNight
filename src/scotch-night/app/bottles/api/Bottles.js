const bottles = [
    {
        id: 1,
        distillery: 'Westland',
        name: 'Peated',
        description: 'I bought this because I like smoke.',
        bottleUrl: 'http://www.westlanddistillery.com/whiskey/peated-malt',
        distilleryUrl: 'http://www.westlanddistillery.com',
        bottleImageUrl: 'http://www.westlanddistillery.com/assets/media/whiskeys/5e4a5c3c6cdbfabdcf67941c83f9e7d9.jpg',
        member: 'Adam Phillabaum',
        memberRatings: [
            { member: 'Shannon Andrews', rating: '4', notes: 'Reminds me of my trip to Islay' },
            { member: 'Travis Merkel', rating: '5', notes: 'I own 27 bottles of this!' }
        ]
    },
    { id: 2, distillery: 'Laphroaig', name: '18 Year' }
];
export default bottles;
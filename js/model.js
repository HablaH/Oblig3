const model = {
    app: {
        currentPoll: null,
        loggedInUser: 'per',
        currentPage: 'createPoll',
    },

    users: [
        { username: 'per', name: 'Per', password: '123' },
        { username: 'pål', name: 'Pål', password: '123' },
        { username: 'espen', name: 'Espen', password: '123', isAdmin: true },
    ],

    inputs: {
        createPoll: {
            pollId: null,
            newAlternative: '',
            question: '',
            options: [],
            votes: {},
            usersCanAddAlternatives: true,
        },
    },

    polls: [
        {
            pollId: 1,
            question: 'Hvem er den tøffeste læreren ved GET Academy?',
            options: ['Geir', 'Eskil', 'Terje'],
            usersCanAddAlternatives: true,
            votes: {espen: 'Terje', pål: 'Eskil'},
        },
        {
            pollId: 2,
            question: 'Hvor bor Harald?',
            options: ['Oslo', 'Kviteseid', 'Etiopia'],
            usersCanAddAlternatives: false,
            votes: { per: 'Oslo', espen: 'Oslo', pål:'Kviteseid',},
        },
    ],
};

/*
    Hvilke andre måter kunne vi lagret stemmene på?
        - Hva er best for å legge til nye stemmer?
        - Hva er best for å endre stemmer?
        - Hva er best for å telle opp stemmer?

    Hvordan ville det blitt om hvert alternativ var et objekt, med en id?
*/
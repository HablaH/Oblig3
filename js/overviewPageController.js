function filterPollsByCurrentPoll() {
    return model.polls.filter(poll => poll.pollId === model.app.currentPoll);
}

function selectPoll(pollIndex) {
    //const pageInputs = model.inputs.createPoll;
    const polls = model.polls;
    //model.inputs.createPoll = getCurrentPoll();
    //model.inputs.createPoll['newAlternative'] = [''];
    model.inputs.createPoll.pollId = polls[pollIndex].pollId;
    model.inputs.createPoll.question = polls[pollIndex].question;
    model.inputs.createPoll.options = polls[pollIndex].options;
    model.inputs.createPoll.votes = polls[pollIndex].votes;
    model.inputs.createPoll.usersCanAddAlternatives = polls[pollIndex].usersCanAddAlternatives;

    changePage('createPoll');
    model.app.currentPoll = polls[pollIndex].pollId;
}

function createPollList() {
    let bla = model.polls.length;
    const polls = model.polls;
    let pollList = ``;
    for (let i = 0; i < bla; i++) {
        pollList += `<li onclick="selectPoll(${i})">Poll ${polls[i].pollId}: ${polls[i].question} </li>`
    };
    return pollList;
}
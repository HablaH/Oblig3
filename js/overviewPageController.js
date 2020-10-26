const checkPolls = model.polls.length;
const polls = model.polls;

function filterPollByPollId() {
    model.polls.filter(poll => poll.pollId);
}

function selectPoll(i) {
    model.app.currentPoll = i;
    model.inputs.createPoll = getCurrentPoll();
    model.inputs.createPoll['newAlternative'] = '';
    changePage('createPoll');
}

function createPollList() {
    let pollList = ``;
    for (let i = 0; i < checkPolls; i++) {
        pollList += `<li onclick="selectPoll(${polls[i].pollId})">Poll ${polls[i].pollId}: ${polls[i].question} </li>`
    };
    return pollList;
}
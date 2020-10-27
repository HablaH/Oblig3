function createOrUpdatePoll() {
    const inputObj = model.inputs.createPoll;
    const pollIdChoice = (inputObj.pollId === null) ? model.polls.length + 1 : inputObj.pollId;
    const currentPoll = filterPollsByCurrentPoll();

    if (currentPoll.length !== 1) {
        model.polls.push({
            pollId: pollIdChoice,
            question: inputObj.question,
            options: [...inputObj.options],
            usersCanAddAlternatives: inputObj.usersCanAddAlternatives,
            votes: { ...inputObj.votes },
        });
    }
    else {
        currentPoll[0].question = inputObj.question;
        currentPoll[0].options = [...inputObj.options];
        currentPoll[0].usersCanAddAlternatives = inputObj.usersCanAddAlternatives;
        currentPoll[0].votes = { ...inputObj.votes };
    }

    updateView();
}

function addAlternative() {
    const inputObj = model.inputs.createPoll;
    inputObj.options.push(inputObj.newAlternative);
    updateView();
}
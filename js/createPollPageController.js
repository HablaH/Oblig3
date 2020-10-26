function createOrUpdatePoll() {
    const inputObj = model.inputs.createPoll;

    model.polls.push({
        pollId: inputObj.pollId,        
        question: inputObj.question,
        options: [...inputObj.options],
        usersCanAddAlternatives: inputObj.usersCanAddAlternatives,
        votes: { ...inputObj.votes},
    });

    updateView();
}

function addAlternative() {
    inputObj.options.push(inputObj.newAlternative);
    updateView();
}
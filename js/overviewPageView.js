


function updateViewOverview() {
    model.app.currentPoll = null;
    document.getElementById('app').innerHTML = `
        <h1>Oversikt over unders&oslash;kelser<h1>
        <ul>${createPollList()}</ul>
    `;
}
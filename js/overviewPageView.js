


function updateViewOverview() {
    document.getElementById('app').innerHTML = `
        <h1>Oversikt over unders&oslash;kelser<h1>
        <ul>${createPollList()}</ul>
    `;
}
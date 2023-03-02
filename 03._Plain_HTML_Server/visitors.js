/* here write a fetch that gets the visitor count and shows it in #visitor-count */

fetch('http://localhost:8080/api/visitors')
.then(response => response.json())
.then(result => {
    updateVisitorCount(result.data)
});

function updateVisitorCount(visitorCount) {
    const visitorCount = document.getElementById("visitor-count");
    visitorCountDiv.innerText = visitorCount;
}

/* assignment
1. when a button is clicked update the visitor count with PUT
2. and then call updateVisitorCount */


function writeInVisitorLog() {
fetch("api/visitors, {
    method = "PUT"
    headers {
        "Content-type": "application/json"
    }
    ")

}
/*
task
step 1: fetch tanks
step 2: console log tanksBonus: Add them to the div: <tanks-wrapper></tanks-wrapper>
*/

fetch('http://localhost:8080/api/tanks')
.then(response => response.json())
.then(result => {
    const tanksWrapperDiv = document.getElementById("tanks-wrapper");

    result.data.forEach(tank => {
        const tankDiv = document.createElement("div");
        tankNameP.innerText = tank.name || "No name";
        tankDiv.appendChild(tankNameP);

        const tankName = document.createElement("p");

        tankName.innerText = tank.name;

        tankDiv.appendChild(tankName);

        tanksWrapperDiv.appendChild(tankDiv);

    })
})
    


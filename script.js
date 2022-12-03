const url = 'https://mengyue-z.github.io/CS601_HW5_Zhang/my_degrees.json';

document.getElementById("fetch-btn").onclick = () => {
        fetchData(url);
}

function fetchData(url) {
        //fetch request
        fetch(url, {
                method: 'GET',
                headers: {
                        'Accept': 'application/json',
                },

        })
                //checking response code
                .then((response) => {
                        console.log(response.status);

                        //print Status Code to page
                        const statusMessage = document.createTextNode("Response Code: " + response.status);
                        document.getElementById("status-code").appendChild(statusMessage);

                        return response.json();
                })
                //process returned data and print to page
                .then((data) => {
                        console.log(data);

                        const degrees = data.my_degrees;
                        for (var i = 0; i < degrees.length; i++) {
                                let school = degrees[i].degree.school;
                                let major = degrees[i].degree.major;
                                let type = degrees[i].degree.type;
                                let year = degrees[i].degree.year_conferred;
                                printDegrees(school, major, type, year);
                        }

                })
                .catch((error) => {
                        console.log(error);
                });
}

//print degree data to html page
function printDegrees(school, major, type, year) {
        const dataDiv = document.createElement("div");
        const schoolP = document.createElement("p");
        const majorP = document.createElement("p");
        const degreeP = document.createElement("p");
        const yearP = document.createElement("p");

        let schoolName = document.createTextNode("School Name: " + school);
        let majorName = document.createTextNode("Major: " + major);
        let degreeType = document.createTextNode("Degree Type: " + type);
        let yearAchieved = document.createTextNode("Year Conferred: " + year);

        schoolP.append(schoolName);
        majorP.append(majorName);
        degreeP.append(degreeType);
        yearP.append(yearAchieved);
        dataDiv.append(schoolP);
        dataDiv.append(majorP);
        dataDiv.append(degreeP);
        dataDiv.append(yearP);

        dataDiv.setAttribute("class", "data");
        document.getElementById("data-box").appendChild(dataDiv);
}


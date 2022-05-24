async function loadDatesIntoHead() {
     const response = await fetch('http://localhost:3000/api/events/');
     const info = await response.json();
     console.log(info);

     const response2 = await fetch('http://localhost:3000/api/attendees/');
     const attendees = await response2.json();
     console.log(attendees);

     for (let i = 0; i < info.length; i++) {
        let events = document.createElement("section");
        let body = document.querySelector('body');
        body.appendChild(events);

        let h2 = document.createElement('h2');
        events.appendChild(h2);
        h2.innerHTML = info[i].name;
        
        let h3 = document.createElement('h3');
        events.appendChild(h3);
        h3.innerHTML = info[i].description;

        let h4 = document.createElement('h4');
        events.appendChild(h4);
        h4.innerHTML = "-" + info[i].author;

        let tableEvents = document.createElement('table');
        events.appendChild(tableEvents);
        let tablesDate = info[i].dates;

        let rowForHead = document.createElement('thead');
        tableEvents.appendChild(rowForHead);

        let blankForNames = document.createElement('th');
        rowForHead.appendChild(blankForNames);
        blankForNames.innerHTML = "Attendees";



        let tableBody = document.createElement('tbody');
        tableEvents.appendChild(tableBody);

        let tableInput = document.createElement('tr')
        tableBody.appendChild(tableInput)

        let tableInputUserName = document.createElement('td')
        tableInput.appendChild(tableInputUserName)
        let inputForUserName = document.createElement('input')
        inputForUserName.className = "newName"
        tableInputUserName.appendChild(inputForUserName)




        for (let j = 0; j < info[i].dates[0].attendees.length; j++) {
            let tableRowAttendees = document.createElement('tr');
            let td = document.createElement('td');
            tableBody.appendChild(tableRowAttendees);
            tableRowAttendees.appendChild(td)

            td.innerText=info[i].dates[0].attendees[j].name;
            let tablesAvailable = info[i].dates[0].attendees;    
            
            


            for (const {date} of tablesDate) {
                console.log(date)
                let tableHeader = document.createElement('th');
                rowForHead.appendChild(tableHeader);
                tableHeader.innerHTML= date;
                for (const {available} of tablesAvailable) {
                    console.log(available)
                    let tableAttendees = document.createElement('td')
                    tableRowAttendees.appendChild(tableAttendees)
                    tableAttendees.innerHTML = available;
                    

                }

                let tableInputUser = document.createElement('td')
                tableInput.appendChild(tableInputUser)
                let inputForUser = document.createElement('input')
                inputForUser.className = "newAvailability"
                tableInputUser.appendChild(inputForUser)
                
            } 

        }


    };


}

loadDatesIntoHead();

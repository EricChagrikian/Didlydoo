

// function getEvents() {
// fetch('http://localhost:3000/api/events/')
//   .then(response => response.json())
//   .then(data => console.log(data));

//     for (let i = 0; i < data.length; i++) {
//         const dates = data[i].dates;
        
//     }
// };
// getEvents()


 async function loadDatesIntoHead(url) {
     const response = await fetch(url);
     const info = await response.json();
     console.log(info);

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
        h4.innerHTML = info[i].author;

        let tableEvents = document.createElement('table');
        events.appendChild(tableEvents);
        let tablesDate = info[i].dates;

        let rowForHead = document.createElement('thead');
        tableEvents.appendChild(rowForHead);

        let blankForNames = document.createElement('th');
        rowForHead.appendChild(blankForNames);
        blankForNames.innerHTML = "Attendees";
        
        for (const {date} of tablesDate) {
            console.log(date)
            let tableHeader = document.createElement('th');
            rowForHead.appendChild(tableHeader);
            tableHeader.innerHTML= date;
        } 
    };
}

// async function loadNamesIntoBody(url, table) {
//     const tableBody = table.querySelector('tbody');
//      const response = await fetch(url);
//      const info = await response.json();

//      console.log(info);
// };  



// async function loadIntoTable(url, table) {
//     const tableH = table.querySelector('thead')
//     const tableB = table.querySelector('tbody')
//     const response = await fetch(url)
//     const dates = await response.json();
//     tableH.innerHTML = "<tr></tr>";
//     tableB.innerHTML = "";
//     console.log(events)

//     for (const headerText of dates) {
//         const headerElement = document.createElement("th");

//         headerElement.textContent = headerText
//         tableHead.querySelector("tr").appendChild(headerElement);
//     }

//     for (const row of names) {
//         const rowElement = document.createElement("tr");

//         for (const cellText of row) {
//             const cellElement = document.createElement("td");

//             cellElement.textContent = cellText;
//             rowElement.appendChild(cellElement);
//         }

//         tableBody.appendChild(rowElement)
//     }
// }

// loadIntoTable("http://localhost:3000/", document.querySelector('table'));
loadDatesIntoHead("http://localhost:3000/api/events/", document.querySelector('table'));
loadNamesIntoBody("http://localhost:3000/api/attendees/", document.querySelector('table'));




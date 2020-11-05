// LEVEL 1

// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

// Reference to table body
var tbody = d3.select("tbody");

tableData.forEach(ufoEvent => {

    var row = tbody.append('tr');

    Object.values(ufoEvent).forEach(value => {

        row.append('td').text(value);

    });

})
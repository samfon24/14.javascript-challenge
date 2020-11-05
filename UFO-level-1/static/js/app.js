// LEVEL 1

// from data.js
var tableData = data;

// PART 1:

// YOUR CODE HERE!
console.log(tableData);

// Reference to table body
var tbody = d3.select("tbody");

tableData.forEach(ufoEvent => {

    var row = tbody.append('tr');

    Object.values(ufoEvent).forEach(value => {

        row.append('td').text(value);

    });

});

// PART 2:

var button = d3.select("#filter-btn");

// When button is clicked
button.on("click", function() {
    var ifStatement = 1

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // console.log(inputElement);

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Filter
    var filteredData = tableData.filter(ufoEvent => ufoEvent.datetime == inputValue);
    
    console.log(filteredData);

    if (ifStatement == 1) {

        delTable = tbody.html("");

    };

    // Reference to table body
    var tbody = d3.select("tbody");

    // Repopulate Table with Filtered Data
    filteredData.forEach(ufoEventFiltered => {

        var row = tbody.append('tr');

        Object.values(ufoEventFiltered).forEach(value => {

        row.append('td').text(value);
    
        });

    });
    
});
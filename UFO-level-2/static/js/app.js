// LEVEL 2

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

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    var inputCityElement = d3.select("#string1");

    // console.log(inputElement);

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var inputCityValue = inputCityElement.property("value");

    // Filter
    var filteredData = tableData.filter(ufoEvent => ufoEvent.datetime == inputValue);
    
    var filteredDataCity = tableData.filter(ufoEvent => ufoEvent.city == inputCityValue);
    
    console.log(filteredDataCity > 0);
    
    // Delete Table
    if (filteredData.length > 0) {
        let tbody = d3.select('tbody')
        delTable = tbody.html("");
        d3.select("table").append('tbody')

        // Repopulate Table with Filtered Data
        filteredData.forEach(ufoEventFiltered => {

            var row = tbody.append('tr');

            Object.values(ufoEventFiltered).forEach(value => {

            row.append('td').text(value);
            
            });
        });
    }
    else if (filteredDataCity.length > 0){
        let tbody = d3.select('tbody')
        delTable = tbody.html("");
        d3.select("table").append('tbody')

        // Repopulate Table with Filtered Data
        filteredData.forEach(ufoEventFiltered => {

            var row = tbody.append('tr');

            Object.values(ufoEventFiltered).forEach(value => {

            row.append('td').text(value);
            
            });
        });

    }
    else {
        let tbody = d3.select('tbody')
        delTable = tbody.html("")
        d3.select("table").append('tbody')
    }
});
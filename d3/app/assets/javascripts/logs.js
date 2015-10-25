$(document).ready(function() {

// create objects containing colors and data for each allergen

	// var colors = {
	// 	milk: '#e74c3c',
	// 	eggs: '#e67e22',
	// 	peanuts: '#f1c40f',
	// 	treeNuts: '#1abc9c',
	// 	soy: '#2ecc71',
	// 	wheat: '#3498db',
	// 	fish: '#9b59b6',
	// 	shellfish: '#34495e'
	// }

	var colors = ['#e74c3c', '#e67e22', '#f1c40f', '#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e']

	var positiveData = {
		milk: $('.milk.yes').html(),
		eggs: $('.eggs.yes').html(),
		peanuts: $('.peanuts.yes').html(),
		treeNuts: $('.tree_nuts.yes').html(),
		soy: $('.soy.yes').html(),
		wheat: $('.wheat.yes').html(),
		fish: $('.fish.yes').html(),
		shellfish: $('.shellfish.yes').html()
	};

	var negativeData = {
		milk: $('.milk.no').html(),
		eggs: $('.eggs.no').html(),
		peanuts: $('.peanuts.no').html(),
		treeNuts: $('.tree_nuts.no').html(),
		soy: $('.soy.no').html(),
		wheat: $('.wheat.no').html(),
		fish: $('.fish.no').html(),
		shellfish: $('.shellfish.no').html()
	};

	// Use D3 to update the DOM and make colors for each data point

	// for (var food in negativeData) {

	// 	d3.select("#no-symptoms-area")
	// 	   .append("svg")
	// 	   .attr("width", 30 * negativeData[food])
	// 	   .attr("height", 30 * negativeData[food])
	// 	   .append("circle")
	// 	   .attr("cx", 15 * negativeData[food])
	// 	   .attr("cy", 15 * negativeData[food])
	// 	   .attr("r", 15 * negativeData[food])
	// 	   .style("fill", colors[food])
	// 	   .append("p").text(negativeData[food])
	// }

	// for (var food in positiveData) {

	// 	d3.select("#symptoms-area")
	// 	   .append("svg")
	// 	   .attr("width", 30 * positiveData[food])
	// 	   .attr("height", 30 * positiveData[food])
	// 	   .append("circle")
	// 	   .attr("cx", 15 * positiveData[food])
	// 	   .attr("cy", 15 * positiveData[food])
	// 	   .attr("r", 15 * positiveData[food])
	// 	   .style("fill", colors[food]);
	// }


	// Test using data binding

	// For symptoms
	var positiveDataArray = []; 

	for (var food in positiveData) { // push data from object literal into array in order
		positiveDataArray.push(positiveData[food])
	}

	var symptomsSVG = d3.select("#symptoms-area").append("svg") // make SVG for +
																								.attr("width", '800px')
																								.attr("height", '200px')

	var posCircles = symptomsSVG.selectAll("circle") // bind data
													 .data(positiveDataArray)
													 .enter()
													 .append("circle")

	var posCircleAttributes = posCircles
												    .attr("cx", function (d, i) {return (i * 100) + 30})
		  									    .attr("cy", function (d) {return d * 15})
		  									    .attr("r", function (d) {return d * 15})
		  									    .style("fill", function(d, i) {
		  									    	return colors[i];
		  									  	})

	// For non-symptoms
	var negativeDataArray = [];

	for (var food in negativeData) { // Create array of just data numbers in order
		negativeDataArray.push(negativeData[food])
	}

	// Create SVG container element

	var noSymptomsSVG = d3.select("#no-symptoms-area").append("svg")
																									  .attr("width", '800px')
																									  .attr("height", '200px')

	// Create empty circles and bind data to each circle within the SVG container

	var negCircles = noSymptomsSVG.selectAll("circle")
														 .data(negativeDataArray)
														 .enter()
														 .append("circle")


	// Set attributes of each circle from above variable

	var negCircleAttributes = negCircles
												  	.attr("cx", function (d, i) {return (i * 100) + 30})
		  									  	.attr("cy", function (d) {return d * 15})
		  									  	.attr("r", function (d) {return d * 15})
		  									  	.style("fill", function(d, i) {
				  									 	return colors[i];
		  									  	})

})
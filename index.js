//Sets the diameter of the svg
var diameter = 660;
//Sets the format
var format = d3.format(",d");
//Sets the color scheme
var color = d3.scaleOrdinal(d3.schemeCategory20c);

//Selects svg from document
var svg = d3.select('.chart-wrapper').append('svg')
  .attr("width", diameter)
  .attr("height", diameter);

//Selects a section from the document and add a div
var tooltip = d3.select(".chart-wrapper")
  .append("div")
  .attr("class", "tool-tip");

// create a new circle-packing layout
var bubble = d3.pack()
  .size([diameter, diameter])
  .padding(1.5);

//Get a tab-separated values (TSV) file.
d3.tsv("languages.tsv", function(data) {
    data.speakers = +data.speakers;
    if (data.speakers) return data;
  },
  function(error, classes) {
    if (error) throw error;
    // Constructs a root node from hierarchical data
    var root = d3.hierarchy({
        children: classes
      })
      //evaluate and aggregate quantitative values.
      .sum(function(data) {
        return data.speakers;
      })
      .each(function(data) {
        if (id = data.data.language) {
          var id, i = id.lastIndexOf(".");
          data.id = id;
          data.package = id.slice(0, i);
          data.class = id.slice(i + 1);
        }
      });

    //Select multiple elements from the document.
    var node = svg.selectAll(".node")
      .data(bubble(root).leaves())
      .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(data) {
        return "translate(" + data.x + "," + data.y + ")";
      })
      //Shows on mouseover the data of selected element
      .on("mouseover", function(data) {
        tooltip.text(data.class + ": " + format(data.value));
        tooltip.style("visibility", "visible");
      })
      .on("mousemove", function() {
        return tooltip.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
      })
      .on("mouseout", function() {
        return tooltip.style("visibility", "hidden");
      });

    //Append circle to the root node and adds some atrributes
    node.append("circle")
      .attr("id", function(data) {
        return data.id;
      })
      .attr("r", function(data) {
        return data.r;
      })
      //Fill the circles with the colors from the data package
      .style("fill", function(data) {
        return color(data.package);
      })
      //On mouseover decrease the opacity on selected circle
      .on("mouseover", function(data) {
        this.style.opacity = 0.85;
      })
      .on("mouseout", function(data) {
        this.style.opacity = 1;
      });

    //Append a clipping path to the root node and adds some atrributes
    node.append("clipPath")
      .attr("id", function(data) {
        return "clip-" + data.id;
      })
      .append("use")
      .attr("xlink:href", function(data) {
        return "#" + data.id;
      });

    //Append text with the language to the root node
    node.append("text")
      .attr("clip-path", function(data) {
        return "url(#clip-" + data.id + ")";
      })
      .selectAll("tspan")
      .data(function(data) {
        return data.class.split(/(?=[A-Z][^A-Z])/g);
      })
      .enter().append("tspan")
      .attr("x", 0)
      .attr("y", function(d, i, nodes) {
        return 13 + (i - nodes.length / 2 - 0.5) * 10;
      })
      .text(function(data) {
        return data;
      });
  });

// Based on http://bl.ocks.org/mmattozzi/7018021 and https://bl.ocks.org/mbostock/4063269

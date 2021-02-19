
var file_address = "user_data/username_20210208_144835.json";
var data;

$.getJSON(file_address, function (json) {
    //console.log(json); // this will show the info it in firebug console
    data = json;
    console.log(data);
    console.log(data['image_path']);

    var data_image_path = data['image_path'];
    var data_log_data = data['save_list'];
    console.log(data_image_path);
    console.log(data_log_data);

    var log_data_x = [];
    var log_data_y = [];


    var x = d3.scaleLinear()
        .domain([0, data['screen_width']])
        .range([- data['pic_offset'].left, data['screen_width'] - data['pic_offset'].left]);

    var y = d3.scaleLinear()
        .domain([0, data['screen_height']])
        .range([- data['pic_offset'].top, data['screen_height']- data['pic_offset'].top]);


    d3.select('#image_container')
    .append("img")
        .attr("src", data_image_path)
        .attr("width", data['pic_width'])
        .attr("height", data['pic_height']);


    d3.select("#id_graph")
        .append("svg")
        .attr("width", data['pic_width'])
        .attr("height", data['pic_height'])
        .append("g")
        .selectAll("dot")
        .data(data_log_data)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return x(d.x * data['screen_width']); })
        .attr("cy", function (d) { return y(d.y * data['screen_height'] ); })
        .attr("r", "3.5px")
        .style("fill", "#d30000"); // color is red

});

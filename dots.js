
var w = d3.select('.canvas').node().clientWidth,
    h = d3.select('.canvas').node().clientHeight;


//marital dots
var drawDots_1=d3.dotsDraw().target(62).race("BLACK");
var drawDots_2=d3.dotsDraw().target(20).race("WHITE");
d3.select('#plot2').append('g').call(drawDots_1);
d3.select('#plot2').append("g").call(drawDots_2);

//teen pregnancy dots
var drawDots_3=d3.dotsDraw().target(63).race("BLACK");
var drawDots_4=d3.dotsDraw().target(30).race("WHITE");
d3.select('#plot3').append('g').call(drawDots_3);
d3.select('#plot3').append("g").call(drawDots_4);

//education
var drawDots_5=d3.dotsDraw().target(57).race("BLACK");
var drawDots_6=d3.dotsDraw().target(44).race("WHITE");
d3.select('#plot4').append('g').call(drawDots_5);
d3.select('#plot4').append("g").call(drawDots_6);

//Medicaid
var drawDots_7=d3.dotsDraw().target(20).race("BLACK");
var drawDots_8=d3.dotsDraw().target(80).race("WHITE");
d3.select('#plot5').append('g').call(drawDots_7);
d3.select('#plot5').append("g").call(drawDots_8);


var drawDots_9=d3.dotsDraw().target(20).race("BLACK");
var drawDots_10=d3.dotsDraw().target(80).race("WHITE");
d3.select('#plot6').append('g').call(drawDots_9);
d3.select('#plot6').append("g").call(drawDots_10);

var drawDots_11=d3.dotsDraw().target(69).race("BLACK");
var drawDots_12=d3.dotsDraw().target(33).race("WHITE");
d3.select('#plot7').append('g').call(drawDots_11);
d3.select('#plot7').append("g").call(drawDots_12);



//
//queue()
//    .defer(d3.csv,'data.csv',parse)
//    .await(dataLoaded);
//
//
//function parse(d) {
//    return {
//        number: d.number-1,
//        visible: +d.visible
//    }
//}
//
//
//function dataLoaded(error, data) {
//    console.log("data",data);
//
//}
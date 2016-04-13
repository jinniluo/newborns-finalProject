/**
 * Created by KiniLuo on 4/10/16.
 */


d3.dotsDraw = function ()
{
//this is a wrapper function
    //default internal virables
    var w=400,
        h=400,
        target=40,
        race,
        r= 4;

    //this is the function that later get returned
    //started to draw a chart
    function exports(_selection)
    {
        w=200,
        h=350;
        _selection.each(draw);
    }



    //draw function
    function draw(d)
    {
        //create newArray for data
        var newArray=[];
        for (var i=0;i<100;i++)
        {
            if(i<target){newArray.push({number: i, visibility:1})}
            else{newArray.push({number: i, visibility:0})}
        }
        console.log("newArray",newArray);
        var data=newArray;



    //Let's draw the dots
        //1.append svg
        var svg = d3.select(this).append("svg")
            .attr('class', 'plots')
            .attr('width',w)
            .attr('height',h);


        //2.data join
        var nodes=svg.append('g')
            .attr("class","dots").attr("transform","translate("+10+","+10+")")
            .selectAll('.circle').attr("class","circles-data-point")
            .data(data);

        //3.create initial circle object enter
        nodes
            .enter()
            .append('circle')
            .attr('class', 'circles-data-point')
            .style('fill-opacity', '0.5')
            //.attr('cx', function (d) {return  20+Math.random() * 20})
            .attr('cy', 0)
            .attr("r",r);

        //4.transit
        nodes
            .attr('fill', "black")
            .attr('cx', function (d) {return (d.number % 10) * 10})
            .transition()
            .delay(function (d) {return d.number * 10})
            .duration(function (d) {return (800 - d.number * 0.5)})
            .attr('cy', function (d) {return 200 - 10 * Math.floor(d.number / 10)})
            .style('fill-opacity', function (d) {
                if (d.visibility == 1) {customOpacity = 1}
                else {customOpacity = 0.5}
                return customOpacity
            });


    //let's draw the percentage
        //2.data join
        var percentage=svg.append('g')
            .attr("class","text").attr("transform","translate("+10+","+0+")")
            .selectAll('.percentage').data(data);
        //var percentage=svg1.selectAll('.percentage').data(data);

        //3.enter percentage
        percentage
            .enter()
            .append("text")
            .attr("class","number")
            .attr("x", 0)
            .attr("y", 250)
            .attr("font-family", "Raleway")
            .attr("font-size", "20px")
            .attr("fill", "black")
            .style('fill-opacity', '0')
            .html(function (d) {return d.number +" "+race });

        //4.percentage transition
        percentage
            .transition()
            .duration(0.5)
            .delay(function (d, i) {
                return i / 100 * 2025;
            })
            .style('fill-opacity', function (d, i) {if (i <= target) {return 1;} else {return 0;}});

        percentage
            .transition()
            .duration(0.2)
            .delay(function (d, i) {return i / 100 * 2125;})
            .style('fill-opacity', function (d, i) {if (i == target) {return 1;} else {return 0;}});


    }

    //export
    exports.target = function(_t)
    {
        if(!arguments.length) return target;
        target = _t;
        return this;
    }
    exports.race = function(_r)
    {
        if(!arguments.length) return race;
        race = _r;
        return this;
    }


    return exports;
};
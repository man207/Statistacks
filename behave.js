$("nav a").bind("click", function(e) {
    console.log("zart");
    e.preventDefault();
    var id = $(this).data("section");
      $("#content section:visible").fadeOut().promise().done(function(){$(id).fadeIn();})
      
});

var screenerExit = document.getElementById("screenerExit");

screenerExit.addEventListener( "click", e => {
  window.close();
 } );

function generatedata() {
    n = 0;
    m=1000;
    for (let index = 0; index < m; index++) {
        x = Math.random();
        y = Math.random();
        point = {
            x:x,
            y:y
        };
        distance = Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
        if (distance < 1) {
         scatterChart.data.datasets[0].data.push(point);
         n++;
        }
        else {
         scatterChart.data.datasets[1].data.push(point);
        }
        
    
    }
    scatterChart.update();
    $('#pinumber').text(n*4/m);
}


var ctx = document.getElementById('piChart');
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Inside',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            backgroundColor: 'rgba(54, 162, 235, 1)',
            data: []
        },{
            label: 'Outside',
            borderColor: 'rgba(255, 159, 64, 0.2)',
            backgroundColor: 'rgba(255, 159, 64, 1)',
            data: []
        }]
    },
    options: {
        animation:{
            duration:5000,
            easing : 'easeInOutQuad'
        },
        scales: {
            xAxes: [{
                ticks: {
                    min : 0,
                    max : 1,
                },
                type: 'linear',
                position: 'bottom'
            }],
            yAxes: [{
                ticks: {
                    min : 0,
                    max : 1,
                },
                type: 'linear'
            }]

        }
    }
});
generatedata();


var calc = document.getElementById("calc");

calc.addEventListener( "click", e => {

    scatterChart.data.datasets[0].data = [];
    scatterChart.data.datasets[1].data = [];
    n = 0;
    m = $('#pointnum').val();

    if (m > 2000) {
        scatterChart.options.animation.duration = 0;
    }
    else {
        scatterChart.options.animation.duration = 2000;
    }
    for (let index = 0; index < m; index++) {
        x = Math.random();
        y = Math.random();
        point = {
            x:x,
            y:y
        };
        distance = Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
        if (distance < 1) {
         scatterChart.data.datasets[0].data.push(point);
         n++;
        }
        else {
         scatterChart.data.datasets[1].data.push(point);
        }
        
    
    }
    scatterChart.update();
    $('#pinumber').text(n*4/m);
});






var ctx = document.getElementById('coinChart');
var coinChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20],
        datasets: [{
            label: 'Number of Heads',
            data: [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20],
            backgroundColor: 'rgba(255, 156, 116, 0.2)',
            borderColor: 'rgba(255, 156, 116, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    min : 0,
                    max : 20,
                },
                type: 'linear'
            }]

        }
    }
});





function tossACoin(n){
    o = 0;
    for (let index = 0; index <= n; index++) {
        m = Math.random();
        if (m >= 0.5) {
            console.log("yay");
            o++;
        }
    }
    return o;
}



var toss = document.getElementById("toss");
toss.addEventListener( "click", e => {
    outcome = [];
    for (let index = 0; index < 20; index++) {
        coinChart.data.datasets[0].data[index]=(tossACoin(index));
    }
    coinChart.update();
});

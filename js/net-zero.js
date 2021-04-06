
// window.addEventListener("load", function(){
//     document.getElementById('macroeconomics-bttn').onclick = function() {
//         alert("button was clicked");
//     }​;​
// });

Highcharts.chart('figure-rc-1', {
    chart: {
        styledMode: true
    },

    title: {
        text: 'Electricity Generation in the Northern Territories in 2018'
    },

    series: [{
        type: 'pie',
        allowPointSelect: true,
        data: [{
            name: 'Hydro',
            y: 11.84,
            color: '#52B4E0'
            },{
            name: 'Oil',
            y: 10.85,
            color: '#EA751F'
            },{
            name: 'Natural Gas',
            y: 4.67,
            color: '#7F1A32'
            }
        ],
        showInLegend: true
    }]
});

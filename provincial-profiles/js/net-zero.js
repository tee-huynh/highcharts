
// window.addEventListener("load", function(){
//     document.getElementById('macroeconomics-bttn').onclick = function() {
//         alert("button was clicked");
//     }​;​
// });

Highcharts.chart('figure-rc-1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Electricity Generation in the Northern Territories in 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Yukon',
        type: 'pie',
        colorByPoint: true,
        data: [{
            name: 'Hydro',
            y: 94,
            color: '#52B4E0'
        }, {
            name: 'Oil',
            y: 6,
            color: '#EA751F'
        }],
        center: [200, 140],
        size: 190
    },
    {
        name: 'NWT',
        colorByPoint: true,
        type: 'pie',
        data: [{
            name: 'Hydro',
            y: 53,
            color: '#52B4E0'
        }, {
            name: 'Oil',
            y: 40,
            color: '#EA751F'
        }, {
            name: 'Natural Gas',
            y: 4,
            color: '#7F1A32'
        }, {
            name: 'Wind',
            y: 4,
            color: '#BCDDF5'
        }],
        center: [550, 140],
        size: 200
    },
    {
        name: 'Nunavut',
        type: 'pie',
        colorByPoint: true,
        data: [{
            name: 'Oil',
            y: 100,
            color: '#EA751F'
        }],
        center: [900, 140],
        size: 150
    }]
});

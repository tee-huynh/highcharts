
// window.addEventListener("load", function(){
//     document.getElementById('macroeconomics-bttn').onclick = function() {
//         alert("button was clicked");
//     }​;​
// });

window.onscroll = function() {
    myFunction();
};


var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};


function myFunction() {
    var macroeconomicBttn = document.getElementById("macroeconomics-bttn");
    var energyDemandBttn = document.getElementById("energy-demand-bttn");
    var crudeOilBttn = document.getElementById("crude-oil-bttn");
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        if (navbar.classList.contains("sticky") && $('#macroeconomics').isInViewport()){
            macroeconomicBttn.classList.add("active");
            energyDemandBttn.classList.remove("active");
            crudeOilBttn.classList.remove("active");
        }
        else if (navbar.classList.contains("sticky") && $('#energy-demand').isInViewport()){
            energyDemandBttn.classList.add("active");
            macroeconomicBttn.classList.remove("active");
            crudeOilBttn.classList.remove("active");
        }
        else if (navbar.classList.contains("sticky") && $('#crude-oil').isInViewport()){
            energyDemandBttn.classList.remove("active");
            macroeconomicBttn.classList.remove("active");
            crudeOilBttn.classList.add("active");
        }
    } 
    else {
        navbar.classList.remove("sticky");
        var macroeconomicBttn = document.getElementById("macroeconomics-bttn");
        macroeconomicBttn.classList.remove("active");
        energyDemandBttn.classList.remove("active");
        crudeOilBttn.classList.remove("active");
    }
}

Highcharts.chart('figure-r-1', {

    title: {
        text: 'GDP Decreases Sharply in 2020 and Rebounds'
    },

    yAxis: [{ // Primary yAxis
        format: '{value}%',
        title: {
            text: 'Canadian Annual GDP Growth Rate'
        },
        min: -8,
        max: 6,
        tickInterval: 2,
        opposite: true

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Trillion Real 2012 C$'
        },
        min: 1.80,
        max: 2.30,
        tickInterval: 0.1
    }],

    xAxis: {
        accessibility: {
            rangeDescription: 'Year'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2018
        }
    },

    series: [{
        name: 'Total GDP (Value)',
        data: [-0.09, -0.2, -3.7, -0.95, 0.8, 2.2, 3, 3.8],
        color: '#FFBE4B'
    }, {
        name: 'Canadian GDP Growth Rate (Right Axis)',
        data: [2.2, 1.8, -5, 3.9, 2.6, 2.2, 2.3, 2.1],
        color: '#054169'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('figure-r-2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'End-use Demand Declines in All Sectors in the Evolving Scenario'
    },
    xAxis: {
        categories: ['Residential', 'Commercial', 'Industrial', 'Transportation', 'Total End-Use']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '1990 to 2018',
        data: [0.4, 1.6, 1.5, 1.4, 1.3],
        color: '#FF821E'
    }, {
        name: '2019 to 2050 - Evolving',
        data: [-0.5, -0.5, -0.7, -0.8, -0.7],
        color: '#FFBE4B'
    }, {
        name: '2019 to 2050 - Reference',
        data: [0.2, 0.4, 0.5, -0.4, 0.3],
        color: '#054169'
    }]
});

Highcharts.chart('figure-r-3', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'End-Use Energy Consumption Peaks in 2019 and Declines over the Long Term in the Evolving Scenario'
    },
    xAxis: {
        categories: ['2005', '2010', '2015', '2020', '2025', '2030', '2035', '2040', '2045', '2050'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Petajoules (PJ)'
        }
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'Transportation',
        data: [10500, 10100, 11000, 11500, 11900, 11500, 11000, 10500, 10200, 9900],
        color: '#871455'
    },{
        name: 'Industrial',
        data: [8000, 7800, 8500, 9000, 8900, 8800, 8700, 8400, 8000, 7800],
        color: '#FF821E'
    },{
        name: 'Commercial',
        data: [3000, 2900, 3000, 3100, 3000, 3000, 3000, 3000, 3000, 3000],
        color: '#054169'
    },{
        name: 'Residential',
        data: [1700, 1700, 1700, 1900, 1700, 1700, 1700, 1700, 1700, 1700],
        color: '#FFBE4B'
    }]
});

Highcharts.chart('figure-r-3-b', {
    chart: {
        type: 'column'
      },
    title: {
        text: 'Short-Term Year-Over-Year Change in End-Use Demand (PJ)'
    },
    xAxis: {
        categories: ['2019', '2020', '2021', '2022', '2023']
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Residential',
        data: [50, 100, -100, -10, -5],
        color: '#FFBE4B'
    }, {
        name: 'Commercial',
        data: [100, -210, 180, 5, -10],
        color: '#054169'
    }, {
        name: 'Industrial',
        data: [-50, -550, 420, 50, -15],
        color: '#FF821E'
    }, {
        name: 'Transportation',
        data: [-75, -900, 610, 175, -20],
        color: '#871455'
    }]
});


const figureR4 = Highcharts.chart('figure-r-4', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'End-Use Energy Consumption Peaks in 2019 and Declines over the Long Term in the Evolving Scenario'
    },
    xAxis: {
        categories: ['2005', '2010', '2015', '2020', '2025', '2030', '2035', '2040', '2045', '2050'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Petajoules (PJ)'
        }
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'Other',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        color: '#A0A0A1'
    },{
        name: 'Biofuels',
        data: [100, 200, 100, 100, 100, 100, 100, 120, 100, 100],
        color: '#1D7131'
    },{
        name: 'RPPs and NGLs',
        data: [100, 200, 100, 100, 50, 25, 25, 20, 15, 20],
        color: '#ED789C'
    },{
        name: 'Natural Gas',
        data: [600, 700, 600, 800, 700, 650, 600, 550, 525, 525],
        color: '#7C1933'
    },{
        name: 'Electricity',
        data: [500, 600, 600, 700, 700, 750, 775, 800, 850, 850],
        color: '#E4445E'
    },{
        name: 'Diesel',
        data: [0],
        color: '#9D4E1D'
    },{ 
        name: 'Gasoline',
        data: [0],
        color: '#EA751F'
    }]
});

var select = document.getElementById('select');

function getType() {
    switch (select.value) {
        case 'commercial':
            figureR4.update({
                series: [{
                    name: 'Other',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    color: '#A0A0A1'
                },{
                    name: 'Biofuels',
                    data: [0, 0, 0, 0, 100, 100, 100, 120, 100, 100],
                    color: '#1D7131'
                },{
                    name: 'RPPs and NGLs',
                    data: [100, 200, 100, 10, 50, 25, 25, 20, 15, 20],
                    color: '#ED789C'
                },{
                    name: 'Natural Gas',
                    data: [100, 700, 600, 400, 700, 650, 600, 550, 525, 525],
                    color: '#7C1933'
                },{
                    name: 'Electricity',
                    data: [500, 600, 600, 400, 700, 750, 775, 800, 850, 850],
                    color: '#E4445E'
                },{
                    name: 'Diesel',
                    data: [0],
                    color: '#9D4E1D'
                },{ 
                    name: 'Gasoline',
                    data: [0],
                    color: '#EA751F'
                }]
            });
          break;
          case 'industrial':
            figureR4.update({
                series: [{
                    name: 'Other',
                    data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
                    color: '#A0A0A1'
                },{
                    name: 'Biofuels',
                    data: [100, 200, 100, 100, 100, 100, 100, 120, 100, 100],
                    color: '#1D7131'
                },{
                    name: 'RPPs and NGLs',
                    data: [100, 200, 100, 100, 50, 25, 25, 20, 15, 20],
                    color: '#ED789C'
                },{
                    name: 'Natural Gas',
                    data: [600, 700, 600, 800, 700, 650, 600, 550, 525, 525],
                    color: '#7C1933'
                },{
                    name: 'Electricity',
                    data: [500, 600, 600, 700, 700, 750, 775, 800, 850, 850],
                    color: '#E4445E'
                },{
                    name: 'Diesel',
                    data: [0],
                    color: '#9D4E1D'
                },{ 
                    name: 'Gasoline',
                    data: [0],
                    color: '#EA751F'
                }]
            });
            break;
            case 'transportation':
            figureR4.update({
                series: [{
                    name: 'Electric',
                    data: [0, 0, 0, 0, 25, 50, 100, 125, 150, 200],
                    color: '#E4445E'
                },{
                    name: 'Hydrogen',
                    data: [0, 0, 0, 0, 0, 0, 0, 25, 50, 100],
                    color: '#52B4E0'
                },{
                    name: 'Biofuels',
                    data: [0, 25, 50, 50, 50, 100, 100, 100, 100, 100],
                    color: '#207334'
                },{
                    name: 'Other',
                    data: [100, 100, 100, 50, 100, 100, 100, 100, 100, 100],
                    color: '#A0A0A1'
                },{
                    name: 'Jet Fuel',
                    data: [300, 300, 300, 100, 300, 300, 300, 300, 300, 300],
                    color: '#46524F'
                },{
                    name: 'Diesel',
                    data: [700, 700, 700, 600, 700, 700, 700, 700, 700, 700],
                    color: '#9D4E1D'
                },{
                    name: 'Gasoline',
                    data: [1300, 1300, 1300, 1200, 1300, 1100, 1000, 900, 800, 600],
                    color: '#EA751F'
                }]
            });
            break;
            case 'residential':
            figureR4.update({
                series: [{
                    name: 'Other',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    color: '#A0A0A1'
                },{
                    name: 'Biofuels',
                    data: [100, 200, 100, 100, 100, 100, 100, 120, 100, 100],
                    color: '#1D7131'
                },{
                    name: 'RPPs and NGLs',
                    data: [100, 200, 100, 100, 50, 25, 25, 20, 15, 20],
                    color: '#ED789C'
                },{
                    name: 'Natural Gas',
                    data: [600, 700, 600, 800, 700, 650, 600, 550, 525, 525],
                    color: '#7C1933'
                },{
                    name: 'Electricity',
                    data: [500, 600, 600, 700, 700, 750, 775, 800, 850, 850],
                    color: '#E4445E'
                },{
                    name: 'Diesel',
                    data: [0],
                    color: '#9D4E1D'
                },{ 
                    name: 'Gasoline',
                    data: [0],
                    color: '#EA751F'
                }]
            });
            break;
    }
}

select.addEventListener('change', getType, false);

Highcharts.chart('figure-r-5', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Primary Demand Gradually Declines and Renewables Account For a Larger Share in the Evolving Scenario'
    },
    xAxis: {
        categories: ['2005', '2010', '2015', '2020', '2025', '2030', '2035', '2040', '2045', '2050'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'PJ'
        }
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'Renewables',
        data: [400, 400, 400, 400, 400, 400, 400, 400, 500, 500],
        color: '#1D7131'
    },{
        name: 'Nuclear',
        data: [500, 500, 500, 500, 500, 500, 500, 500, 500, 500],
        color: '#6F2F81'
    },{
        name: 'Hydro',
        data: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
        color: '#52B4E0'
    },{
        name: 'Natural Gas',
        data: [4000, 4000, 5000, 4000, 4000, 4000, 4000, 4000, 4000, 4000],
        color: '#7D1933'
    },{
        name: 'RPPs and NGLs',
        data: [5000, 4000, 4500, 4000, 4500, 4000, 3000, 2500, 2000, 2000],
        color: '#F1919D'
    },{
        name: 'Coal',
        data: [1100, 1000, 800, 600, 100, 50, 25, 25, 25, 25],
        color: '#46524F'
    },{
        type: 'spline',
        name: 'Total - Reference Scenario',
        data: [13000, 12100, 13800, 13000, 14000, 14000, 14200, 14500, 15000, 15200],
        color: '#1D375A'
    }]
});


$(function() {
    "use strict";


    // chart 1

    // var options = {
    //     series: [{
    //         name: "Net Sales",
    //         data: [4, 10, 25, 12, 25, 18, 40, 22, 7]
       
    //     },
    
    //     {
    //         name: "Other Sales",
    //         data: [100, 13, 27, 22, 65, 19, 40, 28, 7]
    //     }

    
    // ],


        
    //     chart: {
    //         //width:150,
    //         height: 105,
    //         type: 'area',
    //         sparkline: {
    //             enabled: !0
    //         },
    //         zoom: {
    //             enabled: false
    //         }
    //     },
    //     dataLabels: {
    //         enabled: false
    //     },
    //     stroke: {
    //         width: 1.7,
    //         curve: 'smooth'
    //     },
    //     fill: {
    //         type: 'gradient',
    //         gradient: {
    //             shade: 'dark',
    //             gradientToColors: ['#02c27a'],
    //             shadeIntensity: 1,
    //             type: 'vertical',
    //             opacityFrom: 0.5,
    //             opacityTo: 0.0,
    //             //stops: [0, 100, 100, 100]
    //         },
    //     },

    //     // colors: ["#02c27a"],
    //     colors: ["#02c27a", "#ffffff"], 
    //     tooltip: {
    //         theme: "dark",
    //         fixed: {
    //             enabled: !1
    //         },
    //         x: {
    //             show: !1
    //         },
    //         y: {
    //             title: {
    //                 formatter: function(e) {
    //                     return ""
    //                 }
    //             }
    //         },
    //         marker: {
    //             show: !1
    //         }
    //     },
    //     xaxis: {
    //         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    //     }
    // };

    // var chart = new ApexCharts(document.querySelector("#chart1"), options);
    // chart.render();

    // var options = {
    //     series: [
    //         {
    //             name: "Current Data",
    //             data: [4, 10, 25, 12, 25, 18, 40, 22, 7]
    //         },
    //         {
    //             name: "Stable",
    //             data: [100, 13, 27, 22, 65, 19, 40, 28, 7]
    //         }
    //     ],
    //     chart: {
    //         //width:150,
    //         height: 200, // Increased height for better visibility
    //         type: 'area',
    //         sparkline: {
    //             enabled: true
    //         },
    //         zoom: {
    //             enabled: false
    //         }
    //     },
    //     dataLabels: {
    //         enabled: false
    //     },
    //     stroke: {
    //         width: 1.7,
    //         curve: 'smooth'
    //     },
    //     fill: {
    //         type: 'gradient',
    //         gradient: {
    //             shade: 'dark',
    //             gradientToColors: ['#02c27a'],
    //             shadeIntensity: 1,
    //             type: 'vertical',
    //             opacityFrom: 0.5,
    //             opacityTo: 0.0,
    //             //stops: [0, 100, 100, 100]
    //         },
    //     },
    //     colors: ["#02c27a", "#ffffff"], // Adjust colors as needed
    //     tooltip: {
    //         theme: "dark",
    //         fixed: {
    //             enabled: false
    //         },
    //         x: {
    //             show: false
    //         },
    //         y: {
    //             title: {
    //                 formatter: function(e) {
    //                     return ""
    //                 }
    //             }
    //         },
    //         marker: {
    //             show: false
    //         }
    //     },
    //     xaxis: {
    //         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    //         labels: {
    //             show: true // Ensure x-axis labels are visible
    //         }
    //     },
    //     legend: {
    //         show: true, // Display legend
    //         labels: {
    //             colors: ['#ffffff', '#02c27a'] // White for stable, green for current
    //         }
    //     }
    // };
    
    // var chart = new ApexCharts(document.querySelector("#chart1"), options);
    // chart.render();
    


    var options = {
        series: [
            {
                name: "Stable Metrics",
                data: [100, 85, 85, 85, 85, 85, 85, 85, 85],
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.0,
                        stops: [0, 100],
                    },
                    colors: function({ value, seriesIndex, dataPointIndex, w }) {
                        return value < 25 ? '#FF0000' : '#02c27a';
                    }
                }
            },
            {
                name: "Current Metrics",
                data: [4, 10, 25, 35, 45, 25, 65, 80, 70],
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.0,
                        stops: [0, 100],
                    },
                    colors: function({ value, seriesIndex, dataPointIndex, w }) {
                        return value < 25 ? '#FF0000' : '#ffffff';
                    }
                }
            }
        ],
        chart: {
            //width:150,
            height: 100, // Increased height for better visibility
            type: 'area',
            sparkline: {
                enabled: true
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1.7,
            curve: 'smooth'
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#02c27a'],
                shadeIntensity: 1,
                type: 'vertical',
                opacityFrom: 0.5,
                opacityTo: 0.0,
            },
        },
        colors: ["#02c27a", "#ffffff"], // Adjust colors as needed
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function(e) {
                        return ""
                    }
                }
            },
            marker: {
                show: false
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            labels: {
                show: true // Ensure x-axis labels are visible
            }
        },
        legend: {
            show: true, // Display legend
            labels: {
                colors: ['#ffffff', '#02c27a'] // White for stable, green for current
            }
        }
    };
    
    var chart = new ApexCharts(document.querySelector("#chart1"), options);
    chart.render();
    



    // var options = {
    //     series: [
    //         {
    //             name: "Current Metrics",
    //             data: [4, 10, 25, 12, 25, 18, 40, 90, 80],
    //             fill: {
    //                 type: 'gradient',
    //                 gradient: {
    //                     shade: 'dark',
    //                     shadeIntensity: 1,
    //                     opacityFrom: 0.7,
    //                     opacityTo: 0.0,
    //                     stops: [0, 100],
    //                 },
    //                 colors: function({ value, seriesIndex, dataPointIndex, w }) {
    //                     return value < 25 ? '#FF0000' : '#02c27a';
    //                 }
    //             }
    //         },
    //         {
    //             name: "Stable Metrics",
    //             data: [100, 85, 85, 85, 85, 85, 85, 85, 85],
    //             fill: {
    //                 type: 'gradient',
    //                 gradient: {
    //                     shade: 'dark',
    //                     shadeIntensity: 1,
    //                     opacityFrom: 0.7,
    //                     opacityTo: 0.0,
    //                     stops: [0, 100],
    //                 },
    //                 colors: function({ value, seriesIndex, dataPointIndex, w }) {
    //                     return value < 25 ? '#FF0000' : '#ffffff';
    //                 }
    //             }
    //         }
    //     ],
    //     chart: {
    //         //width:150,
    //         height: 200, // Increased height for better visibility
    //         type: 'area',
    //         sparkline: {
    //             enabled: true
    //         },
    //         zoom: {
    //             enabled: false
    //         }
    //     },
    //     dataLabels: {
    //         enabled: false
    //     },
    //     stroke: {
    //         width: 1.7,
    //         curve: 'smooth'
    //     },
    //     fill: {
    //         type: 'gradient',
    //         gradient: {
    //             shade: 'dark',
    //             gradientToColors: ['#02c27a'],
    //             shadeIntensity: 1,
    //             type: 'vertical',
    //             opacityFrom: 0.5,
    //             opacityTo: 0.0,
    //         },
    //     },
    //     colors: ["#02c27a", "#ffffff"], // Adjust colors as needed
    //     tooltip: {
    //         theme: "dark",
    //         fixed: {
    //             enabled: false
    //         },
    //         x: {
    //             show: false
    //         },
    //         y: {
    //             title: {
    //                 formatter: function(e) {
    //                     return ""
    //                 }
    //             }
    //         },
    //         marker: {
    //             show: false
    //         }
    //     },
    //     xaxis: {
    //         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    //         labels: {
    //             show: true // Ensure x-axis labels are visible
    //         }
    //     },
    //     legend: {
    //         show: true, // Display legend
    //         labels: {
    //             colors: ['#ffffff', '#02c27a'] // White for stable, green for current
    //         }
    //     }
    // };
    
    // var chart = new ApexCharts(document.querySelector("#chart1"), options);
    // chart.render();
    

    // chart 2

    // var options = {
    //     series: [78],
    //     chart: {
    //         height: 180,
    //         type: 'radialBar',
    //         toolbar: {
    //             show: false
    //         }
    //     },
    //     plotOptions: {
    //         radialBar: {
    //             startAngle: -115,
    //             endAngle: 115,
    //             hollow: {
    //                 margin: 0,
    //                 size: '80%',
    //                 background: 'transparent',
    //                 image: undefined,
    //                 imageOffsetX: 0,
    //                 imageOffsetY: 0,
    //                 position: 'front',
    //                 dropShadow: {
    //                     enabled: false,
    //                     top: 3,
    //                     left: 0,
    //                     blur: 4,
    //                     opacity: 0.24
    //                 }
    //             },
    //             track: {
    //                 background: 'rgba(0, 0, 0, 0.1)',
    //                 strokeWidth: '67%',
    //                 margin: 0, // margin is in pixels
    //                 dropShadow: {
    //                     enabled: false,
    //                     top: -3,
    //                     left: 0,
    //                     blur: 4,
    //                     opacity: 0.35
    //                 }
    //             },

    //             dataLabels: {
    //                 show: true,
    //                 name: {
    //                     offsetY: -10,
    //                     show: false,
    //                     color: '#888',
    //                     fontSize: '17px'
    //                 },
    //                 value: {
    //                     offsetY: 10,
    //                     color: '#111',
    //                     fontSize: '24px',
    //                     show: true,
    //                 }
    //             }
    //         }
    //     },
    //     fill: {
    //         type: 'gradient',
    //         gradient: {
    //             shade: 'dark',
    //             type: 'horizontal',
    //             shadeIntensity: 0.5,
    //             gradientToColors: ['#0866ff'],
    //             inverseColors: true,
    //             opacityFrom: 1,
    //             opacityTo: 1,
    //             stops: [0, 100]
    //         }
    //     },
    //     colors: ["#fc185a"],
    //     stroke: {
    //         lineCap: 'round'
    //     },
    //     labels: ['Total New Services Onboarded'],
    // };

    // var chart = new ApexCharts(document.querySelector("#chart2"), options);
    // chart.render();


    var options = {
        series: [78],
        chart: {
            height: 180,
            type: 'radialBar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -115,
                endAngle: 115,
                hollow: {
                    margin: 0,
                    size: '80%',
                    background: 'transparent',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                        enabled: false,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    }
                },
                track: {
                    background: 'rgba(0, 0, 0, 0.1)',
                    strokeWidth: '67%',
                    margin: 0,
                    dropShadow: {
                        enabled: false,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35
                    }
                },
    
                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -10,
                        show: false,
                        color: '#888',
                        fontSize: '17px'
                    },
                    value: {
                        offsetY: 10,
                        color: '#ffffff', // white color for value
                        fontSize: '24px',
                        show: true,
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light', // changed shade to light
                type: 'vertical', // changed type to vertical
                shadeIntensity: 0.5,
                gradientToColors: ['#9ef442'], // light green color
                inverseColors: false, // inverted colors
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100] // stops to control the gradient transition
            }
        },
        colors: ["#ff0000"], // red color for series
        stroke: {
            lineCap: 'round'
        },
        labels: ['Total New Services Onboarded'],
    };
    
    var chart = new ApexCharts(document.querySelector("#chart2"), options);
    chart.render();
    
    

    // chart 3

    var options = {
        series: [{
            name: "New service Onboarded",
            data: [8, 10, 25, 18, 38, 24, 20, 100, 110]
        }],
        chart: {
            //width:150,
            height: 120,
            type: 'bar',
            sparkline: {
                enabled: !0
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1,
            curve: 'smooth',
            color: ['transparent']
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#fc6718'],
                shadeIntensity: 1,
                type: 'vertical',
                //opacityFrom: 0.8,
                //opacityTo: 0.1,
                //stops: [0, 100, 100, 100]
            },
        },
        colors: ["#fc185a"],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 4,
                borderRadiusApplication: 'around',
                borderRadiusWhenStacked: 'last',
                columnWidth: '45%',
            }
        },

        tooltip: {
            theme: "dark",
            fixed: {
                enabled: !1
            },
            x: {
                show: !1
            },
            y: {
                title: {
                    formatter: function(e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart3"), options);
    chart.render();



    // chart 4

    var options = {
        series: [{
                name: "Year 2023",
                data: [20, 5, 60, 10, 30, 20, 25, 15, 31]
            },
            {
                name: "Year 2024",
                data: [17, 10, 45, 15, 25, 15, 40, 10, 24]
            }
        ],
        chart: {
            //width:150,
            foreColor: "#9ba7b2",
            height: 235,
            type: 'bar',
            toolbar: {
                show: !1,
            },
            sparkline: {
                enabled: !1
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 4,
            curve: 'smooth',
            colors: ['transparent']
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#0d6efd', '#6f42c1'],
                shadeIntensity: 1,
                type: 'vertical',
                //opacityFrom: 0.8,
                //opacityTo: 0.1,
                stops: [0, 100, 100, 100]
            },
        },
        colors: ['#0d6efd', "#6f42c1"],
        plotOptions: {
            // bar: {
            //   horizontal: !1,
            //   columnWidth: "55%",
            //   endingShape: "rounded"
            // }
            bar: {
                horizontal: false,
                borderRadius: 4,
                borderRadiusApplication: 'around',
                borderRadiusWhenStacked: 'last',
                columnWidth: '55%',
            }
        },
        grid: {
            show: false,
            borderColor: 'rgba(0, 0, 0, 0.15)',
            strokeDashArray: 4,
        },
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: !0
            },
            x: {
                show: !0
            },
            y: {
                title: {
                    formatter: function(e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart4"), options);
    chart.render();





    // chart 5

    var options = {
        series: [{
            name: "Net Sales",
            data: [4, 10, 25, 12, 25, 18, 40, 22, 7]
        }],
        chart: {
            //width:150,
            height: 115,
            type: 'area',
            sparkline: {
                enabled: !0
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1.7,
            curve: 'smooth'
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#6610f2'],
                shadeIntensity: 1,
                type: 'vertical',
                opacityFrom: 0.5,
                opacityTo: 0.0,
                //stops: [0, 100, 100, 100]
            },
        },

        colors: ["#6610f2"],
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: !1
            },
            x: {
                show: !1
            },
            y: {
                title: {
                    formatter: function(e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart5"), options);
    chart.render();





});
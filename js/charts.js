
function chart(ofi,espe,jov) {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


var ctxPie = document.getElementById("myChartPie");
var ctxBar = document.getElementById("myChartBar");


var myPieChart = new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ["Oficial", "Especial", "Joven"],
    datasets: [{
      data: [ofi, espe, jov],
      backgroundColor: ['#4e73df', '#c1cb13', '#06a722'],
      hoverBackgroundColor: ['#8004b6', '#8004b6', '#8004b6'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,

        callbacks: {
          label: function(tooltipItem, data) {
            return formatter.format(tooltipItem.yLabel);
          },
        }, 
    },
    legend: {
      display: true
    },
    cutoutPercentage: 80,
  },
});


var myPieChart = new Chart(ctxPie, {
  type: 'polarArea',
  data: {
    labels: ["Oficial", "Especial", "Joven"],
    datasets: [{
      data: [ofi, espe, jov],
      backgroundColor: ['#4e73df', '#c1cb13', '#06a722'],
      hoverBackgroundColor: ['#8004b6', '#8004b6', '#8004b6'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,

        callbacks: {
          label: function(tooltipItem, data) {
            return formatter.format(tooltipItem.yLabel);
          },
        }, 
    },
    legend: {
      display: true
    },
    cutoutPercentage: 80,
  },
});


// var myChart = new Chart(ctxPie, {
// 	type: 'pie',
// 	data: {
// 		labels: ['Oficial', 'Especial', 'Joven'],
// 		datasets: [{
// 			label: 'Utilidad',
// 			data: [ofi, espe, jov],
// 			///data: myDataset,
// 			backgroundColor: [
// 				'rgba(255, 99, 132, 0.2)',
// 				'rgba(54, 162, 235, 0.2)',
// 				'rgba(255, 206, 86, 0.2)',
// 				'rgba(75, 192, 192, 0.2)',
// 				'rgba(153, 102, 255, 0.2)',
// 				'rgba(255, 159, 64, 0.2)',
// 				'rgba(255, 99, 132, 0.2)',
// 				'rgba(54, 162, 235, 0.2)',
// 				'rgba(255, 206, 86, 0.2)',
// 				'rgba(75, 192, 192, 0.2)',
// 				'rgba(153, 102, 255, 0.2)',
// 				'rgba(255, 159, 64, 0.2)'
// 			],
// 			borderColor: [
// 				'rgba(255,99,132,1)',
// 				'rgba(54, 162, 235, 1)',
// 				'rgba(255, 206, 86, 1)',
// 				'rgba(75, 192, 192, 1)',
// 				'rgba(153, 102, 255, 1)',
// 				'rgba(255, 159, 64, 1)',
// 				'rgba(255, 159, 64, 1)',
// 				'rgba(255, 159, 64, 1)',
// 				'rgba(255, 159, 64, 1)',
// 				'rgba(255, 159, 64, 1)',
// 				'rgba(255, 159, 64, 1)',
// 				'rgba(255, 159, 64, 1)'
// 			],
// 			borderWidth: 1
// 		}]
// 	},
// 	options: {
// 		tooltips: {
// 			callbacks: {
// 				label: function(tooltipItem, data) {
// 					return formatter.format(tooltipItem.yLabel);
// 				},
// 			},
// 		},
// 		scales: {
// 			yAxes: [{
// 				ticks: {
// 					beginAtZero:false
// 				}
// 			}]
// 		}
// 	}
// });

}

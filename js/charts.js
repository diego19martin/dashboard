
function chart(ofi,espe,jov) {

  if (myChart instanceof Chart) {
    myChart.destroy();
    }

    if (myChart2 instanceof Chart) {
      myChart2.destroy();
      }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


var ctxPie = document.getElementById("myChartPie");
var ctxBar = document.getElementById("myChartBar");


myChart = new Chart(ctxBar, {

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


myChart2 = new Chart(ctxPie, {
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
}


function chartSala(datos) {

  if (myChart instanceof Chart) {
    myChart.destroy();
    }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


var ctxBar = document.getElementById("myChartBar");

const rowChartJornada = document.getElementById('rowChartJornada');
const bar = document.getElementById('bar');
const pie = document.getElementById('pie');

rowChartJornada.style.display='Block';
rowChartJornada.style.width='90%';
rowChartJornada.style.margin='0 auto';
bar.style.maxWidth='none';
pie.style.display='none';

var labels = datos.map(function(e) {
  return e.Sector;
});

var beneficio = datos.map(function(d) {
  return parseFloat(d.Beneficio);
});

myChart = new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      data: beneficio,
      backgroundColor: '#4e73df',
      hoverBackgroundColor: '#8004b6',
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

}

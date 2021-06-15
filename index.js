var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {

  // bar graph
  type: "bar",
  data: {
    labels: ["9am", "1pm", "5pm", "9pm", "1am", "5am"],
    datasets: [{

        data: [10, 28, 3, 49, 78, 35],
        label: "Avg Current",
        backgroundColor: "blue",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        data: [20, 35, 7, 78, 99, 45],
        label: "Temperature",
        backgroundColor: "red",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        enabled: false,
        title: {
          display: true,
          text: 'Avg.Temperature vs Current'
        }
      }
    }
  }
});

// pie chart1
new Chart(document.getElementById("pie-chart"), {
  type: 'doughnut',
  data: {
    // labels: ["Africa", "Asia", "Europe"],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ["red", "grey", "white"],
      data: [70, 20, 10]
    }]
  },
  options: {
    plugins: {
      tooltip: {
        enabled: false,
      }
    }
  }
});

// pie chart2
new Chart(document.getElementById("pie-chart2"), {
  type: 'doughnut',
  data: {
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ["#3e95cd", "grey", "white"],
      data: [60, 20, 10]
    }]
  },
  options: {
    plugins: {
      tooltip: {
        enabled: false,
      }
    }
  }
});


// line chart1
new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: ["9am", "1pm", "5pm", "9pm", "1am", "5am"],
    datasets: [{
      data: [10, 8, 88, 78, 30, 69],
      label: "Current Composition",
      borderColor: "#3e95cd",
      fill: false,
      lineTension: 0.4
    }, ],
  },
  options: {
    plugins: {
      tooltip: {
        enabled: false,
        title: {
          display: true,
          text: 'Current Consumption'
        }
      }
    }
  }
});

// line chart2
new Chart(document.getElementById("line-chart2"), {
  type: 'line',
  data: {
    labels: ["9am", "1pm", "5pm", "9pm", "1am", "5am"],
    datasets: [{
      data: [49, 44, 68, 58, 94, 69],
      label: "Temperature Trend",
      borderColor: "#3e95cd",
      fill: false,
      lineTension: 0.4
    }, ]
  },
  options: {
    plugins: {
      tooltip: {
        enabled: false,
        title: {
          display: true,
          text: 'Temperature Trend'
        }
      }
    }
  }
});

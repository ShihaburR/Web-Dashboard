//get json data that contains the information needed for dashboard
fetch("./data.json")
  .then(function (response){
      return response.json();
  })
  .then(function(data){
      console.log(data);
      return getGraph(data);
  })
  .catch(function (err){
      console.log(err);
});

function getGraph(data) {
  let datalabels = [];
  let values = [];
  for(var i = 0; i < data.table.length; i++){
    datalabels.push(data.table[i]["day"]);
    values.push(data.table[i]["value"]);
  }
  console.log(datalabels);
  console.log(values);

  var charts = document.getElementById('chart').getContext('2d');
  //chart defaults
  Chart.defaults.global.defaultFontFamily = 'Calibri';
  Chart.defaults.global.defaultFontSize = 13;
  Chart.defaults.global.defaultFontColour = '#777';

  let vistorsChart = new Chart(charts, {
    type: 'line',
    data: {
      labels: datalabels,
      datasets: [{
        label: 'Visitors at MUS',
        fill: false,
        data: values,
        backgroundColor: 'green',
        borderColor: 'green'
      }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Visitor Development at MUS in 2020',
            fontSize: 25
        }
    }
  });
}

function getKPI(data) {

}

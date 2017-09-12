$(document).ready(function(){
  $.get('https://swapi.co/api/films/7/', function(data){
    console.log(data);
    let firstHeader = $("<h3></h3>")[0];
    $(firstHeader).text(data.title);
    $('.movie')[0].append(firstHeader);
    let opening = $("<p></p>")[0];
    $(opening).text(data.opening_crawl);
    $('.movie')[0].append(opening);
  })
})

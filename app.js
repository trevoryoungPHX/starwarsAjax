$(document).ready(function() {
  var arr = [1, 2, 3, 4, 5, 6];
  for (let i = 0; i < 6; i++) {
    var link = "https://swapi.co/api/films/" + arr[i];
    $.get(link, function(data) {
      let movieDiv = $('.movie')[i];
      let header = document.createElement('h3');
      $(header).text(data.title);
      $(movieDiv).append(header);
      let openingText = document.createElement('p');
      $(openingText).text(data.opening_crawl);
      $(movieDiv).append(openingText);
      let bttn = document.createElement('button');
      $(bttn).text("Show Main Characters");
      var charArr = [1, 2, 3];
      $(movieDiv).append(bttn);
      $(bttn).click(function() {
      $('#people').empty();
        for (let j = 0; j < 3; j++) {
          var charLink = "https://swapi.co/api/people/" + charArr[j];
          $.get(charLink, function(charData){
            let para = $('<p></p>')[0]; //This is how you add an element with J queary (Same thing as "create element by...")
            $(para).text(charData.name);
            $('#people').append(para);
          })
        }
      })
    });
  }
});

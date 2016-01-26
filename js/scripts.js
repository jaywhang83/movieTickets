function Tickets(movieName, movieTime, movieAge) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.movieAge = movieAge;

}

Tickets.prototype.viewTicket = function () {
  return this.movieName + " " + this.movieTime + " " + this.movieAge;
}

Tickets.prototype.totalTicket = function() {
  var namePrice = 0;
  if (this.movieName === "creed") {
    namePrice = 10;
  }
  else {
    namePrice = 12;
  }
  if (this.movieTime !== "8pm") {
    namePrice = namePrice - 2;
  }
  if (this.movieAge !== "adult") {
    namePrice = namePrice - 3;
  }
  return namePrice;
};


$(document).ready(function() {
  $("form#movieName").submit(function(event) {
    event.preventDefault();
    $(".result").empty();
    var movieName= $("select#movieChoice").val();
    var movieTime = $("select#timeChoice").val();
    var movieAge = $("select#ageChoice").val();
    var newMovie = new Tickets(movieName, movieTime, movieAge);


    $(".result").append(newMovie.totalTicket());

  });
});

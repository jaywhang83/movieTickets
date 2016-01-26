function Tickets(movieName, movieTime, movieAge) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.movieAge = movieAge;

  this.totalTicket = function() {
    var namePrice = 12;
    if (this.movieName === "creed") {
      namePrice = namePrice - 2;
    }
    if (this.movieTime !== "8pm") {
      namePrice = namePrice - 2;
    }
    if (this.movieAge !== "adult") {
      namePrice = namePrice - 3;
    }
    return namePrice;
  };
};

// Tickets.prototype.viewTicket = function () {
//   return this.movieName + " " + this.movieTime + " " + this.movieAge;
// }

$(document).ready(function() {
  $("form#movieName").submit(function(event) {
    event.preventDefault();
    $(".result").empty();
    var movieName= $("select#movieChoice").val();
    var movieTime = $("select#timeChoice").val();
    var movieAge = $("select#ageChoice").val();
    var newMovie = new Tickets(movieName, movieTime, movieAge);

    $(".result").append(" $" + newMovie.totalTicket() + ".00");
    $(".view").show();
  });
});

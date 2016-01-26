describe('Tickets', function() {
  it("takes name of a movie and returns that name", function() {
    var testMovie = new Tickets("Star Wars", "12 PM");
    expect(testMovie.movieName).to.equal("Star Wars");
    expect(testMovie.movieTime).to.equal("12 PM");
    });

});

describe('Tickets', function() {
  it("takes name of a movie and returns that name", function() {
    var testMovie = new Tickets("Star Wars");
    expect(testMovie.movieName).to.equal("Star Wars");
  });
});

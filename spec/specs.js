describe('Tickets', function() {
  it("takes name of a movie and returns that name, time and age", function() {
    var testMovie = new Tickets("Star Wars", "12 PM", 21);
    expect(testMovie.movieName).to.equal("Star Wars");
    expect(testMovie.movieTime).to.equal("12 PM");
    expect(testMovie.movieAge).to.equal(21);
    });
  });

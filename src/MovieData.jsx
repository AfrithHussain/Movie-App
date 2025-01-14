const MovieData = [
    {
      id: 1,
      title: "Inception",
      slug: "inception",
      genre: "Sci-Fi",
      year: 2010,
      image: "https://cdn.posteritati.com/posters/000/000/053/864/inception-sm-web.jpg",
      description: "A skilled thief leads a team of dream infiltrators to plant an idea in a target's subconscious.",
      imdbRating: 8.8,
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      director: "Christopher Nolan",
      trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
    },
    {
      id: 2,
      title: "The Dark Knight",
      slug: "the-dark-knight",
      genre: "Action",
      year: 2008,
      image: "https://cdn.posteritati.com/posters/000/000/044/804/the-dark-knight-sm-web.jpg",
      description: "Batman faces off against the Joker, a criminal mastermind who plunges Gotham into chaos.",
      imdbRating: 9.0,
      actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      director: "Christopher Nolan",
      trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
    },
    {
      id: 3,
      title: "Interstellar",
      slug: "interstellar",
      genre: "Sci-Fi",
      year: 2014,
      image: "https://cdn.posteritati.com/posters/000/000/065/443/interstellar-sm-web.jpg",
      description: "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
      imdbRating: 8.6,
      actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      director: "Christopher Nolan",
      trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
    },
    {
      id: 4,
      title: "The Matrix",
      slug: "the-matrix",
      genre: "Sci-Fi",
      year: 1999,
      image: "https://cdn.posteritati.com/posters/000/000/071/585/the-matrix-sm-web.jpg",
      description: "A hacker discovers the true nature of reality and his role in the war against its controllers.",
      imdbRating: 8.7,
      actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      director: "The Wachowskis",
      trailer: "https://www.youtube.com/watch?v=m8e-FF8MsqU"
    },
    {
      id: 5,
      title: "Pulp Fiction",
      slug: "pulp-fiction",
      genre: "Crime",
      year: 1994,
      image: "https://cdn.posteritati.com/posters/000/000/073/204/pulp-fiction-sm-web.jpg",
      description: "The lives of two hitmen, a boxer, and others intertwine in a series of events in Los Angeles.",
      imdbRating: 8.9,
      actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      director: "Quentin Tarantino",
      trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY"
    },
    {
      id: 6,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      slug: "lord-of-the-rings-fellowship",
      genre: "Fantasy",
      year: 2001,
      image: "https://cdn.posteritati.com/posters/000/000/049/709/the-lord-of-the-rings-the-fellowship-of-the-ring-sm-web.jpg",
      description: "A hobbit sets out on a perilous journey to destroy a powerful ring with the help of a fellowship.",
      imdbRating: 8.8,
      actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
      director: "Peter Jackson",
      trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4"
    },
    {
      id: 7,
      title: "The Godfather",
      slug: "the-godfather",
      genre: "Crime",
      year: 1972,
      image: "https://cdn.posteritati.com/posters/000/000/052/715/the-godfather-sm-web.jpg",
      description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
      imdbRating: 9.2,
      actors: ["Marlon Brando", "Al Pacino", "James Caan"],
      director: "Francis Ford Coppola",
      trailer: "https://www.youtube.com/watch?v=sY1S34973zA"
    },
    {
      id: 8,
      title: "Fight Club",
      slug: "fight-club",
      genre: "Drama",
      year: 1999,
      image: "https://cdn.posteritati.com/posters/000/000/059/881/fight-club-sm-web.jpg",
      

      description: "An insomniac office worker and a soap salesman form an underground fight club.",
      imdbRating: 8.8,
      actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
      director: "David Fincher",
      trailer: "https://www.youtube.com/watch?v=SUXWAEX2jlg"
    },
    {
      id: 9,
      title: "Forrest Gump",
      slug: "forrest-gump",
      genre: "Drama",
      year: 1994,
      image: "https://cdn.posteritati.com/posters/000/000/001/225/forrest-gump-sm-web.jpg",
      description: "The presidencies of Kennedy and Johnson, Vietnam, and more through the perspective of Forrest Gump.",
      imdbRating: 8.8,
      actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      director: "Robert Zemeckis",
      trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg"
    },
    {
      id: 10,
      title: "The Shawshank Redemption",
      slug: "shawshank-redemption",
      genre: "Drama",
      year: 1994,
      image: "https://cdn.posteritati.com/posters/000/000/021/119/the-shawshank-redemption-sm-web.jpg",
      description: "Two imprisoned men bond over several years, finding solace and eventual redemption.",
      imdbRating: 9.3,
      actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      director: "Frank Darabont",
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco"
    },
    {
      id: 11,
      title: "Avengers: Endgame",
      slug: "avengers-endgame",
      genre: "Action",
      year: 2019,
      image: "https://cdn.posteritati.com/posters/000/000/066/950/avengers-endgame-md-web.jpg",
      description: "The Avengers unite to undo the destruction caused by Thanos in a final showdown.",
      imdbRating: 8.4,
      actors: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
      director: "Anthony Russo, Joe Russo",
      trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
    },
    {
      id: 12,
      title: "Gladiator",
      slug: "gladiator",
      genre: "Action",
      year: 2000,
      image: "https://cdn.posteritati.com/posters/000/000/062/005/gladiator-sm-web.jpg",
      description: "A former Roman General seeks vengeance against the corrupt emperor who murdered his family.",
      imdbRating: 8.5,
      actors: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
      director: "Ridley Scott",
      trailer: "https://www.youtube.com/watch?v=owK1qxDselE"
    },
    {
      id: 13,
      title: "Titanic",
      slug: "titanic",
      genre: "Romance",
      year: 1997,
      image: "https://cdn.posteritati.com/posters/000/000/049/967/titanic-sm-web.jpg",
      description: "A romance unfolds between a rich girl and a poor artist aboard the ill-fated RMS Titanic.",
      imdbRating: 7.9,
      actors: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
      director: "James Cameron",
      trailer: "https://www.youtube.com/watch?v=2e-eXJ6HgkQ"
    },
    {
      id: 14,
      title: "Joker",
      slug: "joker",
      genre: "Crime",
      year: 2019,
      image: "https://cdn.posteritati.com/posters/000/000/059/032/joker-sm-web.jpg",
      description: "A mentally troubled comedian embarks on a downward spiral to become Gotham's infamous criminal mastermind.",
      imdbRating: 8.4,
      actors: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
      director: "Todd Phillips",
      trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY"
    },
    {
      id: 15,
      title: "Spider-Man: Into the Spider-Verse",
      slug: "spider-man-into-the-spider-verse",
      genre: "Animation",
      year: 2018,
      image: "https://cdn.posteritati.com/posters/000/000/058/850/spiderman-into-the-spiderverse-sm-web.jpg",
      description: "Teenager Miles Morales becomes the Spider-Man of his universe and crosses paths with five counterparts from other dimensions.",
      imdbRating: 8.4,
      actors: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
      director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
      trailer: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ"
    },
    // {
    //   id: 16,
    //   title: "The Wolf of Wall Street",
    //   slug: "wolf-of-wall-street",
    //   genre: "Biography",
    //   year: 2013,
    //   image: "https://cdn.posteritati.com/posters/000/000/039/659/the-wolf-of-wall-street-md-web.jpg",
    //   description: "The true story of Jordan Belfort, a stockbroker who ran a massive securities fraud scheme.",
    //   imdbRating: 8.2,
    //   actors: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"],
    //   director: "Martin Scorsese",
    //   trailer: "https://www.youtube.com/watch?v=iszwuX1AK6A"
    // }
  ];

  export default MovieData;
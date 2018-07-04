export const festival = {
    movies: [],
    programs: []
}

class Movie {
    constructor(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    getMovieData() {
        const firstLetter = this.genre.slice(0, 1).toUpperCase();
        const lastLetter = this.genre[this.genre.length -1].toUpperCase();
        const movieTitle = `${this.title.slice(0,1).toUpperCase()}${this.title.slice(1)}`;

        return (`${movieTitle}, ${this.length}min, ${firstLetter}${lastLetter}`)
    }
}


class Program {
    constructor (date) {
        const inputDate = new Date(date);
        this.date = `${inputDate.getDate()}.${inputDate.getMonth() + 1}.${inputDate.getFullYear()}`;
        this.movieList = [];
    }

    addMovie(movie) {
        this.movieList.push(movie);
    }

    lengthOfMovies() {
        let moviesLength = 0;
        this.movieList.forEach((movie) => {
            moviesLength += parseInt(movie.length);
        })

        return moviesLength;
    }

    getProgramInfo() {
        let output = "";
        if (this.movieList.length === 0){
            output = `${this.date}, program duration: TBA`;
        } else {
            output = `${this.date}, ${this.movieList.length} movies, ${this.lengthOfMovies()} min`;
        }

        return output;
    }
}

export const createMovie = (title, length, genre) => {

    const createdMovie = new Movie (title, length, genre);
    festival.movies.push(createdMovie);

    return createdMovie;
}

export const isValid = (title, length, genre) => {

    if( !title || !length || !genre) {
        return false;
    }

    if (length > 200) {
        return false;
    }

    return true;
}

export const calculateTotalLengthOfMovies = () => {

    let totalLengthOfMovies = 0;
    festival.movies.forEach(movie => {
        totalLengthOfMovies += parseInt(movie.length);
    })

    return totalLengthOfMovies;
}

export const createProgram = (date) => {

    const createdProgram = new Program(date);
    festival.programs.push(createdProgram);

    return createdProgram;
}

export const addMovieToProgram = (movieIndex, programIndex) => {

    const chosenMovie = festival.movies[movieIndex];
    const chosenProgram = festival.programs[programIndex];

    chosenProgram.addMovie(chosenMovie);

    return {
        chosenMovie,
        chosenProgram
    }
}

export const isValidDate = (date) => {
    if(!date) {
        return false;
    }

    return true;
}

export const getProgramInfo = (chosenProgram) => {
    return chosenProgram.getProgramInfo();
}
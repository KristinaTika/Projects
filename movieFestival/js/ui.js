
export const getMovieInputs = () => {

    const titleInput = document.querySelector("#movie-title");
    const lengthInput = document.querySelector("#movie-length");
    const genreInput = document.querySelector("#movie-genre");

    const title = titleInput.value;
    const length = lengthInput.value;
    const genre = genreInput.value;

    return {
        title,
        length,
        genre
    }

    titleInput.value = "";
    lengthInput.value = "";
    genreInput.value = "";
}

export const clearMovieInputs = () => {

    const titleInput = document.querySelector("#movie-title");
    const lengthInput = document.querySelector("#movie-length");
    const genreInput = document.querySelector("#movie-genre");

    titleInput.value = "";
    lengthInput.value = "";
    genreInput.value = "";
}

export const displayMovieError = () => {

    const isValidMovie = document.querySelector(".movie-valid");
    isValidMovie.textContent = `All fields are required!`;
    isValidMovie.classList.remove("hide");
    isValidMovie.classList.add("validation");
}

export const removeMovieError = () => {

    const isValidMovie = document.querySelector(".movie-valid");
    isValidMovie.classList.add("hide");
}

export const displayMovie = (movie) => {

    const movieList = document.querySelector("#movie-list-of");
    const movieLi = document.createElement("li");
    movieLi.textContent = movie.getMovieData();
    movieList.appendChild(movieLi);
}

export const displayLength = (totalLength) => {

    const totalLengthOfMovies = document.querySelector("#movie-total-length");
    totalLengthOfMovies.textContent = `Total length of movies: ${totalLength} min`;
}

export const getProgramInputs = () => {

    const dateInput = document.querySelector("#program-date");
    const date = dateInput.value;

    return {
        date
    }


}

export const clearProgramInput = () => {

    const dateInput = document.querySelector("#program-date");
    dateInput.value = "";
}

export const displayProgram = (program) => {

    const programList = document.querySelector("#program-info");
    const programLi = document.createElement("li");
    programLi.textContent = program.getProgramInfo();
    programList.appendChild(programLi);
}

export const displayProgramError = () => {

    const isValidProgram = document.querySelector(".program-valid");
    isValidProgram.textContent = ` Please choose date!`;
    isValidProgram.classList.remove("hide");
    isValidProgram.classList.add("validation");
}

export const removeProgramError = () => {

    const isValidProgram = document.querySelector(".program-valid");
    isValidProgram.classList.add("hide");
}

export const displayMovieOptions = (movieList) => {

    const optionMovie = document.createElement("option");
    const chooseMovie = document.querySelector("#choose-movie");

    for (let i = 0; i < movieList.length; i++) {
        optionMovie.textContent = movieList[i].title;
        optionMovie.value = i;
        chooseMovie.appendChild(optionMovie);
    }
}

export const displayProgramOptions = (programList) => {
    const optionProgram = document.createElement("option");
    const chooseProgram = document.querySelector("#choose-program");

    for (let i = 0; i < programList.length; i++) {
        optionProgram.textContent = programList[i].date;
        optionProgram.value = i;
        chooseProgram.appendChild(optionProgram);
    }
}

export const getChosenOptions = () => {

    const chosenMovieIndex = document.querySelector("#choose-movie").value;
    const chosenProgramIndex = document.querySelector("#choose-program").value;

    return {
        chosenMovieIndex,
        chosenProgramIndex
    }
}

export const clearChosenOptions = () => {

    const chosenMovieIndex = document.querySelector("#choose-movie");
    const chosenProgramIndex = document.querySelector("#choose-program");

    chosenMovieIndex.value = "";
    chosenProgramIndex.value = "";

}


export const displayProgramInfo = (programInfo) => {

    const allProgramInfo = document.querySelectorAll("#program-info li");

    allProgramInfo.forEach(program => {
        const programDate = program.textContent.split(",");
        if (programDate[0] === programInfo.split(",")[0]) {
            program.textContent = programInfo;
        }
    });

}
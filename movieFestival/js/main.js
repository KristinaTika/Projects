import * as data from './data.js';
import * as ui from './ui.js';

const CreateMovieHandler = () => {

    const getMovieData = ui.getMovieInputs();
    const isValid = data.isValid(getMovieData.title, getMovieData.length, getMovieData.genre);
    if (!isValid) {
        ui.displayMovieError();
        return;
    }
    ui.removeMovieError();

    const createdMovie = data.createMovie(getMovieData.title, getMovieData.length, getMovieData.genre);
    ui.displayMovie(createdMovie);
    ui.displayLength(data.calculateTotalLengthOfMovies());
    ui.clearMovieInputs();
    ui.displayMovieOptions(data.festival.movies);
}

const createProgramHandler = () => {

    const getProgramData = ui.getProgramInputs();
    const isValid = data.isValidDate(getProgramData.date);
    if (!isValid) {
        ui.displayProgramError();
        return
    }
    ui.removeProgramError();

    const createdProgram = data.createProgram(getProgramData.date);
    ui.displayProgram(createdProgram);
    ui.clearProgramInput();
    ui.displayProgramOptions(data.festival.programs);
}

const addToProgramHandler = () => {

    const { chosenMovieIndex, chosenProgramIndex } = ui.getChosenOptions();
    const { chosenMovie, chosenProgram } =
        data.addMovieToProgram(chosenMovieIndex, chosenProgramIndex);
    const chosenProgramInfo = data.getProgramInfo(chosenProgram);
    ui.displayProgramInfo(chosenProgramInfo);
    ui.clearChosenOptions();

}

export const init = () => {

    const addMovieToProgramButton = document.querySelector("#create-movie");
    addMovieToProgramButton.addEventListener("click", CreateMovieHandler);

    const buttonProgram = document.querySelector("#create-program");
    buttonProgram.addEventListener("click", createProgramHandler);

    const buttonAddMovieToProgram = document.querySelector("#add-movie-to-program")
    buttonAddMovieToProgram.addEventListener("click", addToProgramHandler);
}
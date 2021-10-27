console.log('hello world')

function addMovie(event) {
    
    event.preventDefault()

    const inputField = document.querySelector("input")

    const movie = document.createElement("li") 

    const movieTitle = document.createElement("span") 

    movieTitle.textContent = inputField.value
      
    movie.appendChild(movieTitle)

    const movieList = document.querySelector("ul")

    movieList.appendChild(movie)

}

const submitButton = document.querySelector("form")

submitButton.addEventListener("submit", addMovie)


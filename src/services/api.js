const API_KEY = "97f97ec9ec26c6a33a8f8649b5eeb6dc"
const API_URL = "https://api.themoviedb.org/3"
const API_READ_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2Y5N2VjOWVjMjZjNmEzM2E4Zjg2NDliNWVlYjZkYyIsIm5iZiI6MTc0MDc0Njg0Mi4wOTYsInN1YiI6IjY3YzFiMDVhYzVkZTg0MmI0YmEyNzEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2oOqtBvozdb9kJ0wwfNXOC0H9jQfN1mdOVAquDxesYs"

export const getPopularMovies = async () => {
  const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`)
  const data = await response.json()
  return data.results
}

export const searchMovies = async (query) => {
  const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
  const data = await response.json()
  return data.results
}
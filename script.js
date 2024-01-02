
const output = document.getElementById("output");

function getOption() {
   return {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTEwMzlmZGI5NDk4MWZhMDM1NWY3YTg3NDJhNzY3YSIsInN1YiI6IjY1OTI3YTIzNjUxZmNmNWViYThlZjk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CKt88u1IVidzx8ztFnNd4imlD9l4uZ4rDXwVkJ274jY'
    } 
   }; 
}

function addMovieJson() {
  const options = getOption();
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {
    const movies = data.results;
  let movieListHTML = "<ol>";
    for (const movie of movies) {
      const title = movie.title;
      const releaseDate = movie.release_date;
      const voteCount = movie.vote_count;
      const overview = movie.overview;

      movieListHTML += `<div align=left ><li><strong>${title}</strong> (released ${releaseDate})<br>Vote Count - ${voteCount}<br>Overview: ${overview}</li></div><br><br>`;
    }
      movieListHTML += "</ol>";
      output.innerHTML = movieListHTML;
    })
    .catch(err => console.error(err));

}

function addTvShowJson() {
  const options = getOption();
  fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {
    const shows = data.results;
  let tvShows = "<ol>";
    for (const show of shows) {
      const name = show.name;
      const aired = show.first_air_date;
      const voteCount = show.vote_count;
      const overview = show.overview;

      tvShows += `<div align=left ><li><strong>${name}</strong> (first aired ${aired})<br>Vote Count - ${voteCount}<br>Overview: ${overview}</li></div><br><br>`;
    }
      tvShows += "</ol>";
      output.innerHTML = tvShows;
    })
    .catch(err => console.error(err));
}

  function trending() {
   
      const options = getOption();
      fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
      .then(response => response.json())
      .then(data => {        
        const trends = data.results;        
        let trendingThisWeek = "<ol>";        
        for (const trend of trends) {      
          const name = trend.title;
          const releaseDate = trend.release_date;
          const voteCount = trend.vote_count;
          const overview = trend.overview;
          trendingThisWeek += `
          <div align=left ><li><strong>${name}</strong> (released ${releaseDate})<br>
          Vote Count - ${voteCount}<br>
          Overview: ${overview}</li></div><br><br>`;
        }
        trendingThisWeek += "</ol>";
        output.innerHTML = `<h3 style = "text-align: center; text-decoration: underline">Movies</h3>${trendingThisWeek}`;
      }); 
    
      fetch('https://api.themoviedb.org/3/trending/tv/week?language=en-US', options)
      .then(response => response.json())
      .then(tvdata => {
        const trendss = tvdata.results;
        let trendingThisWeek1 = "<ol>";
        for (const trends of trendss) {
          const name2 = trends.name;
          const aired = trends.first_air_date;
          const voteCount = trends.vote_count;
          const overview = trends.overview;
          trendingThisWeek1 += `
          <div align=left ><li><strong>${name2}</strong> (first aired ${aired})<br>
          Vote Count - ${voteCount}<br>
          Overview: ${overview}</li></div><br><br>`;
        }
        trendingThisWeek1 += "</ol>";
        output.innerHTML += `<h3 style = "text-align: center; text-decoration: underline">TV Shows</h3>${trendingThisWeek1}`;
      })
      .catch(err => console.error(err));
  }


'use strict';

const GITHUB_API_BASE_URL = 'https://api.github.com';

//function to watch submission of form
function watchForm () {
  $('#search').on('submit', function(ev) {

    ev.preventDefault();
    let userInput = $('input').val();

    fetchGithubUserRepo(userInput);
    
  })
}

//function to pull api data
function fetchGithubUserRepo(userInput) {
 
    fetch(`${GITHUB_API_BASE_URL}/users/` + userInput + `/repos`)
      .then(res => {
        return res.json()
      })
    .then(json => displayResults(json))
  
}

// //function to render results
function displayResults(json) {
   $('.results').html('');
  
  for (let i = 0; i < json.length; i++) {  
    $('.results').append(`<li> ${json[i].name} <a href="${json[i].url}">${json[i].name}</a></li>`)
  
  }
}


$(function() { 
  watchForm(); 
});

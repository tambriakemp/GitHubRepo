'use strict';

const GITHUB_API_BASE_URL = 'https://api.github.com';

//function to watch submission of form
function watchForm () {
  console.log("im here");
  
  $('#search').on('submit', function(ev) {
    ev.preventDefault();

    var userInput = $('input').val();
    
    fetchGithubUserRepo(userInput);
    
  })
}

//function to pull api data
function fetchGithubUserRepo(userInput) {
  console.log("yup");
  
    fetch(`${GITHUB_API_BASE_URL}/users/` + userInput + `/repos`)
      .then(res => {
        // console.log(res)
        return res.json()
      })
    // .then(json => console.log(json))
    .then(json => displayResults(json))
  
}

// //function to render results
function displayResults(json) {
  console.log('display');
  
  for (let i = 0; i < json.length; i++) {  
    $('.results').append(`<li> ${json[i].name} <a href="${json[i].url}">${json[i].name}</a></li>`)
  
  }

}


$(function() { 
  console.log('App loaded! Waiting for submit!');
  watchForm(); 
});

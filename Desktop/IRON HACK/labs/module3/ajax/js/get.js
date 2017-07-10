console.log('get.js linked !');

$(document).ready(() => {
  console.log("Page is ready");

    // When pokeButton is clicked
  $('#pokeButton').click(() =>{
    // Do this
        // alert('Poke Button');
            getPokemonInfo(9);



  });


  // When the form is sumbitted
  $('#pokeSearchForm').submit((theEvent) => {
    //prevent the normal form submission page refresh
    theEvent.preventDefault();

    //retrieve what the user typed in the input (the input value)
    const pokeNumber = $('#pokemonId').val();

    //call "getPokemonInfo()" with the user's inputted number
    getPokemonInfo(pokeNumber);
  });

});

function getPokemonInfo (myId) {
  // fetch the data from the pokeapi
  $.ajax ({  // 1st Argument -> giant settings object

            url:" http://pokeapi.co/api/v2/pokemon/" + myId + '/',
            method:"GET",
            // if successful, put some error of the data on the screen (DOM manipulation)
            success: (responseFromApi) => {
              alert('YES WE DID IT !');
              console.log(responseFromApi);
              //responseFromApi.sprites.front_default

              // add the information the the <p> tag
              $('#pokeInfo').html(`
                ${responseFromApi.name}
                <img src= "${responseFromApi.sprites.front_default}">
                `);
            },

            // if error, show error feedback  ( DOM Manipulation)
            error: (errorFromApi) => {
              alert("SORRY! Pokemon Data Error 😟");
              console.log(errorFromApi);

            }


});

}

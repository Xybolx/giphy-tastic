

//   "castlevania", "super mario bros. 3", "contra", "mega man", "duck hunt",
//   "spy hunter", "metal gear", "metroid", "double dribble", "baseball stars",
//   "bionic commando", "tetris", "double dragon", "kung fu", "paperboy"//


  // document.getElementById("nesPic").style.cssText = "display: none";
   
  
  
  // window.onSpotifyWebPlaybackSDKReady = () => {
  //  const token = 'BQBRZOEC42iX9G0YKzc-KFgJXdg1Grrax_0PzfOJniJPNLWt0nZnRsZxOD5jJha6ytFNe4s_z0NFmnWpngXtcEhOnT1p-Y0HO7PmsMIGg6iS85hZpi2CGpdQzRZMvLZwKRNrNferdgd9y_fb1Y8JWxfVGdhwSVE';
  //  const player = new Spotify.Player({
  //    name: 'Web Playback SDK Quick Start Player',
  //    getOAuthToken: cb => { cb(token); }
  //  });
  
   
   
  //  // Error handling
  //  player.addListener('initialization_error', ({ message }) => { console.error(message); });
  //  player.addListener('authentication_error', ({ message }) => { console.error(message); });
  //  player.addListener('account_error', ({ message }) => { console.error(message); });
  //  player.addListener('playback_error', ({ message }) => { console.error(message); });
   
  //  // Playback status updates
  //  player.addListener('player_state_changed', state => { console.log(state); });
   
  //  // Ready
  //  player.addListener('ready', ({ device_id }) => {
  //    console.log('Ready with Device ID', device_id);
  //  });
   
  //  // Not Ready
  //  player.addListener('not_ready', ({ device_id }) => {
  //    console.log('Device ID has gone offline', device_id);
  //  });
   
  //  // Connect to the player!
  //  player.connect();

   $(document).ready(function() {
     
     
    
     
  
  var games = [
      "super mario bros.", "mike tyson's punch out", "kid icarus", "excitebike", "super mario bros. 2", "the legend of zelda", "mega man", "duck hunt", "double dragon"
      
    

    ];
    
     
  // function to make buttons and add to page
  function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();

    for (var i = 0; i < arrayToUse.length; i++) {
      var a = $("<button>");
      a.addClass(classToAdd);
      a.attr("data-type", arrayToUse[i]);
      a.text(arrayToUse[i]);
      $(areaToAddTo).append(a);
    }
  }
    
    

  
  
  
  
    
    $(document).on("click", ".game-button", function () {
    $("#games").empty();
    $("#powerGif")[0].play();
    
      // $("#nesPic").animate({height:"200px"});
     
    $(".game-button").removeClass("active");
    $(this).addClass("active");

    var type = $(this).attr("data-type");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=fuh24fesVB79bhfW3zSSXJZCZhnTqxHP&limit=10";
    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function (response) {
      var results = response.data;
      console.log(results);
      
      for (var i = 0; i < results.length; i++) {
        var gameDiv = $("<div class='game-item'>");

        var rating = results[i].rating;
        var p = $("<p>").text("Click:⏯ Rating:"+ rating);
        


        var animated = results[i].images.fixed_height.url;
        var still = results[i].images.fixed_height_still.url;
        
        var gameImage = $("<img>");
        gameImage.attr("src", still);
        gameImage.attr("data-still", still);
        gameImage.attr("data-animate", animated);
        gameImage.attr("data-state", "still");
        gameImage.addClass("game-image");

        
        gameDiv.append(p);
        gameDiv.append(gameImage);
        
        $("#games").append(gameDiv);
      }
    });
  });
  
  $(document).on("click", ".game-image", function () {
    $("#toggleGif")[0].play();
    
    var state = $(this).attr("data-state");
    
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    }
    else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
   }
    });
    $("#add-game").on("click", function (event) {
          event.preventDefault();
          $("#addGif")[0].play();
          var newGame = $("input").val().trim();
          
          
          
          
          
          
          if (newGame.length > 2) {
            games.push(newGame);
          database.ref().push(games);
          console.log(games);
          }
          

          
        
          
          

       
      
      
        
        
    
      
      
      
      
      
      
      
      
      
      
      
      populateButtons(games, "game-button", "#game-buttons");
    });
    
    
    
    
    
    
    
    
    populateButtons(games, "game-button", "#game-buttons");
  });
  
    

    

  

  

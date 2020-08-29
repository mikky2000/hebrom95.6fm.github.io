
/*
MysearchBtn.onclick=()=>{
  MysearchBar.style.display="block";
}

$("#searchBtn").click(function(){
  $("#myfieldSeacrh").slideDown(1500);


})
*/

var MySearch = document.getElementById('searchBTN');
var Searchbar = document.getElementById('Searchbar');
var numbers = /^[0-9]+$/;
var CloseMenu = document.getElementById('closeMenu');
var PLAY_BUTTON= document.getElementById('playBtn1');
var play_button = document.getElementById('playBtn');//For mobile application.

var MenuToggle =  document.getElementById('toggle');



$(MySearch).click(function(){
    if(Searchbar.value=="" || Searchbar.value.match(numbers))
    {
      alert("Search box cannot not be emptied or contain numbers");
    }
});

async function playAudio() {
  var audio = new Audio('http://shaincast.caster.fm:39391/listen.mp3?authn102fdfaf0e7ffc4b409191ced21266d9');
  audio.type = 'audio/mp3';

  try {
    await audio.play();
    console.log('Playing...');
  } catch (err) {
    //console.log('Failed to play...' + err);
    alert("Station is currently offline. We will be back online shortly. Please bear with us. Thank you.");
  }
}




$(PLAY_BUTTON).click(function(){
  playAudio();
})

$(play_button).click(function(){
    playAudio();
})



$("#toggle").click(function(){
  $(".menu").slideDown(1500);
  $("#playBtn").toggle();
  $(".Image-container").toggle();
  $("#slideshow").toggle();
  $(".videoSection").toggle();
  //$(".menu").slideDown(1500);
 $(MenuToggle).prop( "disabled", true );
});

$(CloseMenu).click(function(){
    $(".menu").toggle();
    $("#playBtn").toggle();
    $(".Image-container").toggle();
    $("#slideshow").toggle();
    $(".videoSection").toggle();
     $(MenuToggle).prop( "disabled", false );
})


$("#playBtn2").click(function(){
  $(".SearchBar").slideDown(1500);

});
$("#CloseBTN").click(function(){
    $(".SearchBar").slideUp(1500);
    $(Searchbar.value="");
});

$("searchBTN").click(function(){
  alert("cool");
})









//******************************************************************************************

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slideshow');
},  4000);

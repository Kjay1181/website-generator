//create an array of websites
var stupidSites=[
"https://www.lifewire.com/useless-websites-3483141",
"https://www.google.com",
"https://yahoo.com"
];

function randSites(){
  var rand= Math.floor(Math.random()*stupidSites.length);
var x= stupidSites[rand];
  document.getElementById('showLink').innerHTML="<a href="+x+">click here</a>";
}
// when user clicks a button, generate random number, and display link on page that corresponds to random number
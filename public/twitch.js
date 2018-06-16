$(document).ready(function(){

 var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas", "food", "monstercat", "saltybet", "blahblahblah"];

 var online = [];

for(let i = 0; i < streamers.length; i++){
    $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/' + streamers[i]).done(function(data2) {
        //console.log(data2);

        if(data2.stream != null){
          $('#channelsOnline').prepend("<img src=" + data2.stream.channel.logo + ">" + "<h3><a href=" + data2.stream.channel.url + "></h3><ul><li>" + data2.stream.channel.display_name + " is online now <a/></li><li>followers: " + data2.stream.channel.followers + "</li><li> viewers: " + data2.stream.viewers + "</li><li> broadcasting: " + data2.stream.channel.game + "</li>")

          }
          else if(data2.stream === null){
            $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/'+streamers[i]).done(function(data3){
              console.log(data3);

              if(data3.logo === null && data3.status === null){
                $('#channelsOffline').prepend("<img src=" + "http://i66.tinypic.com/2zjgoyc.jpg width=300 height=300" + "><h3><a href=" + data3.url + "></h3><ul><li>" + data3.name + " does not exist </a></li><br />")
                data3.name = false;
              }
                if(data3.name !== false){
                $('#channelsOffline').prepend("<img src=" + data3.logo + ">" + "<h3><a href=" + data3.url + "></h3><ul><li>" + data3.name + " is offline </a></li><li>followers: " + data3.followers + "</li><li> views: " + data3.views + "</li>")
              }
            });

        }
  });
};


  $('#Online').click(function(){
    $('#channelsOffline').hide();
    $('#channelsOnline').show();
  });

  $('#Offline').click(function(){
    $('#channelsOnline').hide();
    $('#channelsOffline').show();
  });

  $('#All').click(function(){
    $('#channelsOnline').show();
    $('#channelsOffline').show();
  });

});

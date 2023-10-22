console.log('Stats JavaScript Loaded.');

function updateStats(){
    console.log('Updating Stats');
    $.ajax({
        url: 'https://azura14.instainternet.com/api/nowplaying/27',
        type: 'GET',
        dataType: 'json',
        success: function(data){
        console.log('Stats Updated');
        console.log('Stats Updated');
        $('#title').text(data.now_playing.song.title);
        $('#artist').text(data.now_playing.song.artist);
        $('#artwork').attr("src", data.now_playing.song.art);
        
        // Check if streamer_name exists, otherwise set it to "Auto DJ"
        var presenterName = data.live && data.live.streamer_name ? data.live.streamer_name : "Auto DJ";
        $('#presenter').text(presenterName);       
            $("#artwork").attr("src",`${data.now_playing.song.art}`);   
        },
        error: function(data){
            console.log('Error Updating Stats ' + data);
        }
    });   
}

updateStats();
setInterval(updateStats, 5000);
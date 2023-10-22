console.log('Stats JavaScript Loaded.');

function updateStats(){
    console.log('Updating Stats');
    $.ajax({
        url: 'https://xonos.tools/radiostats/tfm',
        type: 'GET',
        dataType: 'json',
        success: function(data){
        console.log('Stats Updated');
            $('#title').text(data.stats.song.now.title);
            $('#artist').text(data.stats.song.now.artist);
            $('#artwork').text(data.stats.song.now.album_art);
            $('#presenter').text(data.stats.presenter.now.user.name)        
            $("#artwork").attr("src",`${data.stats.song.now.album_art}`);   
        },
        error: function(data){
            console.log('Error Updating Stats ' + data);
        }
    });   
}

updateStats();
setInterval(updateStats, 5000);
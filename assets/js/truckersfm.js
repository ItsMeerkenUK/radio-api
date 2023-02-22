console.log('Stats JavaScript Loaded.');

function updateStats(){
    console.log('Updating Stats');
    $.ajax({
        url: 'https://hub.nexustransport.co.uk/api/radio-stats',
        type: 'GET',
        dataType: 'json',
        success: function(data){
        console.log('Stats Updated');
            $('#title').text(data.tfm.song.title);
            $('#artist').text(data.tfm.song.artist);
            $('#artwork').text(data.tfm.song.album_art);
            $('#presenter').text(data.tfm.presenter.user.name)        
            $("#artwork").attr("src",`${data.tfm.song.album_art}`);   
        },
        error: function(data){
            console.log('Error Updating Stats ' + data);
        }
    });   
}

updateStats();
setInterval(updateStats, 5000);
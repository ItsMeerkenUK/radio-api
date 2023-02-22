console.log('Stats JavaScript Loaded.');

function updateStats(){
    console.log('Updating Stats');
    $.ajax({
        url: 'https://hub.nexustransport.co.uk/api/radio-stats',
        type: 'GET',
        dataType: 'json',
        success: function(data){
        console.log('Stats Updated');
            $('#title').text(data.sh.song.title);
            $('#artist').text(data.sh.song.artist);
            $('#artwork').text(data.sh.song.artwork);
            $('#presenter').text(data.sh.presenter.username);
            $("#artwork").attr("src",`${data.sh.song.artwork}`);   
        },
        error: function(data){
            console.log('Error Updating Stats ' + data);
        }
    });   
}

updateStats();
setInterval(updateStats, 5000);
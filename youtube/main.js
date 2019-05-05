

var smit = $("#search");
var nextId;
var key;
smit.on("submit", function(event){
    event.preventDefault();
    const keyword = $("#keyword").val();
    console.log(keyword)
    $.ajax({
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw`,
        type: "GET",
        success: function(data){
            $("#result-list").empty().append("");
            data.items.forEach(function(value){
                nextId = data.nextPageToken;
                key = keyword;
                $("#result-list").append(`
                <a class="result col-md-12" href="https://www.youtube.com/watch?v=${value.id.videoId}" target="_blank">
                <img src="${value.snippet.thumbnails.medium.url}" alt="">
                <div class="video_info">
                    <h2 class="title">${value.snippet.title}</h2>
                    <p class="description">${value.snippet.description}</p>
                    <span>>>View</span>
                </div>
            </a>
            `);
            //aaa
            
            


            //aaa
            });         
            // console.log(data);
    },
        error: function(error){
            console.log(error);
        },
    })
});

$(window).scroll(function() {
// console.log($(window).scrollTop());
// console.log($(document).height() - $(window).height())
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
        $.ajax({
            url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${key}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pageToken=${nextId}`,
            type: "GET",
            success: function(sub_data){
                // $("#result-list").empty().append("");
                sub_data.items.forEach(function(value){
                    $("#result-list").append(`
                    <a class="result col-md-12" href="https://www.youtube.com/watch?v=${value.id.videoId}" target="_blank">
                    <img src="${value.snippet.thumbnails.medium.url}" alt="">
                    <div class="video_info">
                        <h2 class="title">${value.snippet.title}</h2>
                        <p class="description">${value.snippet.description}</p>
                        <span>>>View</span>
                    </div>
                </a>
                `);
                });
                nextId = sub_data.nextPageToken;
                // data.nextPageToken=sub_data.nextPageToken;
            }          
        })   
    }
})



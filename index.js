var button = document.getElementById("button");
var key = "563492ad6f917000010000015c63247b52f54d439be26255ab12573f"

button.addEventListener("click", searchPhotos);

function searchPhotos() {

    var searched = document.getElementById("search").value;

    fetch("https://api.pexels.com/v1/search?query=" + searched, { // domain name /endpoint ?query string
        headers: new Headers({    // settings set as headers
            'Authorization': key, 
        }),
        method:'GET' // DEFAULT GET (POST,DELETE,PUT)
    })
        .then(res => res.json())
        .then(res => {
            var content = "";
            res.photos.forEach(photo => {
                content += ` <img src=${photo.src.small}></img> `;
            });
            document.getElementById("main").innerHTML = content;
        })
}

var buttonVideo = document.getElementById('buttonVideo');

buttonVideo.addEventListener("click", searchVideos);

function searchVideos(){
    var searchVideo = document.getElementById("searchVideo").value;

    fetch('https://api.pexels.com/videos/search?query=' + searchVideo, {
        headers: new Headers({    
            'Authorization': key, 
        }),
        method:'GET'
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
        var contentVideo = '';
        response.videos.forEach(video=>{
            contentVideo += 
            `<video width="320" height="240" controls>
            <source src="${video.video_files[0].link}" type="video/mp4">
            Your browser does not support the video tag.
          </video>`
        });
        document.getElementById('mainVideo').innerHTML = contentVideo;
    })
}

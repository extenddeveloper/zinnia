// api url
const api_url = "https://app.bpad.network/api/stage/full?secret=tTTkBXWzUUnZE3b2vVutEZxp";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    // if (response) {
    //     hideloader();
    // }
    show(data);
}

// Calling that async function
getapi(api_url);

// Function to hide the loader
// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }


// Function to define innerHTML for HTML table
function show(data) {

    var count = data.response.end;
    // var day = count.substring(11, 13);
    // var hour = count.substring(14, 16);
    // var min = count.substring(17, 19);
    // var second = count.substring(20, 21);
    // if (count.length > 10) count = count.substring(0, 10);
    // var count = count.replace(/-/g, "/");
    console.log(count);
    let time = `${count}`;

    let progress = `<div class="progress-percent progress-percent-s1 bg-theme-grad-alt" data-percent="${data.response.progress}" style="width: ${data.response.progress}%;"></div>`;

    let progresspoint = `<span>${data.response.sold} Sold</span> <span>${data.response.total}</span>`;


    //document.getElementById("apiprogress").innerHTML = progress;
    //document.getElementById("progress-point").innerHTML = progresspoint;
    
    var x = document.getElementById("timer");

    if(x.hasAttribute('data-date')){
        x.setAttribute('data-date', time);
    }

}
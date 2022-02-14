let container = document.body.querySelector('.container');
let searchResults = document.body.querySelector('.search-results');
let searchBtn=document.body.querySelector('#searchbtn')
let nextBtn=document.body.querySelector('#nextbutton')
let mainHeader = document.body.querySelector('.main-header')
let headerTwo = document.body.querySelector('.header-2')
let searchResultText = document.body.querySelector('.showing-results-text');


searchBtn.addEventListener('click', getVal)


function getVal() {
  console.log('test')
  val = document.querySelector('input').value;
  String(val)
  let results = document.querySelectorAll('.search-result')
  if(results.length>0){
    for (i=0;i<results.length;i++){
      results[i].remove();
    }
  }
  let resultText = document.createElement("h3")
  resultText.innerText=`
  You just searched for "${val}"
  `

  searchResultText.appendChild(resultText)



$.ajax({
  url: `https://www.googleapis.com/youtube/v3/search?part=snippet&%20&q=${val}%20&type=video%20&key=AIzaSyBMccR4yASb2d9yTvk-wKBPbS6776uxWGA`,
  success: function (data) {
    JSON.stringify(data)
    console.log(data)
    data.items.forEach(function(element, i){
      let result = document.createElement("div")
      result.innerHTML = `
    <a href="https://www.youtube.com/watch?v=${data.items[i].id.videoId}">
    <div class='left-hand'>
    <img src='${data.items[i].snippet.thumbnails.default.url}'/>
    </div>
    <div class='right-hand'>
    <h2>${data.items[i].snippet.title}</h2>
    <p>${data.items[i].snippet.description}</p>
    </div>
    </a>
    `
    result.classList.add('search-result')  
    searchResults.appendChild(result)
  })
  container.style.display = "none";
  headerTwo.style.display = "flex";

  }
});

}


// function getNext() {
  
//   let results = document.querySelectorAll('.search-result')
//   if(results.length>0){
//     for (i=0;i<results.length;i++){
//       results[i].remove();
//     }
    
//   }
// $.ajax({
//   url: `https://www.googleapis.com/youtube/v3/search?part=snippet&%20pageToken=${data.nextPageToken}&q=${val}%20&type=video%20&key=AIzaSyBMccR4yASb2d9yTvk-wKBPbS6776uxWGA`,
//   success: function (data) {
//     JSON.stringify(data)
//     data.items.forEach(function(element, i){
//       let result = document.createElement("div")
//       result.innerHTML = `
//     <a href="https://www.youtube.com/watch?v=${data.items[i].id.videoId}">
//     <img src='${data.items[i].snippet.thumbnails.default.url}'/>
//     <h2>${data.items[i].snippet.title}</h2>
//     <p>${data.items[i].snippet.description}</p>
//     </a>
//     `
//     result.classList.add('search-result')  
//     container.appendChild(result)
//   })
//   }
// });

// }




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
  if(results.length>0){
    for (i=0;i<results.length;i++){
      results[i].remove();
    }
  }

  let h3= document.body.getElementsByTagName('h3');
  if (h3.length>1){
    h3[1].remove();
  }

  let resultText = document.createElement("h3");
  resultText.classList.add('yousearched')
  resultText.innerText=`
  You just searched for "${val}"
  `

  
  setTimeout(function(){searchResultText.appendChild(resultText)},1000)
  



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
    <img src='${data.items[i].snippet.thumbnails.high.url}'/>
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
let chevron1 = document.body.querySelector('.chevron1')
let chevron2 = document.body.querySelector('.chevron2')
let chevron3 = document.body.querySelector('.chevron3')
let animate = document.body.querySelector('.animate')

searchBtn.addEventListener('mouseover', function(){
  chevron2.style.display='inline';
  chevron3.style.display='inline';
  chevron1.classList.add('animate');
  setTimeout(function(){chevron2.classList.add('animate')},75);
  setTimeout(function(){chevron3.classList.add('animate')},150);
;
})

searchBtn.addEventListener('mouseout', function(){
  chevron2.style.display='none';
  chevron2.classList.remove('animate');
  chevron3.style.display='none';
  chevron3.classList.remove('animate')
  chevron2.style.display='none';
  chevron1.classList.remove('animate');
})






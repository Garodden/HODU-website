const imageList = document.querySelector("#image-list");

let pageToFetch = 1;

async function fetchImages(pageNum){
  try {
    const response = await fetch('https://picsum.photos/v2/list?page='+pageNum+'&limit=3');
    if (!response.ok) {
      throw new Error('네트워크 응답에 문제가 있습니다.');
    }

    const datas = await response.json();
    console.log(datas);

    makeImageList(datas);

  } catch (error) {
    console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
  }
}
const showMoreBtn = document.querySelector(".show-more-btn")

function makeImageList(datas){
  datas.forEach((item)=>{
    imageList.innerHTML = imageList.innerHTML + "<li><img class=`article-img` src=`"+ item.download_url +"` alt=''></li>";
  });
}

showMoreBtn.addEventListener('click',()=>{
  fetchImages(pageToFetch++)
});



fetchImages();

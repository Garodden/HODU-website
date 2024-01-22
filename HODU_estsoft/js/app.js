const imageList = document.querySelector(".article-image-list");

let pageToFetch = 1;

async function fetchImages(pageNum){
  try {
    const response = await fetch('https://picsum.photos/v2/list?page='+pageNum+'&limit=9');
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

function makeImageList(datas) {
  for (let i = 0; i < datas.length; i += 3) {
    const ul = document.createElement("ul");
    ul.className = "article-img-cell";

    // 각 <ul>에 최대 3개의 이미지를 추가합니다.
    for (let j = i; j < i + 3 && j < datas.length; j++) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.className = "article-img";
      img.src = datas[j].download_url;
      img.alt = "lorem picsum";
      li.appendChild(img);
      ul.appendChild(li);
    }

    imageList.appendChild(ul);
  }
}

showMoreBtn.addEventListener('click',()=>{
  fetchImages(pageToFetch++)
});


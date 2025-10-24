let imgList = []
const list = document.querySelector('.img_list')
const resetBtn = document.querySelector('.reset_btn')
const moreBtn = document.querySelector('.more_btn')
const category = document.querySelector('.category')
const filterInput = document.querySelector('.filter_input')
const filterBtn = document.querySelector('.filter_btn')
// 이미지 생성
function createImg(imgList){
    const urlArr = imgList || []
    urlArr.forEach(v => {
        createImgList(v)
    });
}
// 이미지 통신
async function dogImg() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random/42');
        const dogImgData = await response.json();
        // console.log(dogImgData.message);
        imgList = dogImgData?.message;
        createImg(imgList)
    } catch (e) {
        console.error('error', e);
    }
}


// 카테고리 통신
async function dogTxt() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const dogTxtData = await response.json();
        const cateList = Object.keys(dogTxtData?.message)
        // console.log(cateList);
        cateList.forEach(v => {
            const option = document.createElement('option')
            option.value = v
            option.innerText = v
            category.appendChild(option)
        })
        
    } catch (e) {
        console.error('error', e);
    }
}


// 카테고리
category.addEventListener('change', function(e){
    list.innerHTML= ''
    const selectArr = imgList.filter(v => v.includes(e.target.value))
    console.log(e.target.value)
    if(e.target.value === 'all'){
        imgList.forEach(v => createImgList(v));
    }else{
        selectArr.forEach(v => createImgList(v));
    }
})

//필터링
filterBtn.addEventListener('click',function(){
    list.innerHTML= ''
    const filterArr = imgList.filter(v => v.includes(filterInput.value))
    if(filterInput.value === ''){
        imgList.forEach(v => createImgList(v));
    }else{
        filterArr.forEach(v => createImgList(v));
    }
})


// li img 생성 함수
function createImgList(url){
    const li = document.createElement('li')
    const img = document.createElement('img')
    img.src = url
    li.appendChild(img);
    li.classList.add('img_list_item');
    list.appendChild(li)
}

//더보기
moreBtn.addEventListener('click', dogImg)


// 리셋버튼
resetBtn.addEventListener('click',function(){
    imgList = []
    list.innerHTML= ''
    dogImg()
})

dogImg();
dogTxt();

// 이미지 클릭 시 보여주기
var popup = document.querySelector('.popup-wrapper')
var popupImg = document.querySelector('.select-img')
var thumbs = document.querySelectorAll('.gallery div')
var imgIdx = 0;
thumbs.forEach(t => {
    t.addEventListener('click', (t)=>{
        popup.style.display = 'block'
        imgIdx = Number(t.target.name)
        popupImg.setAttribute('src', `./img/${imgIdx}.png`)
    })    
})    


// popup 닫기
var closeBtn = document.querySelector('.close-btn')
closeBtn.addEventListener('click', ()=>{
    popup.style.display = 'none'
})        





let initialX = null,
initialY = null;

function initTouch(e) {
    initialX = `${e.touches ? e.touches[0].clientX : e.clientX}`;
    initialY = `${e.touches ? e.touches[0].clientY : e.clientY}`;
};

function swipeDirection(e) {
    if (initialX !== null && initialY !== null) {
    const currentX = `${e.touches ? e.touches[0].clientX : e.clientX}`,
        currentY = `${e.touches ? e.touches[0].clientY : e.clientY}`;

    let diffX = initialX - currentX,
        diffY = initialY - currentY;


    if(Math.abs(diffX) > Math.abs(diffY)){
        if( 0 < diffX){
            if(imgIdx !== 9){
                 ++imgIdx
                popupImg.setAttribute('src', `./img/${imgIdx}.png`)
            }
        }else{
            if(imgIdx !== 1){
                --imgIdx
                popupImg.setAttribute('src', `./img/${imgIdx}.png`)
            }
        }
    }

    initialX = null;
    initialY = null;
    }
}

window.addEventListener("touchstart", initTouch);
window.addEventListener("touchmove", swipeDirection);
window.addEventListener("mousedown", (e) => {
    initTouch(e),
    window.addEventListener("mousemove", swipeDirection)
});
window.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", swipeDirection);
});




// 계좌번호 복사하기
var copybtn = document.querySelector('.copybtn')
var copyacc = document.querySelector('.acc').innerHTML
const copy = (text) => {
    // 임시의 textarea 생성
    const $textarea = document.createElement("textarea");
  
    // body 요소에 존재해야 복사가 진행됨
    document.body.appendChild($textarea);
    
    // 복사할 특정 텍스트를 임시의 textarea에 넣어주고 모두 셀렉션 상태
    $textarea.value = text;
    $textarea.select();
    
    // 복사 후 textarea 지우기
    document.execCommand('copy');
    document.body.removeChild($textarea);
}

copybtn.addEventListener('click', ()=>{
    copy(copyacc);
})

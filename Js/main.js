// document.getElementById('button').addEventListener("click",function() {
//         document.querySelector('.modal-bg').style.display - 'flex';
//     });

// document.querySelector('.header_search-close').addEventListener('click', function() {
//   document.querySelector('.modal-bg').style.display = 'none';
// });

function Open(){
    modal.classList.add('show');
 }

// const open =document.getElementById('open');
// const modal = document.getElementById('modal');
// const close =document.getElementById('close');

// open.addEventListener('click'), () => {
//     modal.classList.add('show')
// }

// close.addEventListener('click'), () => {
//     modal.classList.remove('show')
// }


let videoBtn = document.querySelectorAll('.vid-btn');

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.home_controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
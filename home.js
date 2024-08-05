// src="https://code.jquery.com/jquery-3.7.1.js"
// $(document).ready(function () {
//     $(window).scroll(function (){
//         if($(this).scrollTop()){
//             $('header__top-bottom').addClass('sticky');
//         };
//     });
// });
// window.addEventListener('scroll', function() {
//     const block3 = document.querySelector('header__top');
//     const block1 = document.querySelector('header__top-center');
//     const block2 = document.querySelector('header__top-bottom');
  
//     if (block1.getBoundingClientRect().top < 0 && block2.getBoundingClientRect().top < 0) {
//         header__top-bottom.classList.add('show');
//     } else {
//         header__top-bottom.classList.remove('show');
//     }
//   });

 const elementSaling= document.querySelector('.anniversary__top-center-between-2-wap-ul')
 const elementSalingBtn =document.querySelector('.anniversary__top-center-between-selling')
//callback
elementSalingBtn.addEventListener('click', function(event) {
    console.log(elementSaling.classList.contains('hidden'));
    console.log(elementSaling)
    // Nếu phần tử elementSaling có lớp CSS 'hidden'
    if (elementSaling.classList.contains('hidden')) {

        elementSaling.classList.add('scaling-animation')
      // Xóa lớp CSS 'hidden' khỏi phần tử elementSalingBtn
        elementSaling.classList.remove('hidden');
        elementSaling.classList.remove('scale-in');
    } else {
        elementSaling.classList.remove('scaling-animation')
        elementSaling.classList.add('scale-in')
        setTimeout(function() {elementSaling.classList.add('hidden')},200); 
           
    }
  });

const elementfaicon = document.querySelector('.anniversary__top-center-between-function-bar-iconn01')
elementfaicon.addEventListener('click',function(event){
    console('ban vua click vao toi  ')
})
  


const btns = document.querySelectorAll('.question-btn');
   
btns.forEach((btn)=>{ 
  
    btn.addEventListener('click',(e)=>{ 
     const question = e.currentTarget.parentElement.parentElement;
   
     question.classList.toggle('show-text')
   
    });
 
})




























// const btns =  document.querySelectorAll('.question-btn');
//    btns.forEach((btn)=>{ 
//     btn.addEventListener('click',(e)=>{ 
//     const questin = e.currentTarget.parentElement.    parentElement; 
   
//          questin.classList.toggle('show-text')

//      });


//     })










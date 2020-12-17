//Get the button
let myBtn = document.getElementById("myBtn"); 

//When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", function() {
    // When the user scrolls down 20px from the top of the document, show the button
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        myBtn.style.display = "block";
      } else {
        myBtn.style.display = "none";
      }
      
    // When the user clicks on the button, scroll to the top of the document
      myBtn.addEventListener('click', function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      })
});


// Pagination for blog page
let articleList = document.querySelector('#article-list').children;
let prevBtn = document.querySelector('.page-prev');
let nextBtn = document.querySelector('.page-next');
let pageNum = document.querySelector('.page-number');
let currentPage = 1;
let perPage = 6;
const pagination = Math.ceil(articleList.length/perPage);

function showItems(){
  for(let i = 0; i < articleList.length; i++){
    // hide the article list post
    articleList[i].classList.add('hide');
    // if number of posts is great than or equal to per page and number of posts is less than what the current page needs remove hide class
    if (i>=(currentPage*perPage)-perPage && i<currentPage*perPage){
      articleList[i].classList.toggle('hide');
    }
  }
  // get the current page number and the number of total pages 
  pageNum.textContent =`${currentPage} of ${pagination}`;
}

function checkPageNumber(){
  // check to see if the current page has is 1 aka the first page on it
  if (currentPage == 1){
    // if it is the first page than disable the prev btn
    prevBtn.classList.add('pag-disable');
  } else {
    // if it is not the first page then take off disable on prev btn
    prevBtn.classList.remove('pag-disable');
  }
  // check to see if the current page has is the last page on it
  if(currentPage == pagination){
    // if it is  the last page than disable the next btn
    nextBtn.classList.add('pag-disable');
  }else {
    // if it is not the last page then take off disable on next btn
    nextBtn.classList.remove('pag-disable');
  }
}

window.onload=function(){
  showItems();
  checkPageNumber();
};

nextBtn.addEventListener('click', function () {
  currentPage++;
  showItems();
  checkPageNumber();
  return false;
})

prevBtn.addEventListener('click', function(){
  currentPage--;
  showItems();
  checkPageNumber();
  return false;
})




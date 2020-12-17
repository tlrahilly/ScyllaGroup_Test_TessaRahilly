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
    articleList[i].classList.add('hide');
    
    if (i>=(currentPage*perPage)-perPage && i<currentPage*perPage){
      articleList[i].classList.toggle('hide');
    }
  }
  pageNum.textContent =`${currentPage} of ${pagination}`;
}

window.onload=showItems();

nextBtn.addEventListener('click', function () {
  currentPage++;
  showItems();
  return false;
})

prevBtn.addEventListener('click', function(){
  currentPage--;
  showItems();
  return false;
})




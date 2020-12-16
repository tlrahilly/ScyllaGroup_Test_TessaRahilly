//Get the button
var myBtn = document.getElementById("myBtn"); 

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


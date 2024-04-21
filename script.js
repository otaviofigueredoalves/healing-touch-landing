window.onload = function(){
    document.querySelector(".menu-mobile").addEventListener("click", function(){
      if(document.querySelector("header nav ul").style.display == 'flex') {
        document.querySelector("header nav ul").style.display = 'none';
      } else {
        document.querySelector("header nav ul").style.display = 'flex';
      }
    })
  };
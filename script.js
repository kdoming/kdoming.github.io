(() => {
    function scrollTriggered() {
      document.querySelector(".see_more").parentNode.removeChild(document.querySelector(".see_more"));
      document.removeEventListener("scroll", test);
    }
  
    function clickTriggered() {
      console.log("click");
      // document.removeEventListener("scroll", test);
      let scrollDes = document.getElementById("more").offsetTop;
      console.log(scrollDes);
      window.scroll({
        top: scrollDes - 200,
        left: 0,
        behavior: "smooth"
      });
    }
  
    if (document.querySelector(".see_more")) {
      document.addEventListener("scroll", scrollTriggered);
  
      document.querySelectorAll(".see_more").forEach(function(obj) {
        obj.addEventListener("click", clickTriggered);
      });
    }
  })();
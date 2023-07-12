var navList = document.getElementById("nav-lists");
    function Show() {
        navList.classList.add("_Menus-show");
    }
    
    function Hide(){
        navList.classList.remove("_Menus-show");
    }
    var faq = document.getElementsByClassName("pertanyaan");
    var i;
    for (i = 0; i < faq.length; i++) {
         faq[i].addEventListener("click", function () {
            this.classList.toggle("aktif");
            var body = this.nextElementSibling;
            if (body.style.display === "block") {
                body.style.display = "none";
            } else {
                body.style.display = "block";
            }
        });
    }
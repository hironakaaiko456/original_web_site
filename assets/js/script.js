//header hamburger menu

function toggleMenu() {
  document.querySelector('.header-right').classList.toggle('active');
}





// works link

function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
  }



  function toggleMenu() {
    document.querySelector('.header-right').classList.toggle('active');
    document.querySelector('overlay').classList.toggle('active');
  }
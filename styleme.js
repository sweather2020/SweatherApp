function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn1')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    if (!event.target.matches('.dropbtn2')) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  document.getElementById("buttons").onclick = function() {reset()};

  function reset() {
    document.getElementsByClassName("dropbtn1")[0].innerHTML = "Sunny";
    document.getElementsByClassName("dropbtn2")[0].innerHTML = "School";
  }

  document.getElementById("w1").onclick = function() {Sunny()};

  document.getElementById("w2").onclick = function() {Rainy()};

  document.getElementById("w3").onclick = function() {Windy()};

  function Sunny() {
    document.getElementsByClassName("dropbtn1")[0].innerHTML = "Sunny";
  }

  function Rainy() {
    document.getElementsByClassName("dropbtn1")[0].innerHTML = "Rainy";
  }

  function Windy() {
    document.getElementsByClassName("dropbtn1")[0].innerHTML = "Windy";
  }

  document.getElementById("o1").onclick = function() {School()};

  document.getElementById("o2").onclick = function() {Work()};

  document.getElementById("o3").onclick = function() {_Date()};

  function School() {
    document.getElementsByClassName("dropbtn2")[0].innerHTML = "School";
  }

  function Work() {
    document.getElementsByClassName("dropbtn2")[0].innerHTML = "Work";
  }

  function _Date() {
    document.getElementsByClassName("dropbtn2")[0].innerHTML = "Date";
  }
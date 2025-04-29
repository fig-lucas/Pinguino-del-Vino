function allowAccess() {
    document.getElementById("ageModal").style.display = "none";
    document.getElementById("siteContent").style.display = "block";
  }
  
  
  function denyAccess() {
    alert("Você precisa ter 18 anos ou mais para acessar este site.");
    window.location.href = "https://www.google.com";
  }

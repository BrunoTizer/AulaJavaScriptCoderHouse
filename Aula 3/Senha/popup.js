document.getElementById("submit").addEventListener("click", function() {
    var password = document.getElementById("password").value;
    if (password === "160745") {
      window.close();
    } else {
      alert("Senha incorreta. Tente novamente.");
    }
  });
  
function validateForm(event) {
    event.preventDefault();
  
    // Obtém os valores do usuário e senha
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Verifica se o usuário e senha estão corretos
    if (username === "sabrina" && password === "123") {
      // Redireciona para a outra página
      window.location.href = "https://lookerstudio.google.com/s/ucO6Ll0Y5Uw";
    } else {
      var errorText = document.getElementById("errorText");
      errorText.textContent = "Usuário ou senha inválidos.";
    }
  }
  
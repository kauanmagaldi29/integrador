function validateForm(event) {
    event.preventDefault();
  
    // Obtém os valores do usuário e senha
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Verifica se o usuário e senha estão corretos
    if (username === "sabrina" && password === "123") {
      // Redireciona para a outra página
      window.location.href = "https://lookerstudio.google.com/reporting/6adc297d-587c-4500-afe5-0cfb096b788a";
    } else {
      var errorText = document.getElementById("errorText");
      errorText.textContent = "Usuário ou senha inválidos.";
    }
  }
  
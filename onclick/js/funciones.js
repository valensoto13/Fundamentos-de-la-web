// 1. Cambiar texto del botón "Iniciar sesión"
  const loginBtn = document.querySelector(".login-btn");
  loginBtn.addEventListener("click", function () {
    if (loginBtn.textContent === "Iniciar sesión") {
      loginBtn.textContent = "Cerrar sesión";
    } else {
      loginBtn.textContent = "Iniciar sesión";
    }
  });

  // 2. Hacer desaparecer el botón "Agregar definición"
  const addDefBtn = document.querySelector(".action button");
  addDefBtn.addEventListener("click", function () {
    addDefBtn.style.display = "none";
  });

  // 3 y 4. Botones "Me gusta"
  const likeButtons = document.querySelectorAll(".like-btn");

  likeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Obtener el título de la tarjeta (el h2 más cercano)
      const card = btn.closest(".card");
      const title = card.querySelector("h2").textContent;

      // Mostrar alerta
      alert(`${title} was liked`);

      // Actualizar contador de likes
      let count = parseInt(btn.textContent);
      count++;
      btn.textContent = `${count} me gusta`;
    });
  });
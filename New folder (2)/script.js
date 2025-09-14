document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const colorButtons = document.querySelectorAll(".color-btn");

  // Apply stored dark mode
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    if (darkModeToggle) {
      darkModeToggle.checked = true;
    }
  }

  // Apply stored accent color
  const savedAccent = localStorage.getItem("accentColor");
  if (savedAccent) {
    document.documentElement.style.setProperty("--accent-color", savedAccent);
    document.documentElement.style.setProperty("--sidebar-bg", savedAccent);
  }

  // Toggle dark mode
  if (darkModeToggle) {
    darkModeToggle.addEventListener("change", () => {
      const isChecked = darkModeToggle.checked;
      document.body.classList.toggle("dark-mode", isChecked);
      localStorage.setItem("darkMode", isChecked);
    });
  }

  // Handle accent color change
  if (colorButtons.length) {
    colorButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const newColor = btn.dataset.color;
        document.documentElement.style.setProperty("--accent-color", newColor);
        document.documentElement.style.setProperty("--sidebar-bg", newColor);
        localStorage.setItem("accentColor", newColor);
      });
    });
  }
});


// script.js (or inside a script tag on settings.html)
document.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.querySelector(".btn-primary");
  const displayNameInput = document.getElementById("displayName");

  // Load saved name if exists
  const savedName = localStorage.getItem("displayName");
  if (savedName) {
    displayNameInput.value = savedName;
  }

  saveBtn.addEventListener("click", () => {
    const name = displayNameInput.value.trim();
    if (name) {
      localStorage.setItem("displayName", name);
      alert("Display Name saved!");
    } else {
      alert("Please enter a Display Name");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const userNameSpan = document.getElementById("userName");
  const savedName = localStorage.getItem("displayName");
  if (savedName && userNameSpan) {
    userNameSpan.textContent = savedName;
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.querySelector(".btn");

  saveButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent actual form submission

    const current = document.getElementById("currentPassword").value.trim();
    const newPass = document.getElementById("newPassword").value.trim();
    const confirm = document.getElementById("confirmPassword").value.trim();

    // Basic check
    if (!current || !newPass || !confirm) {
      alert("Please fill out all password fields.");
      return;
    }

    if (newPass !== confirm) {
      alert("New password and confirm password do not match.");
      return;
    }

    // Save or simulate saving password here
    alert("🔒 Password updated successfully!");
  });
});


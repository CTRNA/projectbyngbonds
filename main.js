function typeEffect(element, text, delay = 100) {
    let charIndex = 0;
    let blinkerSpan = document.createElement('span');
    blinkerSpan.textContent = '|';
    element.appendChild(blinkerSpan);

    function type() {
        if (charIndex < text.length) {
            element.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, delay);
        }
    }
    type();
}

// Usage
const titleElement = document.getElementById('titleblink');
const titleText = 'PROJECT BYNG BOND';
typeEffect(titleElement, titleText, 100);

document.getElementById('search-icon').addEventListener('mouseover', function() {
    document.getElementById('search-input').focus();
});

function login_button() {
  var x = document.getElementById("login_page");
  x.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
    var loginPage = document.getElementById('login_page');
    var registerPage = document.getElementById('register_page');
    var loginButton = document.querySelector('.login_button');
    var iconClose = document.querySelectorAll('.icon-close');

    loginButton.onclick = function() {
        loginPage.classList.add('active');
    };

    window.onclick = function(event) {
        if (event.target == loginPage || event.target == registerPage) {
            loginPage.classList.remove('active');
            registerPage.classList.remove('active');
        }
    };

    iconClose.forEach(function(close) {
        close.onclick = function() {
            loginPage.classList.remove('active');
            registerPage.classList.remove('active');
        };
    });
});

function showRegister() {
  var loginPage = document.getElementById('login_page');
  var registerPage = document.getElementById('register_page');

  loginPage.classList.remove('active');
  setTimeout(() => {
      registerPage.classList.add('active');
  }, 500); // Adjust the timing to match the CSS transition
}

function showLogin() {
  var loginPage = document.getElementById('login_page');
  var registerPage = document.getElementById('register_page');

  registerPage.classList.remove('active');
  setTimeout(() => {
      loginPage.classList.add('active');
  }, 500); // Adjust the timing to match the CSS transition
}

function selectGender(selectedGender) {
    const genders = ['male', 'female', 'other'];
    genders.forEach(gender => {
        const button = document.getElementById(gender);
        if (gender === selectedGender) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Store the selected gender in a hidden input or a variable if needed
    document.getElementById('rGender').value = selectedGender;
}
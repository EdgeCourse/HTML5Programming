const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
  let errorMessage = null;

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === "ArrowRight") {
      this.blur();
    }
  });

  ["cut", "copy", "paste"].forEach(eventType => {
    input.addEventListener(eventType, (event) => {
      event.preventDefault();
      if (errorMessage) {
        errorMessage.remove();
      }
      errorMessage = showError(event.target, event.type);
    });
  });

  input.addEventListener("input", () => {
    if (errorMessage) {
      errorMessage.remove();
      errorMessage = null;
    }
  });
});

function showError(input, eventType) {
  const errorMessage = document.createElement('div');
  errorMessage.textContent = `${eventType} is disabled in this field`;
  errorMessage.classList.add('error-message');

  input.parentNode.insertBefore(errorMessage, input.nextSibling);

  errorMessage.style.display = 'block';
  errorMessage.style.height = '0';
  errorMessage.style.color = 'red';
  errorMessage.style.transition = 'height 0.3s ease';

  setTimeout(() => {
    errorMessage.style.height = errorMessage.scrollHeight + 'px'; 
  }, 0);

  return errorMessage;
}

//es5

/* 
var inputs = document.querySelectorAll("input");

for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  var errorMessage = null;

  input.addEventListener("blur", function() {
    var inputType = this.id;
    var isValid = true;

    switch (inputType) {
      case "phone":
        isValid = this.value.match(/^\d{10}$/);
        break;
      case "email":
        isValid = this.value.match(/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$/);
        break;
      case "zip":
        isValid = this.value.match(/^((\d{5}-\d{4})|(\d{5})|([AaBbCcEeGgHhJjKkLlMmNnPpRrSsTtVvXxYy]\d[A-Za-z]\s?\d[A-Za-z]\d))$/);
        break;
      default:
        isValid = this.value !== '';
    }

    this.className = isValid ? "form-control" : "form-control error";

    if (errorMessage) {
      errorMessage.remove();
      errorMessage = null;
    }
  });

  input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13 || event.keyCode === 39) {
      this.blur();
    }
  });

  var eventTypes = ["cut", "copy", "paste"];
  for (var j = 0; j < eventTypes.length; j++) {
    input.addEventListener(eventTypes[j], function(event) {
      event.preventDefault();
      if (errorMessage) {
        errorMessage.remove();
      }
      errorMessage = showError(this, event.type); // 'this' refers to the input element
    });
  }

  input.addEventListener("input", function() {
    if (errorMessage) {
      errorMessage.remove();
      errorMessage = null;
    }
  });
}

function showError(input, eventType) {
  var errorMessage = document.createElement('div');
  errorMessage.textContent = eventType + " is disabled in this field.";
  errorMessage.className = "error-message"; 

  input.parentNode.insertBefore(errorMessage, input.nextSibling);

  errorMessage.style.display = 'block';
  errorMessage.style.height = '0';
  errorMessage.style.transition = 'height 0.3s ease';

  setTimeout(function() {
    errorMessage.style.height = errorMessage.scrollHeight + 'px'; 
  }, 0);

  return errorMessage;
}
*/
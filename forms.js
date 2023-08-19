
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');
    const regModal = new bootstrap.Modal(document.getElementById('regModal'));

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission

      // Reset field borders before performing validation
      resetFieldBorders();

      // Perform validation
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const phoneNum = document.getElementById('phoneNum').value;
      const countryOrigin = document.getElementById('country-origin').value;
      const countryResidence = document.getElementById('country-residence').value;

      let isValid = true;

      // Validate required fields
      if (!firstName) {
        highlightField('firstName');
        isValid = false;
      }
      if (!lastName) {
        highlightField('lastName');
        isValid = false;
      }
      if (!email) {
        highlightField('email');
        isValid = false;
      }
      if (!phoneNum) {
        highlightField('phoneNum');
        isValid = false;
      }

      if (!countryOrigin){
        highlightField('country-origin');
        isValid = false;
      }

      if (!countryResidence){
        highlightField('country-residence');
        isValid = false;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && !email.match(emailRegex)) {
        highlightField('email');
        isValid = false;
      }

      if (!phoneNum) {
        highlightField('phoneNum');
        isValid = false;
      } else if (!isValidPhoneNumber(phoneNum)) {
        highlightField('phoneNum');
        alert('Please enter a valid phone number with dialing code.');
        isValid = false;
      }


      if (isValid) {
          var formData = $("#userForm").serialize();
          $.ajax({
              url: "forms.php",
              data: formData,
              type: "POST",
              success: function(data) {
                  
                    regModal.show();
              },
              error: function(xhr, status, error) {
                  // An error occurred
                  alert(error);
              }
          });
      }
    });

    function isValidPhoneNumber(phone) {
      const phoneRegex = /^\+[0-9]{1,3}-[0-9]{5,}$/;
      return phone.match(phoneRegex);
    }

    function highlightField(fieldId) {
      document.getElementById(fieldId).style.borderColor = 'red';
    }

    function resetFieldBorders() {
      const allFields = form.querySelectorAll('.form-control');
      allFields.forEach(function (field) {
        field.style.borderColor = '';
      });
    }
  });


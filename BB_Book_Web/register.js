var jwt = localStorage.getItem("jwt");
if (jwt == "admin" || jwt == "user") {
  window.location.href = './home.html';
}

$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault();

    var formData = {
      fname: $('#fname').val(),
      lname: $('#lname').val(),
      email: $('#email').val(),
      uid: $('#uid').val(),
      password: $('#password').val()
  };

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/register',
      data: formData,
      success: function (data) {
        if (data.success == true) {
          Swal.fire({
            text: data.message,
            icon: 'success',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = './Confirm.html';
            }
          });
        }
      } ,
      error: function (xhr, status, error) {
        Swal.fire({
          text: xhr.responseJSON.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    });
  });
});
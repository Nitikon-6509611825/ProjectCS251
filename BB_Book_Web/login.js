var jwt = localStorage.getItem("jwt");
if (jwt == "user") {
  window.location.href = './home.html';
}

if (jwt == "admin") {
  window.location.href = './addProduct.html';
}

$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault();

    var uid = $('#uid').val();
    var password = $('#password').val();

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/login',
      data: {
        uid: uid,
        password: password
      },
      success: function (data) {
        if (data.success == true) {
          localStorage.setItem("jwt", data.accessToken);
          localStorage.setItem("userId", data.userId);
          Swal.fire({
            text: data.message,
            icon: 'success',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = './home.html';
            }
          });
        }
      } ,
      error: function (xhr, status, error) {
        Swal.fire({
          text: xhr.responseJSON.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });;
      }
    });
  });
});
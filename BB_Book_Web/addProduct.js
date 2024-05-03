var jwt = localStorage.getItem("jwt");
if (jwt !== "admin") {
    window.location.href = './home.html';
}

$(document).ready(function () {
    $('#input-file').on('change', function (e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            $('#bookPic').attr('src', reader.result);
        };
        reader.readAsDataURL(file);
    });
    $('form').submit(function (e) {
        e.preventDefault();
        // เมื่อฟอร์มถูกส่ง

        var bookName = $('#bookName').val();
        var bookGroup1 = $('#bookGroup1').val();
        var bookGroup2 = $('#bookGroup2').val();
        var bookGroup3 = $('#bookGroup3').val();
        var price = $('#price').val();

        if (bookName === "" || (bookGroup1 === "" && bookGroup2 === "" && bookGroup3 === "") || price === "") {
            Swal.fire({
                text: "กรุณากรอกข้อมูลให้ครบ",
                icon: "error",
                confirmButtonText: "OK"
            });
            return false;
        }

        const tNo = String(bookGroup1) + String(bookGroup2) + String(bookGroup3);
        // รวบรวมข้อมูลจากฟอร์ม
        var formData = new FormData();
        formData.append('bookName', bookName);
        formData.append('tNo', tNo);
        formData.append('price', price);
        formData.append('bPicture', $('#input-file')[0].files[0]);

        // ส่งข้อมูลไปยัง API
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/api/addProduct',
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.success === true) {
                    Swal.fire({
                        text: data.message,
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            },
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

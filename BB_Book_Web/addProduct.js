var jwt = localStorage.getItem("jwt");
if (jwt !== "admin") {
    window.location.href = './home.html';
}

$(document).ready(function () {
    $('#input-file').change(function () {
        // เมื่อมีการเลือกไฟล์
        var input = this;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#bookPic').attr('src', e.target.result); // ตั้งค่า src ของรูปภาพ
            };
            reader.readAsDataURL(input.files[0]);
        }
    });

    $('form').submit(function (e) {
        e.preventDefault();
        // เมื่อฟอร์มถูกส่ง

        var bookName = $('#bookName').val();
        var bookGroup1 = $('#bookGroup1').val();
        var bookGroup2 = $('#bookGroup2').val();
        var bookGroup3 = $('#bookGroup3').val();
        var price = $('#price').val();
        var picture = $('#input-file').val();

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
        var formData = {
            bookName: bookName,
            tNo: tNo,
            price: price,
            bPicture: picture
        };

        // ส่งข้อมูลไปยัง API
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/api/addProduct',
            data: formData,
            success: function (data) {
                console.log(data);
                if (data.success === true) {
                    Swal.fire({
                        text: data.message,
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
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

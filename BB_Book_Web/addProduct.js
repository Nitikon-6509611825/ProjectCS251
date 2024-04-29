let bookPic = document.getElementById("bookPic");
            let inputFile = document.getElementById("input-file");

            inputFile.onchange = function(){
                bookPic.src = URL.createObjectURL(inputFile.files[0]);
            }

            function showSuccessPopup() {
                if (validateForm()==true){
                    alert("เพิ่มรายการเสร็จสมบูรณ์แล้ว!");
                    location.reload();
                }
            }

            function resetAllData() {
                document.getElementById("myForm").reset();
            }

            function validateForm() {
                var bookName = document.getElementById("bookName").value;
                var bookGroup1 = document.getElementById("bookGroup1").value;
                var price = document.getElementById("price").value;

                if(bookName.trim() == "" || bookGroup1.trim() == "" || price.trim() == "") {
                    if (bookName.trim() == "") {
                        document.getElementById("errorMessage").innerText = "*กรุณากรอกชื่อหนังสือ";
                    }else document.getElementById("errorMessage").innerText = "";
                    if (bookGroup1.trim() == "") {
                        document.getElementById("errorMessage1").innerText = "*กรุณากรอกหมวดหมู่";
                    } else document.getElementById("errorMessage1").innerText = "";
                    if (price.trim() == "") {
                        document.getElementById("errorMessage2").innerText = "*กรุณากรอกราคา";
                    } else document.getElementById("errorMessage2").innerText = "";
                    return false;
                } else return true;
            }
        

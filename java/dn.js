function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
if(username== "") {
    alert("Vui lòng nhập tên tài khoản!");
  return false;
  }
  if(email==""){
      alert("Vui lòng nhập email!");
  }
  if(password == "") {
  alert("Vui lòng nhập mật khẩu!");
  return false;
  }else if(password.length < 8){
    alert("Mật khẩu ít nhất 8 ký tự!")
    return false;
  }
  if(password2 == "") {
  alert("Vui lòng xác minh mật khẩu!");
  return false;
  }
  alert("Xin hãy điền đúng thông tin!");
  return true;
}
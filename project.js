function log() {
    let AccountHolder = {
      userName: "elto",
      password: "23456",
    };
    const userOne = document.getElementById("userOne-id").value;
    const userOnepassword = document.getElementById("userOne-id").value;
    if (
      AccountHolder.userName === userOne &&
      AccountHolder.password === userOnepassword
    ) {
      document.getElementById("user-class-id").tagName = "user-class-display";
      document.getElementById("login-page-id").tagName = "displaylogin-page";
      userActivity();
    } else {
      alert("wrong password");
    }
  }
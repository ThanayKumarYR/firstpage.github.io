function validate()
{
    var username = document.forms["myForm"]["username"].value;
    var password =  document.forms["myForm"]["password"].value;
    if(username == "admin" && password == "grp8")
    {
        // alert("Login Successful");
        username = "";
        password = "";
        window.location.assign("https://thanaykumaryr.github.io/frontpage.github.io/")
        return false;
    }
    else
    {
        username = "";
        password = "";
        alert("Invalid Credentials");
        return false;
        
    }
}

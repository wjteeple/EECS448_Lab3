function validate () {
    var pass1, pass2, text;

    pass1 = document.getElementById("pass").value;
    pass2 = document.getElementById("reenter").value;
    
    if (pass1.length >= 8 && pass2.length >= 8)
    {
        if (pass1 == pass2)
        {
            text = "The passwords match.";
        }
        else
        {
            text = "The passwords do not match.";
        }    
    }
    else
    {
        text = "The password must be at least 8 characters long.";
    }
    
    document.getElementById("message").innerHTML = text;
}
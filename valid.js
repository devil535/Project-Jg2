function showpass(){
    let x= document.getElementById("usr_pas");
    if (x.type==="password")
    {
        x.type="text";
    }
    else{
        x.type="password"
    }
}


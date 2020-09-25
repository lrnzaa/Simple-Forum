var error = document.getElementById('lblError');

function validateForm()
{
    var nama = document.getElementById('txtName').value;
    var email = document.getElementById('txtEmail').value;
    var phoneNumber = document.getElementById('numPhoneNumber').value;
    var address = document.getElementById('txtAddress').value;
    var password = document.getElementById('txtPassword').value;

    var male = document.getElementById('rbMale').checked;
    var female = document.getElementById('rbFemale').checked;

    if(nama == "")
    {
        error.innerHTML = "*Nama harus diisi*";
    }
    else if(nama.length < 3)
    {
        error.innerHTML = "*Nama minimal 3 karakter*";
    }
    else if(email == "")
    {
        error.innerHTML = "*Email harus diisi*";
    }
    else if(email.indexOf('@') == -1 || email.indexOf('.') == -1 || email.indexOf('@') == 0 || email.indexOf('.') == 0)
    {
        error.innerHTML = "*Format email salah [Ex : aaa@gmail.com]*"
    }
    else if(phoneNumber == "")
    {
        error.innerHTML = "*Nomor HP harus diisi*";
    }
    else if(address == "")
    {
        error.innerHTML = "*Alamat rumah harus diisi*";
    }
    else if(male == false && female == false)
    {
        error.innerHTML = "*Gender harus dipilih*";
    }
    else if(password == "")
    {
        error.innerHTML = "*Password harus diisi*";
    }
    else if(password.length < 8)
    {
        error.innerHTML = "*Password minimal 8 karakter*";
    }

    if (error.innerHTML == "")
    {
        alert('Registrasi berhasil.');
        var success = document.getElementById('formRegistration').reset();
    }
}
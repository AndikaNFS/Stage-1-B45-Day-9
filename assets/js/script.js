function getData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    if(name == "") {
        return alert("nama harus di isi")
    } else if( email == "") {
        return alert("email harus di isi")
    } else if( phone == "") {
        return alert("nomor telpon harus di isi")
    } else if( subject == "") {
        return alert("harus di isi")
    } else if ( message == ""){
        return alert("pesan harus di isi")
    }

    const emailReceiver = "andikanursasmito5@gmail.com"

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo Nama Saya ${name}, ${message}, bisakah anda menghubungi saya di ${phone} ?`
    a.click()

    // console.log(name)
    // console.log(email)
    // console.log(phone)
    // console.log(subject)
    // console.log(message)
}
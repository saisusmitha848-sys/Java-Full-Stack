document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("details");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let mobile = document.getElementById("Mobile").value;
        let age = document.getElementById("Age").value;
        let gender = document.getElementById("Gender").value;
        let address = document.getElementById("Address").value;

        // Display details
        document.getElementById("p1").innerHTML = "<b>Name:</b> " + name;
        document.getElementById("p2").innerHTML = "<b>Email:</b> " + email;
        document.getElementById("p3").innerHTML = "<b>Mobile Number:</b> " + mobile;
        document.getElementById("p4").innerHTML = "<b>Age:</b> " + age;
        document.getElementById("p5").innerHTML = "<b>Gender:</b> " + gender;
        document.getElementById("p6").innerHTML = "<b>Address:</b> " + address;

        // Display uploaded photo
        let imageFile = document.getElementById("image").files[0];

        if (imageFile) {
            let reader = new FileReader();

            reader.onload = function (e) {
                document.getElementById("dp").src = e.target.result;
            };

            reader.readAsDataURL(imageFile);
        }
    });

});
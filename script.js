function submitForm(event) {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var gender = document.getElementById("gender").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    var checkboxes =    document.getElementsByName('foodPreference');
    var foodPreference = function() {


        var result = "";

        console.log(checkboxes);

        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                result += checkboxes[i].value + ", ";
            }
        }
        return result.slice(0, result.length-2); // adding comma with extra space thus using length-2 while slicing
    }

        if (foodPreference () == "") {
            alert("Please select at least two food preferences");
        }

        if (firstName == "" || lastName == "" || address == "" || foodPreference() == "" || gender == "" || state == "" || country == "") {
            alert("Please enter all the fields first!");
        }
        else {
            var html = "";

            html = "<tr><td>" + firstName 
            + "</td><td>" + lastName 
            + "</td><td>" + address 
            + "</td><td>" + foodPreference() 
            + "</td><td>" + gender 
            + "</td><td>"+ state 
            + "</td><td>"+ country 
            + "</td></tr>";

            document.getElementById("table").innerHTML += html;

            document.getElementById('firstName').value = "";
            document.getElementById('lastName').value = "";
            document.getElementById('address').value = "";
            document.getElementById('gender').value = "";
            document.getElementById('state').value = "";
            document.getElementById('country').value = "";
            for (var i = 0; i <checkboxes.length; i++) {
                checkboxes[i].checked = false;      
            }
        }
    }
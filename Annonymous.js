var button = document.querySelector('#validate-email');

var email = button.addEventListener ("click",function() {
    var input = document.querySelector('#email'),
        input_value = input.value,
        result = document.querySelector('#result'),
        flag = false,
        flag1 = false,
        flag2 = false;
    if(input_value.charAt(0).match(/[A-Z,a-z]/g)) {
        for(var i = 1; i<input_value.length; i++) {
            var temp = input_value.charAt(i);
            if(temp === "@") {
                flag1 = true;
            }
            if(flag1) {
                if(temp === ".") {
                    if(i !== input_value.length-1) {
                        flag2 = true;
                    }
                }
            }
        }
        if(flag1 === true && flag2 === true) {
            flag = true;
        }
    }
    if(flag) {
        success(input,result);
    } else {
        error(input,result);
    }
});

function success(input,result) {
    input.removeAttribute("class");
    result.textContent = "Valid Email!!";
}

function error(input,result) {
    input.className = "invalid-email";
    result.textContent = "Invalid Email!!";
}

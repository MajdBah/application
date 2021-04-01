$(document).ready(function () {
    $(function () {
        var newYear = new Date();
        newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1);
        $('#defaultCountdown').countdown({ until: newYear, format: 'odHMS' });
    });

    var wow = new WOW({
        mobile: false
    });
    wow.init();

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validate() {
        const email = $('.email').val();

        if (validateEmail(email)) {
            $(".alert-danger").css({ "display": "none" });
            $(".alert-success").css({ "display": "block" });
            $(".alert-success").css({ "top": "110%" });
            setTimeout(function () {
                $(".alert-success").css({ "top": "0" });
                $(".alert-success").css({ "display": "none" });
            }, 2000);
        } else {
            $(".alert-success").css({ "display": "none" });
            $(".alert-danger").css({ "display": "block" });
            $(".alert-danger").css({ "top": "110%" });
            setTimeout(function () {
                $(".alert-danger").css({ "top": "0" });
                $(".alert-danger").css({ "display": "none" });
            }, 2000);
        }
        return false;
    }

    $("#validate").on("click", validate);
    $("#validate2").on("click", validate);
});
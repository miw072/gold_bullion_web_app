/**
 * Created by LY on 6/5/15.
 */
$(document).ready(function(){

    var mode = sessionStorage.mode;

    if (mode === "day"){
        var css = 'html {-webkit-filter: invert(100%);' +
                '-moz-filter: invert(100%);' +
                '-o-filter: invert(100%);' +
                '-ms-filter: invert(100%); }',
            head = document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet){
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);

        var css = 'img {-webkit-filter: invert(100%);' +
                '-moz-filter: invert(100%);' +
                '-o-filter: invert(100%);' +
                '-ms-filter: invert(100%); }',
            head = document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet){
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);


    }else{
        var css = 'html {-webkit-filter: invert(0%);' +
                '-moz-filter: invert(0%);' +
                '-o-filter: invert(0%);' +
                '-ms-filter: invert(0%); }',
            head = document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet){
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);


        var css = 'img {-webkit-filter: invert(0%);' +
                '-moz-filter: invert(0%);' +
                '-o-filter: invert(0%);' +
                '-ms-filter: invert(0%); }',
            head = document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet){
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    }


    $("#invert_color").click(function(){
        var mode = sessionStorage.mode
        if (mode == "night"){
            var css = 'html {-webkit-filter: invert(100%);' +
                    '-moz-filter: invert(100%);' +
                    '-o-filter: invert(100%);' +
                    '-ms-filter: invert(100%); }',
                head = document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet){
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            head.appendChild(style);

            var css = 'img {-webkit-filter: invert(100%);' +
                    '-moz-filter: invert(100%);' +
                    '-o-filter: invert(100%);' +
                    '-ms-filter: invert(100%); }',
                head = document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet){
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            head.appendChild(style);

            sessionStorage.mode = "day";
        }else{
            var css = 'html {-webkit-filter: invert(0%);' +
                    '-moz-filter: invert(0%);' +
                    '-o-filter: invert(0%);' +
                    '-ms-filter: invert(0%); }',
                head = document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet){
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            head.appendChild(style);

            var css = 'img {-webkit-filter: invert(0%);' +
                    '-moz-filter: invert(0%);' +
                    '-o-filter: invert(0%);' +
                    '-ms-filter: invert(0%); }',
                head = document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet){
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            head.appendChild(style);
            sessionStorage.mode = "night";
        }


    });




    var myFirebaseRef = new Firebase("https://flickering-heat-2946.firebaseio.com");
    var old_email = myFirebaseRef.getAuth().password.email;
    $("#old_email").html(old_email);

    $("#change_password").click(function(){
        var old_pass = $("#txt_old_pass").val();
        var new_email = $("#txt_new_email").val();
        var new_pass = $("#txt_new_pass").val();
        var confirm_pass = $("#txt_confirm_pass").val();
        if (new_pass && confirm_pass){
            var cur_email = myFirebaseRef.getAuth().password.email;
            if (new_pass == confirm_pass){
                myFirebaseRef.changePassword({
                    email : cur_email,
                    oldPassword : old_pass,
                    newPassword : new_pass
                }, function(error) {
                    if (error === null) {
                        $("#status").html("Password changed successfully");
                        $("#status").css("color", "green");
                    } else {
                        $("#status").html(error);
                        $("#status").css("color", "red");
                    }
                });
            } else {
                $("#status").html("New passwords do not match");
            }
        }
        if (new_email){
            myFirebaseRef.changeEmail({
                oldEmail : old_email,
                newEmail : new_email,
                password : old_pass
            }, function(error){
                if (error === null){
                    alert("Email changed successfully! Please login again!");
                    window.location.href = './index.html';
                } else {
                    $("#status").html(error);
                }
            });
        }

    });
});


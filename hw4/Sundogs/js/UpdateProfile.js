/**
 * Created by LY on 6/5/15.
 */
$(document).ready(function(){
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


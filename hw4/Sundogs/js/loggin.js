/**
 * Created by hzyucsd on 2015/5/27.
 */
$(function () {
    "use strict";
    // the main firebase reference
    var rootRef = new Firebase('https://flickering-heat-2946.firebaseio.com/');

    function authWithPassword(userObj) {
        var deferred = $.Deferred();
        console.log(userObj);
        rootRef.authWithPassword(userObj, function onAuth(err, user) {
            if (err) {
                deferred.reject(err);
            }

            if (user) {
                deferred.resolve(user);
            }

        });
        return deferred.promise();
    }

    function handleAuthResponse(promise) {
        $.when(promise)
            .then(function (authData) {

                window.location.href = './wire2.html';

            }, function (err) {
                console.log(err);
                // pop up error
                alert("error");

            });
    }


    function createUser(userObj) {
        var deferred = $.Deferred();
        rootRef.createUser(userObj, function (err) {

            if (!err) {
                deferred.resolve();
            } else {
                deferred.reject(err);
            }

        });

        return deferred.promise();
    }

    function createUserAndLogin(userObj) {
        return createUser(userObj)
            .then(function () {
                return authWithPassword(userObj);
            });
    }

    $("#Login").on('submit', function (e){
        var userAndPass = $(this).serializeObject();
        var loginPromise = authWithPassword(userAndPass);
        e.preventDefault();

        handleAuthResponse(loginPromise);
    })

    $("#Sign").on('submit', function (e) {
        var userAndPass = $(this).serializeObject();
        var loginPromise = createUserAndLogin(userAndPass);
        e.preventDefault();

        handleAuthResponse(loginPromise);

    });


})






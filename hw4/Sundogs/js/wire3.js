/**
 * Created by Mingxuan on 2015/5/27.
 */
$(document).ready(function(){
    var query = window.location.search;
    var metal_id = query.split("?")[1];
    var metal_string = null;
    switch (metal_id)
    {
        case "1" : metal_string = "Gold";
            break;
        case "2" : metal_string = "Silver";
            break;
        case "3" : metal_string = "Platinum";
            break;
        default  : break;
    }

    sessionStorage.metal = metal_string;

    var myFirebaseRef = new Firebase("https://flickering-heat-2946.firebaseio.com/");
    var user = null;
    myFirebaseRef.onAuth(function(authData){
        if (authData){
            user = authData.uid;
        }
    });
    myFirebaseRef.child("User/" + user + "/" + metal_string).on("value", function(dataSnapshot) {
        var allTotal;
        dataSnapshot.forEach(function(childSnapshot){
            $("#item_list").append("<tr id = '" + childSnapshot.key() + "'></tr>");
            $("#" + childSnapshot.key() + "").append("<td class='stack_img_col'><div class='coin_mini'></div></td>");
            $("#" + childSnapshot.key() + "").append("<td>" + childSnapshot.val()["Type"] +"</td>");
            $("#" + childSnapshot.key() + "").append("<td>" + childSnapshot.val()["Qty"] +"</td>");
            $("#" + childSnapshot.key() + "").append("<td>" + childSnapshot.val()["Weight"] +"</td>");
            $("#" + childSnapshot.key() + "").append("<td>" + childSnapshot.val()["Goldp"] +"</td>");
            var myDataRef = new Firebase("https://flickering-heat-2946.firebaseio.com/Data/" + metal_string + "/0/1");
            myDataRef.on('value', function(snapshot){
                var goldPrice = snapshot.val();
                var total = goldPrice * childSnapshot.val()["Weight"] * childSnapshot.val()["Goldp"] * childSnapshot.val()["Qty"];
                $("#" + childSnapshot.key() + "").append("<td>" + total.toPrecision(6) + "</td>");
                var url = "edit.html?" + childSnapshot.key();
                $("#" + childSnapshot.key() + "").append("<td><a><span id = 'to_edit'>Edit</span></a></td>");
                $("#" + childSnapshot.key() + "").children().find('a').attr("href", url);
                allTotal = Number($(".total-dollars").html().substring(1));
                allTotal += Number(total);
                $(".total-dollars").empty();
                $(".total-dollars").append("$" + allTotal.toPrecision(6) + "");
            });
        });
    });



});
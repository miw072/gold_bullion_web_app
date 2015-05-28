/**
 * Created by Mingxuan on 2015/5/27.
 */
$(document).ready(function(){
    $(window).load(function(){
        var myFirebaseRef = new Firebase("https://flickering-heat-2946.firebaseio.com/");
        myFirebaseRef.child("User/Richard/Gold").on("value", function(dataSnapshot) {
            dataSnapshot.forEach(function(childSnapshot){
                $("#item_list").append("<tr id = '" + childSnapshot.key() + "'></tr>");
                $("#" + childSnapshot.key() + "").append("<td class='stack_img_col'><div class='coin_mini'></div></td>");
                $("#" + childSnapshot.key() + "").append("<td>" + childSnapshot.val()["Type"] +"</td>");
                $("#" + childSnapshot.key() + "").append("<td>" + childSnapshot.val()["Qty"] +"</td>");
                $("#" + childSnapshot.key() + "").append("<td>" + childSnapshot.val()["Weight"] +"</td>");
                $("#" + childSnapshot.key() + "").append("<td>" + childSnapshot.val()["Goldp"] +"</td>");
                $("#" + childSnapshot.key() + "").append("<td>1110.0</td>"); // total value here, TODO
                var url = "edit.html?" + childSnapshot.key();
                $("#" + childSnapshot.key() + "").append("<td><a><span id = 'to_edit'>Edit</span></a></td>");
                $("#" + childSnapshot.key() + "").children().find('a').attr("href", url);
            });
        });
    });
});
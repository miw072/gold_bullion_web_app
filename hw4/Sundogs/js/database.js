/**
 * Created by Mingxuan on 2015/5/25.
 */

$(document).ready(function(){


    $("#edit_save").click(function(){

        var query = window.location.search;
        var id = query.split("?")[1];
        var myFirebaseRef = new Firebase("https://flickering-heat-2946.firebaseio.com");
        myFirebaseRef.onAuth(function(authData){
            if (authData){
                var quantity = $("#Qty").val();
                var premium = $("#Premium").val();
                var unit_price = $("#UnitPrice").val();
                var metal = $("Metal").val();

                myFirebaseRef.child("User").child(authData.uid).child(metal).child(id).update({Premium: premium, Qty: quantity, UnitPrice: unit_price});
            }
        });

    });

    $("#edit_delete").click(function(){
        var query = window.location.search;
        var id = query.split("?")[1];
        var myFirebaseRef = new Firebase("https://flickering-heat-2946.firebaseio.com");
        myFirebaseRef.onAuth(function(authData){
            if (authData){
                var metal = $("Metal").val();
                myFirebaseRef.child("User").child(authData.uid).child(metal).child(id).remove();
            }
        });
    });

    var query = window.location.search;
    var id = query.split("?")[1];
    var myFirebaseRef = new Firebase("https://flickering-heat-2946.firebaseio.com");
    var metal_string = sessionStorage.metal;



    myFirebaseRef.onAuth(function(authData){
        if (authData){

            myFirebaseRef.child("User").child(authData.uid).child(metal_string).child(id).on('value', function(snapshot){
                var curr = snapshot.val();
                var type = curr.Type;

                $("#Metal").append(curr.Metal);
                $("#Type").append(curr.Type);
                $("#Date").append(curr.Date);


                var myTypeRef = new Firebase("https://flickering-heat-2946.firebaseio.com/CoinType/"+ metal_string + "/" + type + "");


                myTypeRef.on('value', function(snapshot){
                    var curr = snapshot.val();

                    var goldp = curr.Goldp;
                    var goldozt = curr.Goldozt;
                    var goldg = curr.Goldg;
                    var weight = curr.Weight;
                    var totalau = goldozt * $("#Qty").val();

                    $("#Goldg").empty();
                    $("#Goldp").empty();
                    $("#Goldozt").empty();
                    $("#Weight").empty();
                    $("#TotalAu").empty();


                    $("#Goldg").append(goldg);
                    $("#Goldp").append(goldp);
                    $("#Goldozt").append(goldozt);
                    $("#Weight").append(weight);
                    $("#TotalAu").append(totalau);


                    $("#Qty").keyup(function(){
                        var goldozt = curr.Goldozt;
                        var totalau = goldozt * $("#Qty").val();

                        $("#TotalAu").empty();

                        $("#TotalAu").append(totalau);

                    });
                });
            });
        }
    });



});


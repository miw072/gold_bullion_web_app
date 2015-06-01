/**
 * Created by Mingxuan on 2015/5/25.
 */

$(document).ready(function(){

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
                $("#UnitPrice").append(curr.UnitPrice);


                var myTypeRef = new Firebase("https://flickering-heat-2946.firebaseio.com/CoinType/"+ metal_string + "/" + type + "");


                myTypeRef.on('value', function(snapshot){
                    var curr = snapshot.val();

                    var goldp = curr.Goldp;
                    var goldozt = curr.Goldozt;
                    var goldg = curr.Goldg;
                    var weight = curr.Weight;
                    var uprice = curr.Uprice;
                    var totalau = goldozt * $("#Qty").val();
                    var url = curr.Pic;

                    var myDataRef = new Firebase("https://flickering-heat-2946.firebaseio.com/Data/" + metal_string + "/0/1");
                    myDataRef.on('value', function(snapshot){
                        var goldPrice = snapshot.val();
                        var total = uprice * $("#Qty").val();
                        $("#Total").empty();
                        $("#Total").append(total.toPrecision(6));
                    });

                    $("#Goldg").empty();
                    $("#Goldp").empty();
                    $("#Goldozt").empty();
                    $("#Weight").empty();
                    $("#TotalAu").empty();
                    $("#Pic").empty();

                    $("#Pic").append("<img src = '" + url + "' alt = 'nonono' height = '200' width = '200'>");
                    $("#Goldg").append(goldg);
                    $("#Goldp").append(goldp);
                    $("#Goldozt").append(goldozt);
                    $("#Weight").append(weight);
                    $("#TotalAu").append(totalau.toPrecision(6));


                    $("#Qty").keyup(function(){
                        var goldozt = curr.Goldozt;
                        var weight = curr.Weight;
                        var goldp = curr.Goldp;
                        var totalau = goldozt * $("#Qty").val();
                        var uprice = curr.Uprice;

                        var myDataRef = new Firebase("https://flickering-heat-2946.firebaseio.com/Data/" + metal_string + "/0/1");
                        myDataRef.on('value', function(snapshot){
                            var goldPrice = snapshot.val();
                            var total = uprice * $("#Qty").val();
                            $("#Total").empty();
                            $("#Total").append(total.toPrecision(6));
                        });

                        $("#TotalAu").empty();

                        $("#TotalAu").append(totalau.toPrecision(6));

                    });
                });
            });
        }
    });

    $("#edit_save").click(function(){

        var query = window.location.search;
        var id = query.split("?")[1];
        var myFirebaseRef = new Firebase("https://flickering-heat-2946.firebaseio.com");
        myFirebaseRef.onAuth(function(authData){
            if (authData){
                var quantity = $("#Qty").val();
                var premium = $("#Premium").val();
                var unit_price = $("#UnitPrice").html();

                myFirebaseRef.child("User").child(authData.uid).child(metal_string).child(id).update({Premium: premium, Qty: quantity, UnitPrice: unit_price});
            }
        });

    });

    $("#edit_delete").click(function(){
        var query = window.location.search;
        var id = query.split("?")[1];
        var myFirebaseRef = new Firebase("https://flickering-heat-2946.firebaseio.com");
        myFirebaseRef.onAuth(function(authData){
            if (authData){
                myFirebaseRef.child("User").child(authData.uid).child(metal_string).child(id).remove();
            }
        });
    });


});


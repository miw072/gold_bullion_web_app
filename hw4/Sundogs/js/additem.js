/**
 * Created by Mingxuan on 2015/5/27.
 */
$(document).ready(function(){

    var type = $("#new_type").val();
    var myTypeRef = new Firebase("https://flickering-heat-2946.firebaseio.com/CoinType/Gold/" + type + "");


    myTypeRef.on('value', function(snapshot){
        var curr = snapshot.val();

        var goldp = curr.Goldp;
        var goldozt = curr.Goldozt;
        var goldg = curr.Goldg;
        var weight = curr.Weight;
        var totalau = goldozt * $("#new_quantity").val();

        $("#new_goldg").empty();
        $("#new_goldp").empty();
        $("#new_goldozt").empty();
        $("#new_weight").empty();
        $("#new_totalau").empty();


        $("#new_goldg").append(goldg);
        $("#new_goldp").append(goldp);
        $("#new_goldozt").append(goldozt);
        $("#new_weight").append(weight);
        $("#new_totalau").append(totalau);

    });

    $("#save").click(function(){
        var myFirebaseRef = new Firebase("https://flickering-heat-2946.firebaseio.com/User/Richard/Gold");
        var metal = $("#new_metal").val();
        var type = $("#new_type").val();
        var date = $("#new_date").val();
        var quantity = $("#new_quantity").val();
        var premium = $("#new_prem").val();
        var unit_price = $("#new_uprice").val();
        var gold_percent = $("#new_goldp").html();
        var weight = $("#new_weight").html();

        var newItem = myFirebaseRef.push();

        newItem.set({Date: date, Goldp: gold_percent, Metal: metal, Premium: premium, Qty: quantity, Type: type, UnitPrice: unit_price, Weight: weight});
    });

    $("#new_type").change(function(){

        var type = $("#new_type").val();
        var myTypeRef = new Firebase("https://flickering-heat-2946.firebaseio.com/CoinType/Gold/" + type + "");


        myTypeRef.on('value', function(snapshot){
            var curr = snapshot.val();

            var goldp = curr.Goldp;
            var goldozt = curr.Goldozt;
            var goldg = curr.Goldg;
            var weight = curr.Weight;
            var totalau = goldozt * $("#new_quantity").val();

            $("#new_goldg").empty();
            $("#new_goldp").empty();
            $("#new_goldozt").empty();
            $("#new_weight").empty();
            $("#new_totalau").empty();


            $("#new_goldg").append(goldg);
            $("#new_goldp").append(goldp);
            $("#new_goldozt").append(goldozt);
            $("#new_weight").append(weight);
            $("#new_totalau").append(totalau);

        });
    });

    $("#new_quantity").keyup(function(){
        var type = $("#new_type").val();
        var myTypeRef = new Firebase("https://flickering-heat-2946.firebaseio.com/CoinType/Gold/" + type + "");

        myTypeRef.on('value', function(snapshot){
            var curr = snapshot.val();

            var goldozt = curr.Goldozt;
            var totalau = goldozt * $("#new_quantity").val();

            $("#new_totalau").empty();

            $("#new_totalau").append(totalau);

        });
    });


});
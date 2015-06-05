$(window).load(function() {

	function getData(myAPI){
		var json = null;
		$.ajax({
			'async': false,
			'global': false,
			'url': myAPI,
			'dataType': "json",
			'success': function (data) {
				json = data.data;
			}
		});
		return json;
	}

	var goldAPI = "https://www.quandl.com/api/v1/datasets/WSJ/AU_EIB.json?auth_token=5s-ML76zo41KMnmSPPf_&trim_start=2015-02-27";
	var silverAPI = "https://www.quandl.com/api/v1/datasets/WSJ/AG_EIB.json?auth_token=5s-ML76zo41KMnmSPPf_&trim_start=2015-02-27"
	var platAPI = "https://www.quandl.com/api/v1/datasets/WSJ/PL_EIB.json?auth_token=5s-ML76zo41KMnmSPPf_&trim_start=2015-02-27";

	var gJson = getData(goldAPI);
	var sJson = getData(silverAPI);
	var pJson = getData(platAPI);

	var myFirebaseRef = new Firebase("https://flickering-heat-2946.firebaseio.com");
	myFirebaseRef.child("Data").child("Gold").set(gJson);
	myFirebaseRef.child("Data").child("Silver").set(sJson);
	myFirebaseRef.child("Data").child("Platinum").set(pJson);
});
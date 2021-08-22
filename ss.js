function number(num){
	var result =document.getElementById("screen");
	
	result.value+=num;
}
	
function result(){
	
	try{
	    var result =document.getElementById("screen");
            if(result.value==""){
		      alert("plz provid an input");

			}
			else{
		result.value=eval(result.value)
		
	      res=eval(result.value)
	      var num=parseFloat(res)
	      result.value=num.toFixed(1)
	}
}
	catch(err){
		alert("Enter the valid Input");
		
	}
}

function clearResult(){
	var number =document.getElementById("screen");
	var remove =number.value;
    remove = remove.slice(0,-1);
	number.value=remove;    
}

function decnum(num){
	var number =document.getElementById("screen");
	number.value+=num;
	console.log(number.value)
	document.getElementById("screen").innerHTML=1;
     
	}

	function nu(){
		var result =document.getElementById("screen");
	    if(result.value !=0){
	result.value+=0;
		}
	}

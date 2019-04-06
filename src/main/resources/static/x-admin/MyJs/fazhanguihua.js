
function checkedPlayer1(obj){
	
	var id = obj.id;
	
	if($("#"+id).attr("class") == "btn-sm violetBtn"){
		
		$("#checkplayertable1").find("td").attr("class","btn-sm violetBtn");
		$("#"+id).attr("class","btn-sm violetBtn btn-success");
		
	}else{
		$("#"+id).attr("class","btn-sm violetBtn");
	}
	
};
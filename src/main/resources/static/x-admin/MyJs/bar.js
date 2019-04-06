$(function(){
	querybar();
});


function querybar(){
    $.ajax({
       url:"user/getbar.html",
       data:$("#querybarForm").serialize(),
       dataType:'json',
        type:'post',
        async:true,
        success:function(data){
        	
        }
    });
}


function checkedPlayer1(obj){
	
	var id = obj.id;
	
	if($("#"+id).attr("class") == "btn-sm violetBtn"){
		
		$("#checkplayertable1").find("td").attr("class","btn-sm violetBtn");
		$("#"+id).attr("class","btn-sm violetBtn btn-success");
		
	}else{
		$("#"+id).attr("class","btn-sm violetBtn");
	}
	
}



function checkedPlayer2(obj){
	
	var id = obj.id;
	
	if($("#"+id).attr("class") == "btn-sm violetBtn"){
		
		$("#checkplayertable2").find("td").attr("class","btn-sm violetBtn");
		$("#"+id).attr("class","btn-sm violetBtn btn-success");
		
	}else{
		$("#"+id).attr("class","btn-sm violetBtn");
	}
	
};
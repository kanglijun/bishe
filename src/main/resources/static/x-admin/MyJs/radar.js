$(function(){
	//queryradaar();
});


function queryradaar(){
    $.ajax({
       url:"radarplay.html",
       data:$("#queryradarForm").serialize(),
       dataType:'json',
        type:'post',
        async:true,
        success:function(datas){
        	$("#checkplayertable1").html("");
        	
        	for(var i=0;i<datas.length;i++){
        		 var tr = '<tr style="margin-left:20px;">'
        	            +'<td value="'+datas[i].playerId+'" id="'+datas[i].playerId+'" class="btn-sm violetBtn" onclick="checkedPlayer1(this)">'
        	            + datas[i].name+'</td></tr>';
        		 $("#checkplayertable1").append(tr);
        	}
        }
    });
}

function finddetail(id){
	$("#code").val("");
}

function checkedPlayer1(obj){
	
	var id = obj.id;
	if($("#"+id).attr("class") == "btn-sm violetBtn"){
		$("#checkplayertable1").find("td").attr("class","btn-sm violetBtn");
		$("#"+id).attr("class","btn-sm violetBtn btn-success");
		finddetail(id);
	}else{
		$("#"+id).attr("class","btn-sm violetBtn");
	}
	
};



function checkedPlayer2(obj){
	
	var id = obj.id;
	
	if($("#"+id).attr("class") == "btn-sm violetBtn"){
		
		$("#checkplayertable2").find("td").attr("class","btn-sm violetBtn");
		$("#"+id).attr("class","btn-sm violetBtn btn-success");
		
	}else{
		$("#"+id).attr("class","btn-sm violetBtn");
	}
	
};
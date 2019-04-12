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

function finddetail(id){
//	var myChart = echarts.init(document.getElementById('code'));
//	myChart.setOption({title : {text : '新标题'}});
	$("#sidebar-code").html("");
	refresh(true);
	alert($("#sidebar-code").html());
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
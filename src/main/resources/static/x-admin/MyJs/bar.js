
function querybar1(){
    $.ajax({
        url:"radarplay.html",
        data:$("#form1").serialize(),
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

function querybar2(){
    $.ajax({
        url:"radarplay.html",
        data:$("#form2").serialize(),
        dataType:'json',
         type:'post',
         async:true,
         success:function(datas){
         	$("#checkplayertable2").html("");
         	
         	for(var i=0;i<datas.length;i++){
         		 var tr = '<tr style="margin-left:20px;">'
         	            +'<td value="'+datas[i].playerId+'" id="'+datas[i].playerId+'" class="btn-sm violetBtn" onclick="checkedPlayer2(this)">'
         	            + datas[i].name+'</td></tr>';
         		 $("#checkplayertable2").append(tr);
         	}
         }
     });
}

function checkedPlayer1(obj){
	
	var id = obj.id.substring(2);
	$("#player1").val(id);
	if($("#-a"+id).attr("class") == "btn-sm violetBtn"){
		$("#checkplayertable1").find("td").attr("class","btn-sm violetBtn");
		$("#-a"+id).attr("class","btn-sm violetBtn btn-success");
		finddetail(id);
	}else{
		$("#-a"+id).attr("class","btn-sm violetBtn");
	}
	
}



function checkedPlayer2(obj){
	
	var id = obj.id.substring(2);
	$("#player2").val(id);
	if($("#-b"+id).attr("class") == "btn-sm violetBtn"){
		$("#checkplayertable2").find("td").attr("class","btn-sm violetBtn");
		$("#-b"+id).attr("class","btn-sm violetBtn btn-success");
		finddetail(id);
	}else{
		$("#-b"+id).attr("class","btn-sm violetBtn");
	}
	
}

function finddetail(id){
	 
	 $.ajax({
	       url:"getPlayerByIds.html",
	       data:$("#queryradarForm").serialize(),
	       dataType:'json',
	        type:'post',
	        async:true,
	        success:function(data){
	        	alert(data[0].name+":"+data[1].name);
	        	//在echartsExample.js中定义myChart
	        	//var title = 
	        	//myChart.setOption(title);
	        	
	        }
	    });
	
}
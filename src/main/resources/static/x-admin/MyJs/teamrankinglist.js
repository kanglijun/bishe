$(function(){
	queryteamrankinglist();
});


function queryteamrankinglist(){
    $.ajax({
       url:"user/teamrankinglist.html",
       data:$("#queryPKLForm").serialize(),
       dataType:'json',
        type:'post',
        async:true,
        success:function(data){
        	
        }
    });
}

function changeColor(obj){
	var id = obj.id;
	var classValue = $("#"+id).attr("class");
	
	$("#defen").attr("class","layui-btn layui-btn-normal");
	$("#toulan").attr("class","layui-btn layui-btn-normal");
	$("#sanfen").attr("class","layui-btn layui-btn-normal");
	$("#faqiu").attr("class","layui-btn layui-btn-normal");
	$("#lanban").attr("class","layui-btn layui-btn-normal");
	$("#zhugong").attr("class","layui-btn layui-btn-normal");
	$("#gaimao").attr("class","layui-btn layui-btn-normal");
	$("#qiangduan").attr("class","layui-btn layui-btn-normal");
	$("#fangui").attr("class","layui-btn layui-btn-normal");
	$("#shiwu").attr("class","layui-btn layui-btn-normal");
	
	if(classValue == "layui-btn layui-btn-normal"){
		$("#"+id).attr("class","layui-btn layui-btn-danger");	
	}else{
		$("#"+id).attr("class","layui-btn layui-btn-normal");
	}
	
	
};


function startgetwebinfos(){
    $.ajax({
       url:"user/getwebinfo.html",
       data:$("#getwebinfoForm").serialize(),
       dataType:'json',
        type:'post',
        async:true,
        success:function(data){
        	
        }
    });
}

//注意进度条依赖 element 模块，否则无法进行正常渲染和功能性操作
layui.use('element', function(){
	  var $ = layui.jquery
	  ,element = layui.element; //Tab的切换功能，切换事件监听等，需要依赖element模块
	  
	});

layui.use('form', function(){
	  var form = layui.form; 
	  form.render();
	 });
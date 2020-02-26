			/* document.getElementById("shi1pic").setAttribute(src,"https://static.appstore.czfw.cn/video-jiayou2.mp4",);
		
			 
			 document.getElementById("shi2pic").setAttribute(src,"https://static.appstore.czfw.cn/video-jiayou.webm");
		
			 
			 document.getElementById("shi3pic").setAttribute(src,"https://static.appstore.czfw.cn/video-jiayou.Ogg");*/
			 
window.onload = function(){
				 
			 console.log("加载我！");
			 Shi1 =function(){
			 	console.log("点击了我！");
			   				/* document.getElementById("veda").setAttribute("src","http://vfx.mtime.cn/Video/2019/03/21/mp4/190321153853126488.mp4");*/
							document.getElementById("vedc").src = 'http://vfx.mtime.cn/Video/2019/03/21/mp4/190321153853126488.mp4';
							document.getElementById("vedc").play();
			   }
			 Shi2 = function (){
			 				 /*document.getElementById("veda").setAttribute("src"," http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4");*/
							 document.getElementById("vedc").src = 'http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4';
							 document.getElementById("vedc").play();
			 }
			 
			Shi3 = function (){
			 				 /*document.getElementById("veda").setAttribute("src","https://static.appstore.czfw.cn/video-jiayou.webm");*/
							 document.getElementById("vedc").src = 'https://static.appstore.czfw.cn/video-jiayou.webm';
							 document.getElementById("vedc").play();
			 }
			 
			
			var vedc=document.getElementById("vedc"); 
			playPause= function () { 
				if (vedc.paused) 
					vedc.play(); 
				else 
					vedc.pause(); 
			} 
			toBig= function () { 
				vedc.muted=true; 
			} 
			toNormal = function () { 
				vedc.loop=true; 
			} 
			toSmall = function () { 
				vedc.muted=false;}
			}	
		
	
			 


	
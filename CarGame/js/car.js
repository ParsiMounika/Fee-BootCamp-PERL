   var imgObj = null;
             var animate ;
            function init(){
            imgObj = document.getElementById('a');
            imgObj.style.position= 'relative'; 
        imgObj.style.left = '0px'; 
            }
            
            function start(){
                imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
               animate = setTimeout(start,20);
               if(imgObj.style.left>=1250)
               {
                   clearTimeout(animate);
               }
            }
            
            
            function stop(){
               clearTimeout(animate);
                imgObj.style.left = '0px'; 
            }
            function getKeyAndMove(e){	
                if((parseInt(imgObj.style.left)<0)||(parseInt(imgObj.style.left)>1250)||(parseInt(imgObj.style.top)<-220)||(parseInt(imgObj.style.top)>250))		
                {
                    alert("game over");
                    clearTimeout(animate);
                }	
				var key_code=e.which||e.keyCode;
				switch(key_code){
					case 37: 
						moveLeft();
						break;
					case 38: 
						moveUp();
						break;
					case 39:
						moveRight();
						break;
					case 40: 
						moveDown();
						break;						
				}
			}
			function moveLeft(){
            imgObj.style.transform=" rotate(360deg)";
            imgObj.style.left=parseInt(imgObj.style.left)-5 +'px';
               
			}
			function moveUp(){
            imgObj.style.transform=" rotate(90deg)";
		    imgObj.style.top=parseInt(imgObj.style.top)-5 +'px';
			}
			function moveRight(){
            imgObj.style.transform=" rotate(360deg)";
		    imgObj.style.left=parseInt(imgObj.style.left)+5 +'px';
			}
			function moveDown(){
            imgObj.style.transform=" rotate(90deg)";
		    imgObj.style.top=parseInt(imgObj.style.top)+5 +'px';
            }
            
			window.onload=init;
            


       
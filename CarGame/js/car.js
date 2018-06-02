   var imgObj = null;
             var animate ;
             var leftKey=37;
             var rightKey=39;
             var  upKey = 38;
             var downKey = 40; 
             var counter=0;
             var speed = 5;
             var limit = 20;
             var dir = "r";
             var counter = 0;
             
            function init(){
            imgObj = document.getElementById('car');
            imgObj.style.position= 'relative'; 
            imgObj.style.left = '0px';
            imgObj.style.top = '0px';
            }
            
            function start(){
                imgObj.style.left = parseInt(imgObj.style.left) + 5 + 'px';
               animate = setInterval("move(dir)",40);
               //console.log(imgObj.style.left);
              if(parseInt(imgObj.style.left)>=1150)
                {
                   clearInterval(animate);
                   alert("You are out!!");
               }
            }
            
            
            function stop(){
                clearInterval(animate);
            
            }
            function move(dir)
            {
                counter++;
                if(dir == "r")
                {
                    // animate = setTimeInterval(moveRight,40);
                    moveRight();

                }
                if(dir == "l")
                {
                   // animate = setTimeInterval(moveLeft,40);
                   moveLeft();
                    
                }
                if(dir == "u")
                {
                    //animate = setTimeInterval(moveUp,40);
                    moveUp();
                    
                }
                if(dir == "d")
                {
                    //animate = setTimeInterval(moveDown,40);
                    moveDown();
                }
                if(counter >= limit)
                {
                    increasespeed();
                    
                    limit = limit +30;
                    console.log(limit);
                }
                document.getElementById('score').value = counter;
                    
            }
            function getKeyAndMove(){		
                var key_code = event.which;
				switch(key_code){
					case 37: 
                        //moveLeft();
                        dir = "l";
						break;
					case 38: 
                        //moveUp();
                        dir = "u";
						break;
					case 39:
                        //moveRight();
                        dir = "r";
						break;
					case 40: 
                        //moveDown();
                        dir = "d";
						break;						
				}
			}
			function moveLeft(){
            imgObj.style.transform="rotateY(150deg)";
           
               if(counter%15==0)
               {
                   start=start-2;
                   
               }
            imgObj.style.left = parseInt(imgObj.style.left) - speed +'px';
            if((parseInt(imgObj.style.left)>=1145)||(parseInt(imgObj.style.left)<=-35))
               {
                   clearInterval(animate);
                   alert("You are out!!");
               }
               
               
            }
           
			function moveUp(){
            imgObj.style.transform="rotateZ(-90deg)";
            imgObj.style.top=parseInt(imgObj.style.top) - speed +'px';
            if((parseInt(imgObj.style.top)>=420)||(parseInt(imgObj.style.top)<=-10))
               {
                   clearTimeout(animate);
                   alert("You are out!!");
               }
           	
			}
			function moveRight(){
            imgObj.style.transform="rotate(360deg)";
            imgObj.style.left=parseInt(imgObj.style.left) + speed +'px';
            // console.log(imgObj.style.left);

            if((parseInt(imgObj.style.left)>=1145)||(parseInt(imgObj.style.left)<=-35))
               {
                   clearTimeout(animate);
                   alert("You are out!!");
               }
            	
			}
			function moveDown(){
                //console.log("Inside move down");
                imgObj.style.transform="rotate(90deg)";
                imgObj.style.top=parseInt(imgObj.style.top) + speed +'px';
                //console.log(imgObj.style.top);
                //animate = setTimeout(moveDown,40);
                if((parseInt(imgObj.style.top)>=420)||(parseInt(imgObj.style.top)<=-10))
                   {
                       clearTimeout(animate);
                       alert("You are out!!");
                   }
            	
            }
            
            function increasespeed()
            {
                speed = speed + 10;
            }            
            
			window.onload=init;
            


       

        let outer=document.querySelector("div");
        let i=document.querySelector(".ri-heart-3-fill");
        let i1=document.querySelector(".ri-heart-3-line");
        console.log(i1);
        let deselect=document.getElementById("count");
        let countnum=document.querySelector("#countnum");
        let sad=document.querySelector("#sad");

        console.log(countnum);
        let count=1;
        outer.addEventListener("dblclick",function(){
            // alert("hello");
            i.style.opacity="1"
            i.style.color="darkred";
            countnum.textContent=`${count}`
            count=count+1;
            console.log(count);

    setTimeout(function(){
        i.style.opacity="0";
    },1000);
    setTimeout(function(){
        i.style.opacity="1";
    },500);
        })
        let h3=document.querySelector("h3");
        let btn=document.querySelector("button");
        let cheak=0;
        function changetext(){
          
            if(cheak==0){
                h3.textContent="Friend";
                h3.style.color="green";
                btn.textContent="Remove";
                btn.style.marginLeft="35px";
                cheak=1;

            }
            else{
                h3.textContent="stranger";
                h3.style.color="red";
                btn.textContent="Add friend";
                btn.style.marginLeft="27px";
                cheak=0;
            }
        }
        deselect.addEventListener("dblclick",function(){
            count=count-1;
            if(count<=0){
                count=0;
            } 
             countnum.textContent=`${count}`;   
           
            setTimeout(function(){
                sad.style.display="flex";

            },250)
            setTimeout(function(){
                sad.style.display="none";

            },600)
        })
        btn.addEventListener("click",changetext);

var flag =0;function personA()
{       
     flag = flag + 1;    
     console.log(flag);   
      if(flag < 100 ){   
               personA(); 
                  }    }
                  personA(); 
let count = 0                                       
 function updateDisplay(){                          
    document.getElementById('display').value = count
 }                                                  

 function increment(){                              
    count++                                         
    updateDisplay()                                 
 }                                                  

 function decrement(){                              
    count--                                         
    updateDisplay()                                 
 }                                                  

 function reset(){                                  
    count = 0                                       
    updateDisplay()                             
 }                                               
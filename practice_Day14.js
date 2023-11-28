// logic questions

// A3B4C2
// 15:15:00
// AAABBBBCC

let Value="a3b4c2"
for(i=0;i<Value.length;i++){
    // console.log(Value.charAt(i))
        if(i==0 ){
        let rep=  Value.charAt(0)
       let rep1=rep.repeat(3);
       console.log(rep1)
        }
       else if(i==2 ){
            let rep=  Value.charAt(2)
           let rep1=rep.repeat(4);
           console.log(rep1)
            }
           else if(i==4 ){
                let rep=  Value.charAt(4)
               let rep1=rep.repeat(2);
               console.log(rep1)
                }
      
    
        
}

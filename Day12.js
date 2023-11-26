let res=""
for(i=1;i<4;i++){
    for(j=0;j<5;j++){
        if(i==1 && j<1){
        res+="*"
    }
    if(i==2 && j<3){
        res+="*"
    }
    if(i==3 && j<5){
        res+="*"
    }
    }
    res+="\n"
    
}

console.log(res)


// 
let res1=""
for(i=5;i>0;i--){
    for(j=1;j<i;j++){

        res1+="*"
    }
    res1+="\n"
}
console.log(res1)



let num=15;
let bag=true;
for(i=2;i<num;i++){
     if(num%i==0){
          bag=false;            
}
}
if(bag==true){
   console.log("Prime Number");
}
else {
   console.log("Not Prime"); 
}

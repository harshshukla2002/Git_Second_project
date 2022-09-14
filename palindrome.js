let str="naman";
let bag="";
for(let i=str.length-1;i>=0;i--){
	bag=bag+str[i];
}
if(bag==str)
{
	console.log("Palindrome");
}
else {
	console.log("Not A Palindrome");
}

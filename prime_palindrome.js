let count=0;
let num=17;
for(let i=0;i<=num;i++)
{
  if(num%i==0)
{   count=i;
 break;
}
if(i==num)
{
  console.log("Yes");
}
else
{
console.log("No")
}
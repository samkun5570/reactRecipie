let input="{{{{}}}}"
let openning = 0
let closing = 0

for(let i=0;i<input.length;i++){
    if(input.charAt(i).match("{"))
    {
        openning=openning+1;
    }
    else if(input.charAt(i).match("}")) 
    {
        closing= closing+1;
    } 
}
if(openning===closing)
    console.log("its a match")
else
    console.log("sorry its not a match")

    

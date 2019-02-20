 // YOUR CODE HERE
 exclamation="."
 sOrNoYes="s"
 i=99
 for(i=99;i>2;i--){

    if (i%10 == 0){
     exclamation="!"
    }
    else {
     exclamation="."
    }

    console.log(`${i} bottles of beer on the wall,${i} bottles of beer ${exclamation}\n Take one down and pass it around, ${i-1} bottles of beer on the wall.`)
 }
 for(i=2;i>=1;i--){
   if(i==2){
     console.log(`2 bottles of beer on the wall,2 bottles of beer. \n Take one down and pass it around, 1 bottle of beer on the wall`)
   }
   if(i==1){
     console.log(`1 bottle of beer on the wall,1 bottle of beer. \n Take one down and pass it around, No bottle of beer on the wall`)
   }
 }
console.log(`No more bottles of beer on the wall, No more bottles of beer \n Go to the store and buy some more, 99 bottles of beer on the wall`)

var n=17,n1=21,i,a=1;

function isprime(n){
    for(i=2;i<n;i++){  
        if(n%i==0){
            a=0;
        }
    }

    if(a==0){
        return false;
    }

    else return true;
}
console.log("isprime"+"("+n+")"+"="+isprime(n))
console.log("isprime"+"("+n1+")"+"="+isprime(n1))

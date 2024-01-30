//exercice1
function message (){
    var a="bonjour" 
    return a
}
//exercice2
function test (a,b){
   return a*b 
}
//exercice3
function permutation(a,b){
    var c
    c=a
    a=b
    b=c
    return [a,b]
}
//exercice4
function pair(y){
    if(y%2==0){
        return "pair"
    }else{
        return "impair"
    }
}
//exercice5
function moy(x){
    if(x>=10 && x<=20){
        return "validé"
    }else if (x<10 && x>=0){
        return "non validé"
    }else{
        return "undefind"
    }
}
//exercice6
function moy (x,z,a){
return (x+z+a)/3
}
//exercice7
function test (a,b,c){

    if(a>b && a>c){
        return a 
    }else if(b>a && b>c){
        return b
    }else{
        return c
    }

}

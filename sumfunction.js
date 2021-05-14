function sum(a){
    if(Array.isArray(...arguments)){
        let array=[];
        let num=array.concat(...arguments);
        let sum=num.reduce((a,c)=>a+c);
        return sum;
        
    }
    else{
        let array1=[];
        let value=Object.values(...arguments)
        let num1=array1.concat(value)
        let sum1=num1.reduce((a,c)=>a+c)
        return sum1;
        }
        
}

let x=[1,2,3];
let y=[2,3,4];
let z=[1,1,1];
const add=sum(x,y,z);
let a ={no:1,no1:15};
const add1=sum(a);
console.log(add1);
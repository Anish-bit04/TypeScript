// ***********************DataType********************
// const a:string | number ="{34}"
// console.log(a)

// ***********************Array********************

// type Username = (n:number,m:number ) =>number

// const func:Username=(n,m)=>{
//     console.log(n,m)
//     return n*m;
// }

// If you don't want to return anything just give void in Username as final result

// const arr:number []=[23,354,7561,34]
// const arr2:Array<string> = ["sdfgs","dsgssf","sdg"]

// ***********************Object********************


// interface newobj{
//     height:number;
//     weight:number;
//     gender?:boolean;

// }
// interface newobj1 extends newobj{
//     result:boolean
// }
// const Obj:newobj ={
//     height:233,
//     weight:24,
//     gender:true

// }
// const Obj1:newobj1 ={
//     height:233,
//     weight:24,
//     gender:true,
//     result:true

// }


// ***********************Function********************

// optional function 
// type functype =(n:number,m:number,l?:number) =>number 

// const func:functype =(a,b,l)=>{
//     if (typeof l === "undefined") return a*b
//     return a*b*l
// }

// func(23,432)

// default function 

// type functype =(n:number,m:number,l?:number) =>number 

// const func:functype =(a,b,l=20)=>{
//     if (typeof l === "undefined") return a*b
//     return a*b*l
// }

// func(23,432)


// Rest Operator


// type functype =(...m:number[]) =>number[] 


// const func:functype =(...m)=>{
//     return m;
// }
// func(23,56,8,23,78) 


//  Type Assertion 

// const btn = document.getElementById("btn") as HTMLElement
// const btn = document.getElementById("btn") !
// const btn = <HTMLElement>document.getElementById("btn") 
// btn.onclick;
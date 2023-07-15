/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
 
function PrintDeveloperbyMap() {
 
  const outArr=arr.map((item)=>{
    if(item.profession=="developer"){
      console.log(item);
    }
  } );
  
}

PrintDeveloperbyMap();
function PrintDeveloperbyForEach() {
   const outArr=[];
   arr.forEach((item) =>{
     if(item.profession=="developer") outArr.push(item);
   })
   console.log(outArr);
}

PrintDeveloperbyForEach();
function addData() {
  let outArr=arr;
  outArr.push({id:4,name:"susan",age:"20",profession:"intern"} );
  console.log(outArr);
}

addData();
function removeAdmin() {
   const outArr=arr.filter((item)=> item.profession!="admin");
   console.log(outArr);
}

removeAdmin();
function concatenateArray() {
  let arr2 = [
    { id: 4, name: "sachin", age: "18", profession: "opner" },
    { id: 5, name: "sehwag", age: "20", profession: "opner" },
    { id: 6, name: "dhoni", age: "19", profession: "captain" },
  ];
  const combinerArray=[];
  combinerArray.push(arr,arr2);
  console.log(combinerArray);
}
concatenateArray();

const name="NODEJS";
const name2="REACTJS";
const name3="MONGODB";
// or
// export const name2="reactjs";
// export const name3="mongodb";

//first way
// module.exports=name;

//second way
export default name;//there will be only one export default
export {name2,name3};

export const fun1=()=>{
    return `${Math.floor(Math.random()*100)}%`;
}//will return like this 46%,55% ,...



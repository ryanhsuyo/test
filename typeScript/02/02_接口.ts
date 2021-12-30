// 接口
(()=>{
  // 定義街口
  interface IPerson{
    firstName: string
    lastName: string
  }
  function showFullName(person: IPerson){
    return person.firstName + '_' + person.lastName
  }
  // 定義對象
  const person = {
    firstName: '東方',
    lastName: '不敗',
  }
  console.log(showFullName(person));
  
})()
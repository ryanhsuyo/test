// ts中寫類
(()=>{
  interface IPerson{
    firstName: string
    lastName: string
  }
  // 定義類型
  class Person{
    // 定義公共的字段（屬性）
    firstName: string
    lastName: string
    fullName: string
    // 定義構造函數
    constructor(firstName:string,lastName:string){
      // 更新屬性數據
      this.firstName = firstName
      this.lastName = lastName

      // 姓名
      this.fullName = this.firstName + '_' +this.lastName

    }
  }
  // 函數
  function showFullName(person:IPerson){
    return person.firstName+'_'+person.lastName
  }
  const person = new Person('諸葛','孔明')
  const person2 = new Person('新年','快樂')
  console.log(showFullName(person));
  console.log(showFullName(person2));
  
})()
// 類型註解: 輕量函數或變量添加的約束
(()=>{
  function showMsg(str:string){
    return '床前明月光'+str
  }
  let msg = '疑是地上霜'
  console.log(showMsg(msg));
})()
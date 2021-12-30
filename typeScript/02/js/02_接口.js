// 接口
(() => {
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    // 定義對象
    const person = {
        firstName: '東方',
        lastName: '不敗',
    };
    console.log(showFullName(person));
})();

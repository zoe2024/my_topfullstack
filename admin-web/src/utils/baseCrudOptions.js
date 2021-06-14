// 基于avue的crud的基础配置项
// export default class baseCrudOptions {
//     // title: '用户管理',
//     index: boolean = true;
//     indexLabel: string = '序号';
//     menuType: string = 'text';
//     page: boolean = true;
//     align: string = 'center';
//     dateBtn: boolean = true;
//     dateDefault: boolean = true;
//     menuAlign: string = 'center';
//     column: [] = [
//     //    {
//     //     label:'姓名',
//     //     prop:'username'
//     //   },
//     //   {
//     //     label:'密码',
//     //     prop:'password'
//     //   }
//     ]
      
// }


const baseCrudOptions = (function() {
    const baseCrudOptions = {
        index:true,
        indexLabel:'序号',
        menuType:'text',
        // page:true,
        align:'center',
        // dateBtn:true,
        // dateDefault:true,
        menuAlign:'center',
        column:[
        ]
    }
    return baseCrudOptions
})();

export { baseCrudOptions } 
    

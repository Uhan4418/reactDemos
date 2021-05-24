import Mock from 'mockjs'
 // 引入mockjs
const {Random} = Mock


export const getTableList = (current: number, pageSize: number) => {
  const tableListDataSource = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i;
    tableListDataSource.push({
      key:index,
      suconid: Random.string('number', 5),
      suconno: Random.string('number', 10),
      signdate: Random.date('yyyy-MM-dd'),
      validbegdate: Random.date('yyyy-MM-dd'),
      validenddate: Random.date('yyyy-MM-dd'),
      signaddress: Random.date('yyyy-MM-dd'),
      supplyid: Random.string(),
      supplyname: Random.ctitle(2,10),
      total: Random.string('number', 8),
      inputmanid: Random.string(),
      othermoney: Random.string(),
      contracttype: Random.string(),
      memo: Random.string(),
      tranmethod: Random.string(),
      agentflag: Random.string(),
      contracttype: Random.string(),
      paymode: Random.string(),
      findate: Random.string(),
      settletypeid: Random.string(),

    });
  }
  tableListDataSource.reverse();
  return tableListDataSource;
};

export const getDetail = ()=>{
  return {
    sucondtlid: Random.string('number', 5),
    suconid: Random.string('number', 5),
    supplyerid: Random.string('number', 10),
    deptid: Random.string(),
    sucondtlno: Random.string('number', 10),
    goodsid: Random.string('number', 10),
    goodsqty: Random.string('number', 3),
    taxrate: Random.string('number', 3),
    foreignprice: Random.string('number', 5),
    foreignmoney: Random.string('number', 5),
    currency: Random.string('number', 5),
    costingmoney: Random.string('number', 5),
    unitprice: Random.string('number', 5),
    totalLine: Random.string('number', 5),
    usestatus: Random.string('number', 5),
    accqty: Random.string('number', 5),
    accbackqty: Random.string('number', 5),
    realexecdiff: Random.string('number', 5),
    costingprice: Random.string('number', 5),
    memo: Random.string(),
    invalidmanid: Random.string(),
    findate: Random.date('yyyy-MM-dd'),
    invaliddate: Random.date('yyyy-MM-dd'),
    batchnum: Random.string('number', 8),
    finexecqty: Random.string('number', 8),
    realprice: Random.string('number', 8),
    obqty: Random.string('number', 8),
    validbegdate: Random.date('yyyy-MM-dd'),
    validenddate: Random.date('yyyy-MM-dd'),
    signaddress: Random.date('yyyy-MM-dd'),
    dtlexpectdate: Random.date('yyyy-MM-dd'),
    modifydate: Random.date('yyyy-MM-dd'),
    supplyid: Random.string(),
    supplyname: Random.ctitle(2,10),
    agreedocflag: "是否",
    othermoney: Random.string(),
    contracttype: Random.string(),
    zxcolumn1: Random.string(),
    zxcolumn2: Random.string(),
    zxcolumn3: Random.string(),
    zxcolumn4: Random.string(),
    zxcolumn5: Random.string(),
    zxcolumn6: Random.string(),
    zxcolumn7: Random.string(),
    zxcolumn8: Random.string(),
    zxcolumn9: Random.string(),
    zxcolumn10: Random.string(),
    wrkplnid: Random.string(),
    wrkplnexeid: Random.string(),
    ditchno: Random.string(),
    lstid: Random.string(),
    lstopcode: Random.string(),
    lstname: Random.string(),
    prepayid: Random.string(),
    ysucondtlid: Random.string(),
    obapplyid: Random.string(),
    modifyman: Random.string(),
    lstid0: Random.string(),
    dtlexpectdateperiod: Random.string(),
  }
}
export const getDetailTableList = (current: number, pageSize: number) => {
  const tableListDataSource = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i;
    const detail = getDetail();
    tableListDataSource.push({
      key:index,
      ...detail
    });
  }
  tableListDataSource.reverse();
  return tableListDataSource;
};


import ExportJsonExcel from 'js-export-excel';

export const transTimeRangeColumns = (cp) => {
  return cp.map((one) => {
    // if ('backendType' in one) {
    //   if (one.backendType === 'foreignKey') {
    //     one.dataIndex = one.dataIndex;
    //   }
    // }
    if (one.valueType === 'dateTime') {
      one.valueType = 'dateRange';
    }
    delete one.initialValue;
    return one;
  });
};

export const handleFieldError = (err: any, formRef: any) => {
  console.log("HandleFieldError", err);
  console.log("HandleFieldError", formRef);
  let errList = err.fields_errors;
  for (let key in errList) {
    if (errList.hasOwnProperty(key)) {
      let value = errList[key];
      formRef.current.setFields([
        {
          name: key,
          errors: value,
        },
      ]);
    }
  }
};

export const fieldErrorResponse = (errRes: any, formRef: any)=>{
  console.log("errRes", errRes)
  if (errRes.response.data && errRes.response.data instanceof Object && 'fields_errors' in errRes.response.data) {
    handleFieldError(errRes.response.data, formRef)
  }
}
// 导出全部excel
export const exportExcelAll = async (params, queryRule, columns, excel_name) => {
  params.all = 1;
  const ReqDetailList = await queryRule({ ...params });
  const option = {};

  option.fileName = excel_name;
  option.datas = [
    {
      sheetData: ReqDetailList.map((item) => {
        const result = {};
        columns.forEach((c) => {
          if (c.dataIndex === 'option') {
          } else {
            // result[c.dataIndex] = JSON.stringify(item[c.dataIndex]);
            let value = item[c.dataIndex];
            if (value == null) {
              value = '';
            } else if (value instanceof Array) {
              let txt_list = [];
              for (let i = 0; i < value.length; i++) {
                txt_list.push(value[i].ty_options_display_txt);
              }
              value = txt_list.join(',');
            } else if (typeof item[c.dataIndex] === 'object') {
              value = item[c.dataIndex].ty_options_display_txt;
            }
            result[c.dataIndex] = value;
          }
        });
        return result;
      }),
      sheetName: 'sheet1', // Excel文件名称
      sheetFilter: columns
        .filter((item) => item.dataIndex !== 'option')
        .map((item) => item.dataIndex),
      sheetHeader: columns.filter((item) => item.dataIndex !== 'option').map((item) => item.title),
      columnWidths: columns.map(() => 10),
    },
  ];
  const toExcel = new ExportJsonExcel(option);
  toExcel.saveExcel();
};
// 导出当前excel
export const exportExcelCurrent = (selectedRows, columns, excel_name) => {
  const option = {};
  option.fileName = excel_name;
  option.datas = [
    {
      sheetData: selectedRows.map((item) => {
        const result = {};
        columns.forEach((c) => {
          if (c.dataIndex === 'option') {
          } else {
            // result[c.dataIndex] = JSON.stringify(item[c.dataIndex]);
            let value = item[c.dataIndex];
            if (value instanceof Array) {
              let txt_list = [];
              for (let i = 0; i < value.length; i++) {
                txt_list.push(value[i].ty_options_display_txt);
              }
              value = txt_list.join(',');
            } else if (typeof item[c.dataIndex] === 'object') {
              value = item[c.dataIndex].ty_options_display_txt;
            }
            result[c.dataIndex] = value;
          }
        });
        return result;
      }),
      sheetName: 'sheet1', // Excel文件名称
      sheetFilter: columns.map((item) => item.dataIndex),
      sheetHeader: columns.map((item) => item.title),
      columnWidths: columns.map(() => 10),
    },
  ];
  const toExcel = new ExportJsonExcel(option);
  toExcel.saveExcel();
};



export function list_display_map(columns, list_display) {
  const all_field = columns
    .filter((item) => item.dataIndex !== 'option')
    .map((item) => item.dataIndex);
  const columnMap = {};
  for (let [index, value] of list_display.entries()) {
    columnMap[value] = {
      show: true,
      order: index,
    };
  }
  for (let [index, value] of all_field.entries()) {
    if (all_field[index] in columnMap) {
    } else {
      columnMap[value] = {
        show: false,
        order: parseInt(index),
      };
    }
  }
  console.log(columnMap);
  return columnMap;
}

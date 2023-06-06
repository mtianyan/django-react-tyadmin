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

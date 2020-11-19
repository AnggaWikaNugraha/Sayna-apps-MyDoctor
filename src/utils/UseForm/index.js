import {useState} from 'react';

export const useForm = (intialValue) => {
  const [values, setvalues] = useState(intialValue);
  return [
    values,
    (formType, formValue) => {
      if (formType === 'reset') {
        return setvalues(intialValue);
      }
      return setvalues({...values, [formType]: formValue});
    },
  ];
};

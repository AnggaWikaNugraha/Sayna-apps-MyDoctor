import {useState} from 'react';

export const useForm = (intialValue) => {
  const [values, setvalues] = useState(intialValue);
  return [
    values,
    (formType, formValue) => {
      return setvalues({...values, [formType]: formValue});
    },
  ];
};

import { InputConfigType } from "../Types/formConfig";

export const InputConfig: InputConfigType = {
    name:{
      label:'name',
      type: 'text',
      validators: ["REQUIRED", 'MIN_LENGTH'],
    },
    email:{
      label: 'email',
      type:'email',
    },
    phone:{
      label: 'phone',
      type:'tel',
      validators: ["REQUIRED", 'ONLY_NUMBERS'],
    }
  }
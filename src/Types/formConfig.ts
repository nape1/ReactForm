import {InputTypes} from '../Types/inputs'
import { Validators } from '../Utils/Validators';

// export type ConfigType = {
//     [key in InputTypes]?: {
//       name: string;
//       type: string;
//     };
//   };

export type InputConfigType = {
    [key: string]: {
      label: string;
      type: InputTypes;
      validators?: (keyof typeof Validators)[];
    };
  };
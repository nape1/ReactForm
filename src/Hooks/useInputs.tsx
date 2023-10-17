import { useState } from "react";
import { InputTypes } from "../Types/inputs";


type Props = {
    type: InputTypes; 
}

const useInputs = (props: Props) => {
    const [value, setValue] = useState<never>()


  return [value, setValue]
}

export default useInputs
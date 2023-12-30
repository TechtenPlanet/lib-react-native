import { ControllerRenderProps, FieldValues } from "react-hook-form";

export enum FORMTYPES {
    INPUT,
    ADDRESS,
    PICKER,
    DATETIME,

}
export interface FormElementProps {
    type: FORMTYPES;
    name: string;
    placeholder?: string;
    passwordMask?: boolean;
}

export interface FormComponentProps {
    field: ControllerRenderProps<FieldValues, string>
}
  
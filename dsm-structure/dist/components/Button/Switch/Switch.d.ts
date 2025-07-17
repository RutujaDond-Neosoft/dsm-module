import './Switch.css';
export interface SwitchProps {
    /** Name attribute for the switch input (used for identification) */
    name: string;
    /** Optional label to display next to the switch */
    label?: string;
    /** The current value (checked or not) of the switch */
    value?: boolean;
    /** Callback function called when the switch is toggled */
    handleChangeValue: () => void;
}
declare const Switch: ({ name, label, value, handleChangeValue }: SwitchProps) => import("react/jsx-runtime").JSX.Element;
export default Switch;

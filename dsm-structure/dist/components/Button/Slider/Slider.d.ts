import './Slider.css';
export interface SliderProps {
    /** Current value of the slider */
    value: number;
    /** Minimum allowed value */
    min: number;
    /** Maximum allowed value */
    max: number;
    /** Optional step between values */
    step?: number;
    /** Whether the slider is disabled */
    disabled?: boolean;
    /** Label for accessibility and testing */
    label: string;
    /** Callback to return the new value */
    getValueCallback: (value: number) => void;
}
declare const Slider: ({ value, min, max, step, disabled, label, getValueCallback, }: SliderProps) => import("react/jsx-runtime").JSX.Element;
export default Slider;

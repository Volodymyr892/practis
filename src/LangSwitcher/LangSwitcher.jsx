import { useId } from "react";


export default function LangSwitcher({value, onSelect}) {
    const selectId = useId();
    return(
        <div>
            <label htmlFor={selectId}></label>
            <select 
                id={selectId}
                value={value}
                onChange={(event)=> onSelect(event.target.value)}
            >
                <option value="en">English</option>
                <option value="uk">Ukrainian</option>
                <option value="pl">Polish</option>
            </select>
        </div>
    )
    
}
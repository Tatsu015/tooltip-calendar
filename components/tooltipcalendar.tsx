import { useState } from "react";
import Calendar from "react-calendar";

const TooltipCalendar: React.FC = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
                // activeStartDate={value}
                // defaultActiveStartDate={value}
                // goToRangeStartOnSelect={false}
                minDate={new Date()}
            />
        </div>
    );
}

export default TooltipCalendar;
import Calendar from 'js-year-calendar';
import 'js-year-calendar/dist/js-year-calendar.css';

const TooltipCalendar: React.FC = () => {
    const calendar = new Calendar('.calendar');
    return (
        <div className='calender'>
            test
        </div>
    );
}

export default TooltipCalendar;
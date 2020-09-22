import React, {useState} from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale("es", es);

function Fecha(){
    const [  selectedDate, setSelectedDate] = useState(new Date() )
    
    
    return(
        <div className="container-fluid">
            <label>
            Ingresa la fecha de cotización
            </label>
            <br />
            <DatePicker
                selected={selectedDate}
                onChange={date=> setSelectedDate(date)}
                dateFormat ="dd/MM/yyyy"
                maxDate={new Date()}
                showYearDropdown
                scrollableMonthYearDropdown
                returnValue="start"
                locale="es"
                
                
               
            />    
        
        </div>

    )

    
}export default Fecha;
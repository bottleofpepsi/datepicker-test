import './App.css'

import {BaseCalendar, CalendarTodo, Datepicker, RangeDatepicker} from "@sirensong/modsen-datepicker"

function App() {
  return (
    <>
      <div id='container'>
        <BaseCalendar />
        <Datepicker />
        <RangeDatepicker />
        <CalendarTodo />
      </div>
    </>
  )
}

export default App

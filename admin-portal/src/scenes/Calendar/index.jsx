import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPluging from '@fullcalendar/interaction'
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import SubHeader from '../../components/SubHeader';
import { tokens } from '../../theme'

/* TODO: Change to modal behavior, wire up. */

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selectedDate) => {
    const title = prompt("Please enter a new title for your event.");
    const calendarApi = selectedDate.view.calendar;
    calendarApi.unselect();

    if(title) {
      calendarApi.addEvent({
        id: `${selectedDate.dateStr}-${title}`,
        title,
        start: selectedDate.startStr,
        end: selectedDate.endStr,
        allDay: selectedDate.allDay
      });
    }
  }

  const handleEventClick = (selectedEvent) => {
    if (window.confirm(`Are you sure you want to delete the event: "${selectedEvent.event.title}"?`)) {
      selectedEvent.event.remove();
    }
  }

  return (
    <Box m='20px'>
      <SubHeader title='CALENDAR' subtitle='Full Calendar Interactive Page' />
      
      <Box display='flex' justifyContent='space-between'>
      {/* Calendar Events */}
        <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p='15px' borderRadius='4px'>
          <Typography variant='h5'>Events</Typography>
          <List>
            {currentEvents.map(event => (
              <ListItem
                key={event.id}
                sx={{ backgroundColor: colors.greenAccent[500], margin: '10px 0', borderRadius: '2px'}}
                >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Calendar */}
        <Box flex='1 1 100%'>
          <FullCalendar 
          height='75vh'
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPluging,
            listPlugin
          ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events) => setCurrentEvents(events)}
          initialEvents={[
            {id: '1324', title: 'All-Day event', date: '2023-09-20'},
            {id: '1235', title: 'All-Day event cleanup', date: '2023-09-21'}
          ]}
          />
        </Box>
      </Box>
    </Box>)
};

export default Calendar;
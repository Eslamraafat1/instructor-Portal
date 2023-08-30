$(document).ready(function() {



    $('#calendar').fullCalendar({

      header: {

        left: 'prev,next today',

        center: 'title',

        right: 'month,agendaWeek,agendaDay'

      },

      defaultDate: '2023-03-12',

      navLinks: true, // can click day/week names to navigate views

      selectable: true,

      selectHelper: true,

      select: function(start, end) {

        var title = prompt('Event Title:');

        var eventData;

        if (title) {

          eventData = {

            title: title,

            start: start,

            end: end

          };

          $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true

        }

        $('#calendar').fullCalendar('unselect');

      },

      editable: true,

      eventLimit: true, // allow "more" link when too many events

      events: [

        {

          title: 'All Day Event',

          start: '2023-05-01'

        },

        {

          title: 'Long Event',

          start: '2023-03-07',

          end: '2023-03-10'

        },

        {

          id: 999,

          title: 'Repeating Event',

          start: '2023-03-09T16:00:00'

        },

        {

          id: 999,

          title: 'Repeating Event',

          start: '2023-03-16T16:00:00'

        },

        {

          title: 'Conference',

          start: '2023-03-11',

          end: '2023-03-13'

        },

        {

          title: 'Meeting',

          start: '2023-03-12T10:30:00',

          end: '2023-03-12T12:30:00'

        },

        {

          title: 'Lunch',

          start: '2023-03-12T12:00:00'

        },

        {

          title: 'Meeting',

          start: '2023-03-12T14:30:00'

        },

        {

          title: 'Happy Hour',

          start: '2018-03-12T17:30:00'

        },

        {

          title: 'Dinner',

          start: '2018-03-12T20:00:00'

        },

        {

          title: 'Birthday Party',

          start: '2018-03-13T07:00:00'

        },

        {

          title: 'Click for Google',

          url: 'http://google.com/',

          start: '2018-03-28'

        }

      ]

    });



  });
import React, { useState } from 'react';
import { TUTORS } from '~/data/tutors';

export default function Tutors() {


  const tableStyle = {
    borderColor: 'grey', // Sets the color of the table lines to grey
  };
  
 const prettyTime = (time) => {
  const hours = Math.floor(time);
  const minutes = (time - hours) * 60;
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHour = hours % 12 || 12; // Converts 0 hours to 12 for AM
  return `${formattedHour}:${minutes.toString().padStart(2, "0")} ${ampm}`;
};


  const tutorTimeSlots = {}; // Store tutor time slots

  // Initialize tutorTimeSlots with an empty array for each tutor
  TUTORS.forEach((tutor) => {
    tutorTimeSlots[tutor.name] = [];
  });

  // Populate tutorTimeSlots with time slots for each tutor
  TUTORS.forEach((tutor) => {
    let currentSlot = null;
    tutor.times.forEach(([day, startTime, endTime]) => {
      for (let hour = startTime; hour < endTime && hour <= 16; hour += 0.5) {
        const slot = { day, hour };

        if (!currentSlot || currentSlot.day !== day || currentSlot.hour !== hour - 0.5) {
          tutorTimeSlots[tutor.name].push([slot]);
        } else {
          currentSlot.push(slot);
        }

        currentSlot = [slot]; // Initialize currentSlot as an array
      }
    });
  });

  const tutorNameStyle = (color) => ({
    backgroundColor: color, // Add a background color to improve visibility
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Add a drop shadow
    padding: '4px', // Add some padding for spacing
    color: 'white', // Change the text color to white
    height: '100%', // Ensure full height
    width: '100%',  // Ensure full width
    display: 'flex', // Use flexbox for alignment
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    textAlign: 'center', // Center text
  });

  const [selectedClass, setSelectedClass] = useState(''); // State for selected class

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value); // Update the selected class when the dropdown changes
    console.log(selectedClass)
  };

  return (
    <div className='grid justify-center my-4'>
      {/* Add a dropdown for class selection */}
      <div className='flex justify-center my-4'>
        <div>
        <label htmlFor="classSelect" className="mr-2">Select a class: </label>
        <select id="classSelect" onChange={handleClassChange} value={selectedClass} className='class="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm '>
          <option value="">All</option>
          {Array.from(new Set(TUTORS.flatMap((tutor) => tutor.courses))).map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
        </div>
        {console.log('Component re-rendered')} {/* Add this line */}
      </div>

      {/* ... (Your existing code for the table header and container) */}
      <div className="container flex justify-center items-center">
        <div className="row">
          <div className="col-sm col-sm-padding justify-content-center align-self-center">
            <div className="overflow-auto">
              <table id="schedule-table" className="table table-hover table-bordered table-auto border-collapse border border-gray-400" style={tableStyle}>
                <thead>
                <tr>
                    <th></th> {/* Empty cell for the time column */}
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                  </tr>
                </thead>
                <tbody id="schedule">
                  {/* Map over the 30-minute time slots from 9 am to 4 pm */}
                  {Array.from({ length: 17 }, (_, i) => 9 + i * 0.5).map((hour) => (
                    // Display two rows for each hour to represent 30-minute intervals
                    <React.Fragment key={hour}>
                      {hour < 16 && (
                        <>
                          <tr className="hover:bg-gray-600">
                          <td>{`${prettyTime(hour)} - ${prettyTime(hour + 0.5)}`}</td>
                            {['M', 'T', 'W', 'R', 'F'].map((day) => (
                              <td key={day}>
                                {/* Filter tutors based on the selected class */}
                                {TUTORS.filter((tutor) =>
                                  tutorTimeSlots[tutor.name].some((slots) =>
                                    slots.some((slot) => slot.day === day && slot.hour === hour) &&
                                    (!selectedClass || tutor.courses.includes(selectedClass))
                                  )
                                ).map((tutor, index) => (
                                  <div
                              key={tutor.name}
                              style={tutorNameStyle(tutor.color)}
                            >
                                    {index === 0 ? tutor.name : ''}
                                  </div>
                                ))}
                              </td>
                            ))}
                          </tr>
                        
                        </>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
        </div>
        <hr className="divider-big" />
        <div className="row">
        </div>
      </div>
    </div>
  );
}

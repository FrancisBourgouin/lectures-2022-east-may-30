const days = [
  {
    id: 1,
    name: "Monday",
    appointments: [1, 2],
    interviewers: [1, 2],
    spots: 0,
  },
];

const appointments = {
  1: {
    id: 1,
    time: "12pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: 1,
    },
  },
  2: {
    id: 2,
    time: "1pm",
    interview: null,
  },
  3: {
    id: 3,
    time: "2pm",
    interview: null,
  },
};

const interviewers = {
  1: {
    id: 1,
    name: "Sylvia Palmer",
    avatar: "https://i.imgur.com/LpaY82x.png",
  },
  2: {
    id: 2,
    name: "Tori Malcolm",
    avatar: "https://i.imgur.com/Nmx0Qxo.png",
  },
};

const state = {
  day: "Monday",
  days,
  appointments,
  interviewers,
};

// USE AN API (NO GO)
// --, ++
// Use the data that we have

// What does a "SPOT" mean?
// Nb of available appointments
// appointment free when interview key is null

// What are the appointments for a given day
// Appointment key has an array of appointment ids

const countSpots = (state) => {
  const currentDay = state.days.find((day) => day.name === state.day);
  const appmntIds = currentDay.appointments;

  const spots = appmntIds.filter((id) => !state.appointments[id].interview).length;

  return spots;
};

console.log(countSpots(state));

const updateSpotInState = (state) => {
  const currentDay = state.days.find((day) => day.name === state.day);
  const currentDayIndex = state.days.findIndex((day) => day.name === state.day);

  const updatedDayObj = { ...currentDay };
  updatedDayObj.spots = countSpots(state);

  const updatedDaysArr = [...state.days];
  updatedDaysArr[currentDayIndex] = updatedDayObj;

  const updatedState = { ...state };
  updatedState.days = updatedDaysArr;

  return updatedState;
};

const fancyUpdateSpots = (state) => {
  const currentDayIndex = state.days.findIndex((day) => day.name === state.day);
  const currentDay = state.days[currentDayIndex];
  const spots = currentDay.appointments.filter(
    (id) => !state.appointments[id].interview
  ).length;

  const updatedDayObj = { ...currentDay, spots };

  const updatedDaysArr = [...state.days];
  updatedDaysArr[currentDayIndex] = updatedDayObj;

  const updatedState = { ...state, days: updatedDaysArr };

  return updatedState;
};

const newState = updateSpotInState(state);

console.log(state);
console.log(newState);

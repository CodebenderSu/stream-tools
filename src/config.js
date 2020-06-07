export const baseRoute = `/stream-tools`;

export const routes = {
  home: `/`,
  countdown: `/countdown`
};

export const countdownOptions = {
  s: 360, // Seconds for counting down to (TAKES PRIORITY)
  timestamp: 0, // UNIX date timestamp to count down to
  ms: false, // Boolean for displaying milliseconds
  mins: true, // Boolean for displaying minutes
  hrs: false, // Boolean for displaying hours
  days: false, // Boolean for displaying days
  prefix: 'in', // Message to display before countdown timer
  suffix: '', // Message to display after countdown timer
  complete: 'imminently...' // Message to display when countdown is finished
};

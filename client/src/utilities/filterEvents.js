export default function filterEvents({ events, property, value, equal }) {
  return events.filter(event => {
    if (equal) {
      return event[property] === value;
    } else {
      return event[property] !== value;
    }
  });
}

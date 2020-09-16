export default function filterEventsById(events, id) {
  return events.filter(event => event.authorId !== id);
}

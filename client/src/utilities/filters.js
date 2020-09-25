export function filterEventsByTag(events, category) {
  if (category === "todos") {
    return events;
  }
  return events.filter(event => event.category === category);
}

export function filterEventsById(events, id) {
  return events.filter(event => event.authorId !== id);
}

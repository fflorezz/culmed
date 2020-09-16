export function filterEventsByTag(events, tag) {
  if (tag === "Todos") {
    return events;
  }
  return events.filter(event => event.tags.includes(tag));
}

export function filterEventsById(events, id) {
  return events.filter(event => event.authorId !== id);
}

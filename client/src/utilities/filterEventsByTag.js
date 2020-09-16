export function filterEventsByTag(events, tag) {
  if (tag === "Todos") {
    return events;
  }
  return events.filter(event => event.tags.includes(tag));
}

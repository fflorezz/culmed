export default function eventFormater(event) {
  event = JSON.parse(JSON.stringify(event));
  return {
    ...event,
    views: event.views.length,
    participants: event.participants.length,
  };
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("es-ES", {
    month: "long",
    day: "numeric",
  });
}

export function formatHour(date) {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

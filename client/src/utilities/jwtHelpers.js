import decode from "jwt-decode";

export function getTokenExpirationDate(token) {
  const decoded = decode(token);
  if (!decoded.exp) {
    return null;
  }

  const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
  date.setUTCSeconds(decoded.exp);
  return date;
}

export function getUserIdFromToken(token) {
  const decoded = decode(token);
  if (!decoded.sub) {
    return null;
  }

  return decoded.sub;
}

export function isTokenExpired(token) {
  const date = getTokenExpirationDate(token);
  const offsetSeconds = 0;
  if (date === null) {
    return false;
  }
  return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
}

export function authHeader() {
  const token = localStorage.getItem("token");

  if (token && !isTokenExpired(token)) {
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
}

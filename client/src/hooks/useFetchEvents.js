import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllEvents } from "./../redux/slices/events";

export function useFetchEvents({ path, userId }) {
  const { events, error, loading } = useSelector(state => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllEvents());
    // eslint-disable-next-line
  }, []);

  return { events, error, loading };
}

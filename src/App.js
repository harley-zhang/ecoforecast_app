import { useState, useEffect } from "react";
import DisplayMap from "./components/DisplayMap";
import Loader from "./components/Loader";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events?source=InciWeb");
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    }

    fetchEvents();
  }, [])

  return (
    <div>
      { !loading ? <DisplayMap eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;

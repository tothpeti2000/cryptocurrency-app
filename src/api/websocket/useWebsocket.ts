import { useEffect, useState } from "react";
import { WsData } from "../../interfaces/currency";
import { apiCall, wsURL } from "./client";

const useWebsocket = () => {
  const [data, setData] = useState<WsData>({ price_high: 0, price_low: 0 });

  useEffect(() => {
    const ws = new WebSocket(wsURL);

    ws.onopen = (e) => {
      console.log("WS opened");
      ws.send(JSON.stringify(apiCall));
    };

    ws.onmessage = (e) => {
      const json = JSON.parse(e.data);
      console.log(json);
      setData(e.data as WsData);

      try {
        if (json.event === "data") {
        }
      } catch (err) {
        console.log(err);
      }
    };

    ws.onerror = () => {
      console.log("WS error");
    };

    ws.onclose = () => {
      console.log("WS closed");
    };

    return () => ws.close();
  }, []);

  return data;
};

export default useWebsocket;

/* eslint-disable */
const websocketConf = {
  port: 8081,
  host: 'localhost'
};

const objectToQueryString = (obj) => {
  const params = new URLSearchParams();
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      params.append(p, obj[p]);
    }
  }
  return params.toString();
};

export const connect = ({onOpen, onClose, onMessage, parameters}) => {

  const websocketConnection = new WebSocket(
    `ws://${websocketConf.host}:${websocketConf.port}/?${objectToQueryString(parameters)}`
  );

  websocketConnection.onopen = () => onOpen();

  websocketConnection.onclose = (event) => {
    const reason = event.reason;
    onClose({reason});
  };

  websocketConnection.onmessage = (messageEvent) => {
    console.log(messageEvent);
    const payload = messageEvent.data;

    let parsedMessage;
    try {
      parsedMessage = JSON.parse(payload);
    } catch (error) {
      console.error('error parsing websocket message', error, payload); // eslint-disable-line no-console
      return;
    }

    onMessage(parsedMessage);
  };

  const close = () => {
    websocketConnection.close();
  };

  return {
    close: close
  };
};

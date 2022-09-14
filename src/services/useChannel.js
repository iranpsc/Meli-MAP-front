import Pusher from "pusher-js";

export function useChannel(assets, dispatch, action) {
  if (assets) {
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_APP_KEY, {
      cluster: "eu",
    });

    const channel = pusher.subscribe(process.env.REACT_APP_PUSHER_CHANNEL_NAME);

    channel.bind(process.env.REACT_APP_PUSHER_EVENT_NAME, function (data) {
      const id = data.feature.id;
      const rgb = data.feature.properties.rgb;

      dispatch(action({ id, rgb }));
    });
  }
}

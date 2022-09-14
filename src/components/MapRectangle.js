import React, { useState } from "react";
import { Polygon, Popup, useMapEvents } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { fetchMapAssets, updateOneAssets } from "../features/assetsSlice";
import { v4 as uuidv4 } from "uuid";
import { useChannel } from "../services/useChannel";
import {
  blacklist,
  borderColor,
  max_zoom,
  polygonColors,
} from "../services/Utility";

export default function MapRectangle() {
  const dispatch = useDispatch();

  // map locations
  const assets = useSelector((state) => state.assets.entities);

  // set zoom when user zoomin and zoomout
  const [zoom, setZoom] = useState(0);

  // connect to socket
  useChannel(assets, dispatch, updateOneAssets);
  // map event for zoomin and zoomout
  const mapEvents = useMapEvents({
    zoomend: () => {
      if (mapEvents.getZoom() >= max_zoom && Object.keys(assets).length == 0) {
        dispatch(fetchMapAssets());
      }
      setZoom(mapEvents.getZoom());
    },
  });

  // polygon shape
  const Rectangles = Object.keys(assets).map((key) => {
    const data = assets[key];

    // dynamic modal detail
    const properties = Object.keys(data).map((key) =>
      blacklist.indexOf(key) ? (
        <p key={uuidv4()}>
          <strong>{key}</strong>: {data[key]}
        </p>
      ) : (
        ""
      )
    );

    return max_zoom <= zoom ? (
      <Polygon
        key={uuidv4()}
        positions={data.coordinates}
        pathOptions={{
          color: borderColor[data["rgb"]],
          fillOpacity: 0.5,
          fillColor:polygonColors[data["rgb"]],
     
        }}
      >
        <Popup>{properties}</Popup>
      </Polygon>
    ) : (
      ""
    );
  });

  return <>{assets && Rectangles}</>;
}

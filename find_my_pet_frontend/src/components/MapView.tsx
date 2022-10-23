import styled from "@emotion/styled";
import { shadows } from "assets";
import mapboxgl, { Map, Marker } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { RiMapPin2Fill } from "react-icons/ri";

const StyledMap = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: ${shadows.elevation1};
  z-index: 0;
`;
const MapControl = styled.div`
  /* position: absolute; */
  display: flex;
  gap: 0.5rem;
  /* background-color: white; */
  z-index: 2;
`;
const MapContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  /* width: 50%; */
`;

type MapViewProps = {
  photo_url: string;
  onChange?: any;
  pos: any;
};
export const MapView = ({ pos, onChange, photo_url }: MapViewProps) => {
  const mapDiv = useRef<HTMLDivElement>(null);
  const [userMarker, setUserMarker]: [Marker | undefined, any] = useState<
    Marker | undefined
  >(undefined);
  const [myMap, setMap]: [Map | undefined, any] = useState<Map | undefined>(
    undefined
  );
  const markerElement = document.createElement("div");
  markerElement.style.backgroundImage = `url(${photo_url})`;
  markerElement.style.backgroundSize = "cover";
  markerElement.style.filter = "grayscale(80)";
  markerElement.style.height = "25px";
  markerElement.style.width = "25px";

  const [markerOptions, setMarkerOptions] = useState({
    draggable: true,
    element: markerElement,
  });
  useEffect(() => {
  
    const map = new mapboxgl.Map({
      container: mapDiv.current!, // container ID
      style: "mapbox://styles/mapbox/light-v10", // style URL
      center: [pos.lng, pos.lat], // starting position [lng, lat]
      zoom: 15, // starting zoom
      minZoom: 12,
      maxZoom: 17,
      // projection: { name: "globe" }, // display the map as a 3D globe
    });

    setMarkerOptions((prev: any) => {
      const { element } = prev;
      element.style.backgroundImage = `url(${photo_url})`;
      return { ...prev, element };
    });
    const marker = new Marker(markerOptions)
      .setLngLat(map.getCenter())
      .addTo(map);

    setUserMarker(marker);
    onChange && onChange(marker);
    setMap(map);
  }, []);

  useEffect(() => {
    if (userMarker) {
      userMarker.on("dragend", (e: any) => {
        userMarker!.remove();
        // myMap!.on("zoomend", () => {
        // });
        setUserMarker(
          new Marker(markerOptions).setLngLat(e.target._lngLat).addTo(myMap!)
        );
      });
      onChange && onChange(userMarker);
    }
  }, [userMarker, myMap]);

  const CenterMarker = () => {
    userMarker!.remove();
    setUserMarker(
      new Marker(markerOptions).setLngLat(myMap!.getCenter()).addTo(myMap!)
    );
  };
  return (
    <MapContainer>
      <MapControl>
        <RiMapPin2Fill onClick={() => CenterMarker()} />
        <p>On center</p>
      </MapControl>
      <StyledMap ref={mapDiv}></StyledMap>
    </MapContainer>
  );
};

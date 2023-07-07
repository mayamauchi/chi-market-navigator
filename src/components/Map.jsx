import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

const markers = [
  {
    geocode: [41.9421788, -87.7082946],
    popUp: "",
  },
];

const customIcon = new Icon({
  iconUrl: "/marker-icon.png",
  iconSize: [30, 30],
});

const createCustomClusterIcon = (cluster) => {
  return divIcon({
    //the amount of icons per cluster
    html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
    className:
      "custom-marker-cluster h-12 w-12 rounded-full bg-red-500 absolute top-1/4 left-1/4 transform translate-x-[-25%] translate-y-[-25%] flex justify-center items-center font-bold text-xl",
    iconSize: point(33, 33, true),
  });
};

function Map() {
  return (
    <>
      <div className=" py-10 max-w-8xl m-auto">
        <MapContainer
          className="h-screen"
          center={[41.8781, -87.6298]}
          zoom={10}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createCustomClusterIcon}
          >
            {markers.map((marker, index) => (
              <Marker key={index} position={marker.geocode} icon={customIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </>
  );
}

export default Map;

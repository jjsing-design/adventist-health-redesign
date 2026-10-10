export default function BuildingPhoto({ facility }) {
  return (
    <figure className="photo">
      <img
        src="/building.jpg"
        alt="The Adventist Health clinic building at 6955 El Camino Real in Atascadero"
      />
      <figcaption>
        {facility.street}
        <br />
        {facility.locality}
      </figcaption>
    </figure>
  );
}

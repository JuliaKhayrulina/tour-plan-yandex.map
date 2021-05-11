ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map('map', {
    center: [7.890799, 98.294777],
    zoom: 14,
    controls: ['zoomControl'],
  });
  hotelGeoMark = new ymaps.GeoObject({});
  myMap.geoObjects.add(hotelGeoMark).add(
    new ymaps.Placemark(
      [7.890799, 98.294777],
      {
        hintContent: 'Grand Hilton Hotel',
      },
      {
        preset: 'Islands3doticon',
        iconColor: '#2e3133',
      }
    )
  );
}

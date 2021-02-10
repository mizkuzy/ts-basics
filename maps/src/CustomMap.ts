import InfoWindow = google.maps.InfoWindow

export interface Mappable {
  location: {
    lat: number,
    lng: number
  },
  getMarkerContent():string
}

export class CustomMap {
  private map: google.maps.Map;


  constructor(divId: string) {
    this.map = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })

    marker.addListener('click', () => {
      const infoWindow = new InfoWindow({
        content: mappable.getMarkerContent()
      })
      infoWindow.open(this.map, marker)
    })
  }
}
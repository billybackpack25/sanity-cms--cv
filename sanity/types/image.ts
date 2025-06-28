export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  // Optionally include crop, hotspot, etc. if you use them
  crop?: {
    _type: 'sanity.imageCrop'
    top: number
    bottom: number
    left: number
    right: number
  }
  hotspot?: {
    _type: 'sanity.imageHotspot'
    x: number
    y: number
    height: number
    width: number
  }
}
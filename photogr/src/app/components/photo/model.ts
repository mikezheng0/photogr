export class IPhoto {
  id: number
  title: string
  description: string
  url: string
}

export const fromServer = (record: any): IPhoto => ({
  id: record.id,
  title: record.title,
  description: record.description,
  url: record.url
})

export interface IPhotoList {
  items: {}
  loading: boolean;
  error: any;
}
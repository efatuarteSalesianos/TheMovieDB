export class AddToFavoriteDTO {
  media_type: string;
  media_id:   number;
  favorite:   boolean;

  constructor() {
    this.media_type = '';
    this.media_id = 0;
    this.favorite = false;
  }
}

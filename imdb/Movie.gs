package imdb

class Movie {
  
  var _name: String as Name
  var _releasedDate: Date as ReleasedDate
  var _rating: double as Rating
  
  construct(name: String, relDate: String, rating: double){
    this._name = name
    this._rating = rating
    this._releasedDate = new Date(relDate)
  }
  
}
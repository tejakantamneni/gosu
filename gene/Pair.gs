package gene

class Pair<K extends Number, V> {
  var _key: K as Key
  var _val: V as Value
  
  construct(k: K, v: V){
    this._key = k
    this._val = v
  }
}
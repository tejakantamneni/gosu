package gene

class Pair<K, V> {
  var _key: K as Key
  var _val: V as Value
  
  construct(k: K, v: V){
    this._key = k
    this._val = v
  }
}
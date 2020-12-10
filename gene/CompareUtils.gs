package gene

class CompareUtils {

  static function  compare<K, V>(p1: Pair<K, V>, p2: Pair<K, V>): boolean {
        return p1.Key == p2.Key && p1.Value == p2.Value
    }
   
}
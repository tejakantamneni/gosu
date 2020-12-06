package ann

class Author implements IAnnotation{
  private var _author : String as AuthorName
  construct(a : String) {
    //The constructor takes a String, which means the Author of this item
    _author = a
   }
}
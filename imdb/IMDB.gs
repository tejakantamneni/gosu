package imdb

class IMDB {
  
  var scanner: Scanner
  
  var moviesList: List<Movie>
  
  construct(){
    scanner = new Scanner(System.in)
  }
  
  function getMovieData(): Movie{
    scanner = new Scanner(System.in)
    print("Please enter movie name:")
    var name = scanner.nextLine()
    print("Please enter Released Date (MM/DD/YYYY)")
    var date = scanner.nextLine()
    print("Please enter the movie rating:")
    var rating = scanner.nextDouble()
    
    var movie = new Movie(name, date, rating)
    
    return movie
  }
  
  function handleAddMovie(movie: Movie){
    if (moviesList == null){
      moviesList = new ArrayList<Movie>()
    }
    moviesList.add(movie)
  }
  
  function printAll(){
    moviesList.forEach(\x -> print(x))
  }
  
  function run(){
    var choice = -1
    do{
      choice = showMenu()
      switch(choice){
        case 1:
          print("handle add")
          var movie = getMovieData()
          handleAddMovie(movie)
          break
        case 2:
          print("handle edit")
          break
        case 3:
          print("handle search")
          break
        case 4:
          print("handle delete")
          break
        case 5:
          printAll()
          break
        default:
          System.exit(0)
      }
    }while(choice > 0 && choice < 6)
  }
  
  private function showMenu(): int{
    print("----------------Menu-------------------")
    print("----------------1. Add-----------------")
    print("----------------2. Edit----------------")
    print("----------------3. Search--------------")
    print("----------------4. Delete--------------")
    print("----------------5. Print all----------------")
    print("----------------6. Exit----------------")
    print("Pick you choice....:")
    scanner = new Scanner(System.in)
    var choice = scanner.nextInt()
    return choice
  }
  
}
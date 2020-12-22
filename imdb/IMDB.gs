package imdb

class IMDB {
  
  var scanner: Scanner
  
  construct(){
    scanner = new Scanner(System.in)
  }
  
  function run(){
    var choice = -1
    do{
      choice = showMenu()
      switch(choice){
        case 1:
          print("handle add")
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
        default:
          System.exit(0)
      }
    }while(choice > 0 && choice < 5)
  }
  
  private function showMenu(): int{
    print("----------------Menu-------------------")
    print("----------------1. Add-----------------")
    print("----------------2. Edit----------------")
    print("----------------3. Search--------------")
    print("----------------4. Delete--------------")
    print("----------------5. Exit----------------")
    print("Pick you choice....:")
    return scanner.nextInt()
  }
  
}
using {db.books as mybook} from '../db/booksdatamodel.cds';



service LibrarySrv @(requires:'authenticated-user'){


    entity BooksSet @(
        restrict: [
            {grant:['READ','WRITE'], to: 'Admin'},
            {grant:['READ'],to:'Kids',where:'bookAgeGroup = $user.bookAgeGroup'},
        ]
    )
     as projection on mybook.Books;
}
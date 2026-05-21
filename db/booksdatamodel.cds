namespace db.books;

type BooksAgeGroup : String enum {
    Kids = 'KIDS';
    Adult = 'ADULT';
}

entity Books {
    key ID         : UUID;
    title          : String(255);
    author         : String(255);
    price          : Decimal(10, 2);
    publishedDate  : DateTime;
    digitalCopy    : Boolean;
    bookAgeGroup   : BooksAgeGroup;
}
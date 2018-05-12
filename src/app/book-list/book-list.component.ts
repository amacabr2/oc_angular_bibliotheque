import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../models/book';
import {Subscription} from 'rxjs/Subscription';
import {BooksService} from '../services/books.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit, OnDestroy {

    books: Book[];
    booksSubscription: Subscription;

    constructor(private booksService: BooksService, private router: Router) {
    }

    ngOnInit() {
        this.booksSubscription = this.booksService.booksSubject.subscribe(
            (books: Book[]) => {
                this.books = books;
            }
        );
        this.booksService.emitBooks();
        this.booksService.getBooks();
        console.log(this.books);
    }

    onNewBook() {
        this.router.navigate(['/books', 'new']);
    }

    onDeleteBook(book: Book) {
        this.booksService.removeBook(book);
    }

    onViewBook(id: number) {
        this.router.navigate(['/books', 'view', id]);
    }

    ngOnDestroy() {
        this.booksSubscription.unsubscribe();
    }
}

import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
var gFilterBy = { title: '' }
var gNextId = 1
console.log('gNextId: ', gNextId)


export const bookService = {
    query,
    get,
    remove,
    save,
    // getBook,
    // getNextBookId,
    // getFilterBy,
    setFilterBy,
    getDefaultFilter
}

function query() {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (gFilterBy.title) {
                const regex = new RegExp(gFilterBy.title, 'i')
                books = books.filter(book => regex.test(book.title))
            }
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

// function getBook(title = '') {
//     var check =  { id: gNextId++, title }
//     console.log('id check', check.id)
//     return check
// }

// function getFilterBy() {
//     return { ...gFilterBy }
// }

function setFilterBy(filterBy = {}) {
    if (filterBy.id !== undefined) gFilterBy.id = filterBy.id
    if (filterBy.title !== undefined) gFilterBy.title = filterBy.title
    // if (filterBy.listPrice !== undefined) gFilterBy.listPrice = filterBy.listPrice
    return gFilterBy
}

// function getNextBookId(bookId) {
//     return storageService.query(BOOK_KEY)
//         .then(books => {
//             let nextBookIdx = books.findIndex(book => book.id === bookId) + 1
//             if (nextBookIdx === books.length) nextBookIdx = 0
//             return books[nextBookIdx].id
//         })
// }

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = []
        books.push(_createBook('Metus Hendrerit'))
        books.push(_createBook('Morbi'))
        books.push(_createBook('At Viverra Venenatis'))
        books.push(_createBook('Dictum'))
        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(title) {
    // const book = getBook(title)
    
    return {id: gNextId++, thumbnail: `http://coding-academy.org/books-photos/${gNextId}.jpg`, title }
}

function getDefaultFilter() {
    return gFilterBy
}

_createBooks()

export function BookPreview({ book }) {

    console.log(book)

    return (
        <article className="book-preview">
            <h2>Title: {book.title}</h2>
            
            <img src={book.thumbnail} alt="" />
        </article>
    )
}
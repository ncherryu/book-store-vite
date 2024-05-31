import { render, screen } from "@testing-library/react";
import BookItem from "../src/components/books/BookItem";
import { BookStoreThemeProvider } from "../src/context/themeContext";
import '@testing-library/jest-dom';

const dummyBook = {
    id: 1,
    title: 'Dummay Book',
    img: 5,
    category_id: 1,
    form: 'paperbook',
    isbn: 'Dummy ISBN',
    summary: 'Dummy Summary',
    detail: 'Dummy Detail',
    author: 'Dummy Author',
    pages: 100,
    contents: 'Dummy Contents',
    price: 10000,
    likes: 1,
    pubDate: '2021-01-01'
};

describe('BookItem', () => {
    it('렌더 여부', () => {
        const { getByText } = render(
            <BookStoreThemeProvider>
                <BookItem book={dummyBook} />
            </BookStoreThemeProvider>
        );

        expect(getByText(dummyBook.title)).toBeInTheDocument();
        expect(getByText(dummyBook.summary)).toBeInTheDocument();
        expect(getByText(dummyBook.author)).toBeInTheDocument();
        expect(getByText('10,000원')).toBeInTheDocument();
        expect(getByText(dummyBook.likes)).toBeInTheDocument();
        expect(screen.getByAltText(dummyBook.title)).toHaveAttribute(
            'src',
            `https://picsum.photos/id/${dummyBook.img}/600/600`
        );
    });
});
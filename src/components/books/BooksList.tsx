import styled from 'styled-components';
import BookItem from './BookItem';
import { Book } from '../../models/book.model';
import { useLocation } from 'react-router-dom';
import { QUERYSTRING } from '../../constants/querystring';
import { useEffect, useState } from 'react';
import { ViewMode } from './BooksViewSwitcher';

interface Props {
    books: Book[];
}

function BooksList({ books }: Props) {
    const [view, setView] = useState('grid');
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get(QUERYSTRING.VIEW)) {
            setView(params.get(QUERYSTRING.VIEW) as ViewMode);
        }
    }, [location.search]);

    return (
        <>
            <BooksListStyle view={view as ViewMode}>
                {
                    books?.map((item) => (
                        <BookItem book={item} view={view as ViewMode} />
                    ))
                }
            </BooksListStyle>
        </>
    )
}

interface BooksListStyleProps {
    view: ViewMode;
}

const BooksListStyle = styled.div<BooksListStyleProps>`
    display: grid;
    grid-template-columns: ${({ view }) => (view === 'grid' ? 'repeat(4, 1fr)' : 'repeat(1, 1fr)')};
    gap: 24px;
`;

export default BooksList;
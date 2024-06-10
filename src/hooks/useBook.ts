import { useEffect, useState } from "react"
import { BookDetail, BookReviewItem, BookReviewItemWrite } from "../models/book.model"
import { fetchBook, likeBook, unlikeBook } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";
import { addCart } from "../api/carts.api";
import { addBookReview, fetchBookReview } from "@/api/review.api";

export const useBook = (bookId: string | undefined) => {
    const [book, setBook] = useState<BookDetail | null>(null);
    const [cartAdded, setCartAdded] = useState(false);
    const [reviews, setReviews] = useState<BookReviewItem[]>([]);

    const { isLoggedIn } = useAuthStore();
    const { showAlert } = useAlert();

    const likeToggle = () => {
        if (!isLoggedIn) {
            showAlert('로그인이 필요합니다.');
            return;
        }

        if (!book) return;

        if (book.liked) {
            // unlike 실행
            unlikeBook(book.id).then(() => {
                setBook({
                    ...book,
                    liked: false,
                    likes: book.likes - 1
                })
            })
        } else {
            // like 실행
            likeBook(book.id).then(() => {
                setBook({
                    ...book,
                    liked: true,
                    likes: book.likes + 1
                })
            })
        }
    };

    const addToCart = (quantity: number) => {
        if (!book) return;

        addCart({
            book_id: book.id,
            quantity: quantity
        }).then(() => {
            // showAlert('장바구니에 추가되었습니다.');
            setCartAdded(true);
            setTimeout(() => {
                setCartAdded(false);
            }, 3000);
        })
    }

    useEffect(() => {
        if (!bookId) return;

        fetchBook(bookId).then((book) => {
            setBook(book);
        });

        fetchBookReview(bookId).then((reviews) => {
            setReviews(reviews)
        })
    }, [bookId]);

    const addReview = (data: BookReviewItemWrite) => {
        if (!book) return;

        addBookReview(book.id.toString(), data).then((res) => {
            // fetchBookReview(book.id.toString()).then((reviews) => {
            //     setReviews(reviews)
            // })
            showAlert(res?.message);
        })
    }

    return { book, likeToggle, addToCart, cartAdded, reviews, addReview };
}
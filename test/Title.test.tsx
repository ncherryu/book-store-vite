import { render, screen } from "@testing-library/react";
import Title from "../src/components/common/Title";
import { BookStoreThemeProvider } from '../src/context/themeContext';
import '@testing-library/jest-dom';


describe("Title 컴포넌트 테스트", () => {
    it("렌더를 확인", () => {
        // 1. 렌더
        render(
            <BookStoreThemeProvider>
                <Title size='large'>제목</Title>
            </BookStoreThemeProvider>
        );

        // 2. 확인
        expect(screen.getByText("제목")).toBeInTheDocument();
    })
})
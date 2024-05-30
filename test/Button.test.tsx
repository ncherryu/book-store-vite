import { render, screen } from "@testing-library/react";
import Button from "../src/components/common/Button";
import { BookStoreThemeProvider } from '../src/context/themeContext';
import '@testing-library/jest-dom';


describe("Button 컴포넌트 테스트", () => {
    it("렌더를 확인", () => {
        // 1. 렌더
        render(
            <BookStoreThemeProvider>
                <Button size='large' scheme="primary">버튼</Button>
            </BookStoreThemeProvider>
        );

        // 2. 확인
        expect(screen.getByText("버튼")).toBeInTheDocument();
    })

    it("렌더를 확인", () => {
        // 1. 렌더
        render(
            <BookStoreThemeProvider>
                <Button size='large' scheme="primary">버튼</Button>
            </BookStoreThemeProvider>
        );

        // 2. 확인
        expect(screen.getByRole('button')).toHaveStyle({
            fontSize: '1.5rem'
        });
    })
})
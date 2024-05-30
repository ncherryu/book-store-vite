import { render, screen } from "@testing-library/react";
import InputText from "../src/components/common/InputText";
import { BookStoreThemeProvider } from '../src/context/themeContext';
import '@testing-library/jest-dom';
import { createRef } from "react";


describe("InputText 컴포넌트 테스트", () => {
    it("렌더를 확인", () => {
        // 1. 렌더
        render(
            <BookStoreThemeProvider>
                <InputText placeholder="여기에 입력" />
            </BookStoreThemeProvider>
        );

        // 2. 확인
        expect(screen.getByPlaceholderText("여기에 입력")).toBeInTheDocument();
    });

    it('forwardRef 테스트', () => {
        const ref = createRef<HTMLInputElement>();

        render(
            <BookStoreThemeProvider>
                <InputText placeholder="여기에 입력" ref={ref} />
            </BookStoreThemeProvider>
        );

        expect(ref.current).toBeInstanceOf(HTMLInputElement);
    })
})
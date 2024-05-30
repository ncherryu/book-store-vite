import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    inputType?: 'text' | 'email' | 'password' | 'number';
}

const InputText = forwardRef((
    { placeholder, inputType, onChange, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>
) => {
    return (
        <InputTextStyled
            type={inputType}
            placeholder={placeholder}
            ref={ref}
            onChange={onChange}
            {...props}
        />
    );
})

const InputTextStyled = styled.input`
    padding: 0.25rem 0.75rem;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    font-size: 1rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.text};
`;

export default InputText;
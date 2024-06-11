import useToastStore from "@/store/toastStore";
import styled from "styled-components";
import Toast from "./Toast";

function ToastConttainer() {
    const toasts = useToastStore((state) => state.toasts);

    return (
        <ToastConttainerStyle>
            {
                toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        id={toast.id}
                        message={toast.message}
                        type={toast.type}
                    />
                ))
            }
        </ToastConttainerStyle>
    );
}

const ToastConttainerStyle = styled.div`
    position: fixed;
    top: 32px;
    right: 24px;
    z-index: 1000;

    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export default ToastConttainer;
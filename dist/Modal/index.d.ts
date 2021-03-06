import React from 'react';
export declare const stopPropagation: (e: any) => void;
interface ModalProps {
    isVisible: boolean;
    onHide: any;
    children?: any;
}
declare const Modal: {
    ({ isVisible, onHide, children }: ModalProps): React.ReactPortal | null;
    Footer: import("styled-components").StyledComponent<"div", any, any, never>;
};
export default Modal;

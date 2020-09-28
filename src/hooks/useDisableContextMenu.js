import { useEffect, useRef } from 'react';

export const useDisableContextMenu = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            const element = contentRef.current;

            const onContextmenu = (e) => {
                e.preventDefault();
                return false;
            };

            element.addEventListener('contextmenu', onContextmenu);

            return () => {
                element.removeEventListener('contextmenu', onContextmenu);
            };
        }
    }, [contentRef]);

    return contentRef;
};

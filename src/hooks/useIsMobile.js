import { useState, useEffect } from 'react';

export const useIsMobile = (onBreakpoint = () => {}) => {
    const [isMobile, setIsMobile] = useState(document.body.clientWidth < 650);

    useEffect(() => {
        const onResize = () => {
            if (document.body.clientWidth < 650) {
                if (!isMobile) {
                    onBreakpoint();
                    setTimeout(() => {
                        setIsMobile(true);
                    }, 10);
                }
            } else {
                if (isMobile) {
                    onBreakpoint();
                    setTimeout(() => {
                        setIsMobile(false);
                    }, 10);
                }
            }
        };

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, [isMobile, onBreakpoint]);

    return isMobile;
};

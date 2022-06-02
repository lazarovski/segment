import { useEffect } from "react";

export default function useEvent(event, callback) {
    useEffect(() => {
        window.addEventListener(event, callback);
        return () => window.removeEventListener(event, callback);
    }, [event, callback]);
};
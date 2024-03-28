import { useEffect, useState } from 'react';

import { useAuthContext } from '../contexts/authContext';

export default function useToken() {
    const [bearerToken, setBearerToken] = useState("");
    const { getBearerToken } = useAuthContext();

    useEffect( () => {
        let isMounted = true;

        const fetchBearerToken = async () => {
            const fetchedToken = await getBearerToken();
            if (isMounted && fetchedToken) {
                setBearerToken(fetchedToken);
            }
        };

        fetchBearerToken();

        return () => {
            isMounted = false;
        }
    }, [getBearerToken])

    return bearerToken;
}

import { useState, useEffect } from 'react';
import { JettonsResponse } from '../interfaces/Jetton';

const useJettons = (accountId: string) => {
  const [jettons, setJettons] = useState<JettonsResponse>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJettons = async () => {
      setLoading(true);
      setError(null);

      try {
        const response  = await fetch(`https://tonapi.io/v2/accounts/UQCowkVOCbGeV2sKczX_6dI8cY4i00iUeCNTderORXCqQDEN/jettons?currencies=usd,ton`, {
          headers: {
            'accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data: JettonsResponse = await response.json();
        setJettons(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJettons();
  }, [accountId]);

  return { jettons, loading, error };
};

export default useJettons;

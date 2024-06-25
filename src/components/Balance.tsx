import React from 'react'
import { useTonAddress } from '@tonconnect/ui-react';

function Balance() {
  const userFriendlyAddress = useTonAddress();
    const rawAddress = useTonAddress(false);

    return (
       <>
        rawAddress && (
            <div>
                <span>User-friendly address: {userFriendlyAddress}</span>
                <span>Raw address: {rawAddress}</span>
            </div>
        )</>
    );
}

export default Balance;

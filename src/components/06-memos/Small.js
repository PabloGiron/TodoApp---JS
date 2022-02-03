import React, { memo } from 'react';

export const Small = memo(({ value }) => {

    console.log( 'Me han vuelto a llamar, small :(')

    return(
        <small>
            {value}
        </small>
    );
});

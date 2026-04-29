import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div className='flex justify-center my-10'>
            <Spinner size="xl" />
        </div>
    );
};

export default loading;
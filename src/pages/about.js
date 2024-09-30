import Head from 'next/head';
import React from 'react';

const about = () => {
  return (
    <>
        <Head>
            <title>Elievelton | About Page</title>
            <meta name='description' content='any description'/>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text ='Passion Fuels Purpose!'/>
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className=' mb-4 text-lg font-bold uppercase text-dark/75'>
                                Biography
                            </h2>
                        </div>

                    </div>
                </Layout>

            </main>
        </Head>
    </>
  );
};

export default about;
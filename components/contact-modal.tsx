'use client';
import Image from 'next/image';
import successImg from '@/app/assets/sentsuccess.png';
import failedImg from '@/app/assets/sentfailed.png';

type Status = 'success' | 'error';

export function ContactModal(props: {
  open: boolean;
  status: Status;
  onCloseAction: () => void;
}) {
  if (!props.open) return null;
  const isSuccess = props.status === 'success';
  return (
    <div className='fixed inset-0 z-50 bg-black/60 backdrop-blur-xl flex items-center justify-center'>
      <div className='w-full max-w-[540px] px-xl text-center'>
        <div className='mt-xl rounded-4xl border border-neutral-900 bg-black/70 p-3xl text-neutral-100'>
          <div className='flex justify-center'>
            <span className='inline-flex items-center justify-center'>
              <Image
                src={isSuccess ? successImg : failedImg}
                alt={
                  isSuccess
                    ? 'Message sent successfully'
                    : 'Message failed to send'
                }
                className='h-[120px] w-[120px] object-contain'
                priority
              />
            </span>
          </div>
          <h3 className='text-xl font-extrabold'>
            {isSuccess ? 'Message Sent Successfully!' : 'Message not sent!'}
          </h3>
          <p className='mt-md text-md text-neutral-400'>
            {isSuccess
              ? "Thank you for reaching out. I'll get back to you as soon as possible"
              : 'Something went wrong on our end. Please try again in a moment'}
          </p>
          <div className='mt-3xl'>
            {isSuccess ? (
              <a
                href='#home'
                className='inline-flex w-full items-center justify-center rounded-full bg-primary-200 px-6xl py-xl text-black shadow-neon transition-colors hover:bg-primary-300'
                onClick={props.onCloseAction}
              >
                <span className='text-lg font-bold'>BACK TO HOME</span>
              </a>
            ) : (
              <button
                type='button'
                className='inline-flex w-full items-center justify-center rounded-full bg-primary-200 px-6xl py-xl text-black shadow-neon transition-colors hover:bg-primary-300'
                onClick={props.onCloseAction}
              >
                <span className='text-lg font-bold'>TRY AGAIN</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

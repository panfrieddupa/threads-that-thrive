import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function Contact() {
  const [state, handleSubmit] = useForm("xpznjgoo");
  if (state.succeeded) {
      return <p>Your message was sent, thank you!</p>;
  }
  return (
    
      <form onSubmit={handleSubmit} className='w-9/12 lg:w-6/12 xl:5/12 mx-auto text-md lg:text-lg'>
      
      <div className='pb-4 font-source-serif-pro font-semibold'>
        <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        className="w-full"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <div className='pb-4 font-source-serif-pro font-semibold'>
      <label htmlFor="fullname">
        Preferred Full Name
      </label>
      <input
        id="fullname"
        className="w-full"
        type="text" 
        name="fullname"
      />
      <ValidationError 
        prefix="Fullname" 
        field="fullname"
        errors={state.errors}
      />
      </div>
      <div className='font-source-serif-pro font-semibold'>
      <label htmlFor="message">
        Your Message
      </label>
      <textarea
        id="message"
        className="w-full h-28 md:h-32 lg:h-60 resize-none"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <button type="submit" disabled={state.submitting}  className='font-source-serif-pro font-semibold text-center bg-ttt_pink_light w-full h-10'>
        Submit
      </button>
    </form>
  );
}

export default Contact;

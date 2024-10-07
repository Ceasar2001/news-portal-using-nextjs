import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';


const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
            <Input type="text" placeholder="Enter your name" className="w-full" />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <Input type="email" placeholder="Enter your email" className="w-full" />
          </div>

          {/* Message Textarea */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Your Message</label>
            <Textarea rows={5} placeholder="Enter your message" className="w-full" />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button className="bg-blue-500 text-white px-4 py-2 rounded-md" >Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;

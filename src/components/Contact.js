import React from 'react'

const Contact = () => {
  return (
    <div className="m-4 p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-2">
        We'd love to hear from you! Feel free to reach out for any questions,
        feedback, or support regarding our food delivery services.</p>
      <div className="mt-6 space-y-2">
        <h2 className="text-xl font-semibold">Get in Touch</h2>
        <input />
        <p><span className="font-bold">Email:</span> support@swiggyreact.com</p>
        <p><span className="font-bold">Phone:</span> +91 9876543210</p>
        <p><span className="font-bold">Address:</span> Bangalore, Karnataka, India</p>
      </div>
    </div>
  )
}

export default Contact
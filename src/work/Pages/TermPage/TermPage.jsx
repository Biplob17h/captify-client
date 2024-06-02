/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const TermPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center mt-[-100px]">
    <div className="max-w-lg p-8 bg-black shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold mb-6">Terms & Conditions</h1>
      <p className="mb-4">
        By accessing or using our AI services, you agree to be bound by these Terms & Conditions.
      </p>
      <p className="mb-4">
        Our services are provided on an "as is" and "as available" basis without any warranty or condition, express,
        implied or statutory.
      </p>
      <p className="mb-4">
        We reserve the right to modify or terminate our services for any reason, without notice at any time.
      </p>
      <p className="mb-4">
        We may update these Terms & Conditions from time to time. Your continued use of the service after any
        modifications shall constitute your consent to such modifications.
      </p>
      <p className="mb-4">
        You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the service, use of the
        service, or access to the service without our express written permission.
      </p>
      <p className="mb-8">
        We shall not be liable for any damages arising out of the use or inability to use our services.
      </p>
      <p className="text-sm text-gray-600">
        Last updated: [2/6/2024]
      </p>
    </div>
  </div>
  )
}

export default TermPage
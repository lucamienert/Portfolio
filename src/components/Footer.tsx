import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6 text-sm text-gray-500 border-t mt-12">
      © {new Date().getFullYear()} Luca Mienert. All rights reserved.
    </footer>
  )
}

export default Footer

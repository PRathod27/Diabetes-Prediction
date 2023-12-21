import React from 'react'

const OpenMl = () => {

    const handleclick = (e) => {
        <iframe 
        src="http://localhost:8501" 
        width="100%" 
        height="800px"
        title="Streamlit Application"
      />
    }

    return (
    <div className='first-class'>
        <div className='open_app'>
            <button onClick={handleclick}> 
                Click on it.
            </button>
        </div>
    </div>
  )
}

export default OpenMl
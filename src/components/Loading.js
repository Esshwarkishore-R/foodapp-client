import React from 'react'

const Loading = () => {
    return (
        <div>
            <div className="spinner-grow" role="status" style={{ width: '100px', heigh: '300px', marginTop: '100px' }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading

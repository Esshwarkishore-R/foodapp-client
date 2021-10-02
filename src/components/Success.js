import React from 'react'

const Success = (success) => {
    console.log(success.success, "What is success message")
    return (
        <div>
            <div className="alert alert-success" role="alert">
                {success.success}
            </div>
        </div>
    )
}

export default Success

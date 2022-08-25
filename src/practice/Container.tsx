import React from 'react'

interface propTypes {
    children: React.ReactNode
}

const Container = ({ children }: any) => {
    return (
        <div>{children}</div>
    )
}

export default Container
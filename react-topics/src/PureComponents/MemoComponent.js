import React from 'react'

const MemoComponent = ({name}) => {
    console.log('memo component')
    return (
        <div>
            React Memo {name}
        </div>
    )
}

export default React.memo(MemoComponent)

import React, { useEffect, useState } from 'react'
import "./Note.scss"
import MacWindow from './MacWindow'


const Note = () => {

    const [markdown, setmarkdown] = useState(null)

    useEffect(() => {
        fetch("/public/note.txt")
            .then(res => res.text())
            .then(text => setmarkdown(text))
    }, [])

    return (
        <div>
            <MacWindow>
                <div className='note-window'>
                    {markdown ? (
                        <pre>{markdown}</pre>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </MacWindow>
        </div>
    )
}

export default Note
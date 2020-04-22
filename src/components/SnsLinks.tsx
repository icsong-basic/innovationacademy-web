import React from 'react'

interface Props {
    size?: 'large' | 'footer'
}

export default function SnsLinks({ size = 'large' }: Props) {
    return (
        <div className={`sns-links ${size}`}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC5pBkQjap4TW-LJryKZQegQ" className="youtube" />
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/inno.aca/" className="facebook" />
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/innovationacademy-kr/FAQ" className="github" />
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/inno.aca" className="instagram" />
        </div>
    )
}

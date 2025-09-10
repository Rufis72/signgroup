import type { FC } from 'react'

interface CopyrightNoticeProps {
    className?: string,
}

const CopyrightNotice: FC<CopyrightNoticeProps> = ({ className }) => {
    return (
        <div className={`text-center text-gray-400 p-2 ${className}`}>
            Copyright ©2025 Rufis72 and contributors. All rights reserved.
        </div>
    )
}

export default CopyrightNotice
import fylo from 'src/framer'
import { FramerStyles } from 'installable-framer/dist/react'

export default function App() {
    return (
        <div>
            {/* Injects fonts and other framer utility styles */}
            <FramerStyles Components={[fylo]} />
            {/* Changes component variant based on breakpoint */}
        </div>
    )
}
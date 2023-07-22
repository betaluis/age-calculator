import { ReactNode } from "react"

interface Props {
    isDark: boolean;
    click: () => void;
    size: number;
}

const IconButton = ({ children, click }: { children: ReactNode, click: () => void }) => {
    return (
        <button aria-label="submit" className="focus-visible:ring-indigo-500 focus-visible:ring-2 focus-visible:outline-none rounded" onClick={click}>
            {children}
        </button>
    )
}

const ChangeTheme = ({ isDark, click, size }: Props) => {

    if (isDark) return <IconButton click={click}><svg className="fill-zinc-100" height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="sun"><path d="M5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12ZM5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM12,5a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5Zm5.66,2.34a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34Zm-12-.29a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5ZM12,19a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19Z"></path></svg></IconButton>
    return <IconButton click={click}><svg height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" id="moon"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.63 20a9 9 0 0 1-9.12-8.78A8.61 8.61 0 0 1 14.17 5 10.17 10.17 0 0 0 5 15a10.23 10.23 0 0 0 10.42 10A10.43 10.43 0 0 0 25 18.9a9.3 9.3 0 0 1-4.37 1.1Z"></path></svg></IconButton>

}

export default ChangeTheme

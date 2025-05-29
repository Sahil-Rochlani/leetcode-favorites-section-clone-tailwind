import { useState } from "react"

const Sidebar = () => {
    const [SidebarOpen, setSidebarOpen] = useState(true)
    return <div className="flex relative">
        <div className={`overflow-y-scroll overflow-x-hidden shirnk-0 flex flex-col ${SidebarOpen ? 'w-[260px]' : 'w-[0px]'} transition-all duration-500 ease-in-out bg-dark-layer-bg sticky top-0 left-0`}>
            <div className="flex flex-col p-4 gap-1  py-5.5">
                <div className="flex gap-3 px-3 py-2 items-center text-text-primary hover:bg-sd-accent rounded-md cursor-pointer transition-all duration-200">
                    <svg className="w-4 h-4" fill="currentColor" aria-hidden="true" focusable="false" data-prefix="far" data-icon="books" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 416v48h64V416H48zm88 89.6c-7.1 4.1-15.3 6.4-24 6.4H48c-26.5 0-48-21.5-48-48V416 392 368 144 120 96 48C0 21.5 21.5 0 48 0h64c8.7 0 16.9 2.3 24 6.4C143.1 2.3 151.3 0 160 0h64c20.6 0 38.1 12.9 45 31.1c5.6-6.1 12.9-10.7 21.4-13L349.9 1.6c24.7-6.8 50.1 8.3 56.7 33.8l18 69.2 6 23.2 61.8 238.3 6 23.2 11.9 46c6.6 25.5-8 51.7-32.7 58.5l-59.6 16.5c-24.7 6.8-50.1-8.3-56.7-33.8l-18-69.2-6-23.2L275.6 145.9 272 132.2V144 368v24 24 48c0 26.5-21.5 48-48 48H160c-8.7 0-16.9-2.3-24-6.4zM160 464h64V416H160v48zM112 48H48V96h64V48zm0 96H48V368h64V144zm48-48h64V48H160V96zm64 272V144H160V368h64zm216.1-12.3l-55.8-215-56.5 15.6 55.8 215 56.5-15.6zm-44.4 62.1l11.9 45.7L464 447.9c0-.1 0-.2 0-.3l0-.1-11.7-45.2-56.5 15.6zm-79.9-308l56.5-15.6L360.4 48.5 304 64.1c0 .1 0 .2 0 .4l11.7 45.2z"></path></svg>
                    <span className="font-semibold">Library</span>
                </div>
                <div className="flex gap-2.5 px-2.5 py-2 items-center text-text-primary hover:bg-sd-accent rounded-md cursor-pointer transition-all duration-200">
                    <svg className="w-5 h-5" fill="currentColor" aria-hidden="true" focusable="false" data-prefix="far" data-icon="graduation-cap" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M320 80c2.5 0 5 .4 7.4 1.3l218 78.7-218 78.7c-2.4 .9-4.9 1.3-7.4 1.3s-5-.4-7.4-1.3L184.9 192.6l140.8-52.8c8.3-3.1 12.5-12.3 9.4-20.6s-12.3-12.5-20.6-9.4L154.9 169.6c-5.2 2-10.3 4.2-15.3 6.6L94.7 160l218-78.7c2.4-.9 4.9-1.3 7.4-1.3zM15.8 182.6l77.4 27.9c-27.2 28.7-43.7 66.7-45.1 107.7c-.1 .6-.1 1.2-.1 1.8c0 28.4-10.8 57.8-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7c-3.2-14-7.5-28.3-13.4-41.5c1.9-37 19.2-70.9 46.7-94.2l169.5 61.2c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32s-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6zm480.8 80l-46.5 16.8 12.7 120.5c-4.8 3.5-12.8 8-24.6 12.6C410 423.6 368 432 320 432s-90-8.4-118.3-19.4c-11.8-4.6-19.8-9.2-24.6-12.6l12.7-120.5-46.5-16.8L128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6zM467.4 396a.7 .7 0 1 0 -1.2-.7 .7 .7 0 1 0 1.2 .7zm-294.8 0a.7 .7 0 1 0 1.2-.6 .7 .7 0 1 0 -1.2 .6z"></path></svg>
                    <span className="font-semibold">Study Plan</span>
                </div>
            </div>
            <div className="mx-4 bg-sd-border h-[1px]"></div>
            <div className="my-2 group relative px-5 text-sd-muted-background cursor-pointer items-center flex justify-between">
                <div className="font-semibold text-sm px-1">My Lists</div>
                <div className="flex gap-1 p-2 py-3 hover:bg-sd-accent transition-colors duration-200 rounded-md cursor-pointer items-center text-sd-muted-background">
                    <svg className={`w-3.5 h-3.5 fill-white`} aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path  d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"></path></svg>
                    <svg className={`w-2.5 h-2.5 fill-sd-muted-background`} aria-hidden="true" focusable="false" data-prefix="far" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M241 337c-9.4 9.4-24.6 9.4-33.9 0L47 177c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 337z"></path></svg>
                </div>
                <div className={`absolute top-1/2 -translate-y-1/2 z-1 left-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}><svg className={`w-2.5 h-2.5 fill-sd-muted-background`} aria-hidden="true" focusable="false" data-prefix="far" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M241 337c-9.4 9.4-24.6 9.4-33.9 0L47 177c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 337z"></path></svg></div>
            </div>
            <div className="mr-5 ml-4 -my-1">
                <div className="flex justify-between items-center bg-sd-accent cursor-pointer rounded-md">
                    <div className="flex gap-2 p-2 px-2 items-center">
                        <img className="w-5 h-5" src="https://assets.leetcode.com/favorite/default_favorite_cover.png" />
                        <span className="text-text-primary text-sm font-semibold relative -top-0.5">Favorite</span>
                    </div>
                    <div className="text-sd-muted-background p-2 px-3.5">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" focusable="false" data-prefix="far" data-icon="lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M144 128v64H304V128c0-44.2-35.8-80-80-80s-80 35.8-80 80zM96 192V128C96 57.3 153.3 0 224 0s128 57.3 128 128v64h32c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H96zM48 256V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V256c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
        {SidebarOpen && <div className="group absolute w-3 top-0 min-h-screen -right-2 cursor-ew-resize">
            <div className="w-1 min-h-screen absolute right-1  group-hover:bg-dark-lc-support-info group-active:bg-dark-lc-support-info transition-all duraiton-200 ease-in-out"></div>
            <div onClick={() => {setSidebarOpen(false)}} className="w-6 h-6 rounded-full absolute top-6 hover:bg-sd-blue-400 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-sd-card border-sd-border text-fixed-white flex justify-center items-center -right-2 cursor-pointer ">
                <svg className="w-3 h-3" aria-hidden="true" focusable="false" data-prefix="far" data-icon="angles-left" class="svg-inline--fa fa-angles-left absolute left-1/2 top-1/2 h-[1em] -translate-x-1/2 -translate-y-1/2 align-[-0.125em]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M47 239c-9.4 9.4-9.4 24.6 0 33.9L207 433c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97.9 256 241 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L47 239zM399 79L239 239c-9.4 9.4-9.4 24.6 0 33.9L399 433c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-143-143L433 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z"></path></svg>
            </div>
        </div>}
    </div>
}

export default Sidebar
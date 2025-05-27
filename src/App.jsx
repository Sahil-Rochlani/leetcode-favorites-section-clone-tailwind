function App() {
  return (
    <div className="min-h-screen bg-dark-layer-bg">
      <div className="h-[50px] border-b-1 border-border-tertiary flex items-center justify-between px-6 bg-dark-layer-1">
        <div className="flex items-center">
          <a className="h-[22px] mb-0.5 mr-8" href="#">
            <svg width="95" height="111" viewBox="0 0 95 111" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-auto max-w-none"><path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z" fill="#FFA116"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z" fill="#B3B3B3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z" fill="white"></path></svg>
          </a>
          <div className="flex gap-6 items-center text-text-secondary">
            <div className="hover:text-text-primary cursor-pointer py-3 transition-colors duration-200">Explore</div>
            <div className="border-b-3 border-text-primary cursor-pointer text-text-primary font-semibold hover:text-text-primary pb-2.5 py-3 transition-colors duration-200.5">Problems</div>
            <div className="hover:text-text-primary cursor-pointer py-3 transition-colors duration-200">Contest</div>
            <div className="hover:text-text-primary cursor-pointer py-3 transition-colors duration-200">Discuss</div>
            <div className="hover:text-text-primary cursor-pointer py-3 transition-colors duration-200 flex items-center"><span>Interview</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="ml-1 h-[14px] w-[14px]" aria-hidden="true"><path fill-rule="evenodd" d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z" clip-rule="evenodd"></path></svg></div>
            <div className="hover:text-text-primary cursor-pointer py-3 transition-colors duration-200 flex items-center text-brand-orange"><span>Store</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="ml-1 h-[14px] w-[14px]" aria-hidden="true"><path fill-rule="evenodd" d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z" clip-rule="evenodd"></path></svg></div>
          </div>
        </div>
        <div className="flex text-text-secondary gap-3 items-center">
          <div className="cursor-pointer transition-colors duration-200 hover:bg-fill-3 rounded-md p-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="hover:text-text-primary dark:hover:text-text-primary "><path fill-rule="evenodd" clip-rule="evenodd" d="M6.20374 15.8174C6.18177 15.8563 6.15975 15.8945 6.13771 15.9322H17.8623C17.8403 15.8945 17.8182 15.8563 17.7963 15.8174C16.8756 14.1898 16.3333 12.0111 16.3333 9.21793C16.3333 6.93819 14.4012 5.07507 12 5.07507C9.5988 5.07507 7.66667 6.93819 7.66667 9.21793C7.66667 12.0111 7.12442 14.1898 6.20374 15.8174ZM20 17.9322H4.00001C3.00196 17.9322 2.61971 16.6307 3.45925 16.091C3.66114 15.9612 4.0464 15.5691 4.46294 14.8327C5.20893 13.5139 5.66667 11.6748 5.66667 9.21793C5.66667 5.81702 8.51018 3.07507 12 3.07507C15.4898 3.07507 18.3333 5.81702 18.3333 9.21793C18.3333 11.6748 18.7911 13.5139 19.5371 14.8327C19.9536 15.5691 20.3389 15.9612 20.5408 16.091C21.3803 16.6307 20.9981 17.9322 20 17.9322ZM12.9372 19.2783C13.2219 18.805 13.8363 18.6521 14.3096 18.9368C14.7828 19.2215 14.9357 19.836 14.651 20.3092C14.0976 21.2292 13.0875 21.7902 12 21.7902C10.9125 21.7902 9.90245 21.2292 9.34903 20.3092C9.06434 19.836 9.2172 19.2215 9.69045 18.9368C10.1637 18.6521 10.7781 18.805 11.0628 19.2783C11.2515 19.5919 11.6085 19.7902 12 19.7902C12.3915 19.7902 12.7485 19.5919 12.9372 19.2783Z"></path></svg>
          </div>
          <div className="flex items-center cursor-pointer transition-colors duration-200 gap-1 hover:bg-fill-3 rounded-md p-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="1em" height="1em" fill="currentColor" class="h-[20px] w-[20px] hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary"><path fill-rule="evenodd" d="M7.19 1.564a.75.75 0 01.729.069c2.137 1.475 3.373 3.558 3.981 5.002l.641-.663a.75.75 0 011.17.115c1.633 2.536 1.659 5.537.391 7.725-1.322 2.282-3.915 2.688-5.119 2.688-1.177 0-3.679-.203-5.12-2.688-.623-1.076-.951-2.29-.842-3.528.109-1.245.656-2.463 1.697-3.54.646-.67 1.129-1.592 1.468-2.492.337-.895.51-1.709.564-2.105a.75.75 0 01.44-.583zm.784 2.023c-.1.368-.226.773-.385 1.193-.375.997-.947 2.13-1.792 3.005-.821.851-1.205 1.754-1.282 2.63-.078.884.153 1.792.647 2.645C6.176 14.81 7.925 15 8.983 15c1.03 0 2.909-.366 3.822-1.94.839-1.449.97-3.446.11-5.315l-.785.812a.75.75 0 01-1.268-.345c-.192-.794-1.04-2.948-2.888-4.625z" clip-rule="evenodd"></path></svg>
            <span>0</span>
          </div>
          <div className="flex items-center gap-2">
            <img className="cursor-pointer rounded-full w-6 h-6" src="https://assets.leetcode.com/users/sahilrochlani8887/avatar_1612952604.png" />
            <span className="cursor-pointer transition-colors duration-200 font-typo hover:text-brand-orange text-brand-orange px-3 py-1.5 text-sm rounded-lg bg-[#ffa1161f]  hover:bg-[#ffa11633]">Premium</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
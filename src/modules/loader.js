function showLoader(block) {
    const loader = document.createElement('div')
    loader.classList.add('loader')

    loader.insertAdjacentHTML('beforeend',
        `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
        <rect x="0" y="13" width="4" height="5" fill="#17a2b8">
            <animate attributeName="height" attributeType="XML"
            values="5;21;5" 
            begin="0s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="y" attributeType="XML"
            values="13; 5; 13"
            begin="0s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="10" y="13" width="4" height="5" fill="#17a2b8">
            <animate attributeName="height" attributeType="XML"
            values="5;21;5" 
            begin="0.15s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="y" attributeType="XML"
            values="13; 5; 13"
            begin="0.15s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="20" y="13" width="4" height="5" fill="#17a2b8">
            <animate attributeName="height" attributeType="XML"
            values="5;21;5" 
            begin="0.3s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="y" attributeType="XML"
            values="13; 5; 13"
            begin="0.3s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        </svg>`
    )

    block.append(loader)
}

function hideLoader() {
    const loader = document.querySelector('.loader')

    loader.remove()
}

export { showLoader, hideLoader }
window.onload = function () {
    var getNode = document.querySelector

    document.getElementById("save-tab-button")
        .addEventListener('click', saveTab)

    function saveTab () {
        getCurrentTab()
            .then(
                function (tab) {
                    var tabs = localStorage.getItem('tabs') || '[]'
                    var tabsParsed = JSON.parse(tabs)
                    tabsParsed.push(tab)
                    var tabsStringified = JSON.stringify(tabsParsed)
                    localStorage.setItem('tabs', tabsStringified)
                }
            ) 
    }
}

function getCurrentTab () {
    return new Promise(
        function (resolve, reject) {
            window.browser.tabs.query({currentWindow: true, active: true})
                .then(
                    function (tabs) {

                        var currentTab = null

                        if (tabs[0]) {
                            currentTab = tabs[0]
                        
                        } else {
                            return reject({
                                message: "Active tab not found"
                            })
                        }

                        return resolve({
                            title: currentTab.title,
                            url: currentTab.url,
                            favIconUrl: currentTab.favIconUrl
                        })
                    }
                )
        }
    )
}


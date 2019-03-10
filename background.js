let tabGroups = localStorage.getItem('tabGroups')

browser.menus.create({
    id: 'save-tab',
    title: 'Save tab to list',
    contexts: ['all']
})



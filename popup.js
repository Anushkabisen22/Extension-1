document.addEventListener('DOMContentLoaded', function () {
    const fetchTitleButton = document.getElementById('fetchTitleButton');
    const tabTitleElement = document.getElementById('tabTitle');

    fetchTitleButton.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const activeTab = tabs[0];
            const tabTitle = activeTab.title;
            tabTitleElement.textContent = `Title: ${tabTitle}`;
        });
    });
});

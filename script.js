function filterResources() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const resourcesList = document.getElementById('resourcesList');
    const resources = resourcesList.getElementsByClassName('resource');

    for (let i = 0; i < resources.length; i++) {
        let ul = resources[i].getElementsByTagName("ul")[0];
        let li = ul.getElementsByTagName('li');
        let visible = false;
        for (let j = 0; j < li.length; j++) {
            let a = li[j].getElementsByTagName("a")[0];
            let textValue = a.textContent || a.innerText;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                li[j].style.display = "";
                visible = true;
            } else {
                li[j].style.display = "none";
            }
        }
        resources[i].style.display = visible ? "" : "none";
    }
}

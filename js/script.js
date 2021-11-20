window.addEventListener('DOMContentLoaded', function () {

    const tabsSubtitle = document.querySelectorAll('.tabs__subtitle');
    const tabsImg = document.querySelectorAll('.tabs__img');

    console.log(tabsSubtitle);
    console.log(tabsImg);

    function removeImg() {
        tabsImg.forEach(el => {
            el.style.display = 'none';
        })
    }

    function showImg(i = 0) {
        removeImg();
        tabsImg[i].style.display = 'block';
    }

    tabsSubtitle.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            showImg(i);
        })
    })

    removeImg();
    showImg();

    ///////////////

    const otherTabsSubtitle = document.querySelectorAll('.other__tabs__subtitle');
    const otherTabsImg = document.querySelectorAll('.other__tabs__img');

    console.log(otherTabsSubtitle);
    console.log(otherTabsImg);

    function removeOtherImg() {
        otherTabsImg.forEach(el => {
            el.style.display = 'none';
        })
    }

    function showOtherImg(i = 0) {
        removeOtherImg();
        otherTabsImg[i].style.display = 'block';
    }

    otherTabsSubtitle.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            showOtherImg(i);
        })
    })

    removeOtherImg();
    showOtherImg();

}
)
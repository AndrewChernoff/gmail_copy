window.addEventListener('DOMContentLoaded', function () {

    const tabsSubtitle = document.querySelectorAll('.tabs__subtitle');
    const tabsImg = document.querySelectorAll('.tabs__img');

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

    ////question marks
    const answerQuestions = document.querySelectorAll('.answers__question');
    const marks = document.querySelectorAll('.answers__question__mark');
    const answForQuestion = document.querySelectorAll('.answers__question__descr');

    function onQuestionClick(parametr) {
        parametr.forEach((param, i) => {
            param.addEventListener('click', function (e) {
                let target = e.target;
                if (target == param) {
                    marks[i].classList.toggle('rotate_mark');
                    answForQuestion[i].classList.toggle('show');
                    answForQuestion[i].style.padding = '25px 0 0 0';
                }
            })
        })
    }

    onQuestionClick(answerQuestions);
    onQuestionClick(marks);

}
)

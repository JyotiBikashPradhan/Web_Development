const selectBox = document.querySelector('.select-box');
const selectOption = document.querySelector('.select-option');
const soValue = document.querySelector('#soValue');
const optionSearch = document.querySelector('#option-search');
const option = document.querySelector('.option')
const optionList = document.querySelectorAll('.option li');


selectOption.addEventListener('click', function () {
    selectBox.classList.toggle('active');
});

optionList.forEach(function (optionListSingle) {
    optionListSingle.addEventListener('click', function () {
        text = this.textContent;
        soValue.value = text;
        selectBox.classList.remove('active');

    })
});

optionSearch.addEventListener('keyup', function () {
    var filter, li, i, textValue;
    filter = optionSearch.value.toUpperCase();
    li = option.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        liCount = li[i];
        textValue = liCount.textContent || liCount.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        }
        else {
            li[i].style.display = 'none';
        }
    }
})


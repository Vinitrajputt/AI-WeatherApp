document.getElementById('weather-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var loadingScreen = document.getElementById('loading-screen');
    var resultScreen = document.getElementById('result-screen');
    var retryButton = document.getElementById('retry-button');
    var loadingBar = document.querySelector('.loading-bar-inner');
    var optionsList = document.getElementById('options-list');

    loadingScreen.style.display = 'block';
    document.getElementById('weather-form').style.display = 'none';

    var width = 0;
    var interval = setInterval(function () {
        width += 20;
        loadingBar.style.width = width + '%';
        if (width >= 100) {
            clearInterval(interval);
            showOptions();
        }
    }, 200);

    function showOptions() {
        var steps = ['Analyzing atmosphere...', 'Checking temperature...', 'Predicting weather conditions...', 'Consulting weather spirits...', 'Calculating cosmic forces...'];
        var stepIndex = 0;
        var optionInterval;

        optionInterval = setInterval(function () {
            if (stepIndex < steps.length) {
                var step = steps[stepIndex];
                var option = document.createElement('li');
                option.classList.add('option');
                option.textContent = step;

                var checkmark = document.createElement('span');
                checkmark.classList.add('checkmark');
                option.insertBefore(checkmark, option.firstChild);
                optionsList.appendChild(option);

                setTimeout(function () {
                    option.classList.add('show');
                    checkmark.style.backgroundColor = '#00cc00';
                }, 2000);

                stepIndex++;
            } else {
                clearInterval(optionInterval);
                setTimeout(function () {
                    resultScreen.style.display = 'block';
                    loadingScreen.style.display = 'none';
                }, 2000);
            }
        }, 2000);
        
        retryButton.addEventListener('click', function () {
            location.reload();
        });
    }
});
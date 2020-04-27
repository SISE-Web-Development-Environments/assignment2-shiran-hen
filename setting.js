$(document).ready(function () {
    $('.input-range').on('input', function () {
        $(this).next('.range-value').html(this.value);
    });
});
var upKey = 38;
var downKey = 40;
var rightKey = 39;
var leftKey = 37;

function onPress(e, keyName) {
    $(`#${keyName}KeyField`).attr("placeholder", e.key).val("").focus().blur();
    window[keyName + 'Key'] = e.which;
}

function randomSetting() {
    let ballsNumber = Math.floor(Math.random() * 90) + 50;
    let time = Math.floor(Math.random() * 60) + 60;
    let monstes = Math.floor(Math.random() * 4) + 1;
    document.getElementById("ballsNumberField").value = ballsNumber;
    $("#ballsNumberSpan").text(document.getElementById("ballsNumberField").value);
    document.getElementById("durationTimeField").value = time;
    document.getElementById("monsterNumberField").value = monstes;
    $("#monsterNumbeSpan").text(document.getElementById("monsterNumberField").value);
    document.getElementById("ballsColorfor5PointsField").value = getRandomColor();
    $("#ballsColorfor5PointsField").css("background-color", document.getElementById("ballsColorfor5PointsField").value);
    document.getElementById("ballsColorfor15PointsField").value = getRandomColor();
    $("#ballsColorfor15PointsField").css("background-color", document.getElementById("ballsColorfor15PointsField").value);
    document.getElementById("ballsColorfor25PointsField").value = getRandomColor();
    $("#ballsColorfor25PointsField").css("background-color", document.getElementById("ballsColorfor25PointsField").value);
    upKey = 38;
    $("#upKeyField").attr("placeholder", "ArrowUp");
    downKey = 40;
    $("#downKeyField").attr("placeholder", "ArrowDown");
    rightKey = 39;
    $("#rightKeyField").attr("placeholder", "ArrowRight");
    leftKey = 37;
    $("#leftKeyField").attr("placeholder", "ArrowLeft");
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function submitSetting() {
    var numOfBalls = document.getElementById("ballsNumberField").value;
    var fivePoint = document.getElementById("ballsColorfor5PointsField").value;
    var fifteenPoint = document.getElementById("ballsColorfor15PointsField").value;
    var twentyFivePoint = document.getElementById("ballsColorfor25PointsField").value;
    var durationTime = document.getElementById("durationTimeField").value;
    var numOfMonsters = document.getElementById("monsterNumberField").value;

    var setting = { up: upKey, down: downKey, left: leftKey, right: rightKey, numOfBall: numOfBalls, fivePoint: fivePoint, fifteenPoint: fifteenPoint, twentyFivePoint: twentyFivePoint, duration: durationTime, monster: numOfMonsters };
    //  console.log(setting);
    sessionStorage.clear();
    sessionStorage.setItem("setting", JSON.stringify(setting));
    Start();
    moveTo('game');

}
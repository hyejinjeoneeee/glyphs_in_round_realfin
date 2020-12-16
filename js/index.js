$(document).ready(function () {

    console.log($(".st4"))
    var pathArray = $(".st4")

    $.each(pathArray, function (i, d) {

        $(d).css("stroke")
        var pathLength = d.getTotalLength()
        console.log(pathLength)
        $(d).css("stroke-dasharray", pathLength + " " + pathLength)
        $(d).css("stroke-dashoffset", pathLength)

    })

    console.log($(".st5"))
    var pathArray = $(".st5")

    $.each(pathArray, function (i, d) {

        $(d).css("stroke")
        var pathLength = d.getTotalLength()
        console.log(pathLength)
        $(d).css("stroke-dasharray", pathLength + " " + pathLength)
        $(d).css("stroke-dashoffset", pathLength)

    })

    console.log($(".st3"))
    var pathArray = $(".st3")

    $.each(pathArray, function (i, d) {

        $(d).css("stroke")
        var pathLength = d.getTotalLength()
        console.log(pathLength)
        $(d).css("stroke-dasharray", pathLength + " " + pathLength)
        $(d).css("stroke-dashoffset", pathLength)

    })

})


    // console. log를 하면 console.log($(window).width()) 크롬에서 값 확인 가능 
    // var는 변수
    // if (조건문의 요소) {조건문의 요소가 충족되었을 때 실행이 되는 내용}

    // 화면기준으로 x좌표 위치가 50% 이하일 때, 흰색
    // 화면기준으로 x좌표 위치가 50% 이상일 때, 검정색
    // 위 두가지를 위해서는 브라우저의 크기와 mousex 좌표 값 필요
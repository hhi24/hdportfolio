// 구동

$(document).ready(function() {

    // ========== 우측 메뉴 =====
    $('#menu_button').on('click', function() {
        $('#navi').stop().slideToggle(300); 
    });


    // ========== 좌측 프리뷰 =====
    $('#preview_button').on('click', function() {
        $('#wrap_preview').stop().fadeToggle(100)
        // $('#wrap_preview').stop().fadeToggle(100, function() { });
    });

    
    // ========== 페이지 위치 관련 =====
    const pages = $('.page'); // 모든 페이지 요소 가져오기
    const totalPages = pages.length; // 전체 페이지 수

    // 페이지로 스크롤하는 함수
    function scrollToPage(index) {
        if (index >= 0 && index < totalPages) {
            const targetOffset = $(pages[index]).offset().top;
            $('html, body').stop().animate({ scrollTop: targetOffset }, 400);
        }
    }

    // 현재 스크롤 위치에서 가장 가까운 페이지 인덱스 계산
    function getCurrentPageIndex() {
        const scrollTop = $(window).scrollTop(); // 현재 스크롤 위치
        let closestIndex = 0;
        let closestDistance = Math.abs($(pages[0]).offset().top - scrollTop);

        pages.each(function (index) {
            const pageTop = $(this).offset().top;
            const distance = Math.abs(pageTop - scrollTop);
            if (distance < closestDistance) {
                closestIndex = index;
                closestDistance = distance;
            }
        });
        return closestIndex;
    }


    // 방향키 이벤트 처리
    $(document).on('keydown', function (event) {
        let currentIndex = getCurrentPageIndex(); // 현재 페이지 인덱스를 스크롤 기준으로 계산
        if (event.key === 'ArrowDown') {
            // 아래 방향키
            if (currentIndex < totalPages - 1) {
                currentIndex++;
                scrollToPage(currentIndex);
            }
        } else if (event.key === 'ArrowUp') {
            // 위 방향키
            if (currentIndex > 0) {
                currentIndex--;
                scrollToPage(currentIndex);
            }
        }
    });

});


// ========== Top Button 함수 =====
window.scrollToTop = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  };
  
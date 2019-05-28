$(function(){
    
    $(document).ready(function(){
        $('.loading').fadeOut(5000);
    });
    
    setTimeout(function(){
        scrollTo(0,0);
    }, 100);
    
    var number = 0;
    var runrun = setInterval(legorun, 300);
    
    function legorun(){
        number++;
        if(number==1){
            $('.loading .boxbox ul li').removeClass('on');
            $('.loading .boxbox ul li').eq(0).addClass('on');
        }
        else if(number==2){
            $('.loading .boxbox ul li').removeClass('on');
            $('.loading .boxbox ul li').eq(1).addClass('on');
        }
        else if(number==3){
            $('.loading .boxbox ul li').removeClass('on');
            $('.loading .boxbox ul li').eq(2).addClass('on');
        }
        else {
            number=0;
        }
    }
    
    
    /* 500px midea query */
    
    var infoimg500 = $('.triger500px .infobox500 .infoimg img');
    var infoh3 = $('.triger500px .infobox500 .infoimg h3');
    var infotxtp = $('.triger500px .infobox500 .infotxt p');
    var infotxtspan = $('.triger500px .infobox500 .infotxt .iconbox li span');
    
    $('#section2 .section2contents .sec2select li, #section3 .section3contents .sec3select li, #section4 .section4contents .sec4select li').click(function(){
        $('.triger500px').animate({bottom: '0px'}, 300);
    });
    $('.triger500px .x').click(function(){
        $('.triger500px').animate({bottom: '-250px'}, 300);
    });
    
    $('#section2 .section2contents .sec2select li.select1').click(function(){
        infoimg500.attr('src', 'images/sub-attraction/sec2attraction1-1.png');
        infoh3.text('코스터사우르스');
        infotxtp.html('레고 공룡과 함께 하는<br>롤러코스터!');
        infotxtspan.eq(0).text('16명');
        infotxtspan.eq(1).html('195cm 이상<br>130kg 이상<br>탑승불가');
    });
    $('#section2 .section2contents .sec2select li.select2').click(function(){
        infoimg500.attr('src', 'images/sub-attraction/sec2attraction2-1.png');
        infoh3.text('프로젝트X');
        infotxtp.html('VR을 통해 레고세계의 스릴을<br>체험해보세요!');
        infotxtspan.eq(0).text('6명');
        infotxtspan.eq(1).html('130kg 이상<br>190cm 이상<br>탑승불가');
    });
    $('#section2 .section2contents .sec2select li.select3').click(function(){
        infoimg500.attr('src', 'images/sub-attraction/sec2attraction3-1.png');
        infoh3.text('레고무비 4D 극장');
        infotxtp.html('레고친구들을 만나러 가볼까요!');
        infotxtspan.eq(0).text('관마다 상이함');
        infotxtspan.eq(1).html('만 12세 이상<br>출입불가');
    });
    $('#section2 .section2contents .sec2select li.select4').click(function(){
        infoimg500.attr('src', 'images/sub-attraction/sec2attraction4-1.png');
        infoh3.text('더 드래곤');
        infotxtp.html('드래곤을 타고 레고성을<br>탐험해보자!');
        infotxtspan.eq(0).text('16명');
        infotxtspan.eq(1).html('130kg 이상<br>190cm 이상<br>탑승불가');
    });
    
    
    $('#section3 .section3contents .sec3select li.select1').click(function(){
        infoimg500.attr('src', 'images/sub-attraction/sec3attraction1-1.png');
        infoh3.text('웨이브풀');
        infotxtp.html('끝없는 파도와 함께 놀아볼까요!');
        infotxtspan.eq(0).text('50명');
        infotxtspan.eq(1).html('만 12세 이상<br>이용불가');
    });
    $('#section3 .section3contents .sec3select li.select3').click(function(){
        infoimg500.attr('src', 'images/sub-attraction/sec3attraction2-1.png');
        infoh3.text('스플래시 아웃');
        infotxtp.html('물에서도 즐기는 스릴!');
        infotxtspan.eq(0).text('1회 3인');
        infotxtspan.eq(1).html('130kg 이상<br>190cm 이상<br>탑승불가');
    });
    $('#section3 .section3contents .sec3select li.select4').click(function(){
        infoimg500.attr('src', 'images/sub-attraction/sec3attraction3-1.png');
        infoh3.text('트윈체이서');
        infotxtp.html('급류 속에서 즐기는<br>아찔한 속도감');
        infotxtspan.eq(0).text('1회 2인');
        infotxtspan.eq(1).html('만 12세 이상<br>출입불가');
    });
    $('#section3 .section3contents .sec3select li.select2').click(function(){
        infoimg500.attr('src', 'images/sub-attraction/sec3attraction4-1.png');
        infoh3.text('조커 양동이');
        infotxtp.html('조커가 준비한 100리터의 물에 맞써 싸워보세요!');
        infotxtspan.eq(0).text('50명');
        infotxtspan.eq(1).html('만 12세 이상<br>이용불가');
    });
    
    
    
    $('#section4 .section4contents .sec4select li.select1').click(function(){
        infoimg500.attr('src', 'images/sub-attraction/sec4attraction1-1.png');
        infoh3.text('레고호텔 수영장');
        infotxtp.html('호텔에서도 시원한 물놀이를<br>즐겨보세요!');
        infotxtspan.eq(0).text('50명');
        infotxtspan.eq(1).html('만 12세 이상<br>이용불가');
    });
    $('#section4 .section4contents .sec4select li.select2').click(function(){
        infoimg500.attr('src', 'images/sub-attraction/sec4attraction2-1.png');
        infoh3.text('레고호텔 1층');
        infotxtp.html('패밀리 레스토랑, 놀이시설, 각종 편의시설 이용이 가능합니다.');
        infotxtspan.eq(0).text('누구나');
        infotxtspan.eq(1).html('모두');
    });
    $('#section4 .section4contents .sec4select li.select3').click(function(){
        infoimg500.attr('src', 'images/sub-attraction/sec4attraction3-1.png');
        infoh3.text('레고호텔 방');
        infotxtp.html('킹덤룸, 어드벤쳐룸 등 호텔에서도 모험을 떠난 듯한 재미를 느껴보세요!');
        infotxtspan.eq(0).text('방마다 상이함');
        infotxtspan.eq(1).html('2인<br>인원추가시<br>추가요금발생');
    });
    $('#section4 .section4contents .sec4select li.select4').click(function(){
        infoimg500.attr('src', 'images/sub-attraction/sec4attraction3-1.png');
        infoh3.text('스카이라운지');
        infotxtp.html('스카이라운지에서 레고랜드의<br>야경을 감상해보세요!');
        infotxtspan.eq(0).text('누구나');
        infotxtspan.eq(1).html('모두');
    });
   
  /* window scroll 이벤트 */
    
            var spider = $('#section2 .spider');
            
    
            var section1 = $('#section1').offset().top;
            var section2 = $('#section2').offset().top;
            var section3 = $('#section3').offset().top;
            var section4 = $('#section4').offset().top;
            var autoScrolling = false;
            var location = 'firstPage';
    
            
        
            $(window).scroll(function(){
                var winscl = $(window).scrollTop();
                
                if(!autoScrolling){
                    if( winscl > section1 +1 && location == 'firstPage'){
                        scrollPage(section2, 'secondPage');
                    }
                    else if( winscl > section2 +1 && location == 'secondPage'){
                        scrollPage(section3, 'thirdPage');
                    }
                    else if( winscl > section3 +1 && location == 'thirdPage'){
                        scrollPage(section4, 'fourthPage');
                    } 
                    else if( winscl < section2 -1 && location == 'secondPage'){
                        scrollPage(section1, 'firstPage');
                    } 
                    else if( winscl < section3 -1 && location == 'thirdPage'){
                        scrollPage(section2, 'secondPage');
                    } 
                    else if( winscl < section4 -1 && location == 'fourthPage'){
                        scrollPage(section3, 'thirdPage');
                    }
                    
                }
                
                function scrollPage(nextpage, page) {
                    location = page;
                    autoScrolling = true;
                    
                    $('html, body').stop().animate({
                        scrollTop: nextpage
                    }, 500, function(){
                        autoScrolling = false;
                    });
                }
            
                
            
            /* section1 click */
                var section1li1 = $('#section1 .section1contents .section1ul2 li').eq(0);
                var section1li2 = $('#section1 .section1contents .section1ul2 li').eq(1);
                var section1li3 = $('#section1 .section1contents .section1ul2 li').eq(2);
                
                
                section1li1.click(function(){
                    scrollPage(section2, 'secondPage');
                });
                section1li2.click(function(){
                    scrollPage(section3, 'thirdPage');
                });
                section1li3.click(function(){
                    scrollPage(section4, 'fourthPage');
                });
                
                $('.section1-500px ul li').eq(0).click(function(){
                    scrollPage(section2, 'secondPage');
                });
                $('.section1-500px ul li').eq(1).click(function(){
                    scrollPage(section3, 'thirdPage');
                });
                $('.section1-500px ul li').eq(2).click(function(){
                    scrollPage(section4, 'fourthPage');
                });
                
            
            
        
                /* section2 spider */    
            
                if(winscl >= $('#section2').offset().top -150){
                    spider.animate({
                        top:'-10px'
                    }, 500);
                }   
                });
        
        
        
        
    /* 타이틀 애니메이션 */
        
                var title = $('#section1 .title span');
        
        
                title.addClass('on');
                title.eq(1).addClass('on');
                title.eq(2).addClass('on');
                title.eq(3).addClass('on');
                title.eq(4).addClass('on');
                title.eq(5).addClass('on');
                title.eq(6).addClass('on');
                title.eq(7).addClass('on');
                title.eq(8).addClass('on');
                title.eq(9).addClass('on');
                title.eq(10).addClass('on');
        
                /* section1 content 애니메이션 */

                var section1arrow = $('#section1 .section1contents .section1ul1 li img');
                var section1img = $('#section1 .section1contents .section1ul2 li');
                var section1shadow = $('#section1 .section1contents .section1ul3 li span');

                section1img.mouseover(function(){
                    var index = $(this).index();
                    section1arrow.eq(index).attr('src', './images/sub-attraction/arrow6.png');
                    $(this).addClass('on');
                    section1shadow.eq(index).addClass('on');
                });
                section1img.mouseleave(function(){
                    section1arrow.eq(0).attr('src', './images/sub-attraction/subject1.png');
                    section1arrow.eq(1).attr('src', './images/sub-attraction/subject2.png');
                    section1arrow.eq(2).attr('src', './images/sub-attraction/subject3.png');
                    section1img.removeClass('on');
                    section1shadow.removeClass('on');
                });


     /* section2 애니메이션 */
    
                var info1 = $('#section2 .triger');
                var btn_off1 = $('#section2 .triger .button .btn_off');
                var btn_on1 = $('#section2 .triger .button .btn_on');
    
                btn_off1.mouseover(function(){
                    btn_off1.find('span').eq(0).css('transform', 'rotate(-30deg) translateY(5px)');
                    btn_off1.find('span').eq(1).css('transform', 'rotate(30deg) translateY(-5px)');
                });
    
                btn_off1.mouseleave(function(){
                    btn_off1.find('span').eq(0).css('transform', 'rotate(0deg) translateY(0px)');
                    btn_off1.find('span').eq(1).css('transform', 'rotate(0deg) translateY(0px)');
                });
    
                btn_on1.mouseover(function(){
                    btn_on1.find('span').eq(0).css('transform', 'rotate(30deg) translateY(5px)');
                    btn_on1.find('span').eq(1).css('transform', 'rotate(-30deg) translateY(-5px)');
                });
    
                btn_on1.mouseleave(function(){
                    btn_on1.find('span').eq(0).css('transform', 'rotate(0deg) translateY(0px)');
                    btn_on1.find('span').eq(1).css('transform', 'rotate(0deg) translateY(0px)');
                });
    
                btn_off1.click(function(){
                    info1.animate({
                        right : '-500px'
                    }, 500, function(){
                        btn_off1.css('display', 'none');
                        btn_on1.css('display', 'block');
                        $('#section2 .triger .button img').css('display', 'block');
                    });
                });
                btn_on1.click(function(){
                    info1.animate({
                        right : '0px'
                    }, 500, function(){
                        btn_off1.css('display', 'block');
                        btn_on1.css('display', 'none');
                    });
                    $('#section2 .triger .button img').css('display', 'none');
                    
                });
    
                var sec2select = $('#section2 .section2contents .sec2select li');
                var selectarrow1 = $('#section2 .section2contents .sec2select li img');
    
                sec2select.mouseover(function(){
                    var index = $(this).index();
                    selectarrow1.eq(index).css('display', 'block');
                });
                sec2select.mouseleave(function(){
                    selectarrow1.css('display', 'none');
                });
    
                sec2select.click(function(){
                    var index = $(this).index();
                    var imgbox = $('#section2 .triger .infobox .imgbox img');
                    var illust = $('#section2 .triger .infobox .illust img');
                    var infotitle = $('#section2 .triger .infobox .info h3');
                    var infotext = $('#section2 .triger .infobox .info p');
                    var infotext2 = $('#section2 .triger .infobox .info ul.iconbox li span');
                    
                    $('#section2 .triger .button img').css('display', 'none');
                    
                    info1.animate({
                        right: '0px'
                    });
                    btn_on1.css('display', 'none');
                    btn_off1.css('display', 'block');
                    
                    if(index==0){
                        imgbox.attr('src', 'images/sub-attraction/sec2attraction1.jpg');
                        illust.attr('src', 'images/sub-attraction/sec2attraction1-1.png');
                        infotitle.text('코스터사우르스');
                        infotext.text('레고 공룡과 함께하는 롤러코스터!'); infotext2.eq(0).text('20명');
                        infotext2.eq(1).html('130kg 이상<br>190cm 이상<br>탑승불가');   
                    }
                    if(index==1){
                        imgbox.attr('src', 'images/sub-attraction/sec2attraction2.jpg');
                        illust.attr('src', 'images/sub-attraction/sec2attraction2-1.png');
                        infotitle.text('프로젝트X');
                        infotext.html('VR을 통해 레고세계의 스릴을<br>체험해보세요!');
                        infotext2.eq(0).text('6명');
                        infotext2.eq(1).html('130kg 이상<br>190cm 이상<br>탑승불가');   
                    }
                    if(index==2){
                        imgbox.attr('src', 'images/sub-attraction/sec2attraction3.jpg');
                        illust.attr('src', 'images/sub-attraction/sec2attraction3-1.png');
                        infotitle.text('레고무비 4D 극장');
                        infotext.text('레고친구들을 만나러 가볼까요!');
                        infotext2.eq(0).text('관마다 상이함');
                        infotext2.eq(1).html('만 12세 이상<br>출입불가');   
                    }
                    if(index==3){
                        imgbox.attr('src', 'images/sub-attraction/sec2attraction4.jpg');
                        illust.attr('src', 'images/sub-attraction/sec2attraction4-1.png');
                        infotitle.text('더 드래곤');
                        infotext.text('드래곤을 타고 레고성을 탐험해보자!');
                        infotext2.eq(0).text('16명');
                        infotext2.eq(1).html('130kg 이상<br>190cm 이상<br>탑승불가');   
                    }
                });
    
    
    /* section3 애니메이션 */
    
    
                var info2 = $('#section3 .triger');
                var btn_off2 = $('#section3 .triger .button .btn_off');
                var btn_on2 = $('#section3 .triger .button .btn_on');
    
                btn_off2.mouseover(function(){
                    btn_off2.find('span').eq(0).css('transform', 'rotate(30deg) translateY(5px)');
                    btn_off2.find('span').eq(1).css('transform', 'rotate(-30deg) translateY(-5px)');
                });
    
                btn_off2.mouseleave(function(){
                    btn_off2.find('span').eq(0).css('transform', 'rotate(0deg) translateY(0px)');
                    btn_off2.find('span').eq(1).css('transform', 'rotate(0deg) translateY(0px)');
                });
    
                btn_on2.mouseover(function(){
                    btn_on2.find('span').eq(0).css('transform', 'rotate(-30deg) translateY(5px)');
                    btn_on2.find('span').eq(1).css('transform', 'rotate(30deg) translateY(-5px)');
                });
    
                btn_on2.mouseleave(function(){
                    btn_on2.find('span').eq(0).css('transform', 'rotate(0deg) translateY(0px)');
                    btn_on2.find('span').eq(1).css('transform', 'rotate(0deg) translateY(0px)');
                });
    
                btn_off2.click(function(){
                    info2.animate({
                        left : '-500px'
                    }, 500, function(){
                        btn_off2.css('display', 'none');
                        btn_on2.css('display', 'block');
                        $('#section3 .triger .button img').css('display', 'block');
                    });
                });
                btn_on2.click(function(){
                    info2.animate({
                        left : '0px'
                    }, 500, function(){
                        btn_off2.css('display', 'block');
                        btn_on2.css('display', 'none');
                    });
                    $('#section3 .triger .button img').css('display', 'none');
                });
    
    
                var sec3select = $('#section3 .section3contents .sec3select li');
                var selectarrow2 = $('#section3 .section3contents .sec3select li img');
    
                sec3select.mouseover(function(){
                    var index = $(this).index();
                    selectarrow2.eq(index).css('display', 'block');
                });
                sec3select.mouseleave(function(){
                    selectarrow2.css('display', 'none');
                });
    
                sec3select.click(function(){
                    var index = $(this).index();
                    var imgbox = $('#section3 .triger .infobox .imgbox img');
                    var illust = $('#section3 .triger .infobox .illust img');
                    var infotitle = $('#section3 .triger .infobox .info h3');
                    var infotext = $('#section3 .triger .infobox .info p');
                    var infotext2 = $('#section3 .triger .infobox .info ul.iconbox li span');
                    $('#section3 .triger .button img').css('display', 'none');
                    
                    info2.animate({
                        left: '0px'
                    });
                    btn_on2.css('display', 'none');
                    btn_off2.css('display', 'block');
                    
                    if(index==0){
                        imgbox.attr('src', 'images/sub-attraction/sec3attraction1.jpg');
                        illust.attr('src', 'images/sub-attraction/sec3attraction1-1.png');
                        infotitle.text('웨이브풀');
                        infotext.text('끝없는 파도와 함께 놀아볼까요!'); infotext2.eq(0).text('50명');
                        infotext2.eq(1).html('만 12세 이상<br>이용불가');
                    }
                    if(index==1){
                        imgbox.attr('src', 'images/sub-attraction/sec3attraction2.jpg');
                        illust.attr('src', 'images/sub-attraction/sec3attraction2-1.png');
                        infotitle.text('스플래시 아웃');
                        infotext.text('물에서도 즐기는 스릴!');
                        infotext2.eq(0).text('1회 3인');
                        infotext2.eq(1).html('130kg 이상<br>190cm 이상<br>탑승불가');   
                    }
                    if(index==2){
                        imgbox.attr('src', 'images/sub-attraction/sec3attraction3.jpg');
                        illust.attr('src', 'images/sub-attraction/sec3attraction3-1.png');
                        infotitle.text('트윈체이서');
                        infotext.text('급류 속에서 즐기는 아찔한 속도감!');
                        infotext2.eq(0).text('1회 2인');
                        infotext2.eq(1).html('만 12세 이상<br>출입불가');   
                    }
                    if(index==3){
                        imgbox.attr('src', 'images/sub-attraction/sec3attraction4.jpg');
                        illust.attr('src', 'images/sub-attraction/sec3attraction4-1.png');
                        infotitle.text('조커 양동이');
                        infotext.html('조커가 준비한 100리터의 물에 맞써<br>싸워보세요!');
                        infotext2.eq(0).text('50명');
                        infotext2.eq(1).html('만 12세 이상<br>이용불가');   
                    }
                });
                

                
    /* section4 애니메이션 */
                var timer;
                var sec4fly = $('#section4 .fly img');
                var count = 0;
    
                timer = setInterval(light, 500);
    
                function light(){
                    count++;
                    if(count==1){
                        sec4fly.addClass('on');
                    }
                    if(count==2){
                        sec4fly.removeClass('on');
                    }
                    if(count==3){
                        sec4fly.addClass('on');
                    }
                    if(count==4){
                        sec4fly.addClass('on');
                    }
                    if(count==5){
                        sec4fly.removeClass('on');
                    }
                    if(count==6){
                        count = 0;
                    }
                    
                }    
    
                var info3 = $('#section4 .triger');
                var btn_off3 = $('#section4 .triger .button .btn_off');
                var btn_on3 = $('#section4 .triger .button .btn_on');
    
                btn_off3.mouseover(function(){
                    btn_off3.find('span').eq(0).css('transform', 'rotate(-30deg) translateY(5px)');
                    btn_off3.find('span').eq(1).css('transform', 'rotate(30deg) translateY(-5px)');
                });
    
                btn_off3.mouseleave(function(){
                    btn_off3.find('span').eq(0).css('transform', 'rotate(0deg) translateY(0px)');
                    btn_off3.find('span').eq(1).css('transform', 'rotate(0deg) translateY(0px)');
                });
    
                btn_on3.mouseover(function(){
                    btn_on3.find('span').eq(0).css('transform', 'rotate(30deg) translateY(5px)');
                    btn_on3.find('span').eq(1).css('transform', 'rotate(-30deg) translateY(-5px)');
                });
    
                btn_on3.mouseleave(function(){
                    btn_on3.find('span').eq(0).css('transform', 'rotate(0deg) translateY(0px)');
                    btn_on3.find('span').eq(1).css('transform', 'rotate(0deg) translateY(0px)');
                });
    
                btn_off3.click(function(){
                    info3.animate({
                        right : '-500px'
                    }, 500, function(){
                        btn_off3.css('display', 'none');
                        btn_on3.css('display', 'block');
                        $('#section4 .triger .button img').css('display', 'block');
                    });
                });
                btn_on3.click(function(){
                    info3.animate({
                        right : '0px'
                    }, 500, function(){
                        btn_off3.css('display', 'block');
                        btn_on3.css('display', 'none');
                    });
                    $('#section4 .triger .button img').css('display', 'none');                    
                });
    
                var sec4select = $('#section4 .section4contents .sec4select li');
                var selectarrow4 = $('#section4 .section4contents .sec4select li img');
    
                sec4select.mouseover(function(){
                    var index = $(this).index();
                    selectarrow4.eq(index).css('display', 'block');
                });
                sec4select.mouseleave(function(){
                    selectarrow4.css('display', 'none');
                });
    
                sec4select.click(function(){
                    var index = $(this).index();
                    var imgbox = $('#section4 .triger .infobox .imgbox img');
                    var illust = $('#section4 .triger .infobox .illust img');
                    var infotitle = $('#section4 .triger .infobox .info h3');
                    var infotext = $('#section4 .triger .infobox .info p');
                    var infotext2 = $('#section4 .triger .infobox .info ul.iconbox li span');
                    $('#section4 .triger .button img').css('display', 'none');
                    
                    info3.animate({
                        right: '0px'
                    });
                    btn_on3.css('display', 'none');
                    btn_off3.css('display', 'block');
                    
                    if(index==0){
                        imgbox.attr('src', 'images/sub-attraction/sec4attraction1.jpg');
                        illust.attr('src', 'images/sub-attraction/sec4attraction1-1.png');
                        infotitle.text('레고호텔 수영장');
                        infotext.text('호텔에서도 시원한 물놀이를 즐겨보세요!'); infotext2.eq(0).text('50명');
                        infotext2.eq(1).html('만 12세 이상<br>이용불가');   
                    }
                    if(index==1){
                        imgbox.attr('src', 'images/sub-attraction/sec4attraction2.jpg');
                        illust.attr('src', 'images/sub-attraction/sec4attraction2-1.png');
                        infotitle.text('레고호텔 1층');
                        infotext.text('패밀리 레스토랑, 놀이시설, 각종 편의시설 이용이 가능합니다.');
                        infotext2.eq(0).text('누구나');
                        infotext2.eq(1).html('모두');   
                    }
                    if(index==2){
                        imgbox.attr('src', 'images/sub-attraction/sec4attraction3.jpg');
                        illust.attr('src', 'images/sub-attraction/sec4attraction3-1.png');
                        infotitle.text('레고호텔 방');
                        infotext.html('킹덤룸, 어드벤쳐룸 등 호텔에서도 모험을<br>떠난 듯한 재미를 느껴보세요!');
                        infotext2.eq(0).text('방마다 상이함');
                        infotext2.eq(1).html('2인<br>인원추가시<br>추가요금발생');   
                    }
                    if(index==3){
                        imgbox.attr('src', 'images/sub-attraction/sec4attraction4.jpg');
                        illust.attr('src', 'images/sub-attraction/sec4attraction3-1.png');
                        infotitle.text('스카이라운지');
                        infotext.html('스카이라운지에서 레고랜드의 야경을<br>감상해보세요!');
                        infotext2.eq(0).text('누구나');
                        infotext2.eq(1).html('모두');   
                    }
                });
    
            
    $(function( ){
    $('#nav').css('top','-1200px');
    $('.sub').css('display','none');
    
    $('.menuicon').click(function( ){
        $('#nav').stop( ).animate({top:0},1000);
    });
    $('.close').click(function( ){
        $('#nav').stop( ).animate({top:-1200},1000);
    });
    
        var timer;
        timer = setInterval(make,300);
        
        function make( ){
            $('.menuicon').animate({top:50},300);
            $('.menuicon').delay(300).animate({top:60},300);    
    };
})


/* nav 이미지 */
$(function( ){
    $('.menu_img > li').mouseover(function( ){
        var index = $(this).index( );
        $('.sub').eq(index).stop( ).slideDown( );
    });
    
    $('.menu_img > li, .sub').mouseleave(function( ){
        $('.sub').stop( ).slideUp();
    })
})

/* nav */
$(function( ){
    $('.nav_bottom').css('bottom','-500px');
    
    $('.menuicon').click(function( ){
        $('.nav_bottom').stop( ).animate({bottom:0},1000);
    });
    $('.close').click(function( ){
        $('.nav_bottom').stop( ).animate({bottom:-500},1000);
    });
});  /* 수정가능성있음 */
  
$('.menuicon2').click(function(){
    
   $(this).toggleClass('on');
    
    if($('.menuicon2').hasClass('on')){
       $('.menuicon2').find('span').eq(0).stop().animate({top: '10px'}, 300, function(){
           $('.menuicon2').find('span').eq(0).css('transform', 'rotate(45deg)');
           $('.menuicon2').find('span').eq(1).css('display', 'none');
       });
       $('.menuicon2').find('span').eq(2).stop().animate({top: '10px'}, 300, function(){
           $('.menuicon2').find('span').eq(2).css('transform', 'rotate(-45deg)');
       });
       $('.navbg2').stop( ).animate({top:0},1500, function(){
           $('.navbg2 .menuname ul li.li1').addClass('on');
           $('.navbg2 .menuname ul li.li2').addClass('on');
           $('.navbg2 .menuname ul li.li3').addClass('on');
           $('.navbg2 .menuname ul li.li4').addClass('on');
           $('.navbg2 .ticket2').css('opacity', '1');
       });    
    } else {
        $('.menuicon2').find('span').eq(0).stop().animate({top: '0px'}, 300, function(){
           $('.menuicon2').find('span').eq(0).css('transform', 'rotate(0deg)');
           $('.menuicon2').find('span').eq(1).css('display', 'block');
       });
       $('.menuicon2').find('span').eq(2).stop().animate({top: '20px'}, 300, function(){
           $('.menuicon2').find('span').eq(2).css('transform', 'rotate(0deg)');
       });
       $('.navbg2').stop( ).animate({top:'-1000px'},1500, function(){
          $('.navbg2 .menuname ul li.li1').removeClass('on');
           $('.navbg2 .menuname ul li.li2').removeClass('on');
           $('.navbg2 .menuname ul li.li3').removeClass('on');
           $('.navbg2 .menuname ul li.li4').removeClass('on');
           $('.navbg2 .ticket2').css('opacity', '0'); 
       });
    }
    
    
    
    
});    
    
    
})
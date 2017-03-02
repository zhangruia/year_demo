angular.module("myApp")
    .directive('swiper', ['$rootScope', '$parse', '$location', function ($rootScope, $parse, $location) {

        return {
            restrict: 'C',
            link: function (scope, elem, attrs) {

                new Swiper(".pics", {

                    autoplay: 1500,
                    observer: true
                });

                /*
                 new iscroll('wrapper', {
                 useTransition: false,
                 bounce: true,
                 vScroll: true,
                 onScrollEnd: function ($location) {
                 console.log("onScrollEnd");
                 //x=$location.path();


                 x = $location.path();
                 console.log("path is " + x);
                 }
                 });*/

            }
        }

    }])
    .directive('swipers', ['$rootScope', '$parse', '$location', function ($rootScope, $parse, $location) {

        return {
            restrict: 'C',
            link: function (scope, elem, attrs) {

                new Swiper(".pics", {
                    observer: true,

                    onScrollEnd: function () {

                    }
                });
                setTimeout(function () {
                    $(".swiper-wrapper").width($(".swiper-wrapper li").width() * ($(".swiper-wrapper li").length + 1));
                    //console.log( $( ".swiper-wrapper li" ).width(),$( ".swiper-wrapper li" ).length )
                }, 10)


            }
        }

    }])
    .directive('iScroll', ['$rootScope', '$parse', '$location', function ($rootScope, $parse, $location) {

        return {
            restrict: 'C',
            link: function (scope, elem, attrs) {

                var pullDownLa = $(".pullDownLabel"),
                    minY,
                    pullDown = $(".pullDown");

                myscroll = new IScroll("#wrapper", {
                    probeType: 3,
                    mouseWheel: true,
                    click: true
                });
                /*init初始化*/

                $(".t_List").on("click", "li", function () {
                    myscroll.refresh();
                })

                $(".foreign-nav").on("click touchstart", function () {
                    myscroll.refresh();
                });

                setTimeout(function () {
                    myscroll.refresh();
                }, 1000);
                scope.$on( "refresh", function(){
                    myscroll.refresh();
                } )
                /*延时缓冲*/

                myscroll.on('scrollStart', function () {
                    minY = this.y;
                });

                myscroll.on('scroll', function () {

                    if (this.y < this.maxScrollY) {
                        //触发上拉标志
                        pullDown.show();
                        pullDownLa.removeClass("translate");
                        if (this.y > 10) {
                            pullDownLa.addClass("pullimg");
                            pullDownLa.removeClass("translate");
                        }
                    } else if (this.y > 0) {
                        //触发下拉标志
                        pullDown.show();
                        pullDownLa.removeClass("translate");
                        if (this.y > 10) {
                            pullDownLa.addClass("translate");
                            pullDownLa.removeClass("pullimg");
                        }
                    }

                });

                myscroll.on('scrollEnd', function () {

                    pullDownLa.addClass( "downimg" );
                    setTimeout( function(){
                        console.log( 1 )
                        pullDownLa.removeClass( "downimg translate" ).addClass( "pullimg" );
                        pullDown.hide();
                        scope.$emit( "down","ok" );
                    },1000)

                });


                 //!*事件监听!

            }
        }

    }])
    .factory("myConfig", function () {
        return {
            http: function ($http, url) {
                return $http.get(url);
            }
        }
    });



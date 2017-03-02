var reg = /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|   \d{3}|\d{2}|\d{1}))$)/;
var indexCon = function ($scope, $location) {

        var acctive = $location.url().slice($location.url().lastIndexOf("/") + 1),
            active = function (value) {
                acctive = acctive == "order" || acctive == "foreign" ? "hot" : acctive;
                return acctive == value ? "movie" : "";
            };

        $scope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {

            acctive = toState.url.slice(1);

        });

        $scope.active = active;

    },
    proCon = function () {

    },
    cinemaCon = function ($scope,cityName) {
        var url = "hot",
            cLass = function (val) {
                return val == url;
            };
           $scope.cityName=cityName.cityName
        $scope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
            url = toState.url.slice(1);
        });
        $scope.class = cLass;
    },
    cineHotCon = function ($scope, hot, myConfig, $http) {
        var main = [];
        hot.data.hot.forEach(function (v, i) {
            if (i < 4) {
                main.push(v);
            }
        });
        $scope.main = main;
        $scope.$on("down", function () {

            myConfig.http($http, "http://localhost:8089/hot")
                .success(function (data) {
                    $scope.main = data.hot;
                })
                .error(function (err) {
                    console.log(err)
                });
            $scope.$broadcast("refresh");
        })

    },
    foreign = function ($scope, foreign,myConfig,$http) {
        var obj = foreign.data['of abroad'],
            main = [],
            g = 0,
            cla = new Array(3),
            arr = ["美国", "英国", "其他"],
            changeClass = function (num) {
                cla = new Array(3);
                main = [];
                g = num;
                cla[num] = ["foreign-on"];

                obj[arr[num]].forEach(function (v, i) {
                    if (i < 4) {
                        main.push(v);
                    }
                });
                $scope.main = main;
                $scope.cla = cla;
            };
        cla[0] = ["foreign-on"];
        $scope.cla = cla;
        obj['美国'].forEach(function (v, i) {
            if (i < 4) {
                main.push(v);
            }
        });
        $scope.main = main;
        $scope.changeClass = changeClass;
        $scope.$on("down", function () {

            myConfig.http($http, "http://localhost:8089/foreign")
                .success(function (data) {
                    console.log( data )
                    $scope.main = data['of abroad'][arr[g]];
                })
                .error(function (err) {
                    console.log(err)
                });
            $scope.$broadcast("refresh");
        })

    },
    searchCon = function ($scope, search) {
        $scope.main = search.data;
    },
    cityCon = function ($scope,$rootScope,$location,city,cityName) {
        $scope.main = city.data;
        $scope.cityName=cityName.cityName;
        $scope.onCity="A";
        var cityArr= $scope.main.title;

        $scope.cityEvent=function(val){
            $scope.cityName=val;
            cityName.cityName=val;
            $location.url("index/cinema/hot");
        };
        $scope.cityFun=function(val){
         return val==$scope.cityName?true:false;
        };

        $scope.titleEvent=function(val){
          return   $scope.onCity=val;
        };
        $scope.titleFun=function(val){
            return $scope.onCity==val?true:false
        }


    },
    settingCon = function ($scope) {

        var opClass = ["op", "op"],
            changClass = function (num) {
                opClass[num] = opClass[num] == "op" ? "op tofrom" : "op";
                $scope.opClass = opClass;
            };
        $scope.changClass = changClass;
        $scope.opClass = opClass;

    },
    detectorCon = function ($scope, detector) {
        $scope.main = detector.data;
    },
    miniCon = function ($scope, $location) {


        $scope.text = sessionStorage.name ? sessionStorage.name : "立即登录";

        $scope.uiSref = function () {
            var text = this.text != "立即登录" ? "person?name=" + this.text : "login";
            $location.url(text);
        };

        $scope.outlogin = function () {
            sessionStorage.name = "";

            $scope.text = "立即登录";
        }

    },
    loginCon = function ($scope, $http, $location) {

        var butVal = "获取验证码",
            Verifications,
            btn = function () {
                if (this.tell && reg.test(this.tell)) {
                    butVal = butVal == "获取验证码" ? "60S重新发送" : "获取验证码";
                    $scope.butVal = butVal;
                    if (butVal == "60S重新发送") {
                        $http.get("http://localhost:8089/Verification")
                            .success(function (data) {
                                Verifications = data;
                                $scope.Verifications = Verifications;
                                $scope.error = "";
                            })
                            .error(function () {
                                alert("你的网络出现问题");
                            })
                    }
                } else {
                    this.error = "未输入手机号码";
                }
            },
            login = function () {
                var _this = this;
                if (this.tell && Verifications == this.Verifications) {
                    $http.get("http://localhost:8089/login?tell=" + this.tell)
                        .success(function (data) {

                            if (data == 0) {
                                _this.error = "手机号为找到，请注册";
                                _this.Verifications = "";
                            } else {

                                $location.url("/index/mini?name=" + data);
                                sessionStorage.name = data;

                            }
                        })
                        .error(function () {
                            alert("数据请求超时");
                        });

                }
                else {
                    this.error = "验证码错误，请重新获取";
                    this.Verifications = "";
                }
            };
        $scope.butVal = butVal;
        $scope.btn = btn;
        $scope.login = login;

    },
    person = function ($scope, $stateParams, $location) {
        var back = function () {
            $location.url("/index/mini?name=" + $stateParams.name);
        };
        $scope.back = back;
    },
    registerCon = function ($scope, $location, $http) {

        var register = function () {

                if (Verification && Verification == this.Verification && this.tell && reg.test(this.tell) && this.password) {
                    $http.get("http://localhost:8089/register?tell=" + this.tell + "&password=" + this.password)
                        .success(function (data) {

                            if (data == "0") {
                                alert("用户名已存在")
                            } else {
                                $location.url("/index/mini?name=未命名");
                                sessionStorage.name = "未命名";
                            }
                        })
                        .error(function () {
                            alert("数据请求超时");
                        });
                }
            },
            pos = function () {
                var _this = this;
                if (this.tell && reg.test(this.tell)) {
                    $http.get("http://localhost:8089/Verification")
                        .success(function (data) {
                            Verification = data;
                            _this.Verification = data;
                        })
                        .error(function () {
                            alert("数据请求超时");
                        })
                }

            },
            Verification;

        $scope.register = register;
        $scope.pos = pos;


    },
    theateCon = function ($scope, getdata) {
        $scope.main = getdata.data;
    },
    contentCon = function ($scope, getdata, $stateParams) {

        $scope.idx = $stateParams.name;
        $scope.main = getdata.data["movie_theater"][$scope.idx];
        var times = $scope.main.film[0].time;
        $scope.timeS = times['5-17'];
        var active = new Array(3);
        active[0] = true;
        $scope.active = active;
        $scope.changeA = function (num) {
            active = new Array(3);
            active[num] = true;
            $scope.active = active;
            var j = 0;
            for (var i in times) {
                if (j == num) {
                    $scope.timeS = times[i];
                }
                j++;

            }

        };
        $scope.changeimg = function (num) {
            var times = $scope.main.film[num].time;
            $scope.timeS = times['5-17'];
        }

    },
    moreCon = function ($scope, $stateParams, getJson) {
        $scope.idx = $stateParams.name;
        $scope.mains = getJson.data["movie_theater"][$scope.idx]
    };



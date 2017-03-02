angular.module("myApp")

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when("", "/leadpage");

        $stateProvider

            .state("leadpage",{
                url:"/leadpage",
                templateUrl:"./tpls/lead.html",
                resolve:{
                    loadPlugin:function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ["./src/css/lead.css"]
                            }
                        ])
                    }
                }
            })

            .state("index", {
                url: "/index",
                templateUrl: "./tpls/index.html",
                controller: "indexCon",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ["./src/css/index.css"]
                            }
                        ])
                    }
                }
            })

            .state("index.cinema", {
                url: "/cinema",
                templateUrl: "./tpls/cinema.html",
                controller: "cinemaCon",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ["./src/css/head.css"]
                            }
                        ])
                    }
                }
            })

            .state("index.cinema.hot", {
                url: "/hot",
                templateUrl: "./tpls/hot.html",
                controller: "cineHotCon",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ["./src/css/hot.css"]
                            }
                        ])
                    },
                    hot: function ($http) {
                        return $http.get("./data/china_hot.json");
                    }
                }
            })

            .state("index.cinema.order", {
                url: "/order",
                templateUrl: "./tpls/order.html",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ["./src/css/order.css"]
                            }
                        ])
                    }
                }
            })

            .state("index.cinema.foreign", {
                url: "/foreign",
                templateUrl: "./tpls/foreign.html",
                controller: "foreign",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ["./src/css/foreign.css"]
                            }
                        ])
                    },
                    foreign: function ($http) {
                        return $http.get("./data/china_abroad.json");
                    }
                }
            })

            .state("index.theate", {
                url: "/theate",
                templateUrl: "./tpls/theate.html",
                controller: "theateCon",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ["./src/css/theate.css"]
                            }
                        ])
                    },
                    getdata: function ($http) {
                        return $http.get("./data/theater.json");
                    }
                }
            })


            .state("content", {
                url: "/content/:name",
                templateUrl: "./tpls/content.html",
                controller: "contentCon",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ["./src/css/content.css"]
                            }
                        ])
                    },
                    getdata: function ($http) {
                        return $http.get("./data/theater.json");
                    }
                }
            })

            .state("more", {
                url: "/more/:name",
                templateUrl: "./tpls/more.html",
                controller: "moreCon",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ["./src/css/more.css"]
                            }
                        ])
                    },
                    getJson: function ($http) {
                        return $http.get("./data/theater.json");
                    }
                }
            })

            .state("index.detector", {
                url: "/detector",
                templateUrl: "./tpls/detector.html",
                controller: "detectorCon",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ["./src/css/detector.css"]
                            }
                        ])
                    }, detector: function ($http) {
                        return $http.get("./data/found.json");
                    }
                }
            })
            .state("info", {
                url: "/info",
                templateUrl: "./tpls/info.html",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ["./src/css/info.css"]
                            }
                        ])
                    }
                }
            })
            .state("movelib", {
                url: "/movelib",
                templateUrl: "./tpls/movelib.html",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ["./src/css/movelib.css"]
                            }
                        ])
                    }
                }
            })

            .state("index.mini", {
                url: "/mini",
                templateUrl: "./tpls/mini.html",
                controller: "miniCon",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ["./src/css/mini.css"]
                            }
                        ])
                    }
                }
            })

            .state("city", {
                url: "/city",
                templateUrl: "./tpls/city.html",
                controller: "cityCon",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        $ocLazyLoad.load([
                            {
                                files: ["./src/css/city.css"]
                            }
                        ])
                    },
                    city: function ($http) {
                        return $http.get("./data/city.json");
                    }
                }
            })

            .state("search", {
                url: "/search",
                controller: "searchCon",
                templateUrl: "./tpls/search.html",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        $ocLazyLoad.load([
                            {
                                files: ["./src/css/search.css"]
                            }
                        ])
                    },
                    search: function ($http) {
                        return $http.get("./data/search.json");
                    }
                }
            })


            //我的消息路由  message
            .state("message", {
                url: "/message",
                templateUrl: "./tpls/message.html",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ["./src/css/message.css"]
                            }
                        ])
                    }
                }
            })

            //我的钱包路由   wallet
            .state("wallet", {
                url: "/wallet",
                templateUrl: "./tpls/wallet.html",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ["./src/css/wallet.css"]
                            }
                        ])
                    }
                }
            })

            //电影详情路由 moive
            .state("moive", {
                url: "/moive",
                templateUrl: "./tpls/moive.html",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ["./src/css/moive.css"]
                            }
                        ])
                    }
                }
            })

            .state("setting", {
                url: "/setting",
                templateUrl: "./tpls/setting.html",
                controller: "settingCon",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        $ocLazyLoad.load([
                            {
                                files: ["./src/css/setting.css"]
                            }
                        ])
                    }
                }
            })

            .state("login", {
                url: "/login",
                templateUrl: "./tpls/login.html",
                controller: "loginCon",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        $ocLazyLoad.load([
                            {
                                files: ["./src/css/login.css"]
                            }
                        ])
                    }
                }
            })

            .state("person", {
                url: "/person?name",
                templateUrl: "./tpls/modifyper.html",
                controller: "person",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        $ocLazyLoad.load([
                            {
                                files: ["./src/css/modifyper.css"]
                            }
                        ])
                    }
                }
            })

            .state("addin", {
                url: "/addin",
                templateUrl: "./tpls/signin.html",
                controller: "registerCon",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        $ocLazyLoad.load([
                            {
                                files: ["./src/css/signin.css"]
                            }
                        ])
                    }
                }
            })

    });
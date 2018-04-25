webpackJsonp([0],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charts_salechart__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_food__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__show_pics__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__show_views__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addorder__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__floatMenu__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__orderdetail__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_home__ = __webpack_require__(529);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ModalController } from 'ionic-angular';

//--------------待解决问题  不能直接引用index-----------------------------
// import { LoginPage } from '../index';
//----------------------------------------------------------------------









var HomePage = (function () {
    function HomePage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.token = localStorage.getItem('token');
        this.account_id = localStorage.getItem('account_id');
        this.hallId = 0;
        this.hallname = '全部大厅';
        this.orderlists = [];
        this.orderlistsOrign = [];
        this.imgSrc = 'assets/imgs/index/bg.jpg';
        this.Imgs = [];
        this.space = null;
        this.hallList = [];
        this.preHallList = [];
        this.afterHallList = [];
        this.panorama_url = '';
        this.curYear = new Date().getFullYear();
        this.checkmonth = 0;
        this.checkpreload = {};
        this.ordertypevalue = 0;
        this.monthData = [];
        this.monthdataTop = [];
        this.monthdataBottom = [];
        // search查询
        this.searchQuery = '';
        this.titleItems = [];
        this.ifFloat = false;
        this.floatList = [];
        this.subList = [];
        // 检测登录
        var uid = window.localStorage.getItem('account_id');
        console.log(uid);
        if (uid != null && uid != '') {
            this.login = true;
        }
        else {
            this.login = false;
            if (uid == '') {
                this.gotoLogin();
            }
        }
        this.yearVisible = false;
        this.monthVisible = false;
        // search查询
        // this.initializeItems();
        // this.gotoChart();
        this.getIndexInfo();
        this.getFloatMenu();
        this.getYearData();
    }
    HomePage.prototype.getFloatMenu = function () {
        this.floatList = [
            {
                name: "邀约 & 跟单",
                url: ""
            },
            {
                name: "找资源",
                url: ""
            },
            {
                name: "我的收藏",
                url: "http://www.cike360.com/school/crm_web/portal/index.php?r=background/sales_list&pre_type=3"
            },
            {
                name: "口袋学堂",
                url: "http://www.cike360.com/school/crm_web/portal/index.php?r=background/sales_list&pre_type=3"
            },
            {
                name: "在线客服",
                url: ""
            }
        ];
        this.subList = [
            {
                name: "灵感图库",
                url: "http://www.cike360.com/school/crm_web/portal/index.php?r=background/sales_list&pre_type=3"
            },
            {
                name: "效果图库",
                url: "http://www.cike360.com/school/crm_web/portal/index.php?r=background/sales_list&pre_type=3"
            },
            {
                name: "矢量图库",
                url: "http://www.cike360.com/school/crm_web/portal/index.php?r=background/sales_list&pre_type=3"
            },
            {
                name: "视频素材",
                url: "http://www.cike360.com/school/crm_web/portal/index.php?r=background/sales_list&pre_type=3"
            },
            {
                name: "婚礼音乐",
                url: "http://www.cike360.com/school/crm_web/portal/index.php?r=background/sales_list&pre_type=3"
            },
            {
                name: "主持词",
                url: "http://www.cike360.com/school/crm_web/portal/index.php?r=background/sales_list&pre_type=3"
            },
        ];
        console.log(this.floatList);
    };
    HomePage.prototype.ionViewWillEnter = function () {
    };
    HomePage.prototype.getIndexInfo = function () {
        var _this = this;
        this.service.getIndexInfo().then(function (data) {
            console.log(data);
            if (data.status == 1) {
                _this.space = data.space;
                _this.hallList = data.hall;
                _this.hotelList = data.hotel;
                if (data.hall.length == 1) {
                    _this.afterHallList = data.hall;
                }
                else if (data.hall.length > 1) {
                    var cutLine = Math.floor(data.hall.length / 2);
                    _this.preHallList = data.hall.slice(0, cutLine);
                    _this.afterHallList = data.hall.slice(cutLine);
                }
            }
        });
    };
    HomePage.prototype.getItems = function (ev) {
        var _this = this;
        this.orderlists = this.orderlistsOrign;
        console.log("查询");
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        var newlist = [];
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.titleItems = this.titleItems.filter(function (item, index) {
                if ((item.toLowerCase().indexOf(val.toLowerCase()) > -1)) {
                    newlist.push(_this.orderlists[index]);
                }
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            this.orderlists = newlist;
        }
        else {
            this.orderlists = this.orderlistsOrign;
        }
    };
    HomePage.prototype.initializeItems = function () {
        var _this = this;
        this.orderlists.map(function (item, index) {
            _this.titleItems[index] = item.name;
        });
    };
    HomePage.prototype.getYearData = function () {
        var _this = this;
        var query = {
            hotel_list: 0,
            year: this.curYear,
            token: this.token
        };
        this.service.getYearData(query).then(function (data) {
            if (data) {
                _this.monthData = data.monthData;
                _this.yearDeal = data.yearDeal;
                _this.yearNoDeal = data.yearNoDeal;
            }
        });
        // if (this.monthData.length <= 0) {
        // 	this.monthData = [
        // 		{
        // 			month: 1,
        // 			deal: 156,
        // 			noDeal: 4,
        // 			dealDate: ['2018-01-01', '2018-01-02', '2018-01-05'],
        // 			noDealDate: ['2018-01-04', '2018-01-22']
        // 		},
        // 		{
        // 			month: 2,
        // 			deal: 1,
        // 			noDeal: 4,
        // 			dealDate: ['2018-02-11', '2018-02-02'],
        // 			noDealDate: ['2018-02-04', '2018-02-12']
        // 		},
        // 		{
        // 			month: 3,
        // 			deal: 17,
        // 			noDeal: 4,
        // 			dealDate: ['2018-03-10', '2018-02-22'],
        // 			noDealDate: ['2018-03-04', '2018-03-12']
        // 		},
        // 		{
        // 			month: 4,
        // 			deal: 13,
        // 			noDeal: 4,
        // 			dealDate: ['2018-04-11', '2018-04-02'],
        // 			noDealDate: ['2018-02-04', '2018-02-12']
        // 		},
        // 		{
        // 			month: 5,
        // 			deal: 1,
        // 			noDeal: 4,
        // 			dealDate: ['2018-05-1', '2018-05-06'],
        // 			noDealDate: ['2018-02-04', '2018-02-12']
        // 		},
        // 		{
        // 			month: 6,
        // 			deal: 15,
        // 			noDeal: 4,
        // 			dealDate: ['2018-02-11', '2018-02-02'],
        // 			noDealDate: ['2018-02-04', '2018-02-12']
        // 		},
        // 		{
        // 			month: 7,
        // 			deal: 19,
        // 			noDeal: 4,
        // 			dealDate: ['2018-02-11', '2018-02-02'],
        // 			noDealDate: ['2018-02-04', '2018-02-12']
        // 		},
        // 		{
        // 			month: 8,
        // 			deal: 1,
        // 			noDeal: 4,
        // 			dealDate: ['2018-02-11', '2018-02-02'],
        // 			noDealDate: ['2018-02-04', '2018-02-12']
        // 		},
        // 		{
        // 			month: 9,
        // 			deal: 18,
        // 			noDeal: 4,
        // 			dealDate: ['2018-02-11', '2018-02-02'],
        // 			noDealDate: ['2018-02-04', '2018-02-12']
        // 		},
        // 		{
        // 			month: 10,
        // 			deal: 15,
        // 			noDeal: 4,
        // 			dealDate: ['2018-02-11', '2018-02-02'],
        // 			noDealDate: ['2018-02-04', '2018-02-12']
        // 		}
        // 		,
        // 		{
        // 			month: 11,
        // 			deal: 11,
        // 			noDeal: 4,
        // 			dealDate: ['2018-02-11', '2018-02-02'],
        // 			noDealDate: ['2018-02-04', '2018-02-12']
        // 		}
        // 		,
        // 		{
        // 			month: 12,
        // 			deal: 14,
        // 			noDeal: 4,
        // 			dealDate: ['2018-02-11', '2018-02-02'],
        // 			noDealDate: ['2018-02-04', '2018-02-12']
        // 		}
        // 	]
        // }
        if (this.monthData.length > 0) {
            console.log(this.monthData);
            this.monthdataTop = [];
            this.monthdataBottom = [];
            for (var i = 0; i < 6; i++) {
                this.monthdataTop.push(this.monthData[i]);
            }
            for (var i = 6; i < 12; i++) {
                this.monthdataBottom.push(this.monthData[i]);
            }
            console.log(this.monthdataTop);
            console.log(this.monthdataBottom);
        }
    };
    HomePage.prototype.getmouthOrders = function () {
        var _this = this;
        var query = {
            year: this.curYear,
            account_id: this.account_id,
            staff_hotel_id: 0,
            month: this.checkmonth
        };
        this.orderlistsOrign = [];
        this.orderlists = [];
        this.service.getmouthOrders(query).then(function (data) {
            _this.orderlistsOrign = JSON.parse(data.order_data);
            _this.orderlists = JSON.parse(data.order_data);
        });
        // 假数据
        // this.orderlists = [
        // 	{
        // 		name: 'A12生成键值对的集合',
        // 		img: '../assets/imgs/index/bg.jpg',
        // 		detail: '北京浩瀚一方互联网科技有限责任公司年会'
        // 	},
        // 	{
        // 		name: '1生成键值对的集合',
        // 		img: '../assets/imgs/index/bg.jpg',
        // 		detail: '北京浩瀚一方互联网科技有限责任公司年会'
        // 	},
        // ]
    };
    HomePage.prototype.showYearOrders = function () {
        //获取当年订单
        this.getYearData();
        // this.getmouthOrders();
        this.yearVisible = true;
    };
    HomePage.prototype.showSingle = function (num) {
        this.getmouthOrders();
        this.checkpreload = {
            year: this.curYear,
            month: this.checkmonth
        };
        this.checkmonth = num;
        this.yearVisible = false;
        this.monthVisible = true;
        //获取当月订单
        this.getmouthOrders();
    };
    HomePage.prototype.hideYearModal = function () {
        this.yearVisible = false;
        this.monthVisible = false;
    };
    HomePage.prototype.gobackModal = function () {
        this.yearVisible = true;
        this.monthVisible = false;
    };
    HomePage.prototype.getPreYear = function () {
        this.curYear = this.curYear - 1;
        console.log(this.curYear);
    };
    HomePage.prototype.getNextYear = function () {
        this.curYear = this.curYear + 1;
        console.log(this.curYear);
    };
    HomePage.prototype.gotoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.gotoChart = function () {
        // this.navCtrl.push(ChartPage, { hallname: this.hallname });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__charts_salechart__["a" /* saleChartPage */], { hallname: this.hallname });
    };
    HomePage.prototype.gotoPics = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__show_pics__["a" /* PicsPage */], { spaceId: this.space.id, hallId: this.hallId, hallname: this.hallname });
    };
    HomePage.prototype.gotoViews = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__show_views__["a" /* ViewsPage */], { title: this.hallname + '720度全景展示', url: this.panorama_url });
    };
    HomePage.prototype.gotoCompanyIntro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__show_views__["a" /* ViewsPage */], { title: '公司介绍', url: 'http://crm.cike360.com/portal/index.php?r=background/company_introduction' });
    };
    HomePage.prototype.gotoServiceSystem = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__show_views__["a" /* ViewsPage */], { title: '服务体系', url: 'http://crm.cike360.com/portal/index.php?r=background/service_system' });
    };
    HomePage.prototype.gotoProducts = function () {
        if (this.login) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__products_food__["a" /* FoodPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }
    };
    HomePage.prototype.gotoAddOrder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__addorder__["a" /* AddOrderPage */]);
    };
    HomePage.prototype.gotoDetail = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__orderdetail__["a" /* OrderDetailPage */], { id: id });
    };
    HomePage.prototype.gotoFloat = function (item) {
        if (item.url != '') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__floatMenu__["a" /* FloatMenuPage */], { item: item });
        }
    };
    HomePage.prototype.setType = function (num) {
        this.ordertypevalue = num;
    };
    HomePage.prototype.checkHall = function (hall) {
        if (this.login) {
            if (hall == 0) {
                this.hallId = 0;
                this.hallname = '全部大厅';
                if (this.space && this.space.index_img) {
                    this.imgSrc = this.space.index_img || '';
                }
            }
            else {
                this.hallId = hall.id;
                this.hallname = hall.name;
                this.imgSrc = hall.img_url || '';
                this.panorama_url = hall.panorama_url || '';
            }
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('calendar', { read: __WEBPACK_IMPORTED_MODULE_2_ion2_calendar__["CalendarComponent"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ion2_calendar__["CalendarComponent"])
    ], HomePage.prototype, "calendarRef", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\pages\home\home.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>首页</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n\n<ion-content class="index-page" scroll="false">\n	<div *ngIf="imgSrc.length > 0" class="bgImg">\n		<img src={{imgSrc}} />\n	</div>\n	<div class="warn-screen">\n		<ion-card>\n			<ion-card-header>\n				检测到非横屏状态\n			</ion-card-header>\n			<ion-card-content>\n				竖屏下内容排版错乱，请切换到横屏，以获得更好体验\n			</ion-card-content>\n		</ion-card>\n	</div>\n	<div class="landscape">\n		<div class="logo">\n			<div class="trigle" (click)="gotoLogin()"></div>\n			<img src="" />\n		</div>\n		<div class="pattern"></div>\n		<div class="hall-name" *ngIf="space">\n			<h3>{{space.en_name}}</h3>\n			<h4>{{space.name}}</h4>\n			<p>{{space.slogan}}</p>\n		</div>\n		<div class="login-box" *ngIf="!login" (click)="gotoLogin();">\n			登录\n		</div>\n		<div class="view-box" *ngIf="login">\n			<div (click)="showYearOrders();">\n				<div>\n					<div class="iconBox">\n						<ion-icon name="ios-document-outline"></ion-icon>\n					</div>\n					查看订单\n				</div>\n			</div>\n			<div (click)="gotoCompanyIntro();">\n				<div class="whiteBg">\n					<div class="iconBox">\n						<ion-icon name="ios-book-outline"></ion-icon>\n					</div>\n					公司介绍\n				</div>\n			</div>\n			<div (click)="gotoServiceSystem();">\n				<div class="whiteBg">\n					<div class="iconBox">\n						<ion-icon name="ios-heart-outline"></ion-icon>\n					</div>\n					服务体系\n				</div>\n			</div>\n			<div (click)="gotoChart();">\n				<div>\n					<div class="iconBox">\n						<ion-icon name="ios-pie-outline"></ion-icon>\n					</div>\n					数据报表\n				</div>\n			</div>\n		</div>\n\n		<div class="pic-box" *ngIf="login && hallId!=0">\n			<div class="btn-out" (click)="gotoPics();">\n				照片展示\n			</div>\n			<div class="btn-out" (click)="gotoViews();">\n				720度全景展示\n			</div>\n		</div>\n\n		<div class="foot-memu" *ngIf="login">\n			<div class="hall-box home-menu" *ngIf="space" [ngClass]="{\'active\': hallId == 0}" (click)="checkHall(0);">\n				<span class="menuImg">\n					<img src="{{space.index_img}}">\n				</span>\n				<div>首页</div>\n			</div>\n			<div class="hall-box diamond-hall" *ngFor="let hall of preHallList" [ngClass]="{\'active\': hallId == hall.id}" (click)="checkHall(hall);">\n				<span class="menuImg">\n					<img src="{{hall.img_url}}">\n				</span>\n				<div>{{hall.name}}</div>\n			</div>\n			<div class="center-product" (click)="gotoProducts();">\n				<!-- <div>产品体系</div> -->\n			</div>\n			<div class="hall-box crystal-hall" *ngFor="let hall of afterHallList" [ngClass]="{\'active\': hallId == hall.id}" (click)="checkHall(hall);">\n				<span class="menuImg">\n					<img src="{{hall.img_url}}">\n				</span>\n				<div>{{hall.name}}</div>\n			</div>\n		</div>\n	</div>\n\n	<div class="calendarModal" [ngClass]="{\'smallModal\': monthVisible == true}" *ngIf="yearVisible || monthVisible">\n		<div class="modalInner">\n			<span class="hidebtn" (click)="hideYearModal()">\n				<ion-icon name="close"></ion-icon>\n			</span>\n\n			<ion-grid *ngIf="yearVisible">\n				<div class="modalTop">\n					<ion-row>\n						<ion-col col-5 class="left">\n							<ion-row>\n								<ion-col col-4 class="hallselect">\n									<ion-select [(ngModel)]="hallcheck">\n										<ion-option value="0" selected="true">全部大厅</ion-option>\n										<ion-option value="item.id" *ngFor="let item of hotelList">{{item.name}}</ion-option>\n									</ion-select>\n									<!-- <span class="hallName">{{hallname}}</span>  -->\n								</ion-col>\n								<ion-col col-8>\n									<span>| 已定{{yearDeal}}场，待定{{yearNoDeal}}场</span>\n								</ion-col>\n							</ion-row>\n						</ion-col>\n						<ion-col col-5 class="center">\n							<button ion-button (click)="getPreYear()">\n								<ion-icon name="arrow-back"></ion-icon>\n							</button>\n							<span>{{curYear}}年</span>\n							<button ion-button (click)="getNextYear()">\n								<ion-icon name="arrow-forward"></ion-icon>\n							</button>\n						</ion-col>\n						<ion-col col-2 class="right">\n							<button ion-button (click)="gotoAddOrder()">新建订单</button>\n						</ion-col>\n					</ion-row>\n\n				</div>\n\n				<ion-slides pager showWhen="portrait">\n					<ion-slide>\n						<ion-row>\n							<ion-col col-4 *ngFor="let item of monthdataTop" (click)="showSingle(item.month)">\n								<div class="monthItem">\n									<ion-item no-lines class="calTitle">\n										<span>{{item.month}}月 | </span>已定{{item.deal?item.deal:0}}单，待定{{item.noDeal?item.noDeal:0}}单\n										<span item-end>\n											<ion-icon name="arrow-forward"></ion-icon>\n										</span>\n									</ion-item>\n									<dfn class="xmb-calendar" [preload]="{dealDate:item.dealDate,nodealDate:item.noDealDate,year:curYear,month:item.month}"></dfn>\n								</div>\n							</ion-col>\n						</ion-row>\n					</ion-slide>\n\n					<ion-slide>\n						<ion-row>\n							<ion-col col-4 *ngFor="let item of monthdataBottom" (click)="showSingle(item.month)">\n								<div class="monthItem">\n									<ion-item no-lines class="calTitle">\n										<span>{{item.month}}月 | </span>已定{{item.deal?item.deal:0}}单，待定{{item.noDeal?item.noDeal:0}}单\n										<span item-end>\n											<ion-icon name="arrow-forward"></ion-icon>\n										</span>\n									</ion-item>\n									<dfn class="xmb-calendar" [preload]="{dealDate:item.dealDate,nodealDate:item.noDealDate,year:curYear,month:item.month}"></dfn>\n								</div>\n							</ion-col>\n						</ion-row>\n					</ion-slide>\n				</ion-slides>\n\n				<div showWhen="landscape">\n					<ion-row>\n						<ion-col col-2 *ngFor="let item of monthdataTop" (click)="showSingle(item.month)">\n							<div class="monthItem">\n								<ion-item no-lines class="calTitle">\n									<span>{{item.month}}月 | </span>已定{{item.deal?item.deal:0}}单，待定{{item.noDeal?item.noDeal:0}}单\n									<span item-end>\n										<ion-icon name="arrow-forward"></ion-icon>\n									</span>\n								</ion-item>\n								<dfn class="xmb-calendar" [preload]="{dealDate:item.dealDate,nodealDate:item.noDealDate,year:curYear,month:item.month}"></dfn>\n							</div>\n						</ion-col>\n						<ion-col col-2 *ngFor="let item of monthdataBottom" (click)="showSingle(item.month)">\n							<div class="monthItem">\n								<ion-item no-lines class="calTitle">\n									<span>{{item.month}}月 | </span>已定{{item.deal?item.deal:0}}单，待定{{item.noDeal?item.noDeal:0}}单\n									<span item-end>\n										<ion-icon name="arrow-forward"></ion-icon>\n									</span>\n								</ion-item>\n								<dfn class="xmb-calendar" [preload]="{dealDate:item.dealDate,nodealDate:item.noDealDate,year:curYear,month:item.month}"></dfn>\n							</div>\n						</ion-col>\n					</ion-row>\n				</div>\n\n			</ion-grid>\n\n			<div *ngIf="monthVisible">\n				<div class="modalTop">\n					<ion-row>\n						<ion-col col-4 class="left">\n							<button ion-button class="backBtn" (click)="gobackModal()" clear>\n								<ion-icon name="arrow-back"></ion-icon>\n							</button>\n						</ion-col>\n						<ion-col col-4 class="txtCenter">\n							{{hallname}}\n						</ion-col>\n						<ion-col col-4 class="right">\n							<button ion-button (click)="gotoAddOrder()">新建订单</button>\n						</ion-col>\n					</ion-row>\n				</div>\n				<ion-grid>\n					<ion-row class="searchRow">\n						<ion-col col-6>\n							<div class="ordertype">\n								<button ion-button [ngClass]="{\'active\': ordertypevalue == \'0\'}" (click)="setType(\'0\')">婚礼 </button>\n								<button ion-button [ngClass]="{\'active\': ordertypevalue == \'1\'}" (click)="setType(\'1\')">会议 </button>\n								<button ion-button [ngClass]="{\'active\': ordertypevalue == \'2\'}" (click)="setType(\'2\')">宴会 </button>\n							</div>\n							<!-- <ion-segment [(ngModel)]="pet">\n								<ion-segment-button value="wedding" (click)="getmouthOrders()">\n									婚礼\n								</ion-segment-button>\n								<ion-segment-button value="meeting" (click)="getmouthOrders()">\n									会议\n								</ion-segment-button>\n								<ion-segment-button value="dinner" (click)="getmouthOrders()">\n									宴会\n								</ion-segment-button>\n							</ion-segment> -->\n						</ion-col>\n						<ion-col col-6 class="paddingR">\n							<ion-searchbar class="calSearch" (ionInput)="getItems($event)" placeholder="请输入要搜索的内容"></ion-searchbar>\n						</ion-col>\n					</ion-row>\n					<ion-row class="contentAll">\n						<ion-col col-4>\n							<div class="CalRBox">\n								<h3>{{curYear}}年{{checkmonth}}月</h3>\n								<dfn class="xmb-calendar" [preload]="{dealDate:monthData[checkmonth-1].dealDate,nodealDate:monthData[checkmonth-1].noDealDate,year:curYear,month:checkmonth}"></dfn>\n							</div>\n							<div class="marks">\n								<span>红色-已交定金</span>\n								<span>绿色-未交·定金</span>\n							</div>\n						</ion-col>\n						<ion-col col-8 class="paddingL">\n							<ion-list no-lines>\n								<ion-item class="orderItem" no-lines *ngFor="let item of orderlists">\n									<h2 (click)="gotoDetail(item.order_id)">{{item.order_name}}</h2>\n									<p (click)="gotoDetail(item.order_id)">\n										<span> {{item.order_date}}</span> |\n										<span>{{item.designer_name}}</span> |\n										<span>距离活动还有\n											<span class="red">{{item.order_day}}</span>天</span>\n									</p>\n									<span item-end class="red" *ngIf="item.order_status != 0 && item.order_status != 1 ">已交定金</span>\n									<span item-end *ngIf="item.order_status != 0 || item.order_status != 1 ">未交定金</span>\n\n									<button ion-button clear style="width:2em; color:#999" item-end>\n										<ion-icon name="trash" class="ifshow"></ion-icon>\n									</button>\n								</ion-item>\n							</ion-list>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</div>\n		</div>\n	</div>\n\n	<div class="floatBtn" (click)="ifFloat = !ifFloat">\n		<ion-icon name="menu"></ion-icon>\n	</div>\n	<div class="floatMenu" *ngIf="ifFloat">\n		<ion-item no-lines>\n			<button ion-button clear item-end (click)="ifFloat = !ifFloat">\n				<ion-icon name="close"></ion-icon>\n			</button>\n		</ion-item>\n		<div class="itemCell" no-lines [ngClass]="{\'subcell\': item.name == \'找资源\'}" *ngFor="let item of floatList" (click)="gotoFloat(item)">\n			{{item.name}}\n			<div class="subBox">\n				<div class="subcell" no-lines *ngFor="let value of subList" (click)="gotoFloat(value)">\n					{{value.name}}\n				</div>\n			</div>\n		</div>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_11__providers_home__["a" /* HomeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_11__providers_home__["a" /* HomeService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(74);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartService = (function (_super) {
    __extends(ChartService, _super);
    function ChartService(injector) {
        return _super.call(this, injector) || this;
    }
    // 察看销售数据报表
    ChartService.prototype.getSaleData = function (query) {
        var url = 'portal/index.php?r=content/FormatData';
        return this.get(url, query);
    };
    // 查看当年财务报表
    ChartService.prototype.getPricelist = function () {
        var query = {
            account_id: this.general.account_id
        };
        var url = 'portal/index.php?r=background/GetThisYearFinance';
        return this.get(url, query);
    };
    // 查看执行成本
    ChartService.prototype.getProCost = function (id) {
        var query = {
            order_id: id
        };
        var url = 'portal/index.php?r=background/GetOrderCost';
        return this.get(url, query);
    };
    // 新增执行成本
    ChartService.prototype.formCost = function (form) {
        var url = 'portal/index.php?r=background/AddOrderSupplierPayment';
        return this.post(url, form);
    };
    //获取业绩分配
    ChartService.prototype.getGoallist = function (id) {
        var query = {
            account_id: this.general.account_id,
            order_id: id
        };
        var url = 'portal/index.php?r=background/GetAchievementDistributionList';
        return this.get(url, query);
    };
    //修改业绩分配
    ChartService.prototype.editDistribution = function (query) {
        var url = 'portal/index.php?r=background/EditAchievementDistribution';
        return this.post(url, query);
    };
    ChartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], ChartService);
    return ChartService;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseService */]));

//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return saleChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chart__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var saleChartPage = (function () {
    function saleChartPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.staff = 0;
        this.curYear = new Date().getFullYear();
        this.pet = 'wedding';
        this.proList = [];
        this.modalVisible = false;
        this.init();
    }
    //初始渲染
    saleChartPage.prototype.init = function () {
        var _this = this;
        var query = {
            account_id: localStorage.getItem('account_id'),
            staff_id: 0,
            type: 'sales',
            year: this.curYear,
        };
        this.service.getSaleData(query).then(function (data) {
            if (data.status == 1) {
                _this.proList = data.arr_staff_sales;
                _this.total_sale = data.hotel_total_sales;
                _this.x_Data = data.x_Data;
                _this.month_data = data.month_data;
                _this.max_y = data.max_y;
                _this.cur_month_sale = data.cur_month_sale;
                _this.account_target = data.account_target;
                _this.rate = data.rate;
                _this.initchart();
            }
        });
    };
    //渲染销售表格
    saleChartPage.prototype.getXY = function () {
        var _this = this;
        var query = {
            account_id: localStorage.getItem('account_id'),
            staff_id: this.staff,
            type: this.pet,
            year: this.curYear,
        };
        this.service.getSaleData(query).then(function (data) {
            if (data.status == 1) {
                _this.x_Data = data.x_Data;
                _this.month_data = data.month_data;
                _this.max_y = data.max_y;
                _this.initchart();
            }
        });
    };
    // ionViewDidEnter() {
    // 	// this.initchart();
    // 	setTimeout(() => {
    // 		this.initchart();
    // 		console.log("为空，暂时进行延时处理，后期解决");
    // 	}, 300);
    // }
    saleChartPage.prototype.initchart = function () {
        var ec = __WEBPACK_IMPORTED_MODULE_2_echarts__;
        // 目标达成率图表
        var targets = document.getElementById('target1');
        this.targetschart = ec.init(targets);
        var percent = this.rate;
        var targetoption = {
            backgroundColor: 'transparent',
            title: {
                // text: (percent * 100) + '%',
                text: (percent * 100),
                x: 'center',
                y: '35%',
                textStyle: {
                    color: '#f17324',
                    fontWeight: 'bolder',
                    fontSize: 18,
                },
                subtext: '本月目标完成率',
                subtextStyle: {
                    fontSize: 14,
                    color: '#aaa'
                }
            },
            legend: {
                x: 'center',
                y: 'bottom',
                data: ['complete', 'cancel'],
                textStyle: {
                    color: '#fff'
                },
                selectedMode: true,
                orient: "vertical",
            },
            series: [{
                    type: 'pie',
                    radius: ['80%', '90%'],
                    silent: true,
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    data: [{
                            value: 1,
                            itemStyle: {
                                normal: {
                                    color: '#e7e7e7',
                                }
                            }
                        }],
                    animation: false
                },
                {
                    name: 'main',
                    type: 'pie',
                    radius: ['80%', '90%'],
                    label: {
                        normal: {
                            // color: '#ff0000',
                            show: false,
                        }
                    },
                    data: this.getData(percent),
                    animationEasingUpdate: 'cubicInOut',
                    animationDurationUpdate: 500
                }
            ]
        };
        this.targetschart.setOption(targetoption);
        //销售目标图表
        var staffs = document.getElementById('staff');
        this.staffchart = ec.init(staffs);
        var xAxisData = this.x_Data;
        var data = this.month_data;
        var max_y = this.max_y;
        // for (var i = 1; i < 13; i++) {
        // 	xAxisData.push(i+ '月');
        // 	data.push(this.month_data[i]);
        // }
        var stafftoption = {
            backgroundColor: '#fff',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        opacity: 0
                    }
                },
                formatter: function (prams) {
                    return "额度:" + prams[0].data + "万元";
                }
            },
            xAxis: [{
                    data: xAxisData,
                    axisLabel: {
                        textStyle: {
                            color: '#444'
                        }
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                        alignWithLabel: true
                    },
                    splitLine: {
                        show: false
                    }
                }, {
                    // 辅助 x 轴
                    show: false,
                    data: xAxisData
                }],
            yAxis: {
                max: max_y,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#eee',
                    }
                },
            },
            series: [
                {
                    // 辅助系列
                    type: 'bar',
                    silent: true,
                    xAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: '#eee'
                        }
                    },
                    barWidth: 10,
                    data: data.map(function (val) {
                        return val;
                    })
                }, {
                    type: 'bar',
                    data: data,
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: '#f16f31',
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 20
                        }
                    }
                }
            ]
        };
        this.staffchart.setOption(stafftoption);
    };
    saleChartPage.prototype.getData = function (percent) {
        return [{
                value: percent,
                itemStyle: {
                    normal: {
                        color: '#f17324',
                    }
                }
            }, {
                value: 1 - percent,
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }];
    };
    saleChartPage.prototype.getPreYear = function () {
        this.curYear = this.curYear - 1;
        this.getXY();
    };
    saleChartPage.prototype.getNextYear = function () {
        this.curYear = this.curYear + 1;
        this.getXY();
    };
    saleChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-salechart',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\pages\charts\salechart.html"*/'<ion-header>\n\n	<ion-navbar color="white">\n\n		<ion-title>销售报表</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-grid class="nopadding">\n\n		<ion-row>\n\n			<ion-col col-2 class="typebg">\n\n				<dfn class="xmb-chartmenu" [preload]="{active:\'sales\'}"></dfn>\n\n			</ion-col>\n\n			<ion-col col-10 class="chart-box">\n\n				<!-- 销售数据 -->\n\n				<div class="greyBg">\n\n					<ion-row class="topCharts">\n\n						<div class="whiteBoard co3">\n\n							<div class="inner">\n\n								<h3>目标达成率(月度)</h3>\n\n								<div id="target1"></div>\n\n								<div class="tagMark">\n\n									<p><span class="orange"></span>本月销售额： {{cur_month_sale}}</p>\n\n									<p><span class="grey"></span>本月目标： {{account_target}}</p>\n\n								</div>\n\n							</div>\n\n						</div>\n\n						<div class="whiteBoard co6">\n\n							<div class="inner">\n\n								<h3>销售业绩排名</h3>\n\n								<!-- <div id="achievement"></div> -->\n\n								<div class="progressBox" *ngFor="let item of proList">\n\n									<div class="label">\n\n										{{item.name}}\n\n									</div>\n\n									<div class="perTxt">{{item.price}} 万元</div>\n\n									<div class="progress">\n\n										<div class="ifshow">{{item.name}}{{item.price}}元</div>\n\n										<div class="Bar" [ngStyle]="{\'width\': item.process+\'%\'}">\n\n											<!-- <div>{{item.progress}}%</div> -->\n\n										</div>\n\n									</div>\n\n								</div>\n\n							</div>\n\n						</div>\n\n						<!-- </ion-col> -->\n\n						<!-- <ion-col col-3> -->\n\n						<div class="whiteBoard co2 sales">\n\n							<div class="inner">\n\n								<h3>年度累计销售额</h3>\n\n								<h1>{{total_sale}} 万元</h1>\n\n								<div class="iconimg">\n\n									<ion-icon name="trending-up" item-start></ion-icon>\n\n									<!-- <ion-icon name="trending-down" item-start></ion-icon> -->\n\n								</div>\n\n							</div>\n\n						</div>\n\n						<!-- </ion-col> -->\n\n					</ion-row>\n\n\n\n					<ion-row class="staffCharts">\n\n						<ion-col col-4>\n\n							<ion-segment class="museg" [(ngModel)]="pet" (ngModelChange)=\'getXY()\'>\n\n								<ion-segment-button value="sales">\n\n									销售额（万元）\n\n								</ion-segment-button>\n\n								<ion-segment-button value="num">\n\n									订单统计（个）\n\n								</ion-segment-button>\n\n							</ion-segment>\n\n						</ion-col>\n\n						<ion-col col-4 class="center">\n\n							<button ion-button (click)="getPreYear()">\n\n								<ion-icon name="arrow-back"></ion-icon>\n\n							</button>\n\n							<span>{{curYear}}年</span>\n\n							<button ion-button (click)="getNextYear()">\n\n								<ion-icon name="arrow-forward"></ion-icon>\n\n							</button>\n\n							<!-- <ion-datetime displayFormat="YYYY" [(ngModel)]="chartYear"></ion-datetime> -->\n\n						</ion-col>\n\n						<ion-col col-4>\n\n							<ion-item no-lines>\n\n								<ion-select [(ngModel)]="staff" (ngModelChange)=\'getXY()\'>\n\n									<ion-option value="0">全部员工</ion-option>\n\n									<ion-option value="item.id" *ngFor="let item of proList">{{item.name}}</ion-option>\n\n								</ion-select>\n\n							</ion-item>\n\n						</ion-col>\n\n					</ion-row>\n\n\n\n					<div id="staff"></div>\n\n				</div>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n\n\n	<div class="calendarModal" *ngIf="modalVisible">\n\n		<div class="modalInner">\n\n			<span class="hidebtn" (click)="hideModal()">\n\n				<ion-icon name="close"></ion-icon>\n\n			</span>\n\n			<h3 class="modalTitle">\n\n				目标设定\n\n			</h3>\n\n\n\n			<div class="formBox">\n\n				<form #ngform="ngForm" class="formBox">\n\n					<ion-grid>\n\n						<ion-row>\n\n							<ion-col col-6 class="months">\n\n								<div no-lines class="title">\n\n									<h2>月度销售目标</h2>\n\n									<p>累计: 1990万元</p>\n\n								</div>\n\n								<ion-item no-lines>\n\n									<ion-label>1月</ion-label>\n\n									<ion-input type="text" name="one" clearInput ngModel>\n\n									</ion-input>\n\n									<span class="unit" item-end>万元</span>\n\n								</ion-item>\n\n								<ion-item no-lines>\n\n									<ion-label>3月</ion-label>\n\n									<ion-input type="text" name="two" clearInput ngModel>\n\n									</ion-input>\n\n									<span class="unit" item-end>万元</span>\n\n								</ion-item>\n\n								<ion-item no-lines>\n\n									<ion-label>4月</ion-label>\n\n									<ion-input type="text" name="three" clearInput ngModel>\n\n									</ion-input>\n\n									<span class="unit" item-end>万元</span>\n\n								</ion-item>\n\n								<ion-item no-lines>\n\n									<ion-label>5月</ion-label>\n\n									<ion-input type="text" name="three" clearInput ngModel>\n\n									</ion-input>\n\n									<span class="unit" item-end>万元</span>\n\n								</ion-item>\n\n								<ion-item no-lines>\n\n									<ion-label>6月</ion-label>\n\n									<ion-input type="text" name="three" clearInput ngModel>\n\n									</ion-input>\n\n									 <span class="unit" item-end>万元</span>\n\n								</ion-item>\n\n								<ion-item no-lines>\n\n									<ion-label>7月</ion-label>\n\n									<ion-input type="text" name="three" clearInput ngModel>\n\n									</ion-input>\n\n									<span class="unit" item-end>万元</span>\n\n								</ion-item>\n\n							</ion-col>\n\n							<ion-col col-6 class="peoles">\n\n								<div no-lines class="title">\n\n									<h2>目标分解</h2>\n\n									<p>累计: 90%</p>\n\n								</div>\n\n								<ion-item no-lines>\n\n									<ion-label>吴辉</ion-label>\n\n									<ion-input type="text" name="name1" clearInput ngModel>\n\n									</ion-input>\n\n									<span class="unit" item-end>%</span>\n\n								</ion-item>\n\n								<ion-item no-lines>\n\n									<ion-label>吴辉</ion-label>\n\n									<ion-input type="text" name="name1" clearInput ngModel>\n\n									</ion-input>\n\n									<span class="unit" item-end>%</span>\n\n								</ion-item>\n\n								<ion-item no-lines>\n\n									<ion-label>吴辉</ion-label>\n\n									<ion-input type="text" name="name1" clearInput ngModel>\n\n									</ion-input>\n\n									<span class="unit" item-end>%</span>\n\n								</ion-item>\n\n								<ion-item no-lines>\n\n									<ion-label>吴辉</ion-label>\n\n									<ion-input type="text" name="name1" clearInput ngModel>\n\n									</ion-input>\n\n									<span class="unit" item-end>%</span>\n\n								</ion-item>\n\n								<ion-item no-lines>\n\n									<ion-label>吴辉</ion-label>\n\n									<ion-input type="text" name="name1" clearInput ngModel>\n\n									</ion-input>\n\n									<span class="unit" item-end>%</span>\n\n								</ion-item>\n\n								<ion-item no-lines>\n\n									<ion-label>吴辉</ion-label>\n\n									<ion-input type="text" name="name1" clearInput ngModel>\n\n									</ion-input>\n\n									<span class="unit" item-end>%</span>\n\n								</ion-item>\n\n							</ion-col>\n\n						</ion-row>\n\n						<ion-row class="subRow">\n\n							<ion-col col-12>\n\n								<button ion-button class="blckBtn" [disabled]="!ngform.valid" (click)="formSubmit(ngform.value)">\n\n									确定\n\n								</button>\n\n							</ion-col>\n\n						</ion-row>\n\n					</ion-grid>\n\n				</form>\n\n			</div>\n\n		</div>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\pages\charts\salechart.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_chart__["a" /* ChartService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_chart__["a" /* ChartService */]])
    ], saleChartPage);
    return saleChartPage;
}());

//# sourceMappingURL=salechart.js.map

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 231;

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 273;

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeddingDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeddingDetailPage = (function () {
    function WeddingDetailPage(navCtrl, navParams, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        // console.log(this.navParams.get('id'));
        this.name = this.navParams.get('name');
        if (this.navParams.get('id')) {
            this.id = this.navParams.get('id');
        }
        this.getUrl();
    }
    WeddingDetailPage.prototype.getUrl = function () {
        switch (this.name) {
            case '色彩定位':
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://crm.cike360.com/portal/index.php?r=background/color_fix_list&order_id=&token=2223009");
                break;
            case '风格定位':
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://crm.cike360.com/portal/index.php?r=background/style_fix_list&order_id=&token=2223009");
                break;
            case '婚礼统筹':
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://crm.cike360.com/portal/index.php?r=background/tongchou&order_id=5027");
                break;
            case '场地布置':
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://crm.cike360.com/portal/index.php?r=background/scene_diy&order_id=5149&token=2223009");
                break;
            case '详情':
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://crm.cike360.com/portal/index.php?r=background/style_fix&hole_case_id=&38&type=show");
                break;
            case '编辑套餐':
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://crm.cike360.com/portal/index.php?r=background/style_fix&hole_case_id=&38&type=edit");
                break;
            case '新增套餐方案':
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://crm.cike360.com/portal/index.php?r=background/style_fix&hole_case_id=&38&type=edit");
                break;
            case '新增套餐本地':
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://crm.cike360.com/portal/index.php?r=background/style_fix&hole_case_id=&38&type=edit");
                break;
            case '方案库':
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://crm.cike360.com/portal/index.php?r=background/style_fix&hole_case_id=&38&type=edit");
                break;
            case '本地上传':
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://crm.cike360.com/portal/index.php?r=background/style_fix&hole_case_id=&38&type=edit");
                break;
            default:
                break;
        }
    };
    WeddingDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-weddingdetail',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\pages\products\weddingIframe.html"*/'<ion-header>\n	<ion-navbar color="white">\n		<ion-title>{{name}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<iframe [src]=url></iframe>\n\n	<!-- <iframe src="http://crm.cike360.com/portal/index.php?r=background/color_fix_list&order_id=&token=2223009"></iframe> -->\n	<!-- <iframe src="http://crm.cike360.com/portal/index.php?r=background/style_fix_list&order_id=&token=2223009"></iframe> -->\n	<!-- <iframe src="http://crm.cike360.com/portal/index.php?r=background/tongchou&order_id=5027"></iframe> -->\n</ion-content>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\pages\products\weddingIframe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], WeddingDetailPage);
    return WeddingDetailPage;
}());

//# sourceMappingURL=weddingIframe.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFoods; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditFoods = (function () {
    function EditFoods(navCtrl, navParams, alertCtrl, loadingCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.account_id = localStorage.getItem('account_id');
        this.foodslist = [];
        this.foodchecks = []; //已选菜品模块儿显示的菜
        this.chooselist = []; //
        this.dishType = [];
        this.setTypeValue = 0;
        this.chooseTypeValue = 0;
        this.total = 0;
        this.cold = 0;
        this.hot = 0;
        this.soup = 0;
        this.rice = 0;
        this.pName = '';
        this.pPrice = '';
        this.pDes = '';
        this.pCost = '';
        this.pUnit = '';
        this.typeId = '';
        this.ifeditType = false;
        this.modalVisible = false;
        this.menuId = this.navParams.get('menuId');
        this.selectDishType = 0;
        this.getproducts(0);
        this.getMenuDetail(this.menuId);
        // 虚拟数据
        // this.chooselist = [
        // 	{
        // 		id: '1',
        // 		name:' this.foodslist[index].name',
        // 		remark: 'this.foodslist[index].remark',
        // 		price: '1000000',
        // 		type: 'this.foodslist[index].type',
        // 		amount: 1
        // 	},
        // 	{
        // 		id: '1',
        // 		name:' this.foodslist[index].name',
        // 		remark: 'this.foodslist[index].remark',
        // 		price: '1000000',
        // 		type: 'this.foodslist[index].type',
        // 		amount: 1
        // 	},{
        // 		id: '1',
        // 		name:' this.foodslist[index].name',
        // 		remark: 'this.foodslist[index].remark',
        // 		price: '1000000',
        // 		type: 'this.foodslist[index].type',
        // 		amount: 1
        // 	},{
        // 		id: '1',
        // 		name:' this.foodslist[index].name',
        // 		remark: 'this.foodslist[index].remark',
        // 		price: '1000000',
        // 		type: 'this.foodslist[index].type',
        // 		amount: 1
        // 	},{
        // 		id: '1',
        // 		name:' this.foodslist[index].name',
        // 		remark: 'this.foodslist[index].remark',
        // 		price: '1000000',
        // 		type: 'this.foodslist[index].type',
        // 		amount: 1
        // 	},{
        // 		id: '1',
        // 		name:' this.foodslist[index].name',
        // 		remark: 'this.foodslist[index].remark',
        // 		price: '1000000',
        // 		type: 'this.foodslist[index].type',
        // 		amount: 1
        // 	},{
        // 		id: '1',
        // 		name:' this.foodslist[index].name',
        // 		remark: 'this.foodslist[index].remark',
        // 		price: '1000000',
        // 		type: 'this.foodslist[index].type',
        // 		amount: 1
        // 	},{
        // 		id: '1',
        // 		name:' this.foodslist[index].name',
        // 		remark: 'this.foodslist[index].remark',
        // 		price: '1000000',
        // 		type: 'this.foodslist[index].type',
        // 		amount: 1
        // 	},{
        // 		id: '1',
        // 		name:' this.foodslist[index].name',
        // 		remark: 'this.foodslist[index].remark',
        // 		price: '1000000',
        // 		type: 'this.foodslist[index].type',
        // 		amount: 1
        // 	},{
        // 		id: '1',
        // 		name:' this.foodslist[index].name',
        // 		remark: 'this.foodslist[index].remark',
        // 		price: '1000000',
        // 		type: 'this.foodslist[index].type',
        // 		amount: 1
        // 	},{
        // 		id: '1',
        // 		name:' this.foodslist[index].name',
        // 		remark: 'this.foodslist[index].remark',
        // 		price: '1000000',
        // 		type: 'this.foodslist[index].type',
        // 		amount: 1
        // 	},
        // ];
    }
    //获取当前菜单的菜品
    EditFoods.prototype.getMenuDetail = function (menuId) {
        var _this = this;
        this.service.getMenuDetail(menuId).then(function (data) {
            if (data.status == 1) {
                for (var i = 0; i < data['dishes'].length; i++) {
                    var t = {
                        id: data['dishes'][i]['id'],
                        type: data['dishes'][i]['service_type'],
                        img: data['dishes'][i]['ref_pic_url'],
                        name: data['dishes'][i]['product_name'],
                        remark: data['dishes'][i]['description'],
                        price: data['dishes'][i]['price'],
                        amount: data['dishes'][i]['dishes_count']
                    };
                    _this.foodchecks.push(t);
                    _this.chooselist.push(t);
                }
                ;
            }
            _this.calcTotalPrice();
        });
    };
    //全部菜品按分类筛选
    EditFoods.prototype.getproducts = function (i) {
        var _this = this;
        this.foodslist = [];
        this.service.getProductByType(i).then(function (data) {
            console.log(data);
            if (data.status == 1) {
                for (var i_1 = 0; i_1 < data['list'].length; i_1++) {
                    var t = {
                        id: data['list'][i_1]['id'],
                        type: data['list'][i_1]['service_type'],
                        img: data['list'][i_1]['ref_pic_url'],
                        name: data['list'][i_1]['product_name'],
                        remark: data['list'][i_1]['description'],
                        price: data['list'][i_1]['price']
                    };
                    _this.foodslist.push(t);
                }
                ;
                _this.dishType = data['type'];
            }
        });
    };
    EditFoods.prototype.editeditFood = function (id) {
        console.log(id);
    };
    EditFoods.prototype.editType = function () {
        console.log("aaaa");
        this.ifeditType = true;
    };
    EditFoods.prototype.hideModal = function () {
        this.ifeditType = false;
        this.modalVisible = false;
    };
    EditFoods.prototype.delTypeA = function () {
        var alert = this.alertCtrl.create({
            title: '确定删除?',
            // subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: [{
                    text: '确定',
                    handler: function (data) {
                    }
                },]
        });
        alert.present();
    };
    EditFoods.prototype.save = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "保存中……",
        });
        loader.present();
        this.service.createMenu(this.chooselist, this.menuId).then(function (data) {
            alert(1);
            _this.navCtrl.pop();
            loader.dismiss();
        });
    };
    EditFoods.prototype.getChooseList = function () {
        var _this = this;
        this.chooselist = [];
        this.foodchecks.map(function (item, index) {
            if (item) {
                var choseitem = {
                    id: _this.foodslist[index].id,
                    name: _this.foodslist[index].name,
                    remark: _this.foodslist[index].remark,
                    price: _this.foodslist[index].price,
                    type: _this.foodslist[index].type,
                    amount: 1
                };
                _this.chooselist.push(choseitem);
            }
        });
        this.calcTotalPrice();
    };
    EditFoods.prototype.delChoose = function (id, name) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '确定删除' + name + '?',
            // subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: [{
                    text: '确定',
                    handler: function (data) {
                        if (_this.chooselist.length > 0) {
                            _this.chooselist.map(function (item, index) {
                                if (item.id == id) {
                                    var delname_1 = _this.chooselist[index].name;
                                    _this.foodslist.map(function (item2, index) {
                                        if (item2.name == delname_1) {
                                            _this.foodchecks[index] = false;
                                        }
                                    });
                                    _this.chooselist.splice(index, 1);
                                }
                            });
                        }
                        _this.calcTotalPrice();
                    }
                },]
        });
        alert.present();
        console.log(id);
    };
    //计算菜单总价
    EditFoods.prototype.calcTotalPrice = function () {
        var _this = this;
        console.log("calc");
        this.total = 0;
        this.cold = 0;
        this.hot = 0;
        this.soup = 0;
        this.rice = 0;
        this.chooselist.map(function (item, index) {
            _this.total = _this.total + item.price * item.amount;
            console.log("");
            switch (item.type) {
                case '2':
                    _this.cold++;
                    console.log("凉菜");
                    break;
                case '122':
                    _this.hot++;
                    console.log("热菜");
                    break;
                case '124':
                    _this.soup++;
                    console.log("汤羹");
                    break;
                case '125':
                    _this.rice++;
                    console.log("主食");
                    break;
                default:
                    break;
            }
        });
    };
    //全部菜品的标签筛选
    EditFoods.prototype.setType = function (num) {
        this.setTypeValue = num;
        this.getproducts(num);
    };
    //已选菜品的标签筛选
    EditFoods.prototype.chooseType = function (num) {
        var _this = this;
        this.chooseTypeValue = num;
        this.chooselist = [];
        this.foodchecks.map(function (item, index) {
            if (item) {
                var choseitem = {
                    id: _this.foodslist[index].id,
                    name: _this.foodslist[index].name,
                    remark: _this.foodslist[index].remark,
                    price: _this.foodslist[index].price,
                    type: _this.foodslist[index].type,
                    amount: 1
                };
                if (num == 0 || num == item.type) {
                    _this.chooselist.push(choseitem);
                }
                ;
            }
        });
    };
    EditFoods.prototype.delSure = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '确定删除当前套餐?',
            // subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: [{
                    text: '确定',
                    handler: function (data) {
                        _this.navCtrl.pop();
                    }
                },]
        });
        alert.present();
    };
    EditFoods.prototype.addFood = function () {
        this.modalVisible = true;
    };
    EditFoods.prototype.newP = function (form) {
        var _this = this;
        form.img = this.imgUpLoad;
        this.service.addDishes(this.account_id, this.selectDishType, form.name, form.price, form.cost, form.unit, form.detail, form.img).then(function (data) {
            _this.modalVisible = false;
        });
    };
    // 上传图片传回base64
    EditFoods.prototype.uploadfn2 = function (data) {
        this.imgUpLoad = data;
    };
    EditFoods = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editfood',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\pages\products\editfood.html"*/'<ion-header>\n	<ion-navbar color="white">\n		<ion-title>编辑菜单</ion-title>\n		<ion-buttons end>\n			<button ion-button class="newBtn" (click)="delSure()">\n				删除套餐\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-row>\n		<ion-col col-4 class="foodbg">\n			<div class="sideBg">\n				<div class="sideBtn">\n					<button class="blue" [ngClass]="{\'activeside\': setTypeValue == \'0\'}" (click)="setType(\'0\')">全部 </button>\n					<button class="yellow" [ngClass]="{\'activeside\': setTypeValue == \'item.id\'}" (click)="setType(\'item.id\')" *ngFor="let item of dishType">{{item.name}} </button>\n				</div>\n			</div>\n			<div class="mainList">\n				<div class="topBtnBox">\n					<button ion-button color="light" (click)="editType()">编辑分类 </button>\n					<button ion-button color="light" (click)="addFood()">添加菜品 </button>\n				</div>\n				<ion-list>\n					<div class="fooditem" *ngFor="let item of foodslist;let i = index;" (click)="editFood(item.id)">\n						<div class="toptitle">\n							<div class="Left">\n								<h3>\n									{{item.name}}\n									<span>￥{{item.price}}</span>\n								</h3>\n							</div>\n							<div class="txtRight">\n								<ion-checkbox item-start (ionChange)="getChooseList()" [(ngModel)]="foodchecks[i]"></ion-checkbox>\n							</div>\n						</div>\n						<p class="borderDetail">{{item.detail}}</p>\n					</div>\n				</ion-list>\n			</div>\n		</ion-col>\n		<ion-col col-8 class="orderBox">\n			<ion-row class="topRow">\n				<ion-col col-2>\n					<div class="borderR">\n						套餐总价\n						<h4 class="price">￥{{total}}</h4>\n					</div>\n				</ion-col>\n				<ion-col col-2>\n					{{cold}}\n					<p>凉菜(个)</p>\n				</ion-col>\n				<ion-col col-2>\n					{{hot}}\n					<p>热菜(个)</p>\n				</ion-col>\n				<ion-col col-2>\n					{{soup}}\n					<p>汤羹(个)</p>\n				</ion-col>\n				<ion-col col-2>\n					{{rice}}\n					<p>主食(个)</p>\n				</ion-col>\n				<ion-col col-2>\n					<button color="dark" ion-button (click)="save()">保存</button>\n				</ion-col>\n			</ion-row>\n			<div class="ordertype">\n				<button ion-button [ngClass]="{\'active\': chooseTypeValue == \'0\'}" (click)="chooseType(\'0\')">全部 </button>\n				<button ion-button [ngClass]="{\'active\': chooseTypeValue == \'2\'}" (click)="chooseType(\'2\')">凉菜 </button>\n				<button ion-button [ngClass]="{\'active\': chooseTypeValue == \'122\'}" (click)="chooseType(\'122\')">热菜 </button>\n				<button ion-button [ngClass]="{\'active\': chooseTypeValue == \'124\'}" (click)="chooseType(\'124\')">汤羹 </button>\n				<button ion-button [ngClass]="{\'active\': chooseTypeValue == \'125\'}" (click)="chooseType(\'125\')">主食 </button>\n			</div>\n\n			<div class="cTableBox">\n				<table class="chooseTable">\n					<tr>\n						<th class="width1">序号</th>\n						<th class="width4">名称</th>\n						<th class="width4">描述</th>\n						<th class="width2">单价</th>\n						<th class="width2">数量</th>\n						<th class="width1 txtLeft">删除</th>\n						<!-- <th class="endcell"></th> -->\n					</tr>\n				</table>\n				<div class="fixHeight">\n					<table class="chooseTable">\n						<tr *ngFor="let item of chooselist; let i = index;">\n							<!-- <td>{{i}}</td> -->\n							<td class="width1">{{item.id}}</td>\n							<td class="width4">{{item.name}}</td>\n							<td class="width4">{{item.remark}}</td>\n							<td class="width2">￥\n								<span class="bgspan">{{item.price}}</span>\n							</td>\n							<td class="width2">\n								<span class="bgspan">{{item.amount}}</span>\n							</td>\n							<td class="width1 endcell red">\n								<ion-icon name="backspace" (click)="delChoose(item.id,item.name)"></ion-icon>\n							</td>\n						</tr>\n					</table>\n				</div>\n\n			</div>\n\n		</ion-col>\n	</ion-row>\n\n	<div class="calendarModal" *ngIf="ifeditType">\n		<div class="modalInner">\n			<span class="hidebtn" (click)="hideModal()">\n				<!-- <ion-icon name="close"></ion-icon> -->\n			</span>\n			<h3 class="modalTitle">\n				菜品分类\n			</h3>\n			<ion-list class="typeEdit" no-lines>\n				<ion-item>\n					<p>1.凉菜</p>\n					<button ion-button item-end>添加分类</button>\n					<button ion-button item-end>编辑</button>\n					<button ion-button item-end (click)="delTypeA()">删除</button>\n				</ion-item>\n				<ion-item>\n					<p>2.凉菜</p>\n					<button ion-button item-end>添加分类</button>\n					<button ion-button item-end>编辑</button>\n					<button ion-button item-end (click)="delTypeA()">删除</button>\n				</ion-item>\n				<ion-item>\n					<p>3.凉菜</p>\n					<button ion-button item-end>添加分类</button>\n					<button ion-button item-end>编辑</button>\n					<button ion-button item-end (click)="delTypeA()">删除</button>\n				</ion-item>\n			</ion-list>\n		</div>\n	</div>\n	<div class="calendarModal" *ngIf="modalVisible">\n		<div class="modalInner">\n			<span class="hidebtn" (click)="hideModal()">\n				<ion-icon name="close"></ion-icon>\n			</span>\n			<h3 class="modalTitle">\n				新增产品\n			</h3>\n			<div class="formBox">\n				<form #ngform="ngForm">\n					<ion-grid>\n						<dfn class="xmb-misc-uploader" (onloaded)="uploadfn2($event)"></dfn>\n						<ion-item no-lines>\n							<ion-label>\n								类别\n							</ion-label>\n							<ion-select name="from" required [(ngModel)]="selectDishType">\n								<span *ngFor="let item of dishType">\n									<ion-option [value]="item.id">\n										{{item.name}}\n									</ion-option>\n								</span>\n							</ion-select>\n						</ion-item>\n						<ion-row>\n							<ion-col col-6>\n								<ion-item no-lines>\n									<ion-label>\n										<span class="red">*</span> 产品名称</ion-label>\n									<ion-input type="text" name="name" placeholder=c learInput [(ngModel)]="pName">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row>\n							<ion-col col-6>\n								<ion-item no-lines>\n									<ion-label>\n										价格\n									</ion-label>\n									<ion-input type="number" name="price" placeholder=c learInput [(ngModel)]="pPrice">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row>\n							<ion-col col-6>\n								<ion-item no-lines>\n									<ion-label>\n										底价\n									</ion-label>\n									<ion-input type="number" name="cost" placeholder=c learInput [(ngModel)]="pCost">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row>\n							<ion-col col-6>\n								<ion-item no-lines>\n									<ion-label>\n										单位\n									</ion-label>\n									<ion-input type="text" name="unit" placeholder=c learInput [(ngModel)]="pUnit">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row>\n							<ion-col col-12>\n								<ion-item no-lines>\n									<ion-label>\n										产品描述\n									</ion-label>\n									<ion-input type="text" name="detail" placeholder=c learInput [(ngModel)]="pDes">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row class="subRow">\n							<ion-col col-6 class="txtR">\n								<button ion-button class="blckBtn" [disabled]="!ngform.valid" (click)="newP(ngform.value)">\n									确定\n								</button>\n							</ion-col>\n							<ion-col col-6>\n								<button ion-button color="light" navPop>返回</button>\n							</ion-col>\n						</ion-row>\n					</ion-grid>\n				</form>\n			</div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\pages\products\editfood.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_product__["a" /* ProductService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_product__["a" /* ProductService */]])
    ], EditFoods);
    return EditFoods;
}());

//# sourceMappingURL=editfood.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clientChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var clientChartPage = (function () {
    function clientChartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clientlists = [];
        this.client = 0;
        this.getClients();
    }
    //客户信息
    clientChartPage.prototype.getClients = function () {
        this.clientlists = [
            {
                name: '北京浩瀚一方网络科技有限责任公司',
                price: 1998,
                orders: 10
            },
            {
                name: '北京浩瀚一方网络科技有限责任公司',
                price: 1998,
                orders: 10
            },
            {
                name: '北京浩瀚一方网络科技有限责任公司',
                price: 1998,
                orders: 10
            },
            {
                name: '北京浩瀚一方网络科技有限责任公司',
                price: 1998,
                orders: 10
            },
            {
                name: '北京浩瀚一方网络科技有限责任公司',
                price: 1998,
                orders: 10
            },
            {
                name: '北京浩瀚一方网络科技有限责任公司',
                price: 1998,
                orders: 10
            },
            {
                name: '北京浩瀚一方网络科技有限责任公司',
                price: 1998,
                orders: 10
            }
        ];
    };
    clientChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-client',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\pages\charts\client.html"*/'<ion-header>\n	<ion-navbar color="white">\n		<ion-title>客户列表</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<ion-grid class="nopadding">\n		<ion-row>\n			<ion-col col-2 class="typebg">\n				<dfn class="xmb-chartmenu" [preload]="{active:\'clients\'}"></dfn>\n			</ion-col>\n			<ion-col col-10 class="chart-box">\n				<!-- 客户列表 -->\n				<div class="clientBg">\n					<ion-list>\n						<ion-row class="chartTop">\n							<ion-col col-9>\n								<h4>客户总数：1850 </h4>\n								<span>|</span> 黑空江太阳岛空中花园\n							</ion-col>\n							<ion-col col-3>\n								<ion-item no-lines>\n									<ion-select [(ngModel)]="client">\n										<ion-option value="0">全部客户</ion-option>\n										<ion-option value="1">客户小鱼</ion-option>\n										<ion-option value="2">客户小明</ion-option>\n									</ion-select>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<div class="tableHeight">\n							<table class="clientTable">\n								<tr>\n									<th>客户信息</th>\n									<th>销售总额</th>\n									<th>订单总数</th>\n								</tr>\n								<tr *ngFor="let item of clientlists">\n									<td class="txtLeft">\n										<h3>{{item.name}}</h3>\n										<p>李经理：1829390445</p>\n									</td>\n									<td class="txtRed">￥{{item.price}}</td>\n									<td>{{item.orders}}</td>\n								</tr>\n							</table>\n						</div>\n					</ion-list>\n				</div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\pages\charts\client.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], clientChartPage);
    return clientChartPage;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return financeChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chart__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { FileChooser } from '@ionic-native/file-chooser';
var financeChartPage = (function () {
    function financeChartPage(navCtrl, navParams, toastCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.pricelists = [];
        this.goalslists = [];
        this.agginAllData = {};
        this.proCostlist = [];
        this.proAllData = {};
        this.modalVisible = false; // 业绩分配Modal
        this.setboxVisible = false; // 设置业绩分配Modal
        this.costVisible = false; // 执行成本Modal
        this.setCostVisible = false; // 设置执行成本Modal
        this.ifNew = true; //是否显示添加项目按钮
        this.totalA = {
            profit: 0,
            receive: 0,
            money: 0,
        };
        this.proCommon = [];
        this.allStaff = [];
        this.allPercent = [];
        this.selectStaff = [];
        this.getPricelists();
    }
    financeChartPage.prototype.getPricelists = function () {
        var _this = this;
        this.service.getPricelist().then(function (data) {
            if (data.status == 1) {
                _this.totalA.profit = data.yearTotalGrossProfit;
                _this.totalA.receive = data.yearTotalActualReceivedMoney;
                _this.totalA.money = data.yearTotalOrderMoney;
                _this.pricelists = data.orders;
            }
        });
    };
    financeChartPage.prototype.getGoalsList = function (id) {
        var _this = this;
        this.service.getGoallist(id).then(function (data) {
            if (data.status == 1) {
                _this.agginAllData = data;
                _this.goalslists = data.project_participant;
                console.log(_this.goalslists);
                _this.goalslists.map(function (item, index) {
                    _this.allPercent[index] = item.commission;
                    _this.selectStaff[index] = item.staff_id;
                });
                //虚拟数据===所有工作人员列表{}
                _this.allStaff = [
                    {
                        id: 1,
                        name: '小鱼1'
                    },
                    {
                        id: 2,
                        name: '小鱼2'
                    }, {
                        id: 3,
                        name: '小鱼3'
                    }, {
                        id: 4,
                        name: '小鱼4'
                    },
                ];
                console.log(_this.selectStaff);
                console.log(_this.allPercent);
                console.log(_this.goalslists);
            }
        });
    };
    // 获取执行成本
    financeChartPage.prototype.getproCostlist = function (id) {
        var _this = this;
        this.service.getProCost(id).then(function (data) {
            if (data.status == 1) {
                _this.proAllData = data;
                _this.proCostlist = data.order_supplier_payment;
                _this.proCommon = data.order[0];
            }
        });
    };
    financeChartPage.prototype.showAssign = function (id) {
        this.modalVisible = true;
        this.getGoalsList(id);
    };
    financeChartPage.prototype.hideModal = function () {
        this.modalVisible = false;
    };
    financeChartPage.prototype.formSubmit = function (form) {
        console.log(form);
        var total = 0;
        for (var Key in form) {
            console.log(form[Key]);
            total = total + parseFloat(form[Key]);
        }
        console.log(total);
        if (total != 100) {
            var toast = this.toastCtrl.create({
                message: '分配总和不等于100,请重新分配',
                showCloseButton: true,
                position: 'middle',
            });
            toast.present();
        }
        else {
            this.hidesetModal();
        }
        // form.map((item, index)=>{
        // 	console.log(item);
        // 	total = total + item;
        // })
        // this.hidesetModal();
    };
    // formStaffSubmit(form) {
    // 	console.log(form);
    // }
    financeChartPage.prototype.submitPercent = function (value, id) {
        // 提交百分比设置
        console.log(id);
        console.log(value);
        var query = {
            id: id,
            commission: value
        };
        this.service.editDistribution(query).then(function (data) {
            if (data.status == 1) {
                console.log("提交百分比成功");
            }
        });
    };
    financeChartPage.prototype.submitStaff = function (value, id) {
        // 提交员工设置
        console.log(id);
        console.log(value);
        var query = {
            id: id,
            staff_id: value
        };
        this.service.editDistribution(query).then(function (data) {
            if (data.status == 1) {
                console.log("提交员工成功");
            }
        });
    };
    financeChartPage.prototype.editGoals = function () {
        this.setboxVisible = true;
    };
    financeChartPage.prototype.hidesetModal = function () {
        this.setboxVisible = false;
    };
    financeChartPage.prototype.delsetItem = function () {
        // 删除分配项目
    };
    financeChartPage.prototype.showCostMoal = function (id) {
        this.costVisible = true;
        this.proCurrentId = id;
        this.getproCostlist(id);
        console.log(this.proCostlist);
    };
    financeChartPage.prototype.hideCostMoal = function () {
        this.costVisible = false;
    };
    financeChartPage.prototype.formCostSubmit = function (form, id) {
        var _this = this;
        form.order_id = this.proCurrentId;
        form.pay_time = new Date();
        this.service.formCost(form).then(function (data) {
            if (data.status == 1) {
                _this.hidesetcostModal();
                _this.getproCostlist(_this.proCurrentId);
            }
        });
    };
    financeChartPage.prototype.showsetCostMoal = function (id) {
        this.setCostVisible = true;
    };
    financeChartPage.prototype.hidesetcostModal = function () {
        this.setCostVisible = false;
    };
    financeChartPage.prototype.addProName = function () {
        // 添加项目
        this.ifNew = false;
    };
    financeChartPage.prototype.finishAdd = function () {
        // 完成项目
        this.ifNew = true;
    };
    financeChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-finance',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\pages\charts\finance.html"*/'<ion-header>\n	<ion-navbar color="white">\n		<ion-title>财务报表</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<ion-grid class="nopadding">\n		<ion-row>\n			<ion-col col-2 class="typebg">\n				<dfn class="xmb-chartmenu" [preload]="{active:\'finance\'}"></dfn>\n			</ion-col>\n			<ion-col col-10 class="chart-box">\n				<!-- 财务数据 -->\n				<div class="greyBg">\n					<ion-row class="circleTop">\n						<ion-col col-4>\n							<div class="bgBox">\n								<p>年度毛利 profit</p>\n								<ion-item no-lines>\n									<ion-avatar item-start>\n										<img src="assets/imgs/chart/greenball.jpg">\n									</ion-avatar>\n									<h2>{{totalA?.profit}}</h2>\n									<p>Calculated in 1930 THu</p>\n								</ion-item>\n							</div>\n						</ion-col>\n						<ion-col col-4>\n							<div class="bgBox">\n								<p>年度总实收金额 real income</p>\n								<ion-item no-lines>\n									<ion-avatar item-start>\n										<img src="assets/imgs/chart/purpleball.jpg">\n									</ion-avatar>\n									<h2>{{totalA?.receive}}</h2>\n									<p>Calculated in 1930 THu</p>\n								</ion-item>\n							</div>\n						</ion-col>\n						<ion-col col-4>\n							<div class="bgBox">\n								<p>年度总合同金额 contract value</p>\n								<ion-item no-lines>\n									<ion-avatar item-start>\n										<img src="assets/imgs/chart/blueball.jpg">\n									</ion-avatar>\n									<h2>{{totalA?.money}}</h2>\n									<p>Calculated in 1930 THu</p>\n								</ion-item>\n							</div>\n						</ion-col>\n					</ion-row>\n					<ion-row class="tableHeight">\n						<ion-col col-12>\n							<table class="clientTable finaTable">\n								<tr>\n									<td style="width:20rem">Information</td>\n									<td>执行成本</td>\n									<td>酒店/网络返点</td>\n									<td>定金</td>\n									<td>中期款</td>\n									<td>尾款</td>\n									<td>合同总额</td>\n									<td>毛利率</td>\n								</tr>\n								<tr *ngFor="let item of pricelists">\n									<td style="width:20em">\n										<span class="nameCell">{{item.order_name}}</span>\n										<span class="green" (click)="showAssign(item.id)">业绩分配</span>\n									</td>\n									<td style="width:16em">\n										<span class="priceCell">￥{{item.executory_costs}}</span>\n										<span>\n											<ion-icon name="arrow-dropright" (click)="showCostMoal(item.id)"></ion-icon>\n										</span>\n									</td>\n									<td>\n										<span class="percentCell">{{item.channel_cost}}%</span>\n										<span>\n											<ion-icon name="arrow-dropright"></ion-icon>\n										</span>\n									</td>\n									<td>￥{{item.early_payment}}</td>\n									<td>￥{{item.minddle_payment}}</td>\n									<td>￥{{item.final_payment}}</td>\n									<td>￥{{item.order_money}}</td>\n									<td>{{item.gross_profit_rate}}%</td>\n								</tr>\n							</table>\n						</ion-col>\n					</ion-row>\n				</div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<!-- 业务分配弹窗 -->\n	<div class="calendarModal taskModal" *ngIf="modalVisible">\n		<div class="modalInner">\n			<span class="hidebtn" (click)="hideModal()">\n				<ion-icon name="close"></ion-icon>\n			</span>\n			<h3 class="modalTitle">\n				业绩分配\n			</h3>\n			<ion-row>\n				<ion-col col-6 class="title">\n					订单总价 【￥{{agginAllData.payment_money}}】\n				</ion-col>\n				<ion-col col-6 class="txtRight">\n					<button class="greyBtn" ion-button (click)="editGoals()">设置默认比例</button>\n				</ion-col>\n			</ion-row>\n			<table class="clientTable extraTable">\n				<tr>\n					<th>项目</th>\n					<th>比例</th>\n					<th>金额</th>\n					<th>人员</th>\n				</tr>\n\n				<tr *ngFor="let item of goalslists; let i = index">\n					<td>{{item.participant_name}}</td>\n					<td class="inputline">\n						<ion-input type="number" [(ngModel)]="allPercent[i]" (ngModelChange)="submitPercent($event,item.id)"></ion-input>%\n					</td>\n					<td>￥{{item.money}}</td>\n					<td class="selectline">\n						<ion-item no-lines>\n							<ion-select name="{{\'staff\'+i}}" [(ngModel)]="selectStaff[i]" (ngModelChange)="submitStaff($event,item.id)">\n								<ion-option [value]="value.id" *ngFor="let value of allStaff;let m = indx;">\n									{{value.name}}\n								</ion-option>\n							</ion-select>\n						</ion-item>\n					</td>\n				</tr>\n			</table>\n		</div>\n	</div>\n\n	<!-- 设置默认比例弹窗 -->\n	<div class="calendarModal setoModal" *ngIf="setboxVisible">\n		<div class="modalInner">\n			<span class="hidebtn" (click)="hidesetModal()">\n				<ion-icon name="close"></ion-icon>\n			</span>\n			<h3 class="modalTitle">\n				设置默认比例\n			</h3>\n\n			<ion-row class="newPro">\n				<ion-col col-8 class="txtRight">\n					<ion-item *ngIf="!ifNew">\n						<ion-label>项目名称</ion-label>\n						<ion-input type="text" name="one" placeholder="请输入项目名称" clearInput ngModel>\n						</ion-input>\n					</ion-item>\n				</ion-col>\n				<ion-col col-4 class="txtRight">\n					<button class="greyBtn" *ngIf="ifNew" ion-button (click)="addProName()">添加新项目</button>\n					<button class="greyBtn" *ngIf="!ifNew" ion-button (click)="finishAdd()">完成</button>\n				</ion-col>\n			</ion-row>\n\n			<div class="formBox">\n				<form #ngform="ngForm" class="formBox">\n					<ion-grid>\n						<ion-row>\n							<ion-col col-12>\n								<div no-lines class="title">\n									<h2>项目</h2>\n									<p>比例</p>\n								</div>\n								<div class="bodyCon">\n									<ion-item no-lines>\n										<ion-label>数据 V</ion-label>\n										<ion-input type="number" name="1" ngModel>\n										</ion-input>\n										<em class="perEm" item-end>%</em>\n										<span class="unit" item-end>\n											<ion-icon name="trash" (click)="delsetItem()"></ion-icon>\n										</span>\n									</ion-item>\n									<ion-item no-lines>\n										<ion-label>邀约 v</ion-label>\n										<ion-input type="number" name="2" ngModel>\n										</ion-input>\n										<em class="perEm" item-end>%</em>\n										<span class="unit" item-end>\n											<ion-icon name="trash" (click)="delsetItem()"></ion-icon>\n										</span>\n									</ion-item>\n									<ion-item no-lines>\n										<ion-label>销售 V</ion-label>\n										<ion-input type="number" name="3" ngModel>\n										</ion-input>\n										<em class="perEm" item-end>%</em>\n										<span class="unit" item-end>\n											<ion-icon name="trash" (click)="delsetItem()"></ion-icon>\n										</span>\n									</ion-item>\n									<ion-item no-lines>\n										<ion-label>策划 V</ion-label>\n										<ion-input type="number" name="4" ngModel>\n										</ion-input>\n										<em class="perEm" item-end>%</em>\n										<span class="unit" item-end>\n											<ion-icon name="trash" (click)="delsetItem()"></ion-icon>\n										</span>\n									</ion-item>\n									<ion-item no-lines>\n										<ion-label>设计 V</ion-label>\n										<ion-input type="number" name="5" ngModel>\n										</ion-input>\n										<em class="perEm" item-end>%</em>\n										<span class="unit" item-end>\n											<ion-icon name="trash" (click)="delsetItem()"></ion-icon>\n										</span>\n									</ion-item>\n								</div>\n							</ion-col>\n						</ion-row>\n						<ion-row class="subRow">\n							<ion-col col-12>\n								<button ion-button class="blckBtn" [disabled]="!ngform.valid" (click)="formSubmit(ngform.value)">\n									确定\n								</button>\n							</ion-col>\n						</ion-row>\n					</ion-grid>\n				</form>\n			</div>\n		</div>\n	</div>\n\n	<!-- 执行成本弹窗 -->\n	<div class="calendarModal costModal" *ngIf="costVisible">\n		<div class="modalInner">\n			<span class="hidebtn" (click)="hideCostMoal()">\n				<ion-icon name="close"></ion-icon>\n			</span>\n			<h3 class="modalTitle">\n				执行成本\n			</h3>\n			<ion-row class="titleRow">\n				<ion-col col-6 class="title">\n					<span> 鸿富大酒店金殿 </span> | 婚礼日期: {{proCommon.order_date}}\n				</ion-col>\n				<ion-col col-6 class="txtRight">\n					<button class="greyBtn" ion-button (click)="showsetCostMoal()">添加费用</button>\n				</ion-col>\n			</ion-row>\n\n			<ion-row class="infoRow">\n				<ion-col col-4>\n					<p>\n						<span>新郎(联系方式)：</span>{{proCommon.groom_phone}}</p>\n					<p>\n						<span>新娘(联系方式)：</span>{{proCommon.bride_phone}}</p>\n				</ion-col>\n				<ion-col col-4>\n					<p>\n						<span class="aaa">全色场系：</span>白+金</p>\n					<p>\n						<span>花 材:</span>编花</p>\n				</ion-col>\n				<ion-col col-4>\n					<p>\n						<span>签单人：</span>{{proCommon.designer_telephone}}</p>\n					<p>\n						<span>执行部门负责人：</span>{{proCommon.designer_name}}</p>\n\n				</ion-col>\n			</ion-row>\n\n			<div class="middleHeight">\n				<div class="inlineTable">\n					<ul class="no-border">\n						<li class="txtRed">项目</li>\n						<li>费用</li>\n						<li>备注</li>\n					</ul>\n					<ul class="no-border">\n						<li class="txtRed">项目</li>\n						<li>费用</li>\n						<li>备注</li>\n					</ul>\n					<ul class="no-border">\n						<li class="txtRed">项目</li>\n						<li>费用</li>\n						<li>备注</li>\n					</ul>\n					<ul class="conCell" *ngFor="let item of proCostlist">\n						<li class="bgWhite">{{item.supplier_name}}</li>\n						<li>￥{{item.money}}</li>\n						<li>{{item.remark}}</li>\n					</ul>\n				</div>\n\n			</div>\n\n			<table class="clientTable bottomTable">\n				<tr>\n					<th>合同金额</th>\n					<th>成本合计</th>\n					<th>利润</th>\n					<th>道具计提</th>\n					<th>计提后利润</th>\n					<th>利润率</th>\n					<th>策划计提</th>\n					<th>现金结余</th>\n				</tr>\n				<tr>\n					<td>{{proAllData?.order_money}}</td>\n					<td>{{proAllData?.supplier_payment_money}}</td>\n					<td>{{proAllData?.profit}}</td>\n					<td>{{proAllData?.channel_money}}</td>\n					<td>{{proAllData?.profit_rate}}</td>\n					<td>{{proAllData?.profit_rate}}</td>\n					<td>{{proAllData?.order_partner_money}}</td>\n					<td>{{proAllData?.payment_money}}</td>\n				</tr>\n			</table>\n		</div>\n	</div>\n\n	<!-- 设置成本弹窗 -->\n	<div class="calendarModal setoModal setCostModal" *ngIf="setCostVisible">\n		<div class="modalInner">\n			<span class="hidebtn" (click)="hidesetcostModal()">\n				<ion-icon name="close"></ion-icon>\n			</span>\n			<h3 class="modalTitle">\n				添加费用\n			</h3>\n\n			<div class="formBox">\n				<form #ngform="ngForm" class="formBox">\n					<ion-grid>\n						<ion-row>\n							<ion-col col-10>\n								<ion-item no-lines>\n									<ion-label>项目</ion-label>\n									<ion-input type="text" name="supplier_name" ngModel>\n									</ion-input>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>费用</ion-label>\n									<ion-input type="number" name="money" ngModel>\n									</ion-input>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>备注</ion-label>\n									<ion-input type="text" name="remark" ngModel>\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row class="subRow">\n							<ion-col col-12>\n								<button ion-button class="blckBtn" [disabled]="!ngform.valid" (click)="formCostSubmit(ngform.value)">\n									确定\n								</button>\n							</ion-col>\n						</ion-row>\n					</ion-grid>\n				</form>\n			</div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\pages\charts\finance.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_chart__["a" /* ChartService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_chart__["a" /* ChartService */]])
    ], financeChartPage);
    return financeChartPage;
}());

//# sourceMappingURL=finance.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return targetChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_echarts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var targetChartPage = (function () {
    function targetChartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalVisible = false;
        this.staffTergetlists = [];
        this.imgSrc = [
            'assets/imgs/chart/badge1.png',
            'assets/imgs/chart/badge2.png',
            'assets/imgs/chart/badge3.png',
            'assets/imgs/chart/badge4.png',
            'assets/imgs/chart/badge5.png',
        ];
        this.curYear = new Date().getFullYear();
        this.getStaffTargets();
        // setTimeout(() => {
        // 	this.initchart2();
        // 	console.log("为空，暂时进行延时处理，后期解决");
        // }, 300);
    }
    targetChartPage.prototype.getStaffTargets = function () {
        this.staffTergetlists = [
            {
                name: '北京浩瀚一方',
                target: 1998,
                achieve: 'Lv.5 高级婚礼策划师',
                rate: 60
            },
            {
                name: '北京浩瀚一方',
                target: 1998,
                achieve: 'Lv.5 高级婚礼策划师',
                rate: 60
            },
            {
                name: '北京浩瀚一方',
                target: 1998,
                achieve: 'Lv.5 高级婚礼策划师',
                rate: 60
            },
            {
                name: '北京浩瀚一方',
                target: 1998,
                achieve: 'Lv.5 高级婚礼策划师',
                rate: 60
            },
            {
                name: '北京浩瀚一方',
                target: 1998,
                achieve: 'Lv.5 高级婚礼策划师',
                rate: 60
            },
            {
                name: '北京浩瀚一方',
                target: 1998,
                achieve: 'Lv.5 高级婚礼策划师',
                rate: 60
            },
        ];
    };
    targetChartPage.prototype.initchart2 = function () {
        var ec = __WEBPACK_IMPORTED_MODULE_2_echarts__;
        var stafftargrts = document.getElementById('staffTarget');
        this.staffTargetchart = ec.init(stafftargrts);
        var xAxisData = [];
        var data = [];
        for (var i = 9; i < 16; i++) {
            xAxisData.push('5月' + i + '日');
            data.push(Math.round(Math.random() * 500) + 200);
        }
        var stafftoption = {
            backgroundColor: '#fff',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        opacity: 0
                    }
                },
                formatter: function (prams) {
                    return "额度:" + prams[0].data + "万元";
                }
            },
            xAxis: [{
                    data: xAxisData,
                    axisLabel: {
                        textStyle: {
                            color: '#444'
                        }
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                        alignWithLabel: true
                    },
                    splitLine: {
                        show: false
                    }
                }, {
                    // 辅助 x 轴
                    show: false,
                    data: xAxisData
                }],
            yAxis: {
                max: 1000,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#eee',
                    }
                },
            },
            series: [{
                    // 辅助系列
                    type: 'bar',
                    silent: true,
                    xAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: '#eee'
                        }
                    },
                    barWidth: 10,
                    data: data.map(function (val) {
                        return 1000;
                    })
                }, {
                    type: 'bar',
                    data: data,
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: '#f16f31',
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 20
                        }
                    }
                }]
        };
        this.staffTargetchart.setOption(stafftoption);
    };
    targetChartPage.prototype.editGoals = function () {
        this.modalVisible = true;
        // this.getGoals();
    };
    targetChartPage.prototype.hideModal = function () {
        this.modalVisible = false;
    };
    targetChartPage.prototype.formSubmit = function (form) {
        console.log(form);
    };
    targetChartPage.prototype.getPreYear = function () {
        this.curYear = this.curYear - 1;
        console.log(this.curYear);
    };
    targetChartPage.prototype.getNextYear = function () {
        this.curYear = this.curYear + 1;
        console.log(this.curYear);
    };
    targetChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-target',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\pages\charts\target.html"*/'<ion-header>\n	<ion-navbar color="white">\n		<ion-title>目标设定</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<ion-grid class="nopadding">\n		<ion-row>\n			<ion-col col-2 class="typebg">\n				<dfn class="xmb-chartmenu" [preload]="{active:\'goals\'}"></dfn>\n			</ion-col>\n			<ion-col col-10 class="chart-box">\n				<!-- 目标设定 -->\n				<div class="greyBg">\n					<ion-row class="staffCharts">\n						<ion-col col-4 class="goals">\n							年度销售目标【1009】\n						</ion-col>\n						<ion-col col-4 class="center">\n							<button ion-button (click)="getPreYear()">\n								<ion-icon name="arrow-back"></ion-icon>\n							</button>\n							<span>{{curYear}}年</span>\n							<button ion-button (click)="getNextYear()">\n								<ion-icon name="arrow-forward"></ion-icon>\n							</button>\n							<!-- <ion-datetime displayFormat="YYYY" [(ngModel)]="chartYear"></ion-datetime> -->\n						</ion-col>\n						<ion-col col-4 class="right">\n							<button ion-button (click)="editGoals()">编辑目标</button>\n						</ion-col>\n					</ion-row>\n					<div class="tableBox">\n						<table class="clientTable">\n							<tr>\n								<th>序号</th>\n								<th>姓名</th>\n								<th>销售目标</th>\n								<th>目标达成率</th>\n								<th>成长等级</th>\n\n							</tr>\n							<tr *ngFor="let item of staffTergetlists; let i = index">\n								<td>{{i+1}}</td>\n								<td>{{item.name}}</td>\n								<td>￥{{item.target}}</td>\n								<td>{{item.rate}}%</td>\n								<td>\n									<div class="flexRow">\n										<span class="grade bgRed"></span> {{item.achieve}}\n										<ion-icon name="settings"></ion-icon>\n									</div>\n\n								</td>\n\n							</tr>\n						</table>\n					</div>\n\n					<ion-item no-lines>\n						<h2 class="goals2">策划师晋升规则</h2>\n					</ion-item>\n\n					<div class="ruleCon">\n						<div class="ruleRow">\n							<div class="ruleCell">\n								<div>\n									<img src={{imgSrc[0]}} />\n									<p>Lv.5 高级婚礼策划师</p>\n								</div>\n								<div class="large">\n									<span>4% </span>3000底薪\n								</div>\n								<p>1.成单1单</p>\n								<p>2.合同额2万</p>\n								<h6>设置…</h6>\n							</div>\n							<div class="ruleCell">\n								<div>\n									<img src={{imgSrc[1]}} />\n									<p>Lv.5 高级婚礼策划师</p>\n								</div>\n								<div class="large">\n									<span>4%</span>3000底薪\n								</div>\n								<p>1.成单1单</p>\n								<p>2.合同额2万</p>\n								<h6>设置…</h6>\n							</div>\n							<div class="ruleCell">\n								<div>\n									<img src={{imgSrc[2]}} />\n									<p>Lv.5 高级婚礼策划师</p>\n								</div>\n								<div class="large">\n									<span>4%</span>3000底薪\n								</div>\n								<p>1.成单1单</p>\n								<p>2.合同额2万</p>\n								<h6>设置…</h6>\n							</div>\n							<div class="ruleCell">\n								<div>\n									<img src={{imgSrc[3]}} />\n									<p>Lv.5 高级婚礼策划师</p>\n								</div>\n								<div class="large">\n									<span>4%</span>3000底薪\n								</div>\n								<p>1.成单1单</p>\n								<p>2.合同额2万</p>\n								<h6>设置…</h6>\n							</div>\n							<div class="ruleCell">\n								<div>\n									<img src={{imgSrc[4]}} />\n									<p>Lv.5 高级婚礼策划师</p>\n								</div>\n								<div class="large">\n									<span>4%</span>3000底薪\n								</div>\n								<p>1.成单1单</p>\n								<p>2.合同额2万</p>\n								<h6>设置…</h6>\n							</div>\n						</div>\n					</div>\n\n				</div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<div class="calendarModal" *ngIf="modalVisible">\n		<div class="modalInner">\n			<span class="hidebtn" (click)="hideModal()">\n				<ion-icon name="close"></ion-icon>\n			</span>\n			<h3 class="modalTitle">\n				目标设定\n			</h3>\n\n			<div class="formBox">\n				<form #ngform="ngForm" class="formBox">\n					<ion-grid>\n						<ion-row>\n							<ion-col col-6 class="months">\n								<div no-lines class="title">\n									<h2>月度销售目标</h2>\n									<p>累计: 1990万元</p>\n								</div>\n								<ion-item no-lines>\n									<ion-label>1月</ion-label>\n									<ion-input type="text" name="one" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>万元</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>3月</ion-label>\n									<ion-input type="text" name="two" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>万元</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>4月</ion-label>\n									<ion-input type="text" name="three" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>万元</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>5月</ion-label>\n									<ion-input type="text" name="three" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>万元</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>6月</ion-label>\n									<ion-input type="text" name="three" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>万元</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>7月</ion-label>\n									<ion-input type="text" name="three" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>万元</span>\n								</ion-item>\n							</ion-col>\n							<ion-col col-6 class="peoles">\n								<div no-lines class="title">\n									<h2>目标分解</h2>\n									<p>累计: 90%</p>\n								</div>\n								<ion-item no-lines>\n									<ion-label>吴辉</ion-label>\n									<ion-input type="text" name="name1" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>%</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>吴辉</ion-label>\n									<ion-input type="text" name="name1" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>%</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>吴辉</ion-label>\n									<ion-input type="text" name="name1" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>%</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>吴辉</ion-label>\n									<ion-input type="text" name="name1" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>%</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>吴辉</ion-label>\n									<ion-input type="text" name="name1" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>%</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>吴辉</ion-label>\n									<ion-input type="text" name="name1" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>%</span>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row class="subRow">\n							<ion-col col-12>\n								<button ion-button class="blckBtn" [disabled]="!ngform.valid" (click)="formSubmit(ngform.value)">\n									确定\n								</button>\n							</ion-col>\n						</ion-row>\n					</ion-grid>\n				</form>\n			</div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\pages\charts\target.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], targetChartPage);
    return targetChartPage;
}());

//# sourceMappingURL=target.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_member__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(nav, toastCtrl, service) {
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.ifRember = true;
        this.localUser = window.localStorage.getItem('local_user');
        this.localPassword = window.localStorage.getItem('local_password');
        this.imgSrc = 'assets/imgs/index/login_bg.jpg';
    }
    LoginPage.prototype.formSubmit = function (form) {
        var _this = this;
        var query = {
            phone: form.phone,
            password: form.password
        };
        if (this.ifRember) {
            console.log("记住密码");
            window.localStorage.setItem('local_user', form.phone);
            window.localStorage.setItem('local_password', form.password);
        }
        else {
            window.localStorage.setItem('local_user', '');
            window.localStorage.setItem('local_password', '');
        }
        this.service.login(query).then(function (data) {
            console.log(data);
            if (data) {
                if (data == "failed") {
                    alert('您输入的手机号或密码错误！');
                    return;
                }
                else if (data.unfinished == "selectcity" || data.unfinished == "hotel") {
                    alert("您的账号尚未激活，请联系管理员：15101140405 小斯");
                    return;
                }
                else {
                    window.localStorage.setItem('account_id', data.account_id);
                    window.localStorage.setItem('avatar', data.avatar);
                    window.localStorage.setItem('name', data.name);
                    window.localStorage.setItem('token', data.token);
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
            }
        });
    };
    // 忘记密码
    LoginPage.prototype.forget = function () {
        var toast = this.toastCtrl.create({
            message: '密码已发送到您的手机  请查收',
            showCloseButton: true,
            position: 'middle',
            cssClass: 'my'
        });
        var query = {
            mobile: window.localStorage.getItem('name')
        };
        this.service.lostpw(query).then(function (data) {
            toast.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\pages\login\login.html"*/'<ion-content class="login-page">\n	<div class="bgImg">\n		<img src={{imgSrc}} />\n	</div>\n	<div class="sign-box">\n		<h3>SING IN</h3>\n		<h4>Login in with your information!</h4>\n		<form #ngform="ngForm">\n			<ion-item>\n				<ion-label>\n					<ion-icon name="person"></ion-icon>\n				</ion-label>\n				<ion-input type="text" name="phone" spellcheck="false" autocapitalize="off" placeholder="用户名" clearInput required [(ngModel)]="localUser"></ion-input>\n			</ion-item>\n			<ion-item>\n				<ion-label>\n					<ion-icon name="lock"></ion-icon>\n				</ion-label>\n				<ion-input type="password" name="password" clearInput placeholder="密 码" required [(ngModel)]="local_password">\n				</ion-input>\n			</ion-item>\n		</form>\n		<button class="loginbtn" ion-button block color="light" [disabled]="!ngform.valid" (click)="formSubmit(ngform.value)">\n			登录\n		</button>\n		<ion-row>\n			<ion-col col-6>\n				<ion-item no-lines class="rember">\n					<ion-label>记住密码</ion-label>\n					<ion-checkbox [(ngModel)]="ifRember"></ion-checkbox>\n				</ion-item>\n			</ion-col>\n			<ion-col col-6 class="txtRight" (click)="forget()">\n				忘记密码\n			</ion-col>\n		</ion-row>\n	</div>\n</ion-content>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_member__["a" /* MemberService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_member__["a" /* MemberService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hall__ = __webpack_require__(934);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PicsPage = (function () {
    function PicsPage(navCtrl, navParams, alertCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.spaceId = null;
        this.hallId = null;
        this.hallname = '';
        this.piclist = [];
        this.nowImg = '';
        this.showBig = false;
        this.spaceId = this.navParams.get('spaceId');
        this.hallId = this.navParams.get('hallId');
        this.hallname = this.navParams.get('hallname');
        this.getPics();
    }
    PicsPage.prototype.ionViewWillEnter = function () {
        this.getPics();
        console.log(this.piclist);
    };
    PicsPage.prototype.getPics = function () {
        var _this = this;
        // this.piclist = [
        // 	{
        // 		name: '北京浩瀚一方互联网科技有限责任公司年会',
        // 		img_url: 'assets/imgs/index/bg.jpg',
        // 		update_time: '2018.01.10'
        // 	}
        // ];
        var query = {
            space_id: this.spaceId,
            hall_id: this.hallId
        };
        this.service.getHallImgs(query).then(function (data) {
            console.log(data);
            if (data.status == 1) {
                _this.piclist = data.imgs;
            }
        });
    };
    PicsPage.prototype.showBigImg = function (img) {
        this.nowImg = img;
        this.showBig = true;
    };
    PicsPage.prototype.hideBigImg = function () {
        this.showBig = false;
    };
    PicsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-piscs',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\pages\show\pics.html"*/'<ion-header>\n\n	<ion-navbar color="white">\n\n		<ion-title>{{hallname}}</ion-title>\n\n		<ion-buttons end>\n\n			<button ion-button class="newBtn">\n\n				新增案例\n\n			</button>\n\n		</ion-buttons>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content scroll="false" class="piscs-page">\n\n	<!-- 缺少加载动画 -->\n\n\n\n	<ion-grid class="piscs-con">\n\n		<ion-row>\n\n			<ion-col col-3 col-lg-2 *ngFor="let item of piclist">\n\n				<ion-card>\n\n					<!-- <img src="../assets/imgs/index/bg.jpg" /> -->\n\n					<img src={{item.img_url}} (click)="showBigImg(item.img_url);" />\n\n					<div class="card-title">\n\n						{{item.name==null?hallname:item.name}}\n\n					</div>\n\n					<div class="pic-name">{{item.update_time.substring(0,10).split(\'-\').join(\'.\')}}</div>\n\n				</ion-card>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n	<div class="big-img" *ngIf="showBig" (click)="hideBigImg();">\n\n		<img src={{nowImg}} />\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\pages\show\pics.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_hall__["a" /* HallService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_hall__["a" /* HallService */]])
    ], PicsPage);
    return PicsPage;
}());

//# sourceMappingURL=pics.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewsPage = (function () {
    function ViewsPage(navCtrl, navParams, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.title = '';
        this.title = this.navParams.get('title');
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.navParams.get('url'));
    }
    ViewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-views',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\pages\show\views.html"*/'<ion-header>\n	<!-- <ion-navbar color="white">\n		<ion-title>{{title}}</ion-title>\n	</ion-navbar> -->\n</ion-header>\n\n<ion-content>\n	<iframe [src]="url"></iframe>\n	<ion-fab top left>\n		<button ion-fab navPop>\n			<ion-icon name="arrow-back"></ion-icon>\n		</button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\pages\show\views.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ViewsPage);
    return ViewsPage;
}());

//# sourceMappingURL=views.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_home__ = __webpack_require__(529);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddOrderPage = (function () {
    function AddOrderPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.token = localStorage.getItem('token');
        this.typelist = [
            { id: 1, title: '会议' },
            { id: 2, title: '婚礼' },
        ];
        this.chooseType = 1;
        this.selectHotel = 0;
        this.selectCompany = 0;
        this.selectLinkman = 0;
        console.log("constructor");
        this.getDetailInfo();
    }
    //初始渲染
    AddOrderPage.prototype.getDetailInfo = function () {
        var _this = this;
        this.service.getData(this.token).then(function (data) {
            if (data) {
                _this.hotelList = data.hotel;
                _this.companyList = data.company;
            }
        });
    };
    AddOrderPage.prototype.ionViewWillEnter = function () {
    };
    AddOrderPage.prototype.changeLinkMan = function () {
        var select = this.selectCompany;
        var link = [];
        this.companyList.forEach(function (e) {
            if (e.id == select) {
                link = e.linkman;
            }
        });
        this.linkManList = link;
    };
    AddOrderPage.prototype.formSubmit = function (form) {
        var _this = this;
        console.log(form);
        var query;
        if (this.chooseType == 1) {
            query = {
                token: localStorage.getItem('token'),
                ordertype: this.chooseType,
                company_id: this.selectCompany,
                linkman_id: this.selectLinkman,
                start_date: form.start_date,
                end_date: form.end_date,
                hotel_id: this.selectHotel
            };
        }
        else {
            query = {
                token: localStorage.getItem('token'),
                ordertype: this.chooseType,
                orderdate: form.start_date,
                end_date: '',
                hotel_id: this.selectHotel,
                remark: form.remark,
                groomname: form.groomeName,
                bridename: form.brideName,
                groomtelephone: form.groomePhone,
                bridetelephone: form.bridePhone,
                linkmanname: form.linkManName,
                linkmantelephone: form.linkManPhone
            };
        }
        this.service.addOrder(query).then(function (data) {
            if (data) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
        });
    };
    AddOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addorder',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\pages\home\addorder.html"*/'<ion-header>\n	<ion-navbar color="white">\n		<ion-title>新增订单</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div>\n		<div class="topHead">\n			<h3>请输入订单基本信息</h3>\n			<p>请输入公司名称、完成后、点击确认按钮</p>\n		</div>\n\n\n		<form #ngform="ngForm" class="formBox">\n			<ion-grid>\n				<ion-row>\n					<ion-col col-6>\n						<ion-item no-lines>\n							<ion-label><span class="red">*</span>订单类型</ion-label>\n							<ion-select name="type" [(ngModel)]=\'chooseType\'>\n								<span *ngFor="let item of typelist">\n									<ion-option [value]="item.id">\n										{{item.title}}\n									</ion-option>\n								</span>\n							</ion-select>\n						</ion-item>\n					</ion-col>\n					<ion-col col-6>\n						<ion-item no-lines>\n							<ion-label><span class="red">*</span>厅</ion-label>\n							<ion-select name="type" [(ngModel)]="selectHotel">\n								<span *ngFor="let item of hotelList">\n									<ion-option [value]="item.id">\n										{{item.name}}\n									</ion-option>\n								</span>\n							</ion-select>\n						</ion-item>\n					</ion-col>\n				</ion-row>\n\n				<!-- ********************************************************** -->\n				<!-- **************************婚礼选项************************** -->\n				<!-- ********************************************************** -->\n				<ion-row *ngIf="chooseType==2">\n					<ion-col col-6>\n						<ion-item no-lines>\n							<ion-label><span class="red">*</span>订单日期</ion-label>\n							<ion-datetime displayFormat="YYYY MMM DD,  HH:mm" name="start_date" ngModel></ion-datetime>\n						</ion-item>\n					</ion-col>\n					<ion-col col-6>\n						<ion-item no-lines>\n							<ion-label>备注</ion-label>\n							<ion-input type="text" name="remark" ngModel>\n							</ion-input>\n						</ion-item>\n					</ion-col>\n				</ion-row>\n				<ion-row *ngIf="chooseType==2">\n					<ion-col col-6 >\n						<ion-item no-lines>\n							<ion-label >新郎姓名</ion-label>\n							<ion-input type="text" name="groomeName" ngModel>\n							</ion-input>\n						</ion-item>\n					</ion-col>\n					<ion-col col-6>\n						<ion-item no-lines>\n							<ion-label>新郎电话</ion-label>\n							<ion-input type="tel" name="groomePhone" clearInput ngModel>\n							</ion-input>\n						</ion-item>\n					</ion-col>\n				</ion-row>\n				<ion-row *ngIf="chooseType==2">\n					<ion-col col-6>\n						<ion-item no-lines>\n							<ion-label>新娘姓名</ion-label>\n							<ion-input type="text" name="brideName" clearInput  ngModel>\n							</ion-input>\n						</ion-item>\n					</ion-col>\n					<ion-col col-6>\n						<ion-item no-lines>\n							<ion-label>新娘电话</ion-label>\n							<ion-input type="tel" name="bridePhone" clearInput  ngModel>\n							</ion-input>\n						</ion-item>\n					</ion-col>\n				</ion-row>\n				<ion-row *ngIf="chooseType==2">\n					<ion-col col-6>\n						<ion-item no-lines>\n							<ion-label>第三联系人姓名</ion-label>\n							<ion-input type="text" name="linkManName" clearInput  ngModel>\n							</ion-input>\n						</ion-item>\n					</ion-col>\n					<ion-col col-6>\n						<ion-item no-lines>\n							<ion-label>第三联系人电话</ion-label>\n							<ion-input type="tel" name="linkManPhone" clearInput  ngModel>\n							</ion-input>\n						</ion-item>\n					</ion-col>\n				</ion-row>\n				<!-- ********************************************************** -->\n				<!-- **************************会议选项************************** -->\n				<!-- ********************************************************** -->\n				<ion-row *ngIf="chooseType==1">\n					<ion-col col-6>\n						<ion-item no-lines>\n							<ion-label><span class="red">*</span>开始时间</ion-label>\n							<ion-datetime displayFormat="YYYY MMM DD, HH:mm" name="start_date" ngModel></ion-datetime>\n						</ion-item>\n					</ion-col>\n					<ion-col col-6>\n						<ion-item no-lines>\n							<ion-label><span class="red">*</span>结束时间</ion-label>\n							<ion-datetime displayFormat="YYYY MMM DD, HH:mm" name="end_date" ngModel></ion-datetime>\n						</ion-item>\n					</ion-col>\n				</ion-row>\n				<ion-row *ngIf="chooseType==1">\n					<ion-col col-6>\n						<ion-item no-lines>\n							<ion-label><span class="red">*</span>公司名称</ion-label>\n							<ion-select [(ngModel)]="selectCompany" name="company" (ngModelChange)="changeLinkMan()">\n								<ion-option [value]="item.id" *ngFor="let item of companyList" (click)=\'changeLinkMan()\'>\n									{{item.name}}\n								</ion-option>\n							</ion-select>\n						</ion-item>\n					</ion-col>\n					<ion-col col-6>\n						<ion-item no-lines>\n							<ion-label><span class="red">*</span>联系人</ion-label>\n							<ion-select name="linkMan" [(ngModel)]="selectLinkMan">\n								<ion-option [value]="item.id" *ngFor="let item of linkManList">\n									{{item.name}}\n								</ion-option>\n							</ion-select>\n						</ion-item>\n					</ion-col>\n				</ion-row>\n				<ion-row *ngIf="chooseType==1">\n					<ion-col col-6>\n						<ion-item no-lines>\n							<ion-label>备注</ion-label>\n							<ion-input type="text" name="mark" ngModel>\n							</ion-input>\n						</ion-item>\n					</ion-col>\n				</ion-row>\n\n				<ion-row class="subRow">\n					<ion-col col-6 class="txtR">\n						<button ion-button class="blckBtn" [disabled]="!ngform.valid" (click)="formSubmit(ngform.value)">\n							确定\n						</button>\n					</ion-col>\n					<ion-col col-6>\n						<button ion-button color="light" navPop>返回</button>\n					</ion-col>\n				</ion-row>\n				<!-- <button ion-button (click)="goback()">\n					返回\n				</button> -->\n			</ion-grid>\n		</form>\n\n	</div>\n</ion-content>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\pages\home\addorder.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_home__["a" /* HomeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_home__["a" /* HomeService */]])
    ], AddOrderPage);
    return AddOrderPage;
}());

//# sourceMappingURL=addorder.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(74);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeService = (function (_super) {
    __extends(HomeService, _super);
    function HomeService(injector) {
        return _super.call(this, injector) || this;
    }
    HomeService.prototype.getBgImgs = function () {
        var url = 'portal/index.php?r=background/GetXIshiIndexImgs';
        return this.get(url, {});
    };
    HomeService.prototype.getIndexInfo = function () {
        var query = {
            userid: window.localStorage.getItem('token')
        };
        var url = 'portal/index.php?r=background/GetWhsIndexInfo';
        return this.get(url, query);
    };
    HomeService.prototype.getYearData = function (query) {
        query.token = this.general.token;
        var url = 'portal/index.php?r=dailyReport/GetYearOrderCalendar';
        return this.get(url, query);
    };
    HomeService.prototype.getmouthOrders = function (query) {
        query.account_id = this.general.account_id;
        var url = 'portal/index.php?r=dailyReport/GetCalendar';
        return this.post(url, query);
    };
    //订单部分
    //1、渲染接口
    HomeService.prototype.getData = function (token) {
        var query = {
            token: token
        };
        var url = 'portal/index.php?r=sale/New_order_data';
        return this.get(url, query);
    };
    HomeService.prototype.addOrder = function (query) {
        var url;
        if (query.ordertype == 2) {
            // 婚礼订单
            url = 'portal/index.php?r=sale/New_wedding_order';
        }
        else if (query.ordertype == 1) {
            // 会议订单
            url = 'portal/index.php?r=sale/New_meeting_order';
        }
        return this.post(url, query);
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], HomeService);
    return HomeService;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseService */]));

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloatMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FloatMenuPage = (function () {
    function FloatMenuPage(navCtrl, navParams, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.item = this.navParams.get('item');
        // this.url = this.navParams.get('item.href');
        this.getUrl();
    }
    FloatMenuPage.prototype.getUrl = function () {
        switch (this.item.name) {
            case '灵感图库':
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost/Ms/portal/index.php?r=background/price_list&order_id=5149&token=2223009");
                break;
            case '我的收藏':
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost/Ms/portal/index.php?r=background/price_list&order_id=5149&token=2223009");
                break;
            case '效果图库':
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost/Ms/portal/index.php?r=background/price_list&order_id=5149&token=2223009");
                break;
            case '矢量图库':
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost/Ms/portal/index.php?r=background/price_list&order_id=5149&token=2223009");
                break;
            case '视频素材':
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost/Ms/portal/index.php?r=background/price_list&order_id=5149&token=2223009");
                break;
            case '婚礼音乐':
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost/Ms/portal/index.php?r=background/price_list&order_id=5149&token=2223009");
                break;
            case '主持词':
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost/Ms/portal/index.php?r=background/price_list&order_id=5149&token=2223009");
                break;
            case '口袋学堂':
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost/Ms/portal/index.php?r=background/price_list&order_id=5149&token=2223009");
                break;
            default:
                break;
        }
    };
    FloatMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-floatMenu',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\pages\home\floatMenu.html"*/'<ion-header>\n	<ion-navbar color="white">\n		<ion-title>{{item.name}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<iframe [src]=url></iframe>\n</ion-content>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\pages\home\floatMenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], FloatMenuPage);
    return FloatMenuPage;
}());

//# sourceMappingURL=floatMenu.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderDetailPage = (function () {
    function OrderDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(this.navParams.get('id'));
    }
    OrderDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-orderdetail',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\pages\home\orderdetail.html"*/'<ion-header>\n	<ion-navbar color="white">\n		<ion-title>订单详情</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<iframe src="http://localhost/Ms/portal/index.php?r=background/price_list&order_id=5149&token=2223009"></iframe>\n</ion-content>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\pages\home\orderdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], OrderDetailPage);
    return OrderDetailPage;
}());

//# sourceMappingURL=orderdetail.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Pages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_meeting__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_room__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_food__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_editfood__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_wedding__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_weddingIframe__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__show_views__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__show_pics__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_addorder__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_orderdetail__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_floatMenu__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__charts_chart__ = __webpack_require__(935);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__charts_client__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__charts_finance__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__charts_salechart__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__charts_target__ = __webpack_require__(397);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__login_login__["a"]; });
/* unused harmony reexport ChartPage */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__products_meeting__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__products_room__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__products_food__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_6__products_wedding__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__products_editfood__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_8__show_views__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__show_pics__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_10__home_addorder__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_11__home_orderdetail__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_12__home_floatMenu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_14__charts_client__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_15__charts_finance__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_16__charts_salechart__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_17__charts_target__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_7__products_weddingIframe__["a"]; });
// 模块列表
// --------------------------------------------------
// 请将本目录下所有模块导出，方便从任意地方快速调用
//


// import { ProductsPage } from './products/products';
// import { MeetingPage } from './meeting/meeting';
















var Pages = [
    __WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */],
    __WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */],
    __WEBPACK_IMPORTED_MODULE_13__charts_chart__["a" /* ChartPage */],
    // ProductsPage,
    __WEBPACK_IMPORTED_MODULE_2__products_meeting__["a" /* MeetingPage */],
    __WEBPACK_IMPORTED_MODULE_3__products_room__["a" /* RoomPage */],
    __WEBPACK_IMPORTED_MODULE_4__products_food__["a" /* FoodPage */],
    __WEBPACK_IMPORTED_MODULE_6__products_wedding__["a" /* WeddingPage */],
    __WEBPACK_IMPORTED_MODULE_5__products_editfood__["a" /* EditFoods */],
    __WEBPACK_IMPORTED_MODULE_8__show_views__["a" /* ViewsPage */],
    __WEBPACK_IMPORTED_MODULE_9__show_pics__["a" /* PicsPage */],
    __WEBPACK_IMPORTED_MODULE_10__home_addorder__["a" /* AddOrderPage */],
    __WEBPACK_IMPORTED_MODULE_11__home_orderdetail__["a" /* OrderDetailPage */],
    __WEBPACK_IMPORTED_MODULE_12__home_floatMenu__["a" /* FloatMenuPage */],
    __WEBPACK_IMPORTED_MODULE_14__charts_client__["a" /* clientChartPage */],
    __WEBPACK_IMPORTED_MODULE_15__charts_finance__["a" /* financeChartPage */],
    __WEBPACK_IMPORTED_MODULE_16__charts_salechart__["a" /* saleChartPage */],
    __WEBPACK_IMPORTED_MODULE_17__charts_target__["a" /* targetChartPage */],
    __WEBPACK_IMPORTED_MODULE_7__products_weddingIframe__["a" /* WeddingDetailPage */]
];

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(556);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_index__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_index__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_route__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { IonicApp, IonicModule } from 'ionic-angular';



// 新的http请求







// import * as $ from 'jquery';
var AppConfig = {
    backButtonText: '',
    iconMode: 'ios',
    mode: 'ios',
    monthShortNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_index__["i" /* Pages */],
                __WEBPACK_IMPORTED_MODULE_7__directives_index__["a" /* Dires */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], AppConfig, __WEBPACK_IMPORTED_MODULE_10__pages_route__["a" /* RouteConfig */]),
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_index__["i" /* Pages */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                // BridgeHelper,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicErrorHandler"] }
                // { provide: ErrorHandler, useClass: ErrorHelper },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dires; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendar_calendar__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_menu__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chartmenu_chartmenu__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseXmb_upload__ = __webpack_require__(915);
// 模块列表
// --------------------------------------------------
// 请将本目录下所有模块导出，方便从任意地方快速调用
//




var Dires = [
    __WEBPACK_IMPORTED_MODULE_0__calendar_calendar__["a" /* CalendarDire */],
    __WEBPACK_IMPORTED_MODULE_1__menu_menu__["a" /* MenuDire */],
    __WEBPACK_IMPORTED_MODULE_2__chartmenu_chartmenu__["a" /* ChartMenuDire */],
    __WEBPACK_IMPORTED_MODULE_3__baseXmb_upload__["a" /* UploaderDire */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDire; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarDire = (function () {
    function CalendarDire(nav) {
        this.nav = nav;
        this.active_day = new Date().getDate();
        this.dealDate = [];
        this.noDealDate = [];
        this.curDeal = [];
        this.curNoDeal = [];
        this.days = [];
        this.runNum = 0;
    }
    Object.defineProperty(CalendarDire.prototype, "preload", {
        set: function (args) {
            this.year = args.year;
            this.month = args.month;
            this.dealDate = args.dealDate;
            this.noDealDate = args.nodealDate;
            this.showCalendarData();
        },
        enumerable: true,
        configurable: true
    });
    CalendarDire.prototype.showCalendarData = function () {
        var _this = this;
        this.days = [];
        if (this.year > 0 && this.month > 0) {
            //展示指定的年和月的所有日期
            this.showDays(this.year, this.month);
        }
        else {
            if (this.runNum < 5) {
                setTimeout(function () {
                    _this.showCalendarData();
                }, 1000);
                this.runNum++;
            }
        }
    };
    //初始化显示 当前年和月
    CalendarDire.prototype.show_now = function () {
        var now = new Date();
        this.active_day = now.getDate();
        var curyear = now.getFullYear();
        var curmonth = now.getMonth() + 1;
        this.showDays(curyear, curmonth);
    };
    CalendarDire.prototype.showDays = function (year, month) {
        //得到表示指定年和月的1日的那个时间对象
        var date = new Date(year, month - 1, 1);
        this.getOrderDays();
        //本月1号是星期几，添加空白
        var dayOfWeek = date.getDay();
        for (var i = 0; i < dayOfWeek; i++) {
            var item = {
                day: null,
                classname: ''
            };
            this.days.push(item);
        }
        //计算一个月有多少天
        var daysOfMonth = this.calDays(year, month);
        var _loop_1 = function (i) {
            var classname = null;
            if (this_1.curDeal.length > 0) {
                this_1.curDeal.map(function (item) {
                    var deal = parseInt(item);
                    if (deal == i) {
                        // console.log("已付");
                        classname = "paid";
                    }
                });
            }
            if (this_1.curDeal.length > 0) {
                this_1.curNoDeal.map(function (item) {
                    var noday = parseInt(item);
                    if (noday == i) {
                        classname = "plan";
                    }
                });
            }
            var item = {
                day: i,
                classname: classname
            };
            this_1.days.push(item);
        };
        var this_1 = this;
        for (var i = 1; i <= daysOfMonth; i++) {
            _loop_1(i);
        }
        // console.log(this.days);
    };
    CalendarDire.prototype.calDays = function (year, month) {
        return new Date(year, month, 0).getDate();
    };
    //分割订单天数
    CalendarDire.prototype.getOrderDays = function () {
        var _this = this;
        this.curDeal = [];
        this.curNoDeal = [];
        // console.log(this.dealDate);
        this.dealDate.map(function (item) {
            var dateStr = item;
            var reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
            dateStr.match(reg);
            var regYear = RegExp.$1;
            var regMonth = RegExp.$2;
            var regDay = RegExp.$3;
            if (regYear == _this.year && regMonth == _this.month) {
                _this.curDeal.push(regDay);
            }
        });
        this.noDealDate.map(function (item) {
            var dateStr = item;
            var reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
            dateStr.match(reg);
            var regYear = RegExp.$1;
            var regMonth = RegExp.$2;
            var regDay = RegExp.$3;
            if (regYear == _this.year && regMonth == _this.month) {
                _this.curNoDeal.push(regDay);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CalendarDire.prototype, "preload", null);
    CalendarDire = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '.xmb-calendar',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\directives\calendar\calendar.html"*/'<div class="canBox">\n	<div class="canTable">\n		<div class="daybox dayWeek">\n			<span>S</span>\n		</div>\n		<div class="daybox dayWeek">\n			<span>M</span>\n		</div>\n		<div class="daybox dayWeek">\n			<span>T</span>\n		</div>\n		<div class="daybox dayWeek">\n			<span>W</span>\n		</div>\n		<div class="daybox dayWeek">\n			<span>T</span>\n		</div>\n		<div class="daybox dayWeek">\n			<span>F</span>\n		</div>\n		<div class="daybox dayWeek">\n			<span>S</span>\n		</div>\n		<!-- <td ng-repeat="day in days track by $index" ng-cspanck="change_day(day)" ng-class="{true:\'active\',false:\'\'}[day==active_day]"\n				ng-model="day">{{day}}</td> -->\n		<div class="daybox" *ngFor="let item of days">\n			<span class={{item.classname}}>\n				{{item.day}}\n			</span>\n		</div>\n	</div>\n</div>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\directives\calendar\calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], CalendarDire);
    return CalendarDire;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuDire; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_products_meeting__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_products_room__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_products_food__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_products_wedding__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MenuDire = (function () {
    function MenuDire(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.active = '';
    }
    Object.defineProperty(MenuDire.prototype, "preload", {
        set: function (args) {
            this.active = args.active;
        },
        enumerable: true,
        configurable: true
    });
    MenuDire.prototype.setactive = function () {
        switch (this.active) {
            case 'meeeting':
                console.log('meeting');
                break;
            case 'food':
                console.log('food');
                break;
            case 'room':
                console.log('room');
                break;
            case 'wedding':
                console.log('wedding');
                break;
            default:
                break;
        }
    };
    MenuDire.prototype.gotoMenu = function (name) {
        var _this = this;
        console.log(name);
        if (name == this.active) {
            return;
        }
        else {
            this.active = name;
        }
        if (name == 'meeting') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_products_meeting__["a" /* MeetingPage */], null, { animate: false }).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
        }
        else if (name == 'food') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_products_food__["a" /* FoodPage */], null, { animate: false }).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
            ;
        }
        else if (name == 'room') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_products_room__["a" /* RoomPage */], null, { animate: false }).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
            ;
        }
        else if (name == 'wedding') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_products_wedding__["a" /* WeddingPage */], null, { animate: false }).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
            ;
        }
        else {
            console.log("找不到此页面");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MenuDire.prototype, "preload", null);
    MenuDire = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '.xmb-menu',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\directives\menu\menu.html"*/'<ion-list class="productMenu">\n\n	<div class="orange" [ngClass]="{\'active\': active == \'food\'}" (click)="gotoMenu(\'food\')">\n\n		<div class="iconbox">\n\n			<ion-icon name="restaurant"></ion-icon>\n\n		</div>\n\n		餐饮\n\n	</div>\n\n	<div class="red" [ngClass]="{\'active\': active == \'wedding\'}" (click)="gotoMenu(\'wedding\')">\n\n		<div class="iconbox">\n\n			<ion-icon name="heart"></ion-icon>\n\n		</div>\n\n		婚礼\n\n	</div>\n\n\n\n	<div class="green" [ngClass]="{\'active\': active == \'meeting\'}" (click)="gotoMenu(\'meeting\')">\n\n		<div class="iconbox">\n\n			<ion-icon name="md-contacts"></ion-icon>\n\n		</div>\n\n		会议\n\n	</div>\n\n	<div class="yellow" [ngClass]="{\'active\': active == \'room\'}" (click)="gotoMenu(\'room\')">\n\n		<div class="iconbox">\n\n			<ion-icon name="md-home"></ion-icon>\n\n		</div>\n\n		客房\n\n	</div>\n\n</ion-list>'/*ion-inline-end:"E:\Code\Ms\XSH\src\directives\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MenuDire);
    return MenuDire;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartMenuDire; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_charts_client__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_charts_finance__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_charts_salechart__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_charts_target__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChartMenuDire = (function () {
    function ChartMenuDire(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatmemu = '';
        console.log(this.chatmemu);
    }
    Object.defineProperty(ChartMenuDire.prototype, "preload", {
        set: function (args) {
            this.chatmemu = args.active;
        },
        enumerable: true,
        configurable: true
    });
    ChartMenuDire.prototype.setmemu = function (name) {
        var _this = this;
        this.chatmemu = name;
        if (name == 'sales') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_charts_salechart__["a" /* saleChartPage */], null, { animate: false }).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
        }
        else if (name == 'clients') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_charts_client__["a" /* clientChartPage */], null, { animate: false }).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
        }
        else if (name == 'goals') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_charts_target__["a" /* targetChartPage */], null, { animate: false }).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
        }
        else if (name == 'finance') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_charts_finance__["a" /* financeChartPage */], null, { animate: false }).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ChartMenuDire.prototype, "preload", null);
    ChartMenuDire = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '.xmb-chartmenu',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\directives\chartmenu\chartmenu.html"*/'<ion-list no-lines>\n	<button class="typebtn" no-lines ion-item [ngClass]="{\'active\':  chatmemu == \'sales\'}" (click)="setmemu(\'sales\');">\n		<ion-icon name="stats" item-start></ion-icon>销售数据\n	</button>\n	<button class="typebtn" no-lines ion-item [ngClass]="{\'active\':  chatmemu == \'finance\'}" (click)="setmemu(\'finance\')">\n		<ion-icon name="move" item-start></ion-icon>财务数据\n	</button>\n	<button class="typebtn" no-lines ion-item [ngClass]="{\'active\':  chatmemu == \'clients\'}" (click)="setmemu(\'clients\')">\n		<ion-icon name="contact" item-start></ion-icon>客户列表\n	</button>\n	<button class="typebtn" no-lines ion-item [ngClass]="{\'active\':  chatmemu == \'goals\'}" (click)="setmemu(\'goals\')">\n		<ion-icon name="move" item-start></ion-icon>目标&薪酬\n	</button>\n</ion-list>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\directives\chartmenu\chartmenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ChartMenuDire);
    return ChartMenuDire;
}());

//# sourceMappingURL=chartmenu.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meeting__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wedding__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editfood__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_product__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { FoodPage } from './food';





var FoodPage = (function () {
    function FoodPage(navCtrl, navParams, toastCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.account_id = localStorage.getItem('account_id');
        this.menulists = [];
        this.addname = '';
        this.productlist = [];
        this.menuName = '';
        this.dishNum = '';
        // public cartlist = [];
        // public showcart = false;
        this.chooseid = '';
        this.foodtype = 0;
        this.modalVisible = false;
        this.placeForm = {};
        this.orderlist = [];
        //this.getMemu();
        // this.getproducts();
        this.getMealMemu();
    }
    FoodPage.prototype.setType = function (num) {
        switch (num) {
            case '0':
                this.foodtype = 0;
                console.log("全部");
                break;
            case '1':
                this.foodtype = 1;
                console.log("凉菜");
                break;
            case '2':
                this.foodtype = 2;
                console.log("热菜");
                break;
            case '3':
                this.foodtype = 3;
                console.log("汤羹");
                break;
            case '4':
                this.foodtype = 4;
                console.log("主食");
                break;
            default:
                break;
        }
    };
    //获取菜单列表及第一个菜单的详情
    FoodPage.prototype.getMealMemu = function () {
        var _this = this;
        this.service.getMealMemu().then(function (data) {
            if (data.status == 1) {
                _this.menuName = data['list'][0]['name'];
                _this.dishNum = data['dishes'].length;
                for (var i = 0; i < data['list'].length; i++) {
                    var t = {
                        name: data['list'][i]['name'],
                        id: data['list'][i]['id']
                    };
                    _this.menulists.push(t);
                }
                ;
                for (var i = 0; i < data['dishes'].length; i++) {
                    var t = {
                        id: 1,
                        img: data['dishes'][i]['ref_pic_url'],
                        title: data['dishes'][i]['product_name'],
                        detail: data['dishes'][i]['description'],
                        price: data['dishes'][i]['price']
                    };
                    _this.productlist.push(t);
                }
                ;
            }
        });
    };
    //获取菜单详情
    FoodPage.prototype.getMenuDetail = function (menu_id) {
        var _this = this;
        this.service.getMenuDetail(menu_id).then(function (data) {
            _this.productlist = [];
            _this.menuName = data['menu']['name'];
            _this.dishNum = data['dishes'].length;
            _this.chooseid = menu_id;
            if (data.status == 1) {
                for (var i = 0; i < data['dishes'].length; i++) {
                    var t = {
                        id: 1,
                        img: data['dishes'][i]['ref_pic_url'],
                        title: data['dishes'][i]['product_name'],
                        detail: data['dishes'][i]['description'],
                        price: data['dishes'][i]['price']
                    };
                    _this.productlist.push(t);
                }
                ;
            }
        });
    };
    FoodPage.prototype.addMenu = function () {
        this.menulists.push(this.addname);
        this.addname = '';
    };
    FoodPage.prototype.gotoEditFood = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__editfood__["a" /* EditFoods */], { menuId: this.chooseid });
    };
    // 删除产品
    FoodPage.prototype.delItem = function (id) {
        console.log(id);
    };
    // 加入订单
    FoodPage.prototype.addOrder = function () {
        this.placeForm = {};
        this.modalVisible = true;
        this.getOrders();
        console.log(this.modalVisible);
    };
    FoodPage.prototype.getOrders = function () {
        this.orderlist = [
            { id: 0, title: 'type1' },
            { id: 1, title: 'type2' },
        ];
    };
    FoodPage.prototype.hideModal = function () {
        this.modalVisible = false;
    };
    FoodPage.prototype.formSubmit = function (form) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: '成功加入到订单',
            showCloseButton: true,
            position: 'middle',
        });
        form.img = this.imgUpLoad;
        this.service.addProduct(this.account_id, this.typeId, form.name, form.price, form.cost, form.unit, form.detail, form.img).then(function (data) {
            _this.modalVisible = false;
        });
    };
    //分享
    FoodPage.prototype.share = function () {
    };
    FoodPage.prototype.gotoMenu = function (name) {
        var _this = this;
        console.log(name);
        if (name == 'meeting') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__meeting__["a" /* MeetingPage */]).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
        }
        else if (name == 'food') {
            // this.navCtrl.push(FoodPage).then(() => {
            // 	this.navCtrl.removeView(this.navCtrl.getPrevious());
            // });;
        }
        else if (name == 'room') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__room__["a" /* RoomPage */]).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
            ;
        }
        else if (name == 'wedding') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__wedding__["a" /* WeddingPage */]).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
            ;
        }
        else {
            console.log("找不到此页面");
        }
    };
    // 上传图片传回base64
    FoodPage.prototype.uploadfn2 = function (data) {
        this.imgUpLoad = data;
    };
    FoodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-food',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\pages\products\food.html"*/'<ion-header>\n	<ion-navbar color="white">\n		<ion-title>产品报价</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-grid class="nopadding">\n		<ion-row>\n			<ion-col col-1 class="menubg">\n				<dfn class="xmb-menu" [preload]="{active:\'food\'}"></dfn>\n			</ion-col>\n			<ion-col col-3 class="typebg">\n				<ion-list>\n					<ion-item class="typebtn" no-lines>\n						<ion-input type="text" placeholder="新增" [(ngModel)]="addname"></ion-input>\n						<ion-icon name="add" item-end (click)="addMenu()"></ion-icon>\n					</ion-item>\n					<button class="typebtn" no-lines ion-item *ngFor="let item of menulists" (click)="getMenuDetail(item.id)">\n						<!-- <ion-icon name="leaf" item-start></ion-icon> -->\n						<span class="icon">\n							<img src="assets/imgs/product/foodIcon.jpg" />\n						</span>\n						{{item.name}}\n					</button>\n				</ion-list>\n				<!-- <div>\n					<div *ngIf="showcart">\n						<button (click)="hideCart()">隐藏购物车</button>\n						<div *ngFor="let item of cartlist">\n							<h2>{{item.title}}</h2>\n							<h2>单价 {{item.price}}</h2>\n							<h2>数量 {{item.amount}}</h2>\n							<h2>备注 {{item.mark}}</h2>\n						</div>\n					</div>\n					<button ion-button (click)="clearCart()">清空购物车</button>\n					<button ion-button (click)="showCart()">购物车\n						<ion-badge color="danger" item-end>3</ion-badge>\n					</button>\n				</div> -->\n			</ion-col>\n			<ion-col col-8 class="chart-box" [ngSwitch]="chatmemu">\n				<ion-row>\n					<ion-col col-11 class="foodMain">\n						<ion-row class="toptitle">\n							<ion-col col-6>\n								<h3>\n									<span>{{menuName}} |</span>\n									{{dishNum}}个商品\n								</h3>\n							</ion-col>\n							<ion-col col-6 class="txtRight">\n								<button ion-button (click)="gotoEditFood()">编辑</button>\n								<button ion-button (click)="share()">\n									<ion-icon name="share-alt"></ion-icon>\n								</button>\n								<button ion-button (click)="addOrder()">加入订单</button>\n							</ion-col>\n						</ion-row>\n						<ion-list class="itembox">\n							<ion-item *ngFor="let item of productlist" class="goodBox">\n								<ion-thumbnail item-start class="imgbox">\n									<img src={{item.img}} />\n								</ion-thumbnail>\n								<ion-row>\n									<ion-col col-8>\n										<h2 class="title">\n											{{item.title}}\n										</h2>\n										<p class="detail">{{item.detail}}</p>\n									</ion-col>\n									<ion-col col-4 class="price">\n										<h3>￥{{item.price}}</h3>\n									</ion-col>\n								</ion-row>\n							</ion-item>\n						</ion-list>\n					</ion-col>\n					<ion-col col-1>\n						<div class="sideBtn">\n							<button class="blue" [ngClass]="{\'activeside\': foodtype == \'0\'}" (click)="setType(\'0\')">全部 </button>\n							<button class="yellow" [ngClass]="{\'activeside\': foodtype == \'1\'}" (click)="setType(\'1\')">凉菜 </button>\n							<button class="blue" [ngClass]="{\'activeside\': foodtype == \'2\'}" (click)="setType(\'2\')">热菜 </button>\n							<button class="yellow" [ngClass]="{\'activeside\': foodtype == \'3\'}" (click)="setType(\'3\')">汤羹 </button>\n							<button class="orange" [ngClass]="{\'activeside\': foodtype == \'4\'}" (click)="setType(\'4\')">主食 </button>\n						</div>\n					</ion-col>\n				</ion-row>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<div class="calendarModal" *ngIf="modalVisible">\n		<div class="modalInner">\n			<span class="hidebtn" (click)="hideModal()">\n				<ion-icon name="close"></ion-icon>\n			</span>\n			<h3 class="modalTitle">\n				加入订单\n			</h3>\n\n			<div class="formBox">\n				<form #ngform="ngForm">\n					<ion-grid class="mainCon">\n						<ion-row>\n							<ion-col col-8>\n								<ion-item no-lines>\n									<ion-label>\n										<span class="red">*</span> 订单\n									</ion-label>\n									<ion-select name="id" ngModel>\n										<span *ngFor="let item of orderlist">\n											<ion-option [value]="item.id">\n												{{item.title}}\n											</ion-option>\n										</span>\n									</ion-select>\n								</ion-item>\n							</ion-col>\n							<ion-col col-4 class="txtR">\n								<button ion-button class="blckBtn" [disabled]="!ngform.valid" (click)="formSubmit(ngform.value)">\n									确定\n								</button>\n							</ion-col>\n						</ion-row>\n					</ion-grid>\n				</form>\n			</div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\pages\products\food.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__providers_product__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_product__["a" /* ProductService */]])
    ], FoodPage);
    return FoodPage;
}());

//# sourceMappingURL=food.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaseService = (function () {
    function BaseService(injector) {
        //public baseApi = Sites.baseapi;
        this.baseApi = 'http://www.cike360.com/school/crm_web/';
        this.general = {
            token: window.localStorage.getItem('token'),
            account_id: window.localStorage.getItem('account_id'),
            staff_hotel_id: window.localStorage.getItem('staff_hotel_id'),
            staff_hotel_name: window.localStorage.getItem('staff_hotel_name'),
            manage: window.localStorage.getItem('manage'),
            name: window.localStorage.getItem('name'),
            unfinished: window.localStorage.getItem('unfinished'),
            vip: window.localStorage.getItem('vip'),
            is_supplier: window.localStorage.getItem('is_supplier'),
            is_city_partner: window.localStorage.getItem('is_city_partner'),
            avatar: window.localStorage.getItem('avatar'),
            vip_deadline: window.localStorage.getItem('vip_deadline'),
            ji_fen: window.localStorage.getItem('ji_fen'),
            gender: window.localStorage.getItem('gender'),
            exp: window.localStorage.getItem('exp'),
            exp_rank: window.localStorage.getItem('exp_rank'),
            exp_duanwei: window.localStorage.getItem('exp_duanwei'),
            exp_next_need: window.localStorage.getItem('exp_next_need'),
            gold_balance: window.localStorage.getItem('gold_balance')
        };
        this.istoken = false;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
            url: "",
            method: "POST",
            itemAlias: "uploadedfile"
        });
    }
    BaseService.prototype.post = function (url, query) {
        // let datas = '请求失败';
        return __WEBPACK_IMPORTED_MODULE_2_jquery__["ajax"]({
            type: 'POST',
            url: this.baseApi + url,
            // data: query,
            data: JSON.stringify(query),
            dataType: "JSON",
        });
    };
    BaseService.prototype.get = function (url, query) {
        return __WEBPACK_IMPORTED_MODULE_2_jquery__["ajax"]({
            type: 'GET',
            url: this.baseApi + url,
            // data: query,
            data: query,
            dataType: "JSON",
        });
    };
    // D: 定义事件，上传文件
    BaseService.prototype.uploadFile = function (url) {
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
            url: url,
            method: "POST",
            itemAlias: "uploadedfile"
        });
        // 上传
        this.uploader.queue[0].onSuccess = function (response, status, headers) {
            // 上传文件成功
            if (status == 200) {
                // 上传文件后获取服务器返回的数据
                var tempRes = JSON.parse(response);
            }
            else {
                // 上传文件后获取服务器返回的数据错误
                console.log("");
            }
        };
        this.uploader.queue[0].upload(); // 开始上传
    };
    BaseService.prototype.uploadFileHandel = function () {
        this.uploader.queue[0].onSuccess = function (response, status, headers) {
            // 上传文件成功
            if (status == 200) {
                // 上传文件后获取服务器返回的数据
                var tempRes = JSON.parse(response);
            }
            else {
                // 上传文件后获取服务器返回的数据错误
            }
        };
        this.uploader.queue[0].upload(); // 开始上传
    };
    BaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], BaseService);
    return BaseService;
}());

//# sourceMappingURL=base.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__food__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wedding__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_product__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MeetingPage = (function () {
    function MeetingPage(navCtrl, navParams, service, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.account_id = localStorage.getItem('account_id');
        this.admin = true;
        this.showedit = false;
        this.menulists = [];
        this.addname = '';
        this.productlist = [];
        this.cartlist = [];
        this.showcart = false;
        this.modalVisible = false;
        this.placeForm = {};
        this.modalOrderVisible = false;
        this.second = 0; //二级目录选中状态
        this.typeP_num = 0;
        this.getproducts();
    }
    MeetingPage.prototype.addMenu = function () {
        // this.menulists.push(this.addname);
        var query = {
            name: this.addname
        };
        this.service.AddMeetingType(query).then(function (data) {
            if (data) {
                //this.getMemu();
            }
        });
        this.addname = '';
        this.addname = '';
    };
    MeetingPage.prototype.checkMenu = function (id) {
        this.getproducts();
    };
    //选择分类
    MeetingPage.prototype.checkSecond = function (num, name, id) {
        var _this = this;
        this.second = num;
        this.secondname = name;
        this.secondSegment = name;
        this.showedit = false;
        this.typeId = id;
        this.productlist = [];
        this.service.getProductByType(id).then(function (data) {
            if (data.status == 1) {
                for (var i = 0; i < data['list'].length; i++) {
                    var t = {
                        id: data['list'][i]['id'],
                        img: data['list'][i]['ref_pic_url'],
                        title: data['list'][i]['product_name'],
                        detail: data['list'][i]['description'],
                        price: data['list'][i]['price'],
                    };
                    _this.productlist.push(t);
                }
                ;
                _this.typeP_num = data['list'].length;
            }
        });
    };
    //初始渲染
    MeetingPage.prototype.getproducts = function () {
        var _this = this;
        this.service.getMeetingMemu(this.account_id).then(function (data) {
            if (data.status == 1) {
                for (var i = 0; i < data['product'].length; i++) {
                    var t = {
                        id: data['product'][i]['id'],
                        img: data['product'][i]['ref_pic_url'],
                        title: data['product'][i]['product_name'],
                        detail: data['product'][i]['description'],
                        price: data['product'][i]['price'],
                    };
                    _this.productlist.push(t);
                }
                ;
                for (var i = 0; i < data['list'].length; i++) {
                    var t = {
                        img: data['list'][i]['img'],
                        name: data['list'][i]['name'],
                        id: data['list'][i]['id']
                    };
                    _this.menulists.push(t);
                }
                ;
                _this.secondname = data['list'][0]['name'];
                _this.typeP_num = data['product'].length;
            }
        });
    };
    MeetingPage.prototype.editProducts = function () {
        this.showedit = true;
    };
    MeetingPage.prototype.editSucess = function () {
        this.showedit = false;
    };
    // 删除产品
    MeetingPage.prototype.delItem = function (id) {
        var _this = this;
        var query = { id: id };
        this.service.DeleteProduct(query).then(function (data) {
            if (data) {
                _this.getproducts();
            }
        });
    };
    // 删除全部产品
    MeetingPage.prototype.delAllItem = function (id) {
        var alert = this.alertCtrl.create({
            title: '当前分类下有8个产品，确认全部删除？',
            // subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['确定']
        });
        alert.present();
    };
    // 删除产品图片 ???????
    MeetingPage.prototype.delItemImg = function (id) {
        var _this = this;
        var query = { id: id };
        this.service.DeleteProductImg(query).then(function (data) {
            if (data) {
                _this.getproducts();
            }
        });
    };
    // 新增产品
    MeetingPage.prototype.addProducts = function () {
        this.placeForm = {};
        this.modalVisible = true;
    };
    // 修改产品
    MeetingPage.prototype.editItem = function (id) {
        this.placeForm = {
            name: '产品名称',
            price: '1998',
            detail: '产品详细介绍'
        };
        this.modalVisible = true;
        this.getproducts();
    };
    MeetingPage.prototype.formSubmit = function (form) {
        var _this = this;
        form.img = this.imgUpLoad;
        this.service.addProduct(this.account_id, this.typeId, form.name, form.price, form.cost, form.unit, form.detail, form.img).then(function (data) {
            _this.modalVisible = false;
        });
    };
    MeetingPage.prototype.hideModal = function () {
        this.modalVisible = false;
    };
    // // 清空购物车
    // clearCart() {
    // }
    // //加入购物车
    MeetingPage.prototype.addCart = function (id) {
        console.log(id);
        this.modalOrderVisible = true;
    };
    MeetingPage.prototype.hideOrderModal = function () {
        this.modalOrderVisible = false;
        // this.getCartlist();
    };
    MeetingPage.prototype.hideCart = function () {
        this.showcart = false;
    };
    MeetingPage.prototype.deltaocanItem = function (id) {
        var alert = this.alertCtrl.create({
            title: '确认删除？',
            // subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['确定']
        });
        alert.present();
    };
    // getCartlist() {
    // 	this.cartlist = [
    // 		{
    // 			id: '1',
    // 			title: '988婚宴',
    // 			price: '100',
    // 			amount: '12',
    // 			mark: '12小时使用时长，包含免费摆台，免费茶水'
    // 		},
    // 		{
    // 			id: '2',
    // 			title: '988婚宴',
    // 			price: '100',
    // 			amount: '12',
    // 			mark: '12小时使用时长，包含免费摆台，免费茶水'
    // 		},
    // 		{
    // 			id: '3',
    // 			title: '988婚宴',
    // 			price: '100',
    // 			amount: '12',
    // 			mark: '12小时使用时长，包含免费摆台，免费茶水'
    // 		},
    // 	];
    // }
    MeetingPage.prototype.gotoMenu = function (name) {
        var _this = this;
        console.log(name);
        if (name == 'meeting') {
            // this.navCtrl.push(MeetingPage).then(() => {
            // 	this.navCtrl.removeView(this.navCtrl.getPrevious());
            // });
        }
        else if (name == 'food') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__food__["a" /* FoodPage */]).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
            ;
        }
        else if (name == 'room') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__room__["a" /* RoomPage */]).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
            ;
        }
        else if (name == 'wedding') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__wedding__["a" /* WeddingPage */]).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
            ;
        }
        else {
            console.log("找不到此页面");
        }
    };
    // 上传图片传回base64
    MeetingPage.prototype.uploadfn2 = function (data) {
        this.imgUpLoad = data;
    };
    MeetingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-meeting',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\pages\products\meeting.html"*/'<ion-header>\n	<ion-navbar color="white">\n		<ion-title>产品报价</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-grid class="nopadding">\n		<ion-row>\n			<ion-col col-1 class="menubg">\n				<dfn class="xmb-menu" [preload]="{active:\'meeting\'}"></dfn>\n			</ion-col>\n			<ion-col col-3 class="typebg">\n				<ion-list no-lines>\n					<ion-item class="typebtn" no-lines>\n						<ion-input type="text" placeholder="新增" [(ngModel)]="addname"></ion-input>\n						<ion-icon name="add" item-end (click)="addMenu()"></ion-icon>\n					</ion-item>\n\n					<button class="typebtn" [ngClass]="{\'active\': second == i}"  no-lines ion-item *ngFor="let item of menulists; let i = index" (click)="checkSecond(i, item.name, item.id)">\n						<!-- <ion-icon name="leaf" item-start></ion-icon> -->\n						<span class="icon">\n							<img src="assets/imgs/product/roomIcon.jpg" />\n						</span>\n						{{item.name}}\n					</button>\n				</ion-list>\n				<!-- <div>\n					<div *ngIf="showcart">\n						<button (click)="hideCart()">隐藏购物车</button>\n						<div *ngFor="let item of cartlist">\n							<h2>{{item.title}}</h2>\n							<h2>单价 {{item.price}}</h2>\n							<h2>数量 {{item.amount}}</h2>\n							<h2>备注 {{item.mark}}</h2>\n						</div>\n					</div>\n					<button ion-button (click)="clearCart()">清空购物车</button>\n					<button ion-button (click)="showCart()">购物车\n						<ion-badge color="danger" item-end>3</ion-badge>\n					</button>\n				</div> -->\n			</ion-col>\n			<ion-col col-8 class="chart-box" [ngSwitch]="chatmemu">\n				<ion-row class="toptitle">\n					<ion-col col-8>\n						<h3>\n							<span>{{secondname}} | </span>\n							{{typeP_num}}个商品\n							<button ion-button clear *ngIf="admin&& showedit">\n								<ion-icon name="create" (click)="editType(item.id)"></ion-icon>\n							</button>\n							<button ion-button clear *ngIf="admin&& showedit">\n								<ion-icon name="trash" (click)="delType(item.id)"></ion-icon>\n							</button>\n						</h3>\n					</ion-col>\n					<ion-col col-4 class="txtRight">\n						<button ion-button *ngIf="admin&& !showedit" (click)="editProducts()">编辑</button>\n						<button ion-button *ngIf="admin&& showedit" (click)="addProducts()">新增产品</button>\n						<button ion-button *ngIf="admin&& showedit" (click)="editSucess()">完成</button>\n					</ion-col>\n				</ion-row>\n\n				<ion-list class="itembox">\n					<ion-item *ngFor="let item of productlist" class="goodBox">\n						<ion-thumbnail item-start class="imgbox">\n							<img src={{item.img}} />\n						</ion-thumbnail>\n						<ion-row>\n							<ion-col col-8>\n								<h2 class="title">\n									{{item.title}}\n								</h2>\n								<h3 class="price">￥{{item.price}}</h3>\n							</ion-col>\n							<ion-col col-4>\n								<span class="btns">\n									<button ion-button clear>\n										<ion-icon name="create" *ngIf="showedit" (click)="editItem(item.id)"></ion-icon>\n									</button>\n									<button ion-button clear>\n										<ion-icon name="trash" *ngIf="showedit" (click)="deltaocanItem(item.id)"></ion-icon>\n									</button>\n								</span>\n								<!-- <span *ngIf="showedit" class="btns">\n									<ion-icon name="create" (click)="editItem(item.id)"></ion-icon>\n									<ion-icon name="trash" (click)="delItem(item.id)"></ion-icon>\n								</span> -->\n								<button ion-button class="addOrderBtn" item-end (click)="addCart(item.id)">加入订单</button>\n								<!-- <button ion-button clear item-end (click)="addCart(item.id)">加入购物车</button> -->\n							</ion-col>\n						</ion-row>\n\n						<p class="detail">{{item.detail}}</p>\n					</ion-item>\n				</ion-list>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<div class="calendarModal" *ngIf="modalVisible">\n		<div class="modalInner">\n			<span class="hidebtn" (click)="hideModal()">\n				<ion-icon name="close"></ion-icon>\n			</span>\n			<h3 class="modalTitle">\n				新增产品\n			</h3>\n\n			<div class="formBox">\n				<form #ngform="ngForm">\n					<ion-grid>\n						<dfn class="xmb-misc-uploader" (onloaded)="uploadfn2($event)" ></dfn>\n						<ion-row>\n							<ion-col col-6>\n								<ion-item no-lines>\n									<ion-label>\n										<span class="red">*</span> 产品名称</ion-label>\n									<ion-input type="text" name="name" placeholder={{placeForm.name}} clearInput [(ngModel)]="placeForm.name">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row>\n							<ion-col col-6>\n								<ion-item no-lines>\n									<ion-label>\n										价格\n									</ion-label>\n									<ion-input type="number" name="price" placeholder={{placeForm.price}} clearInput [(ngModel)]="placeForm.price">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row>\n							<ion-col col-6>\n								<ion-item no-lines>\n									<ion-label>\n										成本\n									</ion-label>\n									<ion-input type="number" name="cost" placeholder={{placeForm.cost}} clearInput [(ngModel)]="placeForm.cost">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row>\n							<ion-col col-6>\n								<ion-item no-lines>\n									<ion-label>\n										单位\n									</ion-label>\n									<ion-input type="number" name="unit" placeholder={{placeForm.unit}} clearInput [(ngModel)]="placeForm.unit">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row>\n							<ion-col col-12>\n								<ion-item no-lines>\n									<ion-label>\n										产品描述\n									</ion-label>\n									<ion-input type="text" name="detail" placeholder={{placeForm.detail}} clearInput [(ngModel)]="placeForm.detail">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row class="subRow">\n							<ion-col col-6 class="txtR">\n								<button ion-button class="blckBtn" [disabled]="!ngform.valid" (click)="formSubmit(ngform.value)">\n									确定\n								</button>\n							</ion-col>\n							<ion-col col-6>\n								<button ion-button color="light" navPop>返回</button>\n							</ion-col>\n						</ion-row>\n					</ion-grid>\n				</form>\n			</div>\n		</div>\n	</div>\n\n	<!-- 加入订单 -->\n	<div class="calendarModal orderModal" *ngIf="modalOrderVisible">\n		<div class="modalInner">\n			<span class="hidebtn" (click)="hideOrderModal()">\n				<ion-icon name="close"></ion-icon>\n			</span>\n			<h3 class="modalTitle">\n				加入订单\n			</h3>\n\n			<div class="formBox">\n				<form #ngform="ngForm">\n					<ion-grid class="mainCon">\n						<ion-row>\n							<ion-col col-10>\n								<ion-item no-lines class="lineSelect">\n									<ion-label>\n										<span class="red">*</span> 订单\n									</ion-label>\n									<ion-select name="id" ngModel>\n										<span *ngFor="let item of orderlist">\n											<ion-option [value]="item.id">\n												{{item.title}}\n											</ion-option>\n										</span>\n									</ion-select>\n								</ion-item>\n							</ion-col>\n							<ion-col col-2 class="txtR lineBtn">\n								<button ion-button class="blckBtn" [disabled]="!ngform.valid" (click)="formSubmit(ngform.value)">\n									确定\n								</button>\n							</ion-col>\n						</ion-row>\n					</ion-grid>\n				</form>\n			</div>\n		</div>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\pages\products\meeting.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_product__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__providers_product__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], MeetingPage);
    return MeetingPage;
}());

//# sourceMappingURL=meeting.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meeting__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wedding__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_product__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoomPage = (function () {
    function RoomPage(navCtrl, navParams, service, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.account_id = localStorage.getItem('account_id');
        this.admin = true;
        this.showedit = false;
        this.menulists = [];
        this.addname = '';
        this.productlist = [];
        this.cartlist = [];
        this.showcart = false;
        this.modalVisible = false;
        this.placeForm = {};
        this.typeP_num = 0; //选中的分类包含商品数量
        this.getproducts();
    }
    RoomPage.prototype.checkMenu = function (id, name) {
        var _this = this;
        this.secondname = name;
        this.showedit = false;
        this.typeId = id;
        this.productlist = [];
        this.service.getProductByType(id).then(function (data) {
            if (data.status == 1) {
                for (var i = 0; i < data['list'].length; i++) {
                    var t = {
                        id: data['list'][i]['id'],
                        img: data['list'][i]['ref_pic_url'],
                        title: data['list'][i]['product_name'],
                        detail: data['list'][i]['description'],
                        price: data['list'][i]['price']
                    };
                    _this.productlist.push(t);
                }
                ;
                _this.typeP_num = data['list'].length;
            }
        });
    };
    RoomPage.prototype.addMenu = function () {
        // this.menulists.push(this.addname);
        var query = {
            name: this.addname
        };
        this.service.AddRoomType(query).then(function (data) {
            if (data) {
                //this.getMemu();
            }
        });
        this.addname = '';
    };
    RoomPage.prototype.getproducts = function () {
        var _this = this;
        this.service.getRoomMemu(this.account_id).then(function (data) {
            if (data.status == 1) {
                for (var i = 0; i < data['product'].length; i++) {
                    var t = {
                        id: data['product'][i]['id'],
                        img: data['product'][i]['ref_pic_url'],
                        title: data['product'][i]['product_name'],
                        detail: data['product'][i]['description'],
                        price: data['product'][i]['price'],
                    };
                    _this.productlist.push(t);
                }
                ;
                for (var i = 0; i < data['list'].length; i++) {
                    var t = {
                        img: data['list'][i]['img'],
                        name: data['list'][i]['name'],
                        id: data['list'][i]['id']
                    };
                    _this.menulists.push(t);
                }
                ;
                _this.secondname = data['list'][0]['name'];
                _this.typeP_num = data['product'].length;
                _this.typeId = data['list'][0]['id'];
            }
        });
    };
    RoomPage.prototype.editProducts = function () {
        this.showedit = true;
    };
    RoomPage.prototype.editSucess = function () {
        this.showedit = false;
    };
    // 删除产品
    RoomPage.prototype.delItem = function (id) {
        var alert = this.alertCtrl.create({
            title: '确认删除？',
            // subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['确定']
        });
        alert.present();
    };
    // 新增产品
    RoomPage.prototype.addProducts = function () {
        this.placeForm = {};
        this.modalVisible = true;
        this.getproducts();
    };
    // 修改产品
    RoomPage.prototype.editItem = function (id) {
        this.placeForm = {
            name: '产品名称',
            price: '1998',
            detail: '产品详细介绍'
        };
        this.modalVisible = true;
    };
    RoomPage.prototype.formSubmit = function (form) {
        var _this = this;
        form.img = this.imgUpLoad;
        this.service.addProduct(this.account_id, this.typeId, form.name, form.price, form.cost, form.unit, form.detail, form.img).then(function (data) {
            _this.modalVisible = false;
        });
    };
    RoomPage.prototype.hideModal = function () {
        this.modalVisible = false;
    };
    // 清空购物车
    RoomPage.prototype.clearCart = function () {
    };
    //加入购物车
    RoomPage.prototype.addCart = function (id) {
        console.log(id);
    };
    RoomPage.prototype.showCart = function () {
        this.showcart = true;
        this.getCartlist();
    };
    RoomPage.prototype.hideCart = function () {
        this.showcart = false;
    };
    RoomPage.prototype.getCartlist = function () {
        this.cartlist = [
            {
                id: '1',
                title: '988婚宴',
                price: '100',
                amount: '12',
                mark: '12小时使用时长，包含免费摆台，免费茶水'
            },
            {
                id: '2',
                title: '988婚宴',
                price: '100',
                amount: '12',
                mark: '12小时使用时长，包含免费摆台，免费茶水'
            },
            {
                id: '3',
                title: '988婚宴',
                price: '100',
                amount: '12',
                mark: '12小时使用时长，包含免费摆台，免费茶水'
            },
        ];
    };
    RoomPage.prototype.gotoMenu = function (name) {
        var _this = this;
        console.log(name);
        if (name == 'meeting') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__meeting__["a" /* MeetingPage */]).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
        }
        else if (name == 'food') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__food__["a" /* FoodPage */]).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
            ;
        }
        else if (name == 'room') {
            // this.navCtrl.push(RoomPage).then(() => {
            // 	this.navCtrl.removeView(this.navCtrl.getPrevious());
            // });;
        }
        else if (name == 'wedding') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__wedding__["a" /* WeddingPage */]).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
            ;
        }
        else {
            console.log("找不到此页面");
        }
    };
    // 上传图片传回base64
    RoomPage.prototype.uploadfn2 = function (data) {
        this.imgUpLoad = data;
    };
    RoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-room',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\pages\products\room.html"*/'<ion-header>\n	<ion-navbar color="white">\n		<ion-title>产品体系--客房</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-grid class="nopadding">\n		<ion-row>\n			<ion-col col-1 class="menubg">\n				<dfn class="xmb-menu" [preload]="{active:\'room\'}"></dfn>\n			</ion-col>\n			<ion-col col-3 class="typebg">\n				<ion-list no-lines>\n					<ion-item class="typebtn">\n						<ion-input type="text" placeholder="新增" [(ngModel)]="addname"></ion-input>\n						<ion-icon name="add" item-end (click)="addMenu()"></ion-icon>\n					</ion-item>\n					<button class="typebtn" no-lines ion-item *ngFor="let item of menulists"  (click)="checkMenu(item.id, item.name)">\n						<!-- <ion-icon name="leaf" item-start></ion-icon>  -->\n						<span class="icon">\n							<img src="assets/imgs/product/foodIcon.jpg" />\n						</span>\n						{{item.name}}\n					</button>\n				</ion-list>\n				<!-- <div>\n					<div *ngIf="showcart">\n						<button (click)="hideCart()">隐藏购物车</button>\n						<div *ngFor="let item of cartlist">\n							<h2>{{item.title}}</h2>\n							<h2>单价 {{item.price}}</h2>\n							<h2>数量 {{item.amount}}</h2>\n							<h2>备注 {{item.mark}}</h2>\n						</div>\n					</div>\n					<button ion-button (click)="clearCart()">清空购物车</button>\n					<button ion-button (click)="showCart()">购物车\n						<ion-badge color="danger" item-end>3</ion-badge>\n					</button>\n				</div> -->\n			</ion-col>\n			<ion-col col-8 class="chart-box" [ngSwitch]="chatmemu">\n\n				<ion-row class="toptitle">\n					<ion-col col-8>\n						<h3>\n							<span>{{secondname}}|</span>\n							{{typeP_num}}个商品\n						</h3>\n					</ion-col>\n					<ion-col col-4 class="txtRight">\n						<button ion-button *ngIf="admin&& !showedit" (click)="editProducts()">编辑</button>\n						<button ion-button *ngIf="admin&& showedit" (click)="addProducts()">新增产品</button>\n						<button ion-button *ngIf="admin&& showedit" (click)="editSucess()">完成</button>\n					</ion-col>\n				</ion-row>\n				<ion-list class="itembox">\n					<ion-item *ngFor="let item of productlist" class="goodBox">\n						<ion-thumbnail item-start class="imgbox">\n							<img src={{item.img}} />\n						</ion-thumbnail>\n						<ion-row>\n							<ion-col col-8>\n								<h2 class="title">\n									{{item.title}}\n								</h2>\n								<h3 class="price">￥{{item.price}}</h3>\n							</ion-col>\n							<ion-col col-4>\n								<span *ngIf="showedit" class="btns">\n									<ion-icon name="create" (click)="editItem(item.id)"></ion-icon>\n									<ion-icon name="trash" (click)="delItem(item.id)"></ion-icon>\n								</span>\n								<!-- <button ion-button clear item-end (click)="addCart(item.id)">加入购物车</button> -->\n							</ion-col>\n						</ion-row>\n\n						<p class="detail">{{item.detail}}</p>\n					</ion-item>\n				</ion-list>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<div class="calendarModal" *ngIf="modalVisible">\n		<div class="modalInner">\n			<span class="hidebtn" (click)="hideModal()">\n				<ion-icon name="close"></ion-icon>\n			</span>\n			<h3 class="modalTitle">\n				新增产品\n			</h3>\n\n			<div class="formBox">\n				<form #ngform="ngForm">\n					<ion-grid>\n						<dfn class="xmb-misc-uploader" (onloaded)="uploadfn2($event)" ></dfn>\n						<ion-row>\n							<ion-col col-6>\n								<ion-item no-lines>\n									<ion-label>\n										<span class="red">*</span> 产品名称</ion-label>\n									<ion-input type="text" name="name" placeholder={{placeForm.name}} clearInput [(ngModel)]="placeForm.name">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row>\n							<ion-col col-6>\n								<ion-item no-lines>\n									<ion-label>\n										价格\n									</ion-label>\n									<ion-input type="number" name="price" placeholder={{placeForm.price}} clearInput [(ngModel)]="placeForm.price">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row>\n							<ion-col col-6>\n								<ion-item no-lines>\n									<ion-label>\n										成本\n									</ion-label>\n									<ion-input type="number" name="cost" placeholder={{placeForm.cost}} clearInput [(ngModel)]="placeForm.cost">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row>\n							<ion-col col-6>\n								<ion-item no-lines>\n									<ion-label>\n										单位\n									</ion-label>\n									<ion-input type="number" name="unit" placeholder={{placeForm.unit}} clearInput [(ngModel)]="placeForm.unit">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row>\n							<ion-col col-12>\n								<ion-item no-lines>\n									<ion-label>\n										产品描述\n									</ion-label>\n									<ion-input type="text" name="detail" placeholder={{placeForm.detail}} clearInput [(ngModel)]="placeForm.detail">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row class="subRow">\n							<ion-col col-6 class="txtR">\n								<button ion-button class="blckBtn" [disabled]="!ngform.valid" (click)="formSubmit(ngform.value)">\n									确定\n								</button>\n							</ion-col>\n							<ion-col col-6>\n								<button ion-button color="light" navPop>返回</button>\n							</ion-col>\n						</ion-row>\n					</ion-grid>\n				</form>\n			</div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\pages\products\room.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_product__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__providers_product__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], RoomPage);
    return RoomPage;
}());

//# sourceMappingURL=room.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploaderDire; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_upload__ = __webpack_require__(916);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploaderDire = (function () {
    function UploaderDire(ref, service, sanitizer) {
        this.ref = ref;
        this.service = service;
        this.sanitizer = sanitizer;
        this.hide = false;
        this.type = '';
        this.myavatar = 'assets/imgs/system/upload.jpg';
        this.nophoto = 'assets/imgs/system/nophoto.jpg';
        this.onloaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ondelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.avatar();
    }
    Object.defineProperty(UploaderDire.prototype, "scene", {
        set: function (type) {
            type = type || 'album';
            console.log(type);
            if (typeof this[type] == 'function') {
                // this[type]();
            }
        },
        enumerable: true,
        configurable: true
    });
    UploaderDire.prototype.selectedFileOnChanged = function (event) {
        var _this = this;
        console.log(event.target.value);
        // this.myavatar = event.target.files[0];
        var file = event.target.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            // 向父页面传输图片base64
            _this.onloaded.emit(myReader.result);
        };
        myReader.readAsDataURL(file);
        // 页面展示图片
        var imgUrla = window.URL.createObjectURL(event.target.files[0]);
        var sanitizerUrl = this.sanitizer.bypassSecurityTrustUrl(imgUrla);
        this.imgUrl = sanitizerUrl;
    };
    UploaderDire.prototype.avatar = function () {
        this.type = 'avatar';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UploaderDire.prototype, "onloaded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UploaderDire.prototype, "ondelete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UploaderDire.prototype, "scene", null);
    UploaderDire = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '.xmb-misc-uploader',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\directives\baseXmb\upload.html"*/'\n<label class="uploader-avatar" *ngIf="type == \'avatar\'">\n	<!-- <ion-spinner></ion-spinner> -->\n	<img *ngIf="imgUrl" [src]=\'imgUrl\' />\n	<input type="file" accept="image/*" (change)="selectedFileOnChanged($event)" hidden >\n	<!-- <input type="file" [uploader]="uploader" ng2FileSelect (change)="selectedFileOnChanged($event)" hidden /> -->\n</label>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\directives\baseXmb\upload.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_upload__["a" /* UploadService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2__providers_upload__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], UploaderDire);
    return UploaderDire;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(74);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadService = (function (_super) {
    __extends(UploadService, _super);
    function UploadService(injector) {
        return _super.call(this, injector) || this;
    }
    UploadService.prototype.uploadImg = function (path, ready) {
        console.log();
        var url = 'zzzz';
        return this.uploadFile(url);
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], UploadService);
    return UploadService;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseService */]));

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { ChartPage } from '../pages/index';
// import { LoginPage } from '../pages/login/login';
// import { ListPage } from '../pages/list/list';
var MyApp = (function () {
    //   pages: Array<{title: string, component: any}>;
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        // this.pages = [
        //   { title: 'Home', component: HomePage },
        //   { title: 'List', component: ListPage },
        //   { title: 'Login', component: LoginPage }
        // ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\Code\Ms\XSH\src\app\app.html"*/'<!-- <ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu> -->\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<!-- <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> -->\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeddingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__food__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meeting__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__room__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__weddingIframe__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_product__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WeddingPage = (function () {
    function WeddingPage(navCtrl, navParams, alertCtrl, sanitizer, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.sanitizer = sanitizer;
        this.service = service;
        this.token = localStorage.getItem('token');
        this.account_id = localStorage.getItem('account_id');
        this.admin = true;
        this.showedit = false;
        this.imgSrc = "assets/imgs/product/stylebg.jpg";
        // public imgSrc = "assets/imgs/index/bg.jpg";
        this.menulists = [];
        this.productlist = [];
        this.cartlist = [];
        this.brightMenu = []; //婚礼亮点的导航
        this.personType = []; //婚礼人员
        this.showcart = false;
        this.modalVisible = false;
        this.modalOrderVisible = false;
        this.modalAddVisible = false;
        this.modalBaoJiaVisible = false;
        this.placeForm = {};
        this.second = 2; //二级目录选中状态
        this.typeP_num = 0; //选中的分类包含商品数量
        this.chooseTypeValue = '0';
        this.taocanlist = [];
        this.showTaocanName = false;
        this.selectValue = 1;
        this.showMoreBtn = false;
        this.modalPersonVisible = false;
        this.getMemu();
        this.getproducts();
    }
    WeddingPage.prototype.getMemu = function () {
        this.menulists = [{ id: 2, name: '场布套餐' }, { id: 3, name: '婚礼亮点' }, { id: 4, name: '服务人员' }, { id: 1, name: '高端定制' }];
        this.secondname = this.menulists[0]['name']; //二级目录名称
    };
    //初始渲染
    WeddingPage.prototype.getproducts = function () {
        //场布套餐
        this.getSetList();
    };
    //场布套餐渲染
    WeddingPage.prototype.getSetList = function () {
        var _this = this;
        this.productlist = [];
        this.service.getSetList(this.token).then(function (data) {
            if (data.status == 1) {
                for (var i = 0; i < data['list'].length; i++) {
                    var t = {
                        id: data['list'][i]['id'],
                        img: data['list'][i]['poster_url'],
                        title: data['list'][i]['product_name'],
                        detail: data['list'][i]['description'],
                        price: data['list'][i]['price']
                    };
                    _this.productlist.push(t);
                }
                ;
                _this.typeP_num = data['list'].length;
            }
        });
    };
    //婚礼亮点渲染
    WeddingPage.prototype.getBrightLight = function (type) {
        var _this = this;
        this.productlist = [];
        this.service.getBrightPoint(this.token, type).then(function (data) {
            // if(data.status==1){
            for (var i = 0; i < data['point'].length; i++) {
                var t = {
                    id: data['point'][i]['id'],
                    img: data['point'][i]['poster_url'],
                    title: data['point'][i]['product_name'],
                    detail: data['point'][i]['description'],
                    price: data['point'][i]['price']
                };
                _this.productlist.push(t);
            }
            ;
            _this.typeP_num = data['point'].length;
            _this.brightMenu = data['type_list'];
            // }
        });
    };
    //婚礼人员渲染
    WeddingPage.prototype.getServicePerson = function (type) {
        var _this = this;
        this.productlist = [];
        this.service.getServicePerson(this.token, type).then(function (data) {
            if (data.status == 1) {
                for (var i = 0; i < data['service_person'].length; i++) {
                    var t = {
                        id: data['service_person'][i]['id'],
                        img: data['service_person'][i]['avatar'],
                        title: data['service_person'][i]['name'],
                        detail: data['service_person'][i]['description'],
                        price: data['service_person'][i]['price']
                    };
                    _this.productlist.push(t);
                }
                ;
                _this.typeP_num = data['service_person'].length;
                _this.personType = data['type'];
                console.log(_this.personType);
            }
        });
    };
    WeddingPage.prototype.editProducts = function () {
        this.showedit = true;
    };
    WeddingPage.prototype.editSucess = function () {
        this.showedit = false;
    };
    // 新增产品
    WeddingPage.prototype.addProducts = function () {
        this.placeForm = {};
        this.modalVisible = true;
        this.getproducts();
    };
    // 修改产品
    WeddingPage.prototype.editItem = function (id) {
        this.placeForm = {
            name: '产品名称',
            price: '1998',
            detail: '产品详细介绍'
        };
        // this.modalVisible = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__weddingIframe__["a" /* WeddingDetailPage */], { name: '编辑套餐' });
    };
    WeddingPage.prototype.deltaocanItem = function (id) {
        var alert = this.alertCtrl.create({
            title: '确认删除？',
            // subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['确定']
        });
        alert.present();
    };
    WeddingPage.prototype.formSubmit = function (form) {
        console.log(form);
    };
    WeddingPage.prototype.ifshowName = function () {
        console.log(this.selectValue);
        if (this.selectValue == 1) {
            this.showTaocanName = true;
        }
        else {
            this.showTaocanName = false;
        }
    };
    WeddingPage.prototype.formAddSubmit = function (form) {
        console.log(form);
        if (form.from == 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__weddingIframe__["a" /* WeddingDetailPage */], { name: '方案库' });
        }
        else if (form.from == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__weddingIframe__["a" /* WeddingDetailPage */], { name: '本地上传' });
        }
        this.hideAddModal();
    };
    WeddingPage.prototype.hideModal = function () {
        this.modalVisible = false;
    };
    // 清空购物车
    WeddingPage.prototype.clearCart = function () {
    };
    //加入订单
    WeddingPage.prototype.addCart = function (id) {
        console.log(id);
        this.modalOrderVisible = true;
    };
    WeddingPage.prototype.hideOrderModal = function () {
        this.modalOrderVisible = false;
    };
    WeddingPage.prototype.addTaocan = function () {
        this.modalAddVisible = true;
        this.selectValue = 1;
        this.showTaocanName = false;
        this.taocanlist = [
            {
                id: 1,
                title: '方案库'
            },
            {
                id: 2,
                title: '本地上传'
            }
        ];
    };
    WeddingPage.prototype.hideAddModal = function () {
        this.modalAddVisible = false;
    };
    WeddingPage.prototype.showCart = function () {
        this.showcart = true;
        this.getCartlist();
    };
    WeddingPage.prototype.hideCart = function () {
        this.showcart = false;
    };
    //加入报价订单
    WeddingPage.prototype.addBaojia = function (id) {
        console.log(id);
        this.modalBaoJiaVisible = true;
    };
    WeddingPage.prototype.hideBaojiaModal = function () {
        this.modalBaoJiaVisible = false;
    };
    WeddingPage.prototype.getCartlist = function () {
        this.cartlist = [
            {
                id: '1',
                title: '988婚宴',
                price: '100',
                amount: '12',
                mark: '12小时使用时长，包含免费摆台，免费茶水'
            },
            {
                id: '2',
                title: '988婚宴',
                price: '100',
                amount: '12',
                mark: '12小时使用时长，包含免费摆台，免费茶水'
            },
            {
                id: '3',
                title: '988婚宴',
                price: '100',
                amount: '12',
                mark: '12小时使用时长，包含免费摆台，免费茶水'
            },
        ];
    };
    WeddingPage.prototype.gotoMenu = function (name) {
        var _this = this;
        console.log(name);
        if (name == 'meeting') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__meeting__["a" /* MeetingPage */]).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
        }
        else if (name == 'food') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__food__["a" /* FoodPage */]).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
        }
        else if (name == 'room') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__room__["a" /* RoomPage */]).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
        }
        else if (name == 'wedding') {
            // this.navCtrl.push(WeddingPage).then(() => {
            // 	this.navCtrl.removeView(this.navCtrl.getPrevious());
            // });;
        }
        else {
            console.log("找不到此页面");
        }
    };
    WeddingPage.prototype.gotoFrame = function (name) {
        if (name == '色彩定位') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__weddingIframe__["a" /* WeddingDetailPage */], { name: name });
        }
        else if (name == '风格定位') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__weddingIframe__["a" /* WeddingDetailPage */], { name: name });
        }
        else if (name == '婚礼统筹') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__weddingIframe__["a" /* WeddingDetailPage */], { name: name });
        }
        else if (name == '场地布置') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__weddingIframe__["a" /* WeddingDetailPage */], { name: name });
        }
    };
    WeddingPage.prototype.gotoDetail = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__weddingIframe__["a" /* WeddingDetailPage */], { name: '详情', id: id });
    };
    WeddingPage.prototype.checkSecond = function (num, item) {
        this.second = item.id;
        this.secondname = item.name;
        this.showedit = false;
        if (item.id == 2) {
            this.getSetList();
        }
        if (item.id == 3) {
            this.getBrightLight(0);
        }
        if (item.id == 4) {
            this.getServicePerson(3);
        }
    };
    WeddingPage.prototype.chooseType = function (num) {
        this.chooseTypeValue = num;
        // this.getChooseList();
    };
    WeddingPage.prototype.addPerson = function () {
        this.modalPersonVisible = true;
    };
    WeddingPage.prototype.hidePersonModal = function () {
        this.modalPersonVisible = false;
    };
    WeddingPage.prototype.formAddPersonSubmit = function (form) {
        var _this = this;
        form.img = this.imgUpLoad;
        console.log(form);
        this.service.insertSp(this.token, this.account_id, form.name, form.img, form.telephone, this.selectValue).then(function (data) {
            _this.modalPersonVisible = false;
        });
    };
    // 上传图片传回base64
    WeddingPage.prototype.uploadfn2 = function (data) {
        this.imgUpLoad = data;
    };
    WeddingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wedding',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\pages\products\wedding.html"*/'<ion-header>\n	<ion-navbar color="white">\n		<ion-title>产品报价</ion-title>\n		<ion-buttons end>\n			<ion-item class="orangeEnd" no-lines>\n				<ion-label>\n					<ion-icon name="ios-paper-outline"></ion-icon>\n					<span class="name">报价单</span>\n				</ion-label>\n				<ion-select [(ngModel)]="gaming">\n					<ion-option value="nes">2018-9-12 小张&小高</ion-option>\n					<ion-option value="n64">2018-9-12 小张&小高</ion-option>\n					<ion-option value="ps">2018-9-12 小张&小高</ion-option>\n					<ion-option value="genesis">2018-9-12 小张&小高</ion-option>\n				</ion-select>\n			</ion-item>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-grid class="nopadding">\n		<ion-row>\n			<ion-col col-1 class="menubg">\n				<dfn class="xmb-menu" [preload]="{active:\'wedding\'}"></dfn>\n			</ion-col>\n			<ion-col col-3 class="typebg">\n				<ion-list no-lines>\n					<button class="typebtn" [ngClass]="{\'active\': second == item.id}" no-lines ion-item *ngFor="let item of menulists; let i = index"\n					    (click)="checkSecond(i, item)">\n						<!-- <ion-icon name="ios-heart-outline" item-start></ion-icon> -->\n						<span class="icon">\n							<img src="assets/imgs/product/wedIcon.jpg" />\n						</span>\n						<span>{{item.name}}</span>\n					</button>\n				</ion-list>\n				<!-- 购物车 -->\n				<!-- <div>\n					<div *ngIf="showcart">\n						<button (click)="hideCart()">隐藏购物车</button>\n						<div *ngFor="let item of cartlist">\n							<h2>{{item.title}}</h2>\n							<h2>单价 {{item.price}}</h2>\n							<h2>数量 {{item.amount}}</h2>\n							<h2>备注 {{item.mark}}</h2>\n						</div>\n					</div>\n					<button ion-button (click)="clearCart()">清空购物车</button>\n					<button ion-button (click)="showCart()">购物车\n						<ion-badge color="danger" item-end>3</ion-badge>\n					</button>\n				</div> -->\n			</ion-col>\n			<ion-col col-8 class="nopadding">\n				<!-- 偏好定位 -->\n				<div class="chart-box colorBox" *ngIf="second == 1">\n					<div class="bgImg">\n						<img src={{imgSrc}} />\n					</div>\n					<ion-row class="title">\n						<ion-col col-12>\n							<h3>preference chioce</h3>\n						</ion-col>\n						<ion-col col-12>\n							<h2>\n								<span class="decLeft"></span>\n								偏好定位\n								<span class="decRight"></span>\n							</h2>\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col col-4 (click)="gotoFrame(\'色彩定位\')">\n							<div class="roundBox">\n								<h5>color</h5>\n								<p>色彩定位</p>\n								<span class="trigle"></span>\n								<p>color position</p>\n							</div>\n						</ion-col>\n						<ion-col col-4 (click)="gotoFrame(\'风格定位\')">\n							<div class="roundBox">\n								<h5>style</h5>\n								<p>风格定位</p>\n								<span class="trigle"></span>\n								<p>style position</p>\n							</div>\n						</ion-col>\n						<ion-col col-4 (click)="gotoFrame(\'婚礼统筹\')">\n							<div class="roundBox">\n								<h5>wedding</h5>\n								<p>婚礼统筹</p>\n								<span class="trigle"></span>\n								<p>wedding planing</p>\n							</div>\n						</ion-col>\n					</ion-row>\n				</div>\n				<!-- 场布套餐 -->\n				<div class="chart-box" *ngIf="second == 2">\n					<ion-row class="toptitle">\n						<ion-col col-6>\n							<h3>\n								<span>{{secondname}} | </span>\n								8个商品\n							</h3>\n						</ion-col>\n						<ion-col col-6 class="txtRight">\n							<button ion-button (click)="gotoFrame(\'场地布置\')">场布定制</button>\n							<button ion-button *ngIf="admin&& !showedit" (click)="editProducts()">编辑</button>\n							<button ion-button *ngIf="admin&& showedit" (click)="addTaocan()">新增套餐</button>\n							<button ion-button *ngIf="admin&& showedit" (click)="editSucess()">完成</button>\n						</ion-col>\n					</ion-row>\n					<ion-list class="itembox">\n						<ion-item *ngFor="let item of productlist" class="goodBox">\n							<ion-thumbnail item-start class="imgbox" (click)="gotoDetail(item.id)">\n								<img src={{item.img}} />\n							</ion-thumbnail>\n							<ion-row>\n								<ion-col col-8 (click)="gotoDetail(item.id)">\n									<h2 class="title">\n										{{item.title}}\n									</h2>\n									<h3 class="price" (click)="gotoDetail(item.id)">￥{{item.price}}</h3>\n								</ion-col>\n								<ion-col col-4>\n									<span class="btns">\n										<button ion-button clear>\n											<ion-icon name="create" *ngIf="showedit" (click)="editItem(item.id)"></ion-icon>\n										</button>\n										<button ion-button clear>\n											<ion-icon name="trash" *ngIf="showedit" (click)="deltaocanItem(item.id)"></ion-icon>\n										</button>\n									</span>\n									<button ion-button class="addOrderBtn" item-end (click)="addCart(item.id)">加入订单</button>\n								</ion-col>\n							</ion-row>\n\n							<p class="detail" (click)="gotoDetail(item.id)">{{item.detail}}</p>\n						</ion-item>\n					</ion-list>\n				</div>\n				<!-- 婚礼亮点 -->\n				<div class="chart-box" *ngIf="second == 3">\n					<ion-row class="toptitle">\n						<ion-col col-8 class="ordertype">\n							<button ion-button [ngClass]="{\'active\': chooseTypeValue == \'item.id\'}" (click)="chooseType(\'item.id\')" *ngFor="let item of brightMenu">{{item.name}} </button>\n						</ion-col>\n						<ion-col col-4 class="txtRight">\n							<button ion-button>编辑分类</button>\n							<button ion-button *ngIf="admin&& showedit">新增亮点</button>\n							<button ion-button *ngIf="admin&& !showedit" (click)="editProducts()">编辑</button>\n							<button ion-button *ngIf="admin&& showedit" (click)="editSucess()">完成</button>\n						</ion-col>\n					</ion-row>\n					<ion-list class="itembox">\n						<ion-item *ngFor="let item of productlist" class="goodBox">\n							<ion-thumbnail item-start class="imgbox">\n								<img src={{item.img}} />\n							</ion-thumbnail>\n							<ion-row>\n								<ion-col col-8>\n									<h2 class="title" (click)="gotoDetail(item.id)">\n										{{item.title}}\n									</h2>\n									<h3 class="price" (click)="gotoDetail(item.id)">￥{{item.price}}</h3>\n								</ion-col>\n								<ion-col col-4>\n									<span class="btns">\n										<button ion-button clear>\n											<ion-icon name="create" *ngIf="showedit" (click)="editItem(item.id)"></ion-icon>\n										</button>\n										<button ion-button clear>\n											<ion-icon name="trash" *ngIf="showedit" (click)="deltaocanItem(item.id)"></ion-icon>\n										</button>\n									</span>\n									<button ion-button class="addOrderBtn" item-end (click)="addBaojia(item.id)">加入订单</button>\n								</ion-col>\n							</ion-row>\n\n							<p class="detail" (click)="gotoDetail(item.id)">{{item.detail}}</p>\n						</ion-item>\n					</ion-list>\n				</div>\n				<!-- 服务人员 -->\n				<div class="chart-box" *ngIf="second == 4">\n					<ion-row class="toptitle">\n						<ion-col col-10 class="ordertype">\n							<button ion-button [ngClass]="{\'active\': chooseTypeValue == \'item.id\'}" (click)="chooseType(\'item.id\')" *ngFor="let item of personType">{{item.name}} </button>\n						</ion-col>\n						<ion-col col-2 class="morebtn txtR">\n							<button ion-button clear (click)="showMoreBtn = !showMoreBtn">\n								更多\n								<ion-icon name="ios-arrow-down" *ngIf="!showMoreBtn"></ion-icon>\n								<ion-icon name="ios-arrow-up" *ngIf="showMoreBtn"></ion-icon>\n							</button>\n						</ion-col>\n					</ion-row>\n					<!-- <ion-row class="toptitle" *ngIf="showMoreBtn">\n						<ion-col col-10 class="ordertype">\n							<button ion-button [ngClass]="{\'active\': chooseTypeValue == \'10\'}" (click)="chooseType(\'10\')">仪式前 </button>\n							<button ion-button [ngClass]="{\'active\': chooseTypeValue == \'12\'}" (click)="chooseType(\'11\')">仪式中 </button>\n							<button ion-button [ngClass]="{\'active\': chooseTypeValue == \'12\'}" (click)="chooseType(\'12\')">仪式后 </button>\n							<button ion-button [ngClass]="{\'active\': chooseTypeValue == \'13\'}" (click)="chooseType(\'13\')">花艺升级 </button>\n							<button ion-button [ngClass]="{\'active\': chooseTypeValue == \'14\'}" (click)="chooseType(\'14\')">灯光升级 </button>\n						</ion-col>\n					</ion-row> -->\n					<ion-row class="toptitle">\n						<ion-col col-4>\n							<h3>\n								主持人\n							</h3>\n						</ion-col>\n						<ion-col col-8 class="txtRight">\n							<button ion-button>编辑分类</button>\n							<button ion-button *ngIf="admin&& !showedit" (click)="editProducts()">编辑</button>\n							<button ion-button *ngIf="admin&& showedit" (click)="addPerson()">新增人员</button>\n							<button ion-button *ngIf="admin&& showedit" (click)="editSucess()">完成</button>\n						</ion-col>\n					</ion-row>\n					<ion-list class="itembox">\n						<ion-item *ngFor="let item of productlist" class="goodBox">\n							<ion-thumbnail item-start class="imgbox">\n								<img src={{item.img}} />\n							</ion-thumbnail>\n							<ion-row>\n								<ion-col col-8>\n									<h2 class="title">\n										{{item.title}}\n									</h2>\n									<h3 class="price">￥{{item.price}}</h3>\n								</ion-col>\n								<ion-col col-4>\n									<span class="btns">\n										<button ion-button clear>\n											<ion-icon name="create" *ngIf="showedit" (click)="editItem(item.id)"></ion-icon>\n										</button>\n										<button ion-button clear>\n											<ion-icon name="trash" *ngIf="showedit" (click)="delItem(item.id)"></ion-icon>\n										</button>\n									</span>\n									<button ion-button class="addOrderBtn" item-end (click)="addCart(item.id)">加入订单</button>\n								</ion-col>\n							</ion-row>\n\n							<p class="detail">{{item.detail}}</p>\n						</ion-item>\n					</ion-list>\n				</div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<!-- 新增产品 -->\n	<div class="calendarModal newAdd" *ngIf="modalVisible">\n		<div class="modalInner">\n			<span class="hidebtn" (click)="hideModal()">\n				<ion-icon name="close"></ion-icon>\n			</span>\n			<h3 class="modalTitle">\n				新增产品\n			</h3>\n			<div class="formBox">\n				<form #ngform="ngForm">\n					<ion-grid>\n						<ion-row>\n							<ion-col col-6>\n								<ion-item no-lines>\n									<ion-label>\n										<span class="red">*</span> 产品名称</ion-label>\n									<ion-input type="text" name="name" placeholder={{placeForm.name}} clearInput [(ngModel)]="placeForm.name">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row>\n							<ion-col col-6>\n								<ion-item no-lines>\n									<ion-label>价格</ion-label>\n									<ion-input type="number" name="price" placeholder={{placeForm.price}} clearInput [(ngModel)]="placeForm.price">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row>\n							<ion-col col-12>\n								<ion-item no-lines>\n									<ion-label>产品描述 </ion-label>\n									<ion-input type="text" name="detail" placeholder={{placeForm.detail}} clearInput [(ngModel)]="placeForm.detail">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row class="subRow">\n							<ion-col col-6 class="txtR">\n								<button ion-button class="blckBtn" [disabled]="!ngform.valid" (click)="formSubmit(ngform.value)">\n									确定\n								</button>\n							</ion-col>\n							<ion-col col-6>\n								<button ion-button color="light" navPop>返回</button>\n							</ion-col>\n						</ion-row>\n					</ion-grid>\n				</form>\n			</div>\n		</div>\n	</div>\n\n	<!-- 加入订单 -->\n	<div class="calendarModal orderModal" *ngIf="modalOrderVisible">\n		<div class="modalInner">\n			<span class="hidebtn" (click)="hideOrderModal()">\n				<ion-icon name="close"></ion-icon>\n			</span>\n			<h3 class="modalTitle">\n				加入订单\n			</h3>\n\n			<div class="formBox">\n				<form #ngform="ngForm">\n					<ion-grid class="mainCon">\n						<ion-row>\n							<ion-col col-10>\n								<ion-item no-lines class="lineSelect">\n									<ion-label>\n										<span class="red">*</span> 订单\n									</ion-label>\n									<ion-select name="id" ngModel>\n										<span *ngFor="let item of orderlist">\n											<ion-option [value]="item.id">\n												{{item.title}}\n											</ion-option>\n										</span>\n									</ion-select>\n								</ion-item>\n							</ion-col>\n							<ion-col col-2 class="txtR lineBtn">\n								<button ion-button class="blckBtn" [disabled]="!ngform.valid" (click)="formSubmit(ngform.value)">\n									确定\n								</button>\n							</ion-col>\n						</ion-row>\n					</ion-grid>\n				</form>\n			</div>\n		</div>\n	</div>\n	<!-- 加入订单报价 -->\n	<div class="calendarModal orderModal" *ngIf="modalBaoJiaVisible">\n		<div class="modalInner">\n			<span class="hidebtn" (click)="hideBaojiaModal()">\n				<ion-icon name="close"></ion-icon>\n			</span>\n			<h3 class="modalTitle">\n				加入订单\n			</h3>\n\n			<div class="formBox">\n				<form #ngform="ngForm">\n					<ion-grid class="mainCon">\n						<ion-row>\n							<ion-col col-12>\n								<ion-item no-lines class="lineSelect">\n									<ion-label>\n										<span class="red">*</span> 订单\n									</ion-label>\n									<ion-select name="id" ngModel>\n										<span *ngFor="let item of orderlist">\n											<ion-option [value]="item.id">\n												{{item.title}}\n											</ion-option>\n										</span>\n									</ion-select>\n								</ion-item>\n							</ion-col>\n							<ion-col col-12>\n								<ion-item no-lines class="lineSelect">\n									<ion-label>\n										<span class="red">*</span> 报价\n									</ion-label>\n									<ion-input type="text" name="name" placeholder={{placeForm.name}} clearInput [(ngModel)]="placeForm.name">\n									</ion-input>\n								</ion-item>\n							</ion-col>\n							<ion-col col-12 class="txtC subrow">\n								<button ion-button class="blckBtn" [disabled]="!ngform.valid" (click)="formSubmit(ngform.value)">\n									确定\n								</button>\n							</ion-col>\n						</ion-row>\n					</ion-grid>\n				</form>\n			</div>\n		</div>\n	</div>\n	<!-- 新增套餐 -->\n	<div class="calendarModal orderModal" *ngIf="modalAddVisible">\n		<div class="modalInner">\n			<span class="hidebtn" (click)="hideAddModal()">\n				<ion-icon name="close"></ion-icon>\n			</span>\n			<h3 class="modalTitle">新增套餐</h3>\n			<div class="formBox">\n				<form #ngform="ngForm">\n					<div class="mainCon">\n						<ion-item no-lines>\n							<ion-label>\n								套餐来源\n							</ion-label>\n							<ion-select name="from" required (ngModelChange)="ifshowName()" [(ngModel)]="selectValue">\n								<span *ngFor="let item of taocanlist">\n									<ion-option [value]="item.id">\n										{{item.title}}\n									</ion-option>\n								</span>\n							</ion-select>\n						</ion-item>\n						<ion-item no-lines *ngIf="showTaocanName">\n							<ion-label>\n								套餐名称\n							</ion-label>\n							<ion-input type="text" name="name" placeholder={{placeForm.name}} clearInput [(ngModel)]="placeForm.name">\n							</ion-input>\n						</ion-item>\n						<div class="txtC subrow">\n							<button ion-button class="blckBtn" (click)="formAddSubmit(ngform.value)">\n								<!-- <button ion-button class="blckBtn" (click)="formAddSubmit()"> -->\n								确定\n							</button>\n						</div>\n					</div>\n				</form>\n			</div>\n		</div>\n	</div>\n	<!-- 新增人员 -->\n	<div class="calendarModal orderModal" *ngIf="modalPersonVisible">\n		<div class="modalInner">\n			<span class="hidebtn" (click)="hidePersonModal()">\n				<ion-icon name="close"></ion-icon>\n			</span>\n			<h3 class="modalTitle">新增人员</h3>\n			<div class="formBox">\n				<form #ngform="ngForm">\n					<div class="mainCon">\n						<dfn class="xmb-misc-uploader" (onloaded)="uploadfn2($event)"></dfn>\n						<ion-item no-lines>\n							<ion-label>\n								姓名\n							</ion-label>\n							<ion-input type="text" name="name" placeholder={{placeForm.name}} clearInput [(ngModel)]="placeForm.name">\n							</ion-input>\n						</ion-item>\n						<ion-item no-lines>\n							<ion-label>\n								手机号\n							</ion-label>\n							<ion-input type="text" name="phone" placeholder={{placeForm.name}} clearInput [(ngModel)]="placeForm.name">\n							</ion-input>\n						</ion-item>\n						<ion-item no-lines>\n							<ion-label>\n								类别\n							</ion-label>\n							<ion-select name="from" required (ngModelChange)="ifshowName()" [(ngModel)]="selectValue">\n								<span *ngFor="let item of personType">\n									<ion-option [value]="item.id">\n										{{item.name}}\n									</ion-option>\n								</span>\n							</ion-select>\n						</ion-item>\n						<div class="txtC subrow">\n							<button ion-button class="blckBtn" (click)="formAddPersonSubmit(ngform.value)">\n								<!-- <button ion-button class="blckBtn" (click)="formAddSubmit()"> -->\n								确定\n							</button>\n						</div>\n					</div>\n				</form>\n			</div>\n		</div>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\pages\products\wedding.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__providers_product__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_7__providers_product__["a" /* ProductService */]])
    ], WeddingPage);
    return WeddingPage;
}());

//# sourceMappingURL=wedding.js.map

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 402,
	"./af.js": 402,
	"./ar": 403,
	"./ar-dz": 404,
	"./ar-dz.js": 404,
	"./ar-kw": 405,
	"./ar-kw.js": 405,
	"./ar-ly": 406,
	"./ar-ly.js": 406,
	"./ar-ma": 407,
	"./ar-ma.js": 407,
	"./ar-sa": 408,
	"./ar-sa.js": 408,
	"./ar-tn": 409,
	"./ar-tn.js": 409,
	"./ar.js": 403,
	"./az": 410,
	"./az.js": 410,
	"./be": 411,
	"./be.js": 411,
	"./bg": 412,
	"./bg.js": 412,
	"./bm": 413,
	"./bm.js": 413,
	"./bn": 414,
	"./bn.js": 414,
	"./bo": 415,
	"./bo.js": 415,
	"./br": 416,
	"./br.js": 416,
	"./bs": 417,
	"./bs.js": 417,
	"./ca": 418,
	"./ca.js": 418,
	"./cs": 419,
	"./cs.js": 419,
	"./cv": 420,
	"./cv.js": 420,
	"./cy": 421,
	"./cy.js": 421,
	"./da": 422,
	"./da.js": 422,
	"./de": 423,
	"./de-at": 424,
	"./de-at.js": 424,
	"./de-ch": 425,
	"./de-ch.js": 425,
	"./de.js": 423,
	"./dv": 426,
	"./dv.js": 426,
	"./el": 427,
	"./el.js": 427,
	"./en-au": 428,
	"./en-au.js": 428,
	"./en-ca": 429,
	"./en-ca.js": 429,
	"./en-gb": 430,
	"./en-gb.js": 430,
	"./en-ie": 431,
	"./en-ie.js": 431,
	"./en-nz": 432,
	"./en-nz.js": 432,
	"./eo": 433,
	"./eo.js": 433,
	"./es": 434,
	"./es-do": 435,
	"./es-do.js": 435,
	"./es-us": 436,
	"./es-us.js": 436,
	"./es.js": 434,
	"./et": 437,
	"./et.js": 437,
	"./eu": 438,
	"./eu.js": 438,
	"./fa": 439,
	"./fa.js": 439,
	"./fi": 440,
	"./fi.js": 440,
	"./fo": 441,
	"./fo.js": 441,
	"./fr": 442,
	"./fr-ca": 443,
	"./fr-ca.js": 443,
	"./fr-ch": 444,
	"./fr-ch.js": 444,
	"./fr.js": 442,
	"./fy": 445,
	"./fy.js": 445,
	"./gd": 446,
	"./gd.js": 446,
	"./gl": 447,
	"./gl.js": 447,
	"./gom-latn": 448,
	"./gom-latn.js": 448,
	"./gu": 449,
	"./gu.js": 449,
	"./he": 450,
	"./he.js": 450,
	"./hi": 451,
	"./hi.js": 451,
	"./hr": 452,
	"./hr.js": 452,
	"./hu": 453,
	"./hu.js": 453,
	"./hy-am": 454,
	"./hy-am.js": 454,
	"./id": 455,
	"./id.js": 455,
	"./is": 456,
	"./is.js": 456,
	"./it": 457,
	"./it.js": 457,
	"./ja": 458,
	"./ja.js": 458,
	"./jv": 459,
	"./jv.js": 459,
	"./ka": 460,
	"./ka.js": 460,
	"./kk": 461,
	"./kk.js": 461,
	"./km": 462,
	"./km.js": 462,
	"./kn": 463,
	"./kn.js": 463,
	"./ko": 464,
	"./ko.js": 464,
	"./ky": 465,
	"./ky.js": 465,
	"./lb": 466,
	"./lb.js": 466,
	"./lo": 467,
	"./lo.js": 467,
	"./lt": 468,
	"./lt.js": 468,
	"./lv": 469,
	"./lv.js": 469,
	"./me": 470,
	"./me.js": 470,
	"./mi": 471,
	"./mi.js": 471,
	"./mk": 472,
	"./mk.js": 472,
	"./ml": 473,
	"./ml.js": 473,
	"./mr": 474,
	"./mr.js": 474,
	"./ms": 475,
	"./ms-my": 476,
	"./ms-my.js": 476,
	"./ms.js": 475,
	"./mt": 477,
	"./mt.js": 477,
	"./my": 478,
	"./my.js": 478,
	"./nb": 479,
	"./nb.js": 479,
	"./ne": 480,
	"./ne.js": 480,
	"./nl": 481,
	"./nl-be": 482,
	"./nl-be.js": 482,
	"./nl.js": 481,
	"./nn": 483,
	"./nn.js": 483,
	"./pa-in": 484,
	"./pa-in.js": 484,
	"./pl": 485,
	"./pl.js": 485,
	"./pt": 486,
	"./pt-br": 487,
	"./pt-br.js": 487,
	"./pt.js": 486,
	"./ro": 488,
	"./ro.js": 488,
	"./ru": 489,
	"./ru.js": 489,
	"./sd": 490,
	"./sd.js": 490,
	"./se": 491,
	"./se.js": 491,
	"./si": 492,
	"./si.js": 492,
	"./sk": 493,
	"./sk.js": 493,
	"./sl": 494,
	"./sl.js": 494,
	"./sq": 495,
	"./sq.js": 495,
	"./sr": 496,
	"./sr-cyrl": 497,
	"./sr-cyrl.js": 497,
	"./sr.js": 496,
	"./ss": 498,
	"./ss.js": 498,
	"./sv": 499,
	"./sv.js": 499,
	"./sw": 500,
	"./sw.js": 500,
	"./ta": 501,
	"./ta.js": 501,
	"./te": 502,
	"./te.js": 502,
	"./tet": 503,
	"./tet.js": 503,
	"./th": 504,
	"./th.js": 504,
	"./tl-ph": 505,
	"./tl-ph.js": 505,
	"./tlh": 506,
	"./tlh.js": 506,
	"./tr": 507,
	"./tr.js": 507,
	"./tzl": 508,
	"./tzl.js": 508,
	"./tzm": 509,
	"./tzm-latn": 510,
	"./tzm-latn.js": 510,
	"./tzm.js": 509,
	"./uk": 511,
	"./uk.js": 511,
	"./ur": 512,
	"./ur.js": 512,
	"./uz": 513,
	"./uz-latn": 514,
	"./uz-latn.js": 514,
	"./uz.js": 513,
	"./vi": 515,
	"./vi.js": 515,
	"./x-pseudo": 516,
	"./x-pseudo.js": 516,
	"./yo": 517,
	"./yo.js": 517,
	"./zh-cn": 518,
	"./zh-cn.js": 518,
	"./zh-hk": 519,
	"./zh-hk.js": 519,
	"./zh-tw": 520,
	"./zh-tw.js": 520
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 929;

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(74);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = (function (_super) {
    __extends(ProductService, _super);
    function ProductService(injector) {
        return _super.call(this, injector) || this;
    }
    // 通用
    // 删除产品
    ProductService.prototype.DeleteProduct = function (query) {
        var url = 'portal/index.php?r=product/DeleteProduct';
        return this.post(url, query);
    };
    // 删除产品图片
    ProductService.prototype.DeleteProductImg = function (query) {
        var url = 'portal/index.php?r=product/DeleteProductImg';
        return this.post(url, query);
    };
    /************************************************************************************/
    /********************************客房 && 会议 公共部分**********************************/
    /************************************************************************************/
    ProductService.prototype.getProductByType = function (type_id) {
        var query = {
            typeId: type_id
        };
        var url = 'portal/index.php?r=product/GetProductByType';
        return this.get(url, query);
    };
    ProductService.prototype.addProduct = function (account_id, typeId, name, price, cost, unit, description, imgs) {
        var query = {
            account_id: account_id,
            typeId: typeId,
            name: name,
            price: price,
            cost: cost,
            unit: unit,
            description: description,
            imgs: imgs
        };
        var url = 'portal/index.php?r=product/AddProduct';
        return this.post(url, query);
    };
    /************************************************************************************/
    /**************************************餐饮部分***************************************/
    /************************************************************************************/
    //获取全部菜单 && 第一个菜单的菜品
    ProductService.prototype.getMealMemu = function () {
        var query = {
            account_id: localStorage.getItem('account_id')
        };
        var url = 'portal/index.php?r=product/GetDishesMenu';
        return this.get(url, query);
    };
    //获取某菜单全部菜品
    ProductService.prototype.getMenuDetail = function (menu_id) {
        var query = {
            id: menu_id
        };
        var url = 'portal/index.php?r=product/GetDishesMenuDetail';
        return this.get(url, query);
    };
    //新增菜单
    ProductService.prototype.createMenu = function (chooselist, menuId) {
        var query = {
            dishes: chooselist,
            menuId: menuId
        };
        var url = 'portal/index.php?r=product/EditDishesMenuDetail';
        return this.post(url, query);
    };
    //新增菜品
    ProductService.prototype.addDishes = function (account_id, feastType, name, price, cost, unit, description, imgs) {
        var query = {
            account_id: account_id,
            feastType: feastType,
            name: name,
            price: price,
            cost: cost,
            unit: unit,
            description: description,
            imgs: imgs
        };
        var url = 'portal/index.php?r=product/AddDishes';
        return this.post(url, query);
    };
    /************************************************************************************/
    /***********************************会议 && 客房部分***********************************/
    /************************************************************************************/
    // 获取会议分类 && 第一个分类的全部产品
    ProductService.prototype.getMeetingMemu = function (account_id) {
        var query = {
            account_id: account_id
        };
        var url = 'portal/index.php?r=product/GetMeetingType';
        return this.get(url, query);
    };
    ProductService.prototype.AddMeetingType = function (query) {
        query.account_id = this.general.account_id;
        var url = 'portal/index.php?r=product/AddMeetingType';
        return this.post(url, query);
    };
    // 客房
    ProductService.prototype.getRoomMemu = function (account_id) {
        var query = {
            account_id: account_id
        };
        var url = 'portal/index.php?r=product/GetGuestRoomType';
        return this.get(url, query);
    };
    ProductService.prototype.AddRoomType = function (query) {
        query.account_id = this.general.account_id;
        var url = 'portal/index.php?r=product/AddGuestRoomType';
        return this.get(url, query);
    };
    /************************************************************************************/
    /***************************************婚礼部分**************************************/
    /************************************************************************************/
    // 获取场布套餐
    ProductService.prototype.getSetList = function (token) {
        var query = {
            uid: token,
        };
        var url = 'portal/index.php?r=background/GetFavoriteSets';
        return this.get(url, query);
    };
    //获取婚礼亮点
    ProductService.prototype.getBrightPoint = function (token, type) {
        var query = {
            token: token,
            type: type
        };
        var url = 'portal/index.php?r=content/Get_bright_point_one_page';
        return this.get(url, query);
    };
    //获取婚礼人员
    ProductService.prototype.getServicePerson = function (token, type) {
        var query = {
            token: token,
            service_type: type
        };
        var url = 'portal/index.php?r=content/Get_service_person';
        return this.get(url, query);
    };
    //新增婚礼人员
    ProductService.prototype.insertSp = function (token, account_id, name, avatar, telephone, supplier_type) {
        var query = {
            token: token,
            account_id: account_id,
            supplier_type: supplier_type,
            telephone: telephone,
            avatar: avatar,
            name: name
        };
        var url = 'portal/index.php?r=content/Insert_sp';
        return this.post(url, query);
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], ProductService);
    return ProductService;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseService */]));

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(74);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberService = (function (_super) {
    __extends(MemberService, _super);
    function MemberService(injector) {
        return _super.call(this, injector) || this;
    }
    MemberService.prototype.login = function (query) {
        var url = 'portal/index.php?r=dailyReport/login';
        return this.post(url, query);
    };
    MemberService.prototype.lostpw = function (query) {
        return this.post('portal/index.php?r=dailyReport/GetPasswordByMobile', query);
    };
    MemberService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], MemberService);
    return MemberService;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseService */]));

//# sourceMappingURL=member.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HallService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(74);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HallService = (function (_super) {
    __extends(HallService, _super);
    function HallService(injector) {
        return _super.call(this, injector) || this;
    }
    HallService.prototype.getHallImgs = function (query) {
        var url = '/portal/index.php?r=background/GetHallImgs';
        return this.get(url, query);
    };
    HallService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], HallService);
    return HallService;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseService */]));

//# sourceMappingURL=hall.js.map

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chart__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChartPage = (function () {
    function ChartPage(navCtrl, navParams, service) {
        // console.log(this.chart);
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.chatmemu = "sales";
        this.chartYear = '2018';
        this.staff = 0;
        this.client = 0;
        this.clientlists = [];
        this.staffTergetlists = [];
        this.curYear = new Date().getFullYear();
        this.modalVisible = false;
        this.placeForm = {};
        this.orderlist = [];
        this.pricelists = [];
        this.proList = [
            {
                progress: 80,
                name: '奚小鱼'
            },
            {
                progress: 70,
                name: '奚小鱼'
            },
            {
                progress: 60,
                name: '奚小鱼'
            },
            {
                progress: 50,
                name: '奚小鱼'
            },
            {
                progress: 40,
                name: '奚小鱼'
            },
        ];
        this.ifAssign = false; // 业绩分配Modal
    }
    ChartPage.prototype.ionViewDidEnter = function () {
        this.initchart();
    };
    ChartPage.prototype.getData = function (percent) {
        return [{
                value: percent,
                itemStyle: {
                    normal: {
                        color: '#f17324',
                    }
                }
            }, {
                value: 1 - percent,
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }];
    };
    ChartPage.prototype.initchart = function () {
        var ec = __WEBPACK_IMPORTED_MODULE_2_echarts__;
        // 目标达成率图表
        var targets = document.getElementById('target1');
        this.targetschart = ec.init(targets);
        var percent = 0.7;
        var targetoption = {
            backgroundColor: 'transparent',
            title: {
                // text: (percent * 100) + '%',
                text: (percent * 100),
                x: 'center',
                y: '35%',
                textStyle: {
                    color: '#f17324',
                    fontWeight: 'bolder',
                    fontSize: 18,
                },
                subtext: 'out of 14',
                subtextStyle: {
                    fontSize: 14,
                    color: '#aaa'
                }
            },
            legend: {
                x: 'center',
                y: 'bottom',
                data: ['complete', 'cancel'],
                textStyle: {
                    color: '#fff'
                },
                selectedMode: true,
                orient: "vertical",
            },
            series: [{
                    type: 'pie',
                    radius: ['80%', '90%'],
                    silent: true,
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    data: [{
                            value: 1,
                            itemStyle: {
                                normal: {
                                    color: '#e7e7e7',
                                }
                            }
                        }],
                    animation: false
                },
                {
                    name: 'main',
                    type: 'pie',
                    radius: ['80%', '90%'],
                    label: {
                        normal: {
                            // color: '#ff0000',
                            show: false,
                        }
                    },
                    data: this.getData(percent),
                    animationEasingUpdate: 'cubicInOut',
                    animationDurationUpdate: 500
                }
            ]
        };
        this.targetschart.setOption(targetoption);
        //销售目标图表
        var staffs = document.getElementById('staff');
        this.staffchart = ec.init(staffs);
        var xAxisData = [];
        var data = [];
        for (var i = 9; i < 16; i++) {
            xAxisData.push('5月' + i + '日');
            data.push(Math.round(Math.random() * 500) + 200);
        }
        var stafftoption = {
            backgroundColor: '#fff',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        opacity: 0
                    }
                },
                formatter: function (prams) {
                    return "额度:" + prams[0].data + "万元";
                }
            },
            xAxis: [{
                    data: xAxisData,
                    axisLabel: {
                        textStyle: {
                            color: '#444'
                        }
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                        alignWithLabel: true
                    },
                    splitLine: {
                        show: false
                    }
                }, {
                    // 辅助 x 轴
                    show: false,
                    data: xAxisData
                }],
            yAxis: {
                max: 1000,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#eee',
                    }
                },
            },
            series: [
                {
                    // 辅助系列
                    type: 'bar',
                    silent: true,
                    xAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: '#eee'
                        }
                    },
                    barWidth: 10,
                    data: data.map(function (val) {
                        return 1000;
                    })
                }, {
                    type: 'bar',
                    data: data,
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: '#f16f31',
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 20
                        }
                    }
                }
            ]
        };
        this.staffchart.setOption(stafftoption);
    };
    ChartPage.prototype.initchart2 = function () {
        var ec = __WEBPACK_IMPORTED_MODULE_2_echarts__;
        var stafftargrts = document.getElementById('staffTarget');
        this.staffTargetchart = ec.init(stafftargrts);
        var xAxisData = [];
        var data = [];
        for (var i = 9; i < 16; i++) {
            xAxisData.push('5月' + i + '日');
            data.push(Math.round(Math.random() * 500) + 200);
        }
        var stafftoption = {
            backgroundColor: '#fff',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        opacity: 0
                    }
                },
                formatter: function (prams) {
                    return "额度:" + prams[0].data + "万元";
                }
            },
            xAxis: [{
                    data: xAxisData,
                    axisLabel: {
                        textStyle: {
                            color: '#444'
                        }
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                        alignWithLabel: true
                    },
                    splitLine: {
                        show: false
                    }
                }, {
                    // 辅助 x 轴
                    show: false,
                    data: xAxisData
                }],
            yAxis: {
                max: 1000,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#eee',
                    }
                },
            },
            series: [{
                    // 辅助系列
                    type: 'bar',
                    silent: true,
                    xAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: '#eee'
                        }
                    },
                    barWidth: 10,
                    data: data.map(function (val) {
                        return 1000;
                    })
                }, {
                    type: 'bar',
                    data: data,
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: '#f16f31',
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 20
                        }
                    }
                }]
        };
        this.staffTargetchart.setOption(stafftoption);
    };
    ChartPage.prototype.setmemu = function (name) {
        var _this = this;
        this.chatmemu = name;
        console.log(this.chatmemu);
        if (name == 'sales') {
            setTimeout(function () {
                _this.initchart();
                console.log("为空，暂时进行延时处理，后期解决");
            }, 300);
        }
        else if (name == 'clients') {
            console.log();
            this.getClients();
        }
        else if (name == 'goals') {
            this.getStaffTargets();
            setTimeout(function () {
                _this.initchart2();
                console.log("为空，暂时进行延时处理，后期解决");
            }, 300);
        }
        else if (name == 'finance') {
            this.getPricelists();
            console.log(this.pricelists);
        }
    };
    //客户信息
    ChartPage.prototype.getClients = function () {
        this.clientlists = [
            {
                name: '北京浩瀚一方网络科技有限责任公司',
                price: 1998,
                orders: 10
            },
            {
                name: '北京浩瀚一方网络科技有限责任公司',
                price: 1998,
                orders: 10
            },
            {
                name: '北京浩瀚一方网络科技有限责任公司',
                price: 1998,
                orders: 10
            },
            {
                name: '北京浩瀚一方网络科技有限责任公司',
                price: 1998,
                orders: 10
            },
            {
                name: '北京浩瀚一方网络科技有限责任公司',
                price: 1998,
                orders: 10
            },
            {
                name: '北京浩瀚一方网络科技有限责任公司',
                price: 1998,
                orders: 10
            },
            {
                name: '北京浩瀚一方网络科技有限责任公司',
                price: 1998,
                orders: 10
            }
        ];
    };
    //客户信息
    ChartPage.prototype.getStaffTargets = function () {
        this.staffTergetlists = [
            {
                name: '北京浩瀚一方',
                target: 1998,
                achieve: 1000,
                rate: 60
            },
            {
                name: '北京浩瀚一方',
                target: 1998,
                achieve: 1000,
                rate: 60
            },
            {
                name: '北京浩瀚一方',
                target: 1998,
                achieve: 1000,
                rate: 60
            },
            {
                name: '北京浩瀚一方',
                target: 1998,
                achieve: 1000,
                rate: 60
            },
            {
                name: '北京浩瀚一方',
                target: 1998,
                achieve: 1000,
                rate: 60
            },
            {
                name: '北京浩瀚一方',
                target: 1998,
                achieve: 1000,
                rate: 60
            },
        ];
    };
    ChartPage.prototype.getPreYear = function () {
        this.curYear = this.curYear - 1;
        console.log(this.curYear);
    };
    ChartPage.prototype.getNextYear = function () {
        this.curYear = this.curYear + 1;
        console.log(this.curYear);
    };
    ChartPage.prototype.getPricelists = function () {
        alert(1);
        this.pricelists = [
            {
                name: "2018-9-10王小红",
                cost: "889495",
                back: "889495",
                first: "889495",
                middle: "889495",
                final: "889495",
                total: "889495",
                profit: "889495",
            },
            {
                name: "2018-9-10王小红",
                cost: "889495",
                back: "889495",
                first: "889495",
                middle: "889495",
                final: "889495",
                total: "889495",
                profit: "889495",
            },
            {
                name: "2018-9-10王小红",
                cost: "889495",
                back: "889495",
                first: "889495",
                middle: "889495",
                final: "889495",
                total: "889495",
                profit: "889495",
            },
            {
                name: "2018-9-10王小红",
                cost: "889495",
                back: "889495",
                first: "889495",
                middle: "889495",
                final: "889495",
                total: "889495",
                profit: "889495",
            },
        ];
    };
    ChartPage.prototype.editGoals = function () {
        this.modalVisible = true;
        // this.getGoals();
    };
    ChartPage.prototype.hideModal = function () {
        this.modalVisible = false;
    };
    ChartPage.prototype.formSubmit = function (form) {
        console.log(form);
    };
    ChartPage.prototype.showAssign = function (id) {
        this.ifAssign = true;
    };
    ChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chart',template:/*ion-inline-start:"E:\Code\Ms\XSH\src\pages\charts\chart.html"*/'<ion-header>\n	<ion-navbar color="white">\n		<ion-title>经营报表</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<ion-grid class="nopadding">\n		<ion-row>\n			<ion-col col-2 class="typebg">\n				<ion-list no-lines>\n					<button class="typebtn" no-lines ion-item [ngClass]="{\'active\':  chatmemu == \'sales\'}" (click)="setmemu(\'sales\');">\n						<ion-icon name="stats" item-start></ion-icon>销售数据\n					</button>\n					<button class="typebtn" no-lines ion-item [ngClass]="{\'active\':  chatmemu == \'clients\'}" (click)="setmemu(\'clients\')">\n						<ion-icon name="contact" item-start></ion-icon>客户列表\n					</button>\n					<button class="typebtn" no-lines ion-item [ngClass]="{\'active\':  chatmemu == \'finance\'}" (click)="setmemu(\'finance\')">\n						<ion-icon name="move" item-start></ion-icon>财务数据\n					</button>\n					<button class="typebtn" no-lines ion-item [ngClass]="{\'active\':  chatmemu == \'goals\'}" (click)="setmemu(\'goals\')">\n						<ion-icon name="move" item-start></ion-icon>目标设定\n					</button>\n				</ion-list>\n			</ion-col>\n			<ion-col col-10 class="chart-box" [ngSwitch]="chatmemu">\n				<!-- 销售数据 -->\n				<div *ngSwitchCase="\'sales\'" class="greyBg">\n					<ion-row class="topCharts">\n						<!-- <ion-c m,m ol col-3> -->\n						<div class="whiteBoard co3">\n							<div class="inner">\n								<h3>目标达成率(月度)</h3>\n								<div id="target1"></div>\n								<div class="tagMark">\n									<p>\n										<span class="orange"></span>complete</p>\n									<p>\n										<span class="grey"></span>cancel</p>\n								</div>\n							</div>\n						</div>\n						<!-- </ion-c> -->\n						<!-- <ion-col col-6> -->\n						<div class="whiteBoard co6">\n							<div class="inner">\n								<h3>销售业绩排名</h3>\n								<!-- <div id="achievement"></div> -->\n								<div class="progressBox" *ngFor="let item of proList">\n									<div class="label">\n										{{item.name}}\n									</div>\n									<div class="perTxt">{{item.progress}}% </div>\n									<div class="progress">\n										<div class="ifshow">{{item.name}}{{item.price}}元</div>\n										<div class="Bar" [ngStyle]="{\'width\': item.progress+\'%\'}">\n											<!-- <div>{{item.progress}}%</div> -->\n										</div>\n									</div>\n								</div>\n							</div>\n						</div>\n						<!-- </ion-col> -->\n						<!-- <ion-col col-3> -->\n						<div class="whiteBoard co2 sales">\n							<div class="inner">\n								<h3>年度累计销售额</h3>\n								<h1>4.6K</h1>\n								<div class="iconimg">\n									<ion-icon name="trending-up" item-start></ion-icon>\n									<!-- <ion-icon name="trending-down" item-start></ion-icon> -->\n								</div>\n							</div>\n						</div>\n						<!-- </ion-col> -->\n					</ion-row>\n\n					<ion-row class="staffCharts">\n						<ion-col col-4>\n							<ion-segment class="museg" [(ngModel)]="pet">\n								<ion-segment-button value="wedding">\n									销售额\n								</ion-segment-button>\n								<ion-segment-button value="meeting">\n									订单统计\n								</ion-segment-button>\n							</ion-segment>\n						</ion-col>\n						<ion-col col-4 class="center">\n							<button ion-button (click)="getPreYear()">\n								<ion-icon name="arrow-back"></ion-icon>\n							</button>\n							<span>{{curYear}}年</span>\n							<button ion-button (click)="getNextYear()">\n								<ion-icon name="arrow-forward"></ion-icon>\n							</button>\n							<!-- <ion-datetime displayFormat="YYYY" [(ngModel)]="chartYear"></ion-datetime> -->\n						</ion-col>\n						<ion-col col-4>\n							<ion-item no-lines>\n								<ion-select [(ngModel)]="staff">\n									<ion-option value="0">全部员工</ion-option>\n									<ion-option value="1">小鱼</ion-option>\n									<ion-option value="2">小明</ion-option>\n								</ion-select>\n							</ion-item>\n						</ion-col>\n					</ion-row>\n\n					<div id="staff"></div>\n				</div>\n\n				<!-- 客户列表 -->\n				<div *ngSwitchCase="\'clients\'" class="clientBg">\n					<ion-list>\n						<ion-row class="chartTop">\n							<ion-col col-9>\n								<h4>客户总数：1850 </h4>\n								<span>|</span> 黑空江太阳岛空中花园\n							</ion-col>\n							<ion-col col-3>\n								<ion-item no-lines>\n									<ion-select [(ngModel)]="client">\n										<ion-option value="0">全部客户</ion-option>\n										<ion-option value="1">客户小鱼</ion-option>\n										<ion-option value="2">客户小明</ion-option>\n									</ion-select>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<table class="clientTable">\n							<tr>\n								<th>客户信息</th>\n								<th>销售总额</th>\n								<th>订单总数</th>\n							</tr>\n							<tr *ngFor="let item of clientlists">\n								<td class="txtLeft">\n									<h3>{{item.name}}</h3>\n									<p>李经理：1829390445</p>\n								</td>\n								<td class="txtRed">￥{{item.price}}</td>\n								<td>{{item.orders}}</td>\n							</tr>\n						</table>\n\n					</ion-list>\n				</div>\n\n				<!-- 财务数据 -->\n				<div *ngSwitchCase="\'finance\'" class="greyBg">\n					<ion-row class="circleTop">\n						<ion-col col-4>\n							<div class="bgBox">\n								<p>年度毛利 profit</p>\n								<ion-item no-lines>\n									<ion-avatar item-start>\n										<img src="img/avatar-finn.png">\n									</ion-avatar>\n									<h2>432000</h2>\n									<p>Calculated in 1930 THu</p>\n								</ion-item>\n							</div>\n						</ion-col>\n						<ion-col col-4>\n							<div class="bgBox">\n								<p>年度毛利 profit</p>\n								<ion-item no-lines>\n									<ion-avatar item-start>\n										<img src="img/avatar-finn.png">\n									</ion-avatar>\n									<h2>432000</h2>\n									<p>Calculated in 1930 THu</p>\n								</ion-item>\n							</div>\n						</ion-col>\n						<ion-col col-4>\n							<div class="bgBox">\n								<p>年度毛利 profit</p>\n								<ion-item no-lines>\n									<ion-avatar item-start>\n										<img src="img/avatar-finn.png">\n									</ion-avatar>\n									<h2>432000</h2>\n									<p>Calculated in 1930 THu</p>\n								</ion-item>\n							</div>\n						</ion-col>\n					</ion-row>\n					<ion-row>\n						<ion-col col-12>\n							<table class="clientTable finaTable">\n								<tr>\n									<td style="width:20rem">Information</td>\n									<td>执行成本</td>\n									<td>酒店/网络返点</td>\n									<td>定金</td>\n									<td>中期款</td>\n									<td>尾款</td>\n									<td>合同总额</td>\n									<td>毛利率</td>\n								</tr>\n								<tr *ngFor="let item of pricelists">\n									<td style="width:20em">\n										{{item.name}}\n										<span class="green" (click)="showAssign(item.id)">业绩分配</span>\n									</td>\n									<td style="width:16em">\n										￥{{item.cost}}\n										<span>业绩</span>\n									</td>\n									<td>￥{{item.back}}</td>\n									<td>￥{{item.first}}</td>\n									<td>￥{{item.middle}}</td>\n									<td>￥{{item.final}}</td>\n									<td>￥{{item.total}}</td>\n									<td>￥{{item.profit}}</td>\n								</tr>\n							</table>\n						</ion-col>\n					</ion-row>\n				</div>\n\n\n\n				<!-- 目标设定 -->\n				<div *ngSwitchCase="\'goals\'" class="greyBg">\n					<ion-row class="staffCharts">\n						<ion-col col-4 class="goals">\n							年度销售目标【1009】\n						</ion-col>\n						<ion-col col-4 class="center">\n							<button ion-button (click)="getPreYear()">\n								<ion-icon name="arrow-back"></ion-icon>\n							</button>\n							<span>{{curYear}}年</span>\n							<button ion-button (click)="getNextYear()">\n								<ion-icon name="arrow-forward"></ion-icon>\n							</button>\n							<!-- <ion-datetime displayFormat="YYYY" [(ngModel)]="chartYear"></ion-datetime> -->\n						</ion-col>\n						<ion-col col-4 class="right">\n							<button ion-button (click)="editGoals()">编辑目标</button>\n						</ion-col>\n					</ion-row>\n					<!-- <ion-item no-lines>\n						<h2>年度销售目标</h2>\n					</ion-item> -->\n					<div id="staffTarget"></div>\n					<ion-item no-lines>\n						<h2 class="goals2">年度销售目标【19990】</h2>\n					</ion-item>\n					<table class="clientTable">\n						<tr>\n							<th>序号</th>\n							<th>姓名</th>\n							<th>销售目标</th>\n							<th>已完成</th>\n							<th>目标达成率</th>\n						</tr>\n						<tr *ngFor="let item of staffTergetlists; let i = index">\n							<td>{{i+1}}</td>\n							<td>{{item.name}}</td>\n							<td>￥{{item.target}}</td>\n							<td>￥{{item.achieve}}</td>\n							<td>{{item.rate}}%</td>\n						</tr>\n					</table>\n				</div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<div class="calendarModal" *ngIf="modalVisible">\n		<div class="modalInner">\n			<span class="hidebtn" (click)="hideModal()">\n				<ion-icon name="close"></ion-icon>\n			</span>\n			<h3 class="modalTitle">\n				目标设定\n			</h3>\n\n			<div class="formBox">\n				<form #ngform="ngForm" class="formBox">\n					<ion-grid>\n						<ion-row>\n							<ion-col col-6 class="months">\n								<div no-lines class="title">\n									<h2>月度销售目标</h2>\n									<p>累计: 1990万元</p>\n								</div>\n								<ion-item no-lines>\n									<ion-label>1月</ion-label>\n									<ion-input type="text" name="one" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>万元</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>3月</ion-label>\n									<ion-input type="text" name="two" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>万元</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>4月</ion-label>\n									<ion-input type="text" name="three" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>万元</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>5月</ion-label>\n									<ion-input type="text" name="three" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>万元</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>6月</ion-label>\n									<ion-input type="text" name="three" clearInput ngModel>\n									</ion-input>\n									 <span class="unit" item-end>万元</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>7月</ion-label>\n									<ion-input type="text" name="three" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>万元</span>\n								</ion-item>\n							</ion-col>\n							<ion-col col-6 class="peoles">\n								<div no-lines class="title">\n									<h2>目标分解</h2>\n									<p>累计: 90%</p>\n								</div>\n								<ion-item no-lines>\n									<ion-label>吴辉</ion-label>\n									<ion-input type="text" name="name1" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>%</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>吴辉</ion-label>\n									<ion-input type="text" name="name1" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>%</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>吴辉</ion-label>\n									<ion-input type="text" name="name1" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>%</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>吴辉</ion-label>\n									<ion-input type="text" name="name1" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>%</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>吴辉</ion-label>\n									<ion-input type="text" name="name1" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>%</span>\n								</ion-item>\n								<ion-item no-lines>\n									<ion-label>吴辉</ion-label>\n									<ion-input type="text" name="name1" clearInput ngModel>\n									</ion-input>\n									<span class="unit" item-end>%</span>\n								</ion-item>\n							</ion-col>\n						</ion-row>\n						<ion-row class="subRow">\n							<ion-col col-12>\n								<button ion-button class="blckBtn" [disabled]="!ngform.valid" (click)="formSubmit(ngform.value)">\n									确定\n								</button>\n							</ion-col>\n						</ion-row>\n					</ion-grid>\n				</form>\n			</div>\n		</div>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"E:\Code\Ms\XSH\src\pages\charts\chart.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_chart__["a" /* ChartService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_chart__["a" /* ChartService */]])
    ], ChartPage);
    return ChartPage;
}());

//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(532);

var RouteConfig = {
    links: [
        { component: __WEBPACK_IMPORTED_MODULE_0__index__["e" /* HomePage */], name: 'home', segment: 'home' },
        { component: __WEBPACK_IMPORTED_MODULE_0__index__["f" /* LoginPage */], name: 'login', segment: 'login' },
        // { component: Pages.ChartPage, name: 'chart', segment: 'chart' },
        { component: __WEBPACK_IMPORTED_MODULE_0__index__["q" /* saleChartPage */], name: 'sale', segment: 'chart' },
        { component: __WEBPACK_IMPORTED_MODULE_0__index__["p" /* financeChartPage */], name: 'finance', segment: 'chart' },
        { component: __WEBPACK_IMPORTED_MODULE_0__index__["o" /* clientChartPage */], name: 'client', segment: 'chart' },
        { component: __WEBPACK_IMPORTED_MODULE_0__index__["r" /* targetChartPage */], name: 'target', segment: 'chart' },
        // { component: Pages.ProductsPage, name: 'products', segment: 'products' },
        { component: __WEBPACK_IMPORTED_MODULE_0__index__["d" /* FoodPage */], name: 'food', segment: 'products' },
        { component: __WEBPACK_IMPORTED_MODULE_0__index__["g" /* MeetingPage */], name: 'meeting', segment: 'products' },
        { component: __WEBPACK_IMPORTED_MODULE_0__index__["k" /* RoomPage */], name: 'room', segment: 'products' },
        { component: __WEBPACK_IMPORTED_MODULE_0__index__["n" /* WeddingPage */], name: 'wedding', segment: 'products' },
        { component: __WEBPACK_IMPORTED_MODULE_0__index__["m" /* WeddingDetailPage */], name: 'weddingDetail', segment: 'products/wedding/detail' },
        { component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* EditFoods */], name: 'editfood', segment: 'products/food/editfood' },
        { component: __WEBPACK_IMPORTED_MODULE_0__index__["j" /* PicsPage */], name: 'pics', segment: 'show/pics' },
        { component: __WEBPACK_IMPORTED_MODULE_0__index__["l" /* ViewsPage */], name: 'views', segment: 'show/views' },
        { component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* AddOrderPage */], name: 'orderadd', segment: 'home/orderadd' },
        { component: __WEBPACK_IMPORTED_MODULE_0__index__["h" /* OrderDetailPage */], name: 'orderdetail', segment: 'home/orderdetail' },
        { component: __WEBPACK_IMPORTED_MODULE_0__index__["c" /* FloatMenuPage */], name: 'floatMenuPage', segment: 'home/floatMenu' },
    ]
};
//# sourceMappingURL=route.js.map

/***/ })

},[533]);
//# sourceMappingURL=main.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var club_service_1 = require("./clubs/club.service");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onKey = function (event) {
        this.values = event.target.value;
    };
    AppComponent.prototype.onClickMe = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'bh-app',
        template: "\n       <div>\n            <nav class='navbar navbar-default navbar-fixed-top'>\n                    <a class='navbar-brand'>{{pageTitle}}</a>\n                    <ul class='nav navbar-nav'>\n                        <li><a [routerLink]=\"['/welcome']\">Po\u010Detna</a></li>\n                        <li><a [routerLink]=\"['/clubs']\">Spisak Timova</a></li>\n                    </ul>\n                    <div class='margin-right'>\n                        <form class='navbar-form navbar-right'>\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control searchcss\"  (keyup)=\"onKey($event)\" placeholder=\"Search\">\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-default submitcss\" (click)=\"onClickMe()\">Submit</button>\n                        </form>\n                    </div>\n            </nav> \n                <router-outlet></router-outlet>\n        </div>\n    ",
        providers: [club_service_1.ClubService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
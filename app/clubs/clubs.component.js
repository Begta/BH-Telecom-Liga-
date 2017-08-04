"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var club_service_1 = require("./club.service");
var ClubsComponent = (function () {
    function ClubsComponent(_clubService) {
        this._clubService = _clubService;
        this.pageTitle = 'Spisak klubova učesnika BH Telecom Premier Lige 2017/2018';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.clubs = [];
    }
    ClubsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._clubService.getClubs()
            .subscribe(function (clubs) { return _this.clubs = clubs; }, function (error) { return _this.errorMessage = error; });
    };
    return ClubsComponent;
}());
ClubsComponent = __decorate([
    core_1.Component({
        selector: 'tb-clubs',
        templateUrl: 'app/clubs/clubs.component.html',
        styleUrls: ['app/clubs/clubs.component.css']
    }),
    __metadata("design:paramtypes", [club_service_1.ClubService])
], ClubsComponent);
exports.ClubsComponent = ClubsComponent;
//# sourceMappingURL=clubs.component.js.map
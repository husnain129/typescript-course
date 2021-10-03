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
var decorators_1 = require("./decorators");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.getLogin = function (req, res) {
        res.send("\n      <form method=\"POST\">\n          <div>\n              <label>Email</label>\n              <input name=\"email\"/>\n          </div>\n          <div>\n              <label>Password</label>\n              <input type=\"password\" name=\"password\"/>\n          </div>\n          <button>Submit</button>\n      </form>\n      ");
    };
    LoginController.prototype.checkUser = function (req, res) {
        var id = req.params.id;
        res.status(200).send({ id: id });
    };
    LoginController.prototype.postLogin = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        console.log(email);
        if (email && password) {
            //   req.session = { loggedIn: true };
            //   res.redirect("/");
            res.status(200).json({ email: email });
        }
        else {
            console.log("You are not logged in");
        }
    };
    __decorate([
        (0, decorators_1.get)("/login"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogin", null);
    __decorate([
        (0, decorators_1.get)("/user/:id"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "checkUser", null);
    __decorate([
        (0, decorators_1.post)("/login"),
        (0, decorators_1.bodyValidator)("email", "password"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "postLogin", null);
    LoginController = __decorate([
        (0, decorators_1.controller)("/auth")
    ], LoginController);
    return LoginController;
}());

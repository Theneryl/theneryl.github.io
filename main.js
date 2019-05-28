(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/todo.action.ts":
/*!****************************************!*\
  !*** ./src/app/actions/todo.action.ts ***!
  \****************************************/
/*! exports provided: TodoActionTypes, TodoGetOne, TodoGetOneSuccess, TodoGetAll, TodoGetAllSuccess, TodoCreate, TodoCreateSuccess, TodoUpdate, TodoUpdateSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoActionTypes", function() { return TodoActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoGetOne", function() { return TodoGetOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoGetOneSuccess", function() { return TodoGetOneSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoGetAll", function() { return TodoGetAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoGetAllSuccess", function() { return TodoGetAllSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoCreate", function() { return TodoCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoCreateSuccess", function() { return TodoCreateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoUpdate", function() { return TodoUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoUpdateSuccess", function() { return TodoUpdateSuccess; });
var TodoActionTypes;
(function (TodoActionTypes) {
    TodoActionTypes["todoGetOne"] = "[Todo] Get One";
    TodoActionTypes["todoGetOneSuccess"] = "[Todo] Get One Success";
    TodoActionTypes["todoGetAll"] = "[Todo] Get All";
    TodoActionTypes["todoGetAllSuccess"] = "[Todo] Get All Success";
    TodoActionTypes["todoCreate"] = "[Todo] Create";
    TodoActionTypes["todoCreateSuccess"] = "[Todo] Create Success";
    TodoActionTypes["todoUpdate"] = "[Todo] Update";
    TodoActionTypes["todoUpdateSuccess"] = "[Todo] Update Success";
})(TodoActionTypes || (TodoActionTypes = {}));
var TodoGetOne = /** @class */ (function () {
    function TodoGetOne(id) {
        this.id = id;
        this.type = TodoActionTypes.todoGetOne;
    }
    return TodoGetOne;
}());

var TodoGetOneSuccess = /** @class */ (function () {
    function TodoGetOneSuccess(todotask) {
        this.todotask = todotask;
        this.type = TodoActionTypes.todoGetOneSuccess;
    }
    return TodoGetOneSuccess;
}());

var TodoGetAll = /** @class */ (function () {
    function TodoGetAll() {
        this.type = TodoActionTypes.todoGetAll;
    }
    return TodoGetAll;
}());

var TodoGetAllSuccess = /** @class */ (function () {
    function TodoGetAllSuccess(todolist) {
        this.todolist = todolist;
        this.type = TodoActionTypes.todoGetAllSuccess;
    }
    return TodoGetAllSuccess;
}());

var TodoCreate = /** @class */ (function () {
    function TodoCreate(title, description) {
        this.title = title;
        this.description = description;
        this.type = TodoActionTypes.todoCreate;
    }
    return TodoCreate;
}());

var TodoCreateSuccess = /** @class */ (function () {
    function TodoCreateSuccess(todotask) {
        this.todotask = todotask;
        this.type = TodoActionTypes.todoCreateSuccess;
    }
    return TodoCreateSuccess;
}());

var TodoUpdate = /** @class */ (function () {
    function TodoUpdate(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.type = TodoActionTypes.todoUpdate;
    }
    return TodoUpdate;
}());

var TodoUpdateSuccess = /** @class */ (function () {
    function TodoUpdateSuccess(todotask) {
        this.todotask = todotask;
        this.type = TodoActionTypes.todoUpdateSuccess;
    }
    return TodoUpdateSuccess;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/todo-list/todo-list.component.ts");
/* harmony import */ var _todo_task_todo_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-task/todo-task.component */ "./src/app/todo-task/todo-task.component.ts");





var routes = [
    { path: '', redirectTo: '/todolist', pathMatch: 'full' },
    { path: 'todolist', component: _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"] },
    { path: 'todotask', component: _todo_task_todo_task_component__WEBPACK_IMPORTED_MODULE_4__["TodoTaskComponent"] },
    { path: 'todotask/:id', component: _todo_task_todo_task_component__WEBPACK_IMPORTED_MODULE_4__["TodoTaskComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todo-list-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.effects.ts":
/*!********************************!*\
  !*** ./src/app/app.effects.ts ***!
  \********************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_todo_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/todo-task.service */ "./src/app/services/todo-task.service.ts");
/* harmony import */ var _actions_todo_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions/todo.action */ "./src/app/actions/todo.action.ts");







var AppEffects = /** @class */ (function () {
    function AppEffects(actions$, todoTaskService) {
        var _this = this;
        this.actions$ = actions$;
        this.todoTaskService = todoTaskService;
        this.getAllTodos$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_todo_action__WEBPACK_IMPORTED_MODULE_6__["TodoActionTypes"].todoGetAll), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (action) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_todo_action__WEBPACK_IMPORTED_MODULE_6__["TodoGetAllSuccess"](_this.todoTaskService.getAllTodoTask()));
        }));
        this.getOneTodo$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_todo_action__WEBPACK_IMPORTED_MODULE_6__["TodoActionTypes"].todoGetOne), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (action) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_todo_action__WEBPACK_IMPORTED_MODULE_6__["TodoGetOneSuccess"](_this.todoTaskService.getTodoTask(action.id)));
        }));
        this.createTodo$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_todo_action__WEBPACK_IMPORTED_MODULE_6__["TodoActionTypes"].todoCreate), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (action) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_todo_action__WEBPACK_IMPORTED_MODULE_6__["TodoCreateSuccess"](_this.todoTaskService.createTodoTask(action.title, action.description)));
        }));
        this.updateTodo$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_todo_action__WEBPACK_IMPORTED_MODULE_6__["TodoActionTypes"].todoUpdate), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (action) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_todo_action__WEBPACK_IMPORTED_MODULE_6__["TodoUpdateSuccess"](_this.todoTaskService.updateTodoTask(action.id, action.title, action.description)));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AppEffects.prototype, "getAllTodos$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AppEffects.prototype, "getOneTodo$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AppEffects.prototype, "createTodo$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AppEffects.prototype, "updateTodo$", void 0);
    AppEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_todo_task_service__WEBPACK_IMPORTED_MODULE_5__["TodoTaskService"]])
    ], AppEffects);
    return AppEffects;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _todo_task_todo_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-task/todo-task.component */ "./src/app/todo-task/todo-task.component.ts");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/todo-list/todo-list.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reducers/todo.reducer */ "./src/app/reducers/todo.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _app_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.effects */ "./src/app/app.effects.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _todo_task_todo_task_component__WEBPACK_IMPORTED_MODULE_6__["TodoTaskComponent"],
                _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__["TodoListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot({ todo: _reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_11__["todoReducer"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot([_app_effects__WEBPACK_IMPORTED_MODULE_13__["AppEffects"]])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mocks/todo-state.mock.ts":
/*!******************************************!*\
  !*** ./src/app/mocks/todo-state.mock.ts ***!
  \******************************************/
/*! exports provided: eTodoState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eTodoState", function() { return eTodoState; });
var eTodoState;
(function (eTodoState) {
    eTodoState["TODO"] = "To Do";
    eTodoState["DONE"] = "DONE";
})(eTodoState || (eTodoState = {}));


/***/ }),

/***/ "./src/app/models/todo-task.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/todo-task.model.ts ***!
  \*******************************************/
/*! exports provided: TodoTaskModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoTaskModel", function() { return TodoTaskModel; });
/* harmony import */ var _mocks_todo_state_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mocks/todo-state.mock */ "./src/app/mocks/todo-state.mock.ts");

var index = 0;
var TodoTaskModel = /** @class */ (function () {
    function TodoTaskModel(id, title, description, state) {
        if (state === void 0) { state = _mocks_todo_state_mock__WEBPACK_IMPORTED_MODULE_0__["eTodoState"].TODO; }
        this.id = id;
        this.title = title;
        this.description = description;
        this.create_at = new Date();
        this.updated_at = new Date();
        this.state = state;
    }
    return TodoTaskModel;
}());



/***/ }),

/***/ "./src/app/reducers/todo.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/todo.reducer.ts ***!
  \******************************************/
/*! exports provided: initialState, todoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoReducer", function() { return todoReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_todo_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/todo.action */ "./src/app/actions/todo.action.ts");


var initialState = {
    id: 0,
    title: '',
    description: '',
    todoTask: null,
    todoList: []
};
function todoReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_1__["TodoActionTypes"].todoGetOne: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { id: action.id });
        }
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_1__["TodoActionTypes"].todoGetOneSuccess: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { todoTask: action.todotask });
        }
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_1__["TodoActionTypes"].todoGetAll: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
        }
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_1__["TodoActionTypes"].todoGetAllSuccess: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { todoList: action.todolist.slice() });
        }
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_1__["TodoActionTypes"].todoCreate: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { title: action.title, description: action.description });
        }
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_1__["TodoActionTypes"].todoCreateSuccess: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { todoTask: action.todotask });
        }
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_1__["TodoActionTypes"].todoUpdate: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { id: action.id, title: action.title, description: action.description });
        }
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_1__["TodoActionTypes"].todoUpdateSuccess: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { todoTask: action.todotask });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/services/todo-task.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/todo-task.service.ts ***!
  \***********************************************/
/*! exports provided: TodoTaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoTaskService", function() { return TodoTaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mocks_todo_state_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mocks/todo-state.mock */ "./src/app/mocks/todo-state.mock.ts");
/* harmony import */ var _models_todo_task_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/todo-task.model */ "./src/app/models/todo-task.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_todo_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/todo.action */ "./src/app/actions/todo.action.ts");






var TodoTaskService = /** @class */ (function () {
    function TodoTaskService(store) {
        this.store = store;
        this.index = 0;
        this.todoList = [];
        for (var i = 1; i <= 10; i++) {
            this.createTodoTask('Todo' + i, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus pellentesque posuere. Etiam eros elit, imperdiet in ultrices nec, porttitor non elit. Sed tempor laoreet orci. Cras tincidunt dui diam, quis laoreet purus dictum non. Nunc condimentum laoreet nunc sed maximus. Nunc feugiat, turpis ut aliquam venenatis, libero purus congue erat, vel tempor urna neque a tortor. Sed vel scelerisque nulla. Nam congue tellus at viverra pulvinar. Fusce tempus, dolor eu vehicula rhoncus, felis ex porta leo, ut imperdiet erat augue eget nisi. Nam sit amet magna in libero efficitur convallis in et velit. Vestibulum et mauris quis orci dignissim condimentum.');
        }
    }
    TodoTaskService.prototype.createTodoTask = function (title, description) {
        var todotask = new _models_todo_task_model__WEBPACK_IMPORTED_MODULE_3__["TodoTaskModel"](++this.index, title, description, _mocks_todo_state_mock__WEBPACK_IMPORTED_MODULE_2__["eTodoState"].TODO);
        this.todoList.push(todotask);
        this.store.dispatch(new _actions_todo_action__WEBPACK_IMPORTED_MODULE_5__["TodoGetAll"]);
        return todotask;
    };
    TodoTaskService.prototype.updateTodoTask = function (id, title, description) {
        var task = this.todoList.find(function (task) { return task.id.toString() === id.toString(); });
        if (task) {
            task.title = title;
            task.description = description;
            task.updated_at = new Date();
            this.store.dispatch(new _actions_todo_action__WEBPACK_IMPORTED_MODULE_5__["TodoGetAll"]);
        }
        return task;
    };
    TodoTaskService.prototype.closeTodoTask = function (id) {
        var task = this.todoList.find(function (task) { return task.id === id; });
        task.state = _mocks_todo_state_mock__WEBPACK_IMPORTED_MODULE_2__["eTodoState"].DONE;
        this.store.dispatch(new _actions_todo_action__WEBPACK_IMPORTED_MODULE_5__["TodoGetAll"]);
    };
    TodoTaskService.prototype.getTodoTask = function (id) {
        return this.todoList.find(function (task) { return task.id.toString() === id.toString(); });
    };
    TodoTaskService.prototype.getAllTodoTask = function () {
        return this.todoList
            .sort(function (task1, task2) { return task1.create_at > task2.create_at ? 1 : -1; })
            .sort(function (task) { return task.state === _mocks_todo_state_mock__WEBPACK_IMPORTED_MODULE_2__["eTodoState"].TODO ? -1 : 1; });
    };
    TodoTaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], TodoTaskService);
    return TodoTaskService;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todo-list-group-container\">\r\n  <div class=\"todo-list-container\">\r\n    <div>\r\n      <div class=\"todo-list-title\">\r\n          <h3>TODO LIST</h3>\r\n          <button mat-fab color=\"primary\"\r\n                  routerLink=\"/todotask\">\r\n            Add\r\n          </button>\r\n      </div>\r\n      <mat-chip-list *ngIf=\"todoListState$ | async as todoListState\">\r\n        <mat-chip color=\"primary\" selected>{{todoListState.length}}</mat-chip>\r\n      </mat-chip-list>\r\n    </div>\r\n    <div class=\"todo-list-content\" *ngIf=\"todoListState$ | async as todoListState\">\r\n      <mat-card *ngFor=\"let todotask of todoListState\" class=\"todo-list-item\">\r\n        <mat-card-header>\r\n          <mat-card-title class=\"todo-task-card-title\">\r\n            <span>{{todotask.title}}</span>\r\n          </mat-card-title>\r\n          <mat-card-subtitle>\r\n            <span>{{todotask.state}}</span>\r\n          </mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content>{{todotask.description}}</mat-card-content>\r\n        <mat-card-footer class=\"todo-task-card-footer\">\r\n          <button mat-mini-fab color=\"primary\" routerLink=\"/todotask/{{todotask.id}}\">\r\n            Edit\r\n          </button>\r\n          <button mat-mini-fab color=\"warn\"\r\n                  (click)=\"closeTodoTask(todotask.id)\">\r\n            Close\r\n          </button>\r\n        </mat-card-footer>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo-list-group-container {\n  display: flex;\n  flex-direction: row;\n  width: 80vw;\n  height: 100%;\n  padding: 0 10vw; }\n  .todo-list-group-container .todo-list-container {\n    display: flex;\n    flex-direction: column;\n    margin: 0 5px;\n    height: 100%; }\n  .todo-list-group-container .todo-list-container .todo-list-title {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between; }\n  .todo-list-group-container .todo-list-container .todo-list-content {\n      flex: 10;\n      overflow: auto;\n      display: flex;\n      flex-direction: column; }\n  .todo-list-group-container .todo-list-container .todo-list-content > .todo-list-item {\n        margin: 5px 0; }\n  .todo-list-group-container .todo-list-container .todo-list-content > .todo-list-item .todo-task-card-title {\n          display: flex;\n          flex-direction: row;\n          justify-content: space-between; }\n  .todo-list-group-container .todo-list-container .todo-list-content > .todo-list-item .todo-task-card-footer {\n          display: flex;\n          flex-direction: row;\n          justify-content: flex-end;\n          padding: 10px; }\n  .todo-list-group-container .todo-list-container .todo-list-content > .todo-list-item .todo-task-card-footer > button {\n            margin: 0 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby1saXN0L0M6XFxVc2Vyc1xcZm9ybWF0aW9uXFxEb2N1bWVudHNcXHlvdXNzZWYgYWJvdWFraWxcXHRvZG8tbGlzdC1hbmd1bGFyL3NyY1xcYXBwXFx0b2RvLWxpc3RcXHRvZG8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlLEVBQUE7RUFMbkI7SUFRUSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZLEVBQUE7RUFYcEI7TUFjWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QixFQUFBO0VBaEIxQztNQW9CWSxRQUFRO01BQ1IsY0FBYztNQUNkLGFBQWE7TUFDYixzQkFBc0IsRUFBQTtFQXZCbEM7UUEwQmdCLGFBQWEsRUFBQTtFQTFCN0I7VUE2Qm9CLGFBQWE7VUFDYixtQkFBbUI7VUFDbkIsOEJBQ0osRUFBQTtFQWhDaEI7VUFtQ2dCLGFBQWE7VUFDYixtQkFBbUI7VUFDbkIseUJBQXlCO1VBQ3pCLGFBQWEsRUFBQTtFQXRDN0I7WUF5Q29CLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9kby1saXN0LWdyb3VwLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAxMHZ3O1xyXG5cclxuICAgIC50b2RvLWxpc3QtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIC50b2RvLWxpc3QtdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG9kby1saXN0LWNvbnRlbnQge1xyXG4gICAgICAgICAgICBmbGV4OiAxMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAmID4gLnRvZG8tbGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgLnRvZG8tdGFzay1jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC50b2RvLXRhc2stY2FyZC1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAmID4gYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.ts ***!
  \**************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_todo_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/todo-task.service */ "./src/app/services/todo-task.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_todo_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/todo.action */ "./src/app/actions/todo.action.ts");





var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(todoTaskService, store) {
        this.todoTaskService = todoTaskService;
        this.store = store;
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this.todoListState$ = this.store.select(function (state) {
            return state['todo'].todoList;
        });
        this.store.dispatch(new _actions_todo_action__WEBPACK_IMPORTED_MODULE_4__["TodoGetAll"]);
    };
    TodoListComponent.prototype.closeTodoTask = function (id) {
        this.todoTaskService.closeTodoTask(id);
    };
    TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.scss */ "./src/app/todo-list/todo-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_todo_task_service__WEBPACK_IMPORTED_MODULE_2__["TodoTaskService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/todo-task/todo-task.component.html":
/*!****************************************************!*\
  !*** ./src/app/todo-task/todo-task.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"todo-task-container\"\r\n          [formGroup]=\"todoTaskForm\">\r\n  <mat-card-header>\r\n    <mat-card-title>Todo Edition</mat-card-title>\r\n    <mat-card-subtitle>Update</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content class=\"todo-task-form\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Title\" \r\n      formControlName=\"title\" required>\r\n    </mat-form-field>\r\n  \r\n    <mat-form-field>\r\n      <textarea matInput placeholder=\"Description\"\r\n      formControlName=\"description\" required></textarea>\r\n    </mat-form-field>\r\n  </mat-card-content>\r\n  <mat-card-footer class=\"todo-task-footer\">\r\n    <button mat-flat-button\r\n        color=\"accent\"\r\n        routerLink=\"/todolist\">\r\n        Cancel\r\n      </button>\r\n      <button mat-flat-button\r\n              color=\"primary\"\r\n              type=\"submit\"\r\n              (click)=\"onSubmit()\"\r\n              [disabled]=\"!todoTaskForm.valid\">\r\n        Submit\r\n      </button>\r\n  </mat-card-footer>\r\n</mat-card >\r\n"

/***/ }),

/***/ "./src/app/todo-task/todo-task.component.scss":
/*!****************************************************!*\
  !*** ./src/app/todo-task/todo-task.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo-task-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 10vh 15vw; }\n  .todo-task-container .todo-task-form {\n    display: flex;\n    flex-direction: column; }\n  .todo-task-container .todo-task-footer {\n    display: flex;\n    justify-content: flex-end;\n    flex-direction: row;\n    padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby10YXNrL0M6XFxVc2Vyc1xcZm9ybWF0aW9uXFxEb2N1bWVudHNcXHlvdXNzZWYgYWJvdWFraWxcXHRvZG8tbGlzdC1hbmd1bGFyL3NyY1xcYXBwXFx0b2RvLXRhc2tcXHRvZG8tdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBO0VBSnJCO0lBT1EsYUFBYTtJQUNiLHNCQUFzQixFQUFBO0VBUjlCO0lBWVEsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdG9kby10YXNrL3RvZG8tdGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RvLXRhc2stY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwdmggMTV2dztcclxuXHJcbiAgICAudG9kby10YXNrLWZvcm0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAudG9kby10YXNrLWZvb3RlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/todo-task/todo-task.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-task/todo-task.component.ts ***!
  \**************************************************/
/*! exports provided: TodoTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoTaskComponent", function() { return TodoTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_todo_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/todo-task.service */ "./src/app/services/todo-task.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_todo_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/todo.action */ "./src/app/actions/todo.action.ts");







var TodoTaskComponent = /** @class */ (function () {
    function TodoTaskComponent(route, router, todoTaskService, store) {
        this.route = route;
        this.router = router;
        this.todoTaskService = todoTaskService;
        this.store = store;
        this.isEdition = false;
        this.id = 0;
    }
    TodoTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clearForm();
        this.store.select(function (state) {
            return state['todo'].todoTask;
        }).subscribe(function (todotask) {
            if (todotask) {
                _this.isEdition = true;
                _this.todoTaskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                    title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](todotask.title),
                    description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](todotask.description)
                });
            }
        });
        this.route.params.subscribe(function (params) {
            if (params.id !== undefined) {
                _this.id = params.id;
                _this.store.dispatch(new _actions_todo_action__WEBPACK_IMPORTED_MODULE_6__["TodoGetOne"](params.id));
            }
            else {
                _this.clearForm();
            }
        });
    };
    TodoTaskComponent.prototype.clearForm = function () {
        this.isEdition = false;
        this.id = 0;
        this.todoTaskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
    };
    TodoTaskComponent.prototype.onSubmit = function () {
        if (this.isEdition) {
            this.store.dispatch(new _actions_todo_action__WEBPACK_IMPORTED_MODULE_6__["TodoUpdate"](this.id, this.todoTaskForm.value.title, this.todoTaskForm.value.description));
        }
        else {
            this.store.dispatch(new _actions_todo_action__WEBPACK_IMPORTED_MODULE_6__["TodoCreate"](this.todoTaskForm.value.title, this.todoTaskForm.value.description));
        }
        this.router.navigate(['/todolist']);
    };
    TodoTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-task',
            template: __webpack_require__(/*! ./todo-task.component.html */ "./src/app/todo-task/todo-task.component.html"),
            styles: [__webpack_require__(/*! ./todo-task.component.scss */ "./src/app/todo-task/todo-task.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_todo_task_service__WEBPACK_IMPORTED_MODULE_3__["TodoTaskService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], TodoTaskComponent);
    return TodoTaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\formation\Documents\youssef abouakil\todo-list-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
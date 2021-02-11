class Logify{
    constructor( params, addTheme ){
        this.options = {
            theme : "classic",
            showLog : "all",
        };
        this.themes = {
            classic : {
                printStyle : "color:#333;padding:5px;font-size:12px;",
                featStyle : "color:#333;padding:5px;font-size:18px;",
                errorStyle : "color:#fff;padding:5px 5px 5px 14px;font-weight:bold;border-radius:4px;font-size:12px;background-color:#A5302B;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MiA1MiI+PHBhdGggZD0iTTQ0LjQgNy42QzM0LjMtMi41IDE3LjgtMi41IDcuNiA3LjZzLTEwLjEgMjYuNiAwIDM2LjggMjYuNiAxMC4xIDM2LjggMGMxMC4xLTEwLjEgMTAuMS0yNi42IDAtMzYuOHptLTguMSAyOC42Yy0uOC44LTIgLjgtMi44IDBsLTcuNC03LjQtNy44IDcuOGMtLjguOC0yIC44LTIuOCAwcy0uOC0yIDAtMi44bDcuOC03LjgtNy40LTcuNGMtLjgtLjgtLjgtMiAwLTIuOC44LS44IDItLjggMi44IDBsNy40IDcuNCA3LjEtNy4xYy44LS44IDItLjggMi44IDBzLjggMiAwIDIuOEwyOC45IDI2bDcuNCA3LjRjLjguOC44IDIgMCAyLjh6IiBmaWxsPSIjZmZmIi8+PC9zdmc+);background-position:3px 50%;background-repeat:no-repeat;background-size:15px;",
                warningStyle : "color:#fff;background:orange;padding:5px 5px 5px 14px;font-weight:bold;border-radius:4px;font-size:12px;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNTA3LjUgNDI2LjFMMjgyLjkgNTMuNWMtNS43LTkuNC0xNS45LTE1LjItMjYuOS0xNS4yLTExIDAtMjEuMiA1LjgtMjYuOSAxNS4yTDQuNSA0MjYuMWMtNS44IDkuNy02IDIxLjgtLjUgMzEuNiA1LjYgOS45IDE2IDE1LjkgMjcuMyAxNS45aDQ0OS4zYzExLjMgMCAyMS44LTYuMSAyNy4zLTE1LjkgNS42LTkuOSA1LjQtMjEuOS0uNC0zMS42ek0yNTYuMiAxNjcuMmMxMi45IDAgMjMuOCA3LjMgMjMuOCAyMC4yIDAgMzkuNC00LjYgOTUuOS00LjYgMTM1LjMgMCAxMC4zLTExLjIgMTQuNi0xOS4yIDE0LjYtMTAuNiAwLTE5LjUtNC4zLTE5LjUtMTQuNiAwLTM5LjQtNC42LTk1LjktNC42LTEzNS4zLS4xLTEyLjkgMTAuNS0yMC4yIDI0LjEtMjAuMnptLjMgMjQzLjhjLTE0LjYgMC0yNS41LTExLjktMjUuNS0yNS41IDAtMTMuOSAxMC45LTI1LjUgMjUuNS0yNS41IDEzLjYgMCAyNS4xIDExLjYgMjUuMSAyNS41IDAgMTMuNi0xMS41IDI1LjUtMjUuMSAyNS41eiIvPjwvc3ZnPg==);background-position:3px 50%;background-repeat:no-repeat;background-size:15px;",
                infoStyle : "color:#fff;background-color:#2682CB;padding:5px 5px 5px 14px;font-weight:bold;border-radius:4px;font-size:12px;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMy42IDIzLjYiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS44IDBDNS4zIDAgMCA1LjMgMCAxMS44czUuMyAxMS44IDExLjggMTEuOCAxMS44LTUuMyAxMS44LTExLjhTMTguMyAwIDExLjggMHptMi41IDE4LjNjLS42LjItMS4xLjQtMS41LjUtLjQuMS0uOC4yLTEuMy4yLS43IDAtMS4zLS4yLTEuNy0uNXMtLjYtLjgtLjYtMS40di0uN2MwLS4yLjEtLjUuMS0uOGwuOC0yLjdjLjEtLjMuMS0uNS4yLS43IDAtLjIuMS0uNC4xLS42IDAtLjMtLjEtLjYtLjItLjctLjEtLjEtLjQtLjItLjgtLjItLjIgMC0uNCAwLS42LjEtLjIuMS0uNC4xLS41LjJsLjItLjhjLjUtLjIgMS0uNCAxLjQtLjUuNS0uMS45LS4yIDEuMy0uMi43IDAgMS4zLjIgMS43LjUuNC40LjYuOC42IDEuNHYuNmMwIC4zLS4xLjYtLjIuOGwtLjggMi43Yy0uMS4yLS4xLjUtLjIuNyAwIC4zLS4xLjUtLjEuNiAwIC40LjEuNi4yLjcuMi4xLjQuMi44LjIuMiAwIC40IDAgLjYtLjEuMi0uMS40LS4xLjUtLjJ2Ljl6bS0uMi0xMC45Yy0uNC4zLS44LjUtMS4zLjVzLS45LS4yLTEuMy0uNS0uNS0uNy0uNS0xLjIuMi0uOS41LTEuMmMuNC0uMy44LS41IDEuMy0uNXMuOS4yIDEuMy41LjUuNy41IDEuMmMuMS41LS4xLjktLjUgMS4yeiIvPjwvc3ZnPg==);background-position:3px 50%;background-repeat:no-repeat;background-size:15px;",
                dataStyle : "color:#2682CB;font-weight:bold;font-size:12px;",
                breakStyle : "line-height:2px;background:#666;"
            },
            light : {
                printStyle : "color:#747474;padding:5px;font-size:12px;",
                featStyle : "color:#747474;padding:5px;font-size:16px;",
                errorStyle : "color:#A22828;padding:5px;border-radius:4px;font-size:12px;background-color:#FFADAD;",
                warningStyle : "color:#F97E4D;background:#FFD6A5;padding:5px;border-radius:4px;font-size:12px;",
                infoStyle : "color:#5489AA;background-color:#9BF6FF;padding:5px;border-radius:4px;font-size:12px;",
                dataStyle : "color:#5489AA;font-weight:bold;",
                breakStyle : "line-height:1px;background:#D9D9D9;"
            },
            dark : {
                printStyle : "color:#D2D2D2;padding:5px;font-size:12px;",
                featStyle : "color:#D2D2D2;padding:5px;font-size:16px;",
                errorStyle : "color:#000;padding:5px 5px 5px 14px;font-weight:bold;border-radius:4px;font-size:12px;background-color:#9F221E;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MiA1MiI+PHBhdGggZD0iTTQ0LjQgNy42QzM0LjMtMi41IDE3LjgtMi41IDcuNiA3LjZzLTEwLjEgMjYuNiAwIDM2LjggMjYuNiAxMC4xIDM2LjggMGMxMC4xLTEwLjEgMTAuMS0yNi42IDAtMzYuOHptLTguMSAyOC42Yy0uOC44LTIgLjgtMi44IDBsLTcuNC03LjQtNy44IDcuOGMtLjguOC0yIC44LTIuOCAwcy0uOC0yIDAtMi44bDcuOC03LjgtNy40LTcuNGMtLjgtLjgtLjgtMiAwLTIuOC44LS44IDItLjggMi44IDBsNy40IDcuNCA3LjEtNy4xYy44LS44IDItLjggMi44IDBzLjggMiAwIDIuOEwyOC45IDI2bDcuNCA3LjRjLjguOC44IDIgMCAyLjh6Ii8+PC9zdmc+);background-position:3px 50%;background-repeat:no-repeat;background-size:15px;",
                warningStyle : "color:#000;background:#DFD107;padding:5px 5px 5px 14px;font-weight:bold;border-radius:4px;font-size:12px;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNTA3LjUgNDI2LjFMMjgyLjkgNTMuNWMtNS43LTkuNC0xNS45LTE1LjItMjYuOS0xNS4yLTExIDAtMjEuMiA1LjgtMjYuOSAxNS4yTDQuNSA0MjYuMWMtNS44IDkuNy02IDIxLjgtLjUgMzEuNiA1LjYgOS45IDE2IDE1LjkgMjcuMyAxNS45aDQ0OS4zYzExLjMgMCAyMS44LTYuMSAyNy4zLTE1LjkgNS42LTkuOSA1LjQtMjEuOS0uNC0zMS42ek0yNTYuMiAxNjcuMmMxMi45IDAgMjMuOCA3LjMgMjMuOCAyMC4yIDAgMzkuNC00LjYgOTUuOS00LjYgMTM1LjMgMCAxMC4zLTExLjIgMTQuNi0xOS4yIDE0LjYtMTAuNiAwLTE5LjUtNC4zLTE5LjUtMTQuNiAwLTM5LjQtNC42LTk1LjktNC42LTEzNS4zLS4xLTEyLjkgMTAuNS0yMC4yIDI0LjEtMjAuMnptLjMgMjQzLjhjLTE0LjYgMC0yNS41LTExLjktMjUuNS0yNS41IDAtMTMuOSAxMC45LTI1LjUgMjUuNS0yNS41IDEzLjYgMCAyNS4xIDExLjYgMjUuMSAyNS41IDAgMTMuNi0xMS41IDI1LjUtMjUuMSAyNS41eiIvPjwvc3ZnPg==);background-position:3px 50%;background-repeat:no-repeat;background-size:15px;",
                infoStyle : "color:#000;background-color:#4CBED5;padding:5px 5px 5px 14px;font-weight:bold;border-radius:4px;font-size:12px;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMy42IDIzLjYiPjxwYXRoIGQ9Ik0xMS44IDBDNS4zIDAgMCA1LjMgMCAxMS44czUuMyAxMS44IDExLjggMTEuOCAxMS44LTUuMyAxMS44LTExLjhTMTguMyAwIDExLjggMHptMi41IDE4LjNjLS42LjItMS4xLjQtMS41LjUtLjQuMS0uOC4yLTEuMy4yLS43IDAtMS4zLS4yLTEuNy0uNXMtLjYtLjgtLjYtMS40di0uN2MwLS4yLjEtLjUuMS0uOGwuOC0yLjdjLjEtLjMuMS0uNS4yLS43IDAtLjIuMS0uNC4xLS42IDAtLjMtLjEtLjYtLjItLjctLjEtLjEtLjQtLjItLjgtLjItLjIgMC0uNCAwLS42LjEtLjIuMS0uNC4xLS41LjJsLjItLjhjLjUtLjIgMS0uNCAxLjQtLjUuNS0uMS45LS4yIDEuMy0uMi43IDAgMS4zLjIgMS43LjUuNC40LjYuOC42IDEuNHYuNmMwIC4zLS4xLjYtLjIuOGwtLjggMi43Yy0uMS4yLS4xLjUtLjIuNyAwIC4zLS4xLjUtLjEuNiAwIC40LjEuNi4yLjcuMi4xLjQuMi44LjIuMiAwIC40IDAgLjYtLjEuMi0uMS40LS4xLjUtLjJ2Ljl6bS0uMi0xMC45Yy0uNC4zLS44LjUtMS4zLjVzLS45LS4yLTEuMy0uNS0uNS0uNy0uNS0xLjIuMi0uOS41LTEuMmMuNC0uMy44LS41IDEuMy0uNXMuOS4yIDEuMy41LjUuNy41IDEuMmMuMS41LS4xLjktLjUgMS4yeiIgZmlsbD0iIzAzMDEwNCIvPjwvc3ZnPg==);background-position:3px 50%;background-repeat:no-repeat;background-size:15px;",
                dataStyle : "color:#D2D2D2;font-weight:bold;",
                breakStyle : "line-height:2px;background:#F0EEEE;"
            }
        };
        // Check if add themes
        if( addTheme && typeof addTheme === 'object' && addTheme !== null ){
            let themesDepth = this.depthOf(addTheme);
            if( themesDepth == 2){
                // Add multiple themes
                this.themes = Object.assign(this.themes, addTheme);
            }else{
                console.error("You have set incorrect themes format");
            }
        }
        if( params && typeof params === 'object' && params !== null ){
            this.options = Object.assign(this.options, params);
        }
    };
    print(msg){
        (this.options.showLog == "all") ? console.log("%c " + msg , this.themes[this.options.theme].printStyle) : false;
    };
    featured(msg){
        (this.options.showLog == "all") ? console.log("%c " + msg , this.themes[this.options.theme].featStyle) : false;
    };
    error(msg){
        (this.options.showLog == "all" || this.options.showLog=="errors" || this.options.showLog=="problems") ? console.log("%c " + msg , this.themes[this.options.theme].errorStyle ) : false;
    };
    warning(msg){
        (this.options.showLog == "all" || this.options.showLog=="problems") ? console.log("%c " + msg , this.themes[this.options.theme].warningStyle ) : false;
    };
    info(msg){
        (this.options.showLog == "all") ? console.log("%c " + msg , this.themes[this.options.theme].infoStyle ) : false;
    };
    log(msg){
        if(this.options.showLog == "all"){
            console.log( msg);
        }
    };
    data(key,value){
        if(this.options.showLog == "all"){
            console.log('%c %s: %o',this.themes[this.options.theme].dataStyle, key, value);
        }
    };
    br(){
        if(this.options.showLog == "all"){
            console.log("%c                                          " , this.themes[this.options.theme].breakStyle );
        }
    };
    image( url ){
        if(this.options.showLog == "all"){
            let image = new Image();
            image.onload = function() {
                var style = 'background-image: url('+ url +');padding: ' + ( this.height / 2 ) + 'px ' + ( this.width / 2 ) + 'px;font-size: 0;line-height: 0;background-size: 100% 100%;';
                console.log('%c ', style);
            };
            image.src = url;
        }
    };
    // Sets & Gets
    set theme(newTheme){
        this.options.theme = newTheme;
    }
    set showLog(newLogLevel){
        this.options.showLog = newLogLevel;
    }
    // Tools
    depthOf(object) {
        var level = 1;
        for(var key in object) {
            if (!object.hasOwnProperty(key)) continue;
            if(typeof object[key] == 'object'){
                var depth = this.depthOf(object[key]) + 1;
                level = Math.max(depth, level);
            }
        }
        return level;
    };
}
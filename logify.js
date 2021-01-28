var log = {
    themes : {
        classic : {
            printStyles : "color:#333;padding:5px;font-size:12px;",
            featStyles : "color:#333;padding:5px;font-size:16px;text-shadow:0px 0px 5px red;",
            errorStyles : "color:#fff;padding:5px 5px 5px 14px;font-weight:bold;border-radius:4px;font-size:12px;background-color:#A5302B;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ4NS44MTEgNDg1LjgxMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNNDc2LjA5OSwzNTMuOTY4bC0xNzAuMi0yOTQuOGMtMjcuOC00OC43LTk4LjEtNDguNy0xMjUuOCwwbC0xNzAuMywyOTQuOGMtMjcuOCw0OC43LDYuOCwxMDkuMiw2Mi45LDEwOS4yaDMzOS45ICAgQzQ2OC42OTksNDYzLjE2OCw1MDMuODk5LDQwMi4wNjgsNDc2LjA5OSwzNTMuOTY4eiBNMjQyLjg5OSwzOTcuNzY4Yy0xNC44LDAtMjcuMS0xMi4zLTI3LjEtMjcuMXMxMi4zLTI3LjEsMjcuMS0yNy4xICAgYzE0LjgsMCwyNy4xLDEyLjMsMjYuNSwyNy44QzI3MC4wOTksMzg1LjQ2OCwyNTcuMDk5LDM5Ny43NjgsMjQyLjg5OSwzOTcuNzY4eiBNMjY3LjU5OSwyMjIuNTY4Yy0xLjIsMjEtMi41LDQxLjktMy43LDYyLjkgICBjLTAuNiw2LjgtMC42LDEzLTAuNiwxOS43Yy0wLjYsMTEuMS05LjMsMTkuNy0yMC40LDE5LjdzLTE5LjctOC0yMC40LTE5LjFjLTEuOC0zMi43LTMuNy02NC44LTUuNS05Ny41ICAgYy0wLjYtOC42LTEuMi0xNy4zLTEuOS0yNS45YzAtMTQuMiw4LTI1LjksMjEtMjkuNmMxMy0zLjEsMjUuOSwzLjEsMzEuNSwxNS40YzEuOSw0LjMsMi41LDguNiwyLjUsMTMuNiAgIEMyNjkuNDk5LDE5NS40NjgsMjY4LjE5OSwyMDkuMDY4LDI2Ny41OTksMjIyLjU2OHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+);background-position:3px 50%;background-repeat:no-repeat;background-size:14px;",
            warningStyles : "color:#fff;background:orange;padding:5px 5px 5px 14px;font-weight:bold;border-radius:4px;font-size:12px;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQwMS45OTkgNDAxLjk5OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjM3LjU0MywzMDEuNDk5aC03My4wOTFjLTQuOTUsMC05LjIzMywxLjgxMS0xMi44NTEsNS40MjVjLTMuNjE1LDMuNjE3LTUuNDI0LDcuODk3LTUuNDI0LDEyLjg0N3Y2My45NTMgICAgYzAsNC45NDgsMS44MDksOS4yMzIsNS40MjQsMTIuODU0YzMuNjIxLDMuNjEsNy45LDUuNDIxLDEyLjg1MSw1LjQyMWg3My4wOTdjNC45NDIsMCw5LjIyNy0xLjgxMSwxMi44NDgtNS40MjEgICAgYzMuNjEtMy42MjEsNS40Mi03LjkwNSw1LjQyLTEyLjg1NHYtNjMuOTUzYzAtNC45NDktMS44MTMtOS4yMjktNS40MjctMTIuODQ3QzI0Ni43NzMsMzAzLjMwNywyNDIuNDg4LDMwMS40OTksMjM3LjU0MywzMDEuNDk5eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik0yNTkuMzgzLDUuNDI0QzI1NS44NjIsMS44MTIsMjUxLjYyOCwwLDI0Ni42NzYsMGgtOTEuMzU5Yy00Ljk0OCwwLTkuMTgsMS44MTItMTIuNzAzLDUuNDI0ICAgIGMtMy41MjEsMy42MTctNS4xODYsNy45MDItNC45OTYsMTIuODVsNy45OTIsMjE5LjI2NWMwLjE5LDQuOTQ4LDIuMTM5LDkuMjM2LDUuODUyLDEyLjg0N2MzLjcxMSwzLjYyMSw4LjA0MSw1LjQzMSwxMi45OTEsNS40MzEgICAgaDczLjA5N2M0Ljk0MiwwLDkuMjcxLTEuODEsMTIuOTkxLTUuNDMxYzMuNzEtMy42MSw1LjY1My03Ljg5OCw1Ljg1Mi0xMi44NDdsNy45ODctMjE5LjI2NSAgICBDMjY0LjU3OCwxMy4zMjYsMjYyLjkwNSw5LjA0NSwyNTkuMzgzLDUuNDI0eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=);background-position:3px 50%;background-repeat:no-repeat;background-size:14px;",
            infoStyles : "color:#fff;background-color:#2682CB;padding:5px 5px 5px 14px;font-weight:bold;border-radius:4px;font-size:12px;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDIzLjYyNSAyMy42MjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPHBhdGggc3R5bGU9IiIgZD0iTTExLjgxMiwwQzUuMjg5LDAsMCw1LjI4OSwwLDExLjgxMnM1LjI4OSwxMS44MTMsMTEuODEyLDExLjgxM3MxMS44MTMtNS4yOSwxMS44MTMtMTEuODEzICAgUzE4LjMzNSwwLDExLjgxMiwweiBNMTQuMjcxLDE4LjMwN2MtMC42MDgsMC4yNC0xLjA5MiwwLjQyMi0xLjQ1NSwwLjU0OGMtMC4zNjIsMC4xMjYtMC43ODMsMC4xODktMS4yNjIsMC4xODkgICBjLTAuNzM2LDAtMS4zMDktMC4xOC0xLjcxNy0wLjUzOXMtMC42MTEtMC44MTQtMC42MTEtMS4zNjdjMC0wLjIxNSwwLjAxNS0wLjQzNSwwLjA0NS0wLjY1OWMwLjAzMS0wLjIyNCwwLjA4LTAuNDc2LDAuMTQ3LTAuNzU5ICAgbDAuNzYxLTIuNjg4YzAuMDY3LTAuMjU4LDAuMTI1LTAuNTAzLDAuMTcxLTAuNzMxYzAuMDQ2LTAuMjMsMC4wNjgtMC40NDEsMC4wNjgtMC42MzNjMC0wLjM0Mi0wLjA3MS0wLjU4Mi0wLjIxMi0wLjcxNyAgIGMtMC4xNDMtMC4xMzUtMC40MTItMC4yMDEtMC44MTMtMC4yMDFjLTAuMTk2LDAtMC4zOTgsMC4wMjktMC42MDUsMC4wOWMtMC4yMDUsMC4wNjMtMC4zODMsMC4xMi0wLjUyOSwwLjE3NmwwLjIwMS0wLjgyOCAgIGMwLjQ5OC0wLjIwMywwLjk3NS0wLjM3NywxLjQzLTAuNTIxYzAuNDU1LTAuMTQ2LDAuODg1LTAuMjE4LDEuMjktMC4yMThjMC43MzEsMCwxLjI5NSwwLjE3OCwxLjY5MiwwLjUzICAgYzAuMzk1LDAuMzUzLDAuNTk0LDAuODEyLDAuNTk0LDEuMzc2YzAsMC4xMTctMC4wMTQsMC4zMjMtMC4wNDEsMC42MTdjLTAuMDI3LDAuMjk1LTAuMDc4LDAuNTY0LTAuMTUyLDAuODExbC0wLjc1NywyLjY4ICAgYy0wLjA2MiwwLjIxNS0wLjExNywwLjQ2MS0wLjE2NywwLjczNmMtMC4wNDksMC4yNzUtMC4wNzMsMC40ODUtMC4wNzMsMC42MjZjMCwwLjM1NiwwLjA3OSwwLjU5OSwwLjIzOSwwLjcyOCAgIGMwLjE1OCwwLjEyOSwwLjQzNSwwLjE5NCwwLjgyNywwLjE5NGMwLjE4NSwwLDAuMzkyLTAuMDMzLDAuNjI2LTAuMDk3YzAuMjMyLTAuMDY0LDAuNC0wLjEyMSwwLjUwNi0wLjE3TDE0LjI3MSwxOC4zMDd6ICAgIE0xNC4xMzcsNy40MjljLTAuMzUzLDAuMzI4LTAuNzc4LDAuNDkyLTEuMjc1LDAuNDkyYy0wLjQ5NiwwLTAuOTI0LTAuMTY0LTEuMjgtMC40OTJjLTAuMzU0LTAuMzI4LTAuNTMzLTAuNzI3LTAuNTMzLTEuMTkzICAgYzAtMC40NjUsMC4xOC0wLjg2NSwwLjUzMy0xLjE5NmMwLjM1Ni0wLjMzMiwwLjc4NC0wLjQ5NywxLjI4LTAuNDk3YzAuNDk3LDAsMC45MjMsMC4xNjUsMS4yNzUsMC40OTcgICBjMC4zNTMsMC4zMzEsMC41MywwLjczMSwwLjUzLDEuMTk2QzE0LjY2Nyw2LjcwMywxNC40OSw3LjEwMSwxNC4xMzcsNy40Mjl6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDMwMTA0IiBjbGFzcz0iIj48L3BhdGg+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==);background-position:3px 50%;background-repeat:no-repeat;background-size:14px;",
            dataStyles : "color:#4FACF7;font-weight:bold;",
            breakStyles : "line-height:2px;background:#666;"
        },
        punk : {
            printStyles : "color:#5E198C;padding:5px;font-size:12px;",
            featStyles : "color:yellow;padding:5px;font-size:16px;text-shadow:0px 0px 5px #5E198C;",
            errorStyles : "color:#fff;padding:5px 5px 5px 14px;font-weight:bold;border-radius:4px;font-size:12px;background-color:#A5302B;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ4NS44MTEgNDg1LjgxMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNNDc2LjA5OSwzNTMuOTY4bC0xNzAuMi0yOTQuOGMtMjcuOC00OC43LTk4LjEtNDguNy0xMjUuOCwwbC0xNzAuMywyOTQuOGMtMjcuOCw0OC43LDYuOCwxMDkuMiw2Mi45LDEwOS4yaDMzOS45ICAgQzQ2OC42OTksNDYzLjE2OCw1MDMuODk5LDQwMi4wNjgsNDc2LjA5OSwzNTMuOTY4eiBNMjQyLjg5OSwzOTcuNzY4Yy0xNC44LDAtMjcuMS0xMi4zLTI3LjEtMjcuMXMxMi4zLTI3LjEsMjcuMS0yNy4xICAgYzE0LjgsMCwyNy4xLDEyLjMsMjYuNSwyNy44QzI3MC4wOTksMzg1LjQ2OCwyNTcuMDk5LDM5Ny43NjgsMjQyLjg5OSwzOTcuNzY4eiBNMjY3LjU5OSwyMjIuNTY4Yy0xLjIsMjEtMi41LDQxLjktMy43LDYyLjkgICBjLTAuNiw2LjgtMC42LDEzLTAuNiwxOS43Yy0wLjYsMTEuMS05LjMsMTkuNy0yMC40LDE5LjdzLTE5LjctOC0yMC40LTE5LjFjLTEuOC0zMi43LTMuNy02NC44LTUuNS05Ny41ICAgYy0wLjYtOC42LTEuMi0xNy4zLTEuOS0yNS45YzAtMTQuMiw4LTI1LjksMjEtMjkuNmMxMy0zLjEsMjUuOSwzLjEsMzEuNSwxNS40YzEuOSw0LjMsMi41LDguNiwyLjUsMTMuNiAgIEMyNjkuNDk5LDE5NS40NjgsMjY4LjE5OSwyMDkuMDY4LDI2Ny41OTksMjIyLjU2OHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+);background-position:3px 50%;background-repeat:no-repeat;background-size:14px;",
            warningStyles : "color:#fff;background:orange;padding:5px 5px 5px 14px;font-weight:bold;border-radius:4px;font-size:12px;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQwMS45OTkgNDAxLjk5OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjM3LjU0MywzMDEuNDk5aC03My4wOTFjLTQuOTUsMC05LjIzMywxLjgxMS0xMi44NTEsNS40MjVjLTMuNjE1LDMuNjE3LTUuNDI0LDcuODk3LTUuNDI0LDEyLjg0N3Y2My45NTMgICAgYzAsNC45NDgsMS44MDksOS4yMzIsNS40MjQsMTIuODU0YzMuNjIxLDMuNjEsNy45LDUuNDIxLDEyLjg1MSw1LjQyMWg3My4wOTdjNC45NDIsMCw5LjIyNy0xLjgxMSwxMi44NDgtNS40MjEgICAgYzMuNjEtMy42MjEsNS40Mi03LjkwNSw1LjQyLTEyLjg1NHYtNjMuOTUzYzAtNC45NDktMS44MTMtOS4yMjktNS40MjctMTIuODQ3QzI0Ni43NzMsMzAzLjMwNywyNDIuNDg4LDMwMS40OTksMjM3LjU0MywzMDEuNDk5eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik0yNTkuMzgzLDUuNDI0QzI1NS44NjIsMS44MTIsMjUxLjYyOCwwLDI0Ni42NzYsMGgtOTEuMzU5Yy00Ljk0OCwwLTkuMTgsMS44MTItMTIuNzAzLDUuNDI0ICAgIGMtMy41MjEsMy42MTctNS4xODYsNy45MDItNC45OTYsMTIuODVsNy45OTIsMjE5LjI2NWMwLjE5LDQuOTQ4LDIuMTM5LDkuMjM2LDUuODUyLDEyLjg0N2MzLjcxMSwzLjYyMSw4LjA0MSw1LjQzMSwxMi45OTEsNS40MzEgICAgaDczLjA5N2M0Ljk0MiwwLDkuMjcxLTEuODEsMTIuOTkxLTUuNDMxYzMuNzEtMy42MSw1LjY1My03Ljg5OCw1Ljg1Mi0xMi44NDdsNy45ODctMjE5LjI2NSAgICBDMjY0LjU3OCwxMy4zMjYsMjYyLjkwNSw5LjA0NSwyNTkuMzgzLDUuNDI0eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=);background-position:3px 50%;background-repeat:no-repeat;background-size:14px;",
            infoStyles : "color:#fff;background-color:#27ffff;padding:5px 5px 5px 14px;font-weight:bold;border-radius:4px;font-size:12px;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDIzLjYyNSAyMy42MjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPHBhdGggc3R5bGU9IiIgZD0iTTExLjgxMiwwQzUuMjg5LDAsMCw1LjI4OSwwLDExLjgxMnM1LjI4OSwxMS44MTMsMTEuODEyLDExLjgxM3MxMS44MTMtNS4yOSwxMS44MTMtMTEuODEzICAgUzE4LjMzNSwwLDExLjgxMiwweiBNMTQuMjcxLDE4LjMwN2MtMC42MDgsMC4yNC0xLjA5MiwwLjQyMi0xLjQ1NSwwLjU0OGMtMC4zNjIsMC4xMjYtMC43ODMsMC4xODktMS4yNjIsMC4xODkgICBjLTAuNzM2LDAtMS4zMDktMC4xOC0xLjcxNy0wLjUzOXMtMC42MTEtMC44MTQtMC42MTEtMS4zNjdjMC0wLjIxNSwwLjAxNS0wLjQzNSwwLjA0NS0wLjY1OWMwLjAzMS0wLjIyNCwwLjA4LTAuNDc2LDAuMTQ3LTAuNzU5ICAgbDAuNzYxLTIuNjg4YzAuMDY3LTAuMjU4LDAuMTI1LTAuNTAzLDAuMTcxLTAuNzMxYzAuMDQ2LTAuMjMsMC4wNjgtMC40NDEsMC4wNjgtMC42MzNjMC0wLjM0Mi0wLjA3MS0wLjU4Mi0wLjIxMi0wLjcxNyAgIGMtMC4xNDMtMC4xMzUtMC40MTItMC4yMDEtMC44MTMtMC4yMDFjLTAuMTk2LDAtMC4zOTgsMC4wMjktMC42MDUsMC4wOWMtMC4yMDUsMC4wNjMtMC4zODMsMC4xMi0wLjUyOSwwLjE3NmwwLjIwMS0wLjgyOCAgIGMwLjQ5OC0wLjIwMywwLjk3NS0wLjM3NywxLjQzLTAuNTIxYzAuNDU1LTAuMTQ2LDAuODg1LTAuMjE4LDEuMjktMC4yMThjMC43MzEsMCwxLjI5NSwwLjE3OCwxLjY5MiwwLjUzICAgYzAuMzk1LDAuMzUzLDAuNTk0LDAuODEyLDAuNTk0LDEuMzc2YzAsMC4xMTctMC4wMTQsMC4zMjMtMC4wNDEsMC42MTdjLTAuMDI3LDAuMjk1LTAuMDc4LDAuNTY0LTAuMTUyLDAuODExbC0wLjc1NywyLjY4ICAgYy0wLjA2MiwwLjIxNS0wLjExNywwLjQ2MS0wLjE2NywwLjczNmMtMC4wNDksMC4yNzUtMC4wNzMsMC40ODUtMC4wNzMsMC42MjZjMCwwLjM1NiwwLjA3OSwwLjU5OSwwLjIzOSwwLjcyOCAgIGMwLjE1OCwwLjEyOSwwLjQzNSwwLjE5NCwwLjgyNywwLjE5NGMwLjE4NSwwLDAuMzkyLTAuMDMzLDAuNjI2LTAuMDk3YzAuMjMyLTAuMDY0LDAuNC0wLjEyMSwwLjUwNi0wLjE3TDE0LjI3MSwxOC4zMDd6ICAgIE0xNC4xMzcsNy40MjljLTAuMzUzLDAuMzI4LTAuNzc4LDAuNDkyLTEuMjc1LDAuNDkyYy0wLjQ5NiwwLTAuOTI0LTAuMTY0LTEuMjgtMC40OTJjLTAuMzU0LTAuMzI4LTAuNTMzLTAuNzI3LTAuNTMzLTEuMTkzICAgYzAtMC40NjUsMC4xOC0wLjg2NSwwLjUzMy0xLjE5NmMwLjM1Ni0wLjMzMiwwLjc4NC0wLjQ5NywxLjI4LTAuNDk3YzAuNDk3LDAsMC45MjMsMC4xNjUsMS4yNzUsMC40OTcgICBjMC4zNTMsMC4zMzEsMC41MywwLjczMSwwLjUzLDEuMTk2QzE0LjY2Nyw2LjcwMywxNC40OSw3LjEwMSwxNC4xMzcsNy40Mjl6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDMwMTA0IiBjbGFzcz0iIj48L3BhdGg+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==);background-position:3px 50%;background-repeat:no-repeat;background-size:14px;",
            dataStyles : "color:#4FACF7;font-weight:bold;",
            breakStyles : "line-height:2px;background:#666;"
        }
    },

    options: {
        theme : "classic",
        showLog : true,
    },
    print : function(msg){
        (this.options.showLog == true) ? console.log("%c " + msg , this.themes[this.options.theme].printStyles) : false;
    },
    featured : function(msg){
        (this.options.showLog == true) ? console.log("%c " + msg , this.themes[this.options.theme].featStyles) : false;
    },
    error : function(msg){
        (this.options.showLog == true || this.options.showLog=="errors") ? console.log("%c " + msg , this.themes[this.options.theme].errorStyles ) : false;
    },
    warning : function(msg){
        (this.options.showLog == true) ? console.log("%c " + msg , this.themes[this.options.theme].warningStyles ) : false;
    },
    info : function(msg){
        (this.options.showLog == true) ? console.log("%c " + msg , this.themes[this.options.theme].infoStyles ) : false;
    },
    log : function(msg){
        if(this.options.showLog == true){
            console.log('%c %o',this.themes[this.options.theme].printStyles, msg);
        }
    },
    data : function(key,value){
        if(this.options.showLog == true){
            console.log('%c %s: %o',this.themes[this.options.theme].dataStyles, key, value);
        }
    },
    br : function(){
        if(this.options.showLog == true){
            console.log("%c                                          " , this.themes[this.options.theme].breakStyles );
        }
    }
}
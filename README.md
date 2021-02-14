# logify
Stylish js console log, with personalizable styles.

## Installation

**Vanilla JS** - Download and include 😄

## Initialize

Create an instance with:

`const miLog = new Logify();`

You can modify the theme or the logging behavior passing an object as param on the initialization:

```
let prefs = {
            theme : "glowTheme",
            showLog : "all"
        };
const miLog = new Logify(prefs,multipleThemes);
```
Available themes on basic package:
 - classic
 - light
 - dark

Available showLog params:
 - all (Output all messages)
 - errors (Output only error messages)
 - problems (Output only error and warning messages)
 - none - Nothing is output in console.

## Usage

When the instance is initialized (as *miLog* in this example) you can start making calls in this way:

```
miLog.log("One monkey");
miLog.print("Hi Monkey!");
miLog.featured("Hi Big Monkey!");
```

## Available calls

### print(msg)
Shows message in plain format.

### featured(msg)
Shows message in plain format, bigger size or prominent style.

### error(msg)
Shows beatifull crash message.

### warning(msg)
Shows beatifull advice or warning message.

### info(msg)
Shows beatifull information.

### log(msg)
The classic and direct `console.log`.

### data(key,value)
Shows name (key) at left and autoformated var to the right (value).

### br()
Show a separation to your logs.

### image(url)
Show an image in your console.

## Extra Themes
In the *themes* folder you will find extra themes to use.

Simply include the js file do you want and set in the initialization or set via the *theme* setter (explained above) 

```
<script src="logify.js"></script>
<script src="themes/oldschool.js"></script>

let prefs = {
    theme : "oldschool",
    showLog : "all"
};

// logifyTheme is a declared var in external Theme JS
const miLog = new Logify(prefs,logifyTheme);
```

## Update options in runtime
You can change logging behavior or theme at any point of your script. Simply call the setters theme and showLog

```
miLog.theme = "light";
miLog.showLog = "problems";
```

## Create and use your own theme
Wanna create a custom theme? 
Simply create the object with the styles, add in the initialization and set as your theme:

```
let logifyTheme = {
    simple : {
        printStyle : "font-family: 'Times New Roman', serif;font-size:14px;",
        featStyle : "font-family: 'Times New Roman', serif;font-size:18px;",
        infoStyle : "font-family: 'Times New Roman', serif;font-size:16px;color:blue;",
        warningStyle : "font-family: 'Times New Roman', serif;font-size:16px;color:orange;",
        errorStyle : "font-family: 'Times New Roman', serif;font-size:16px;color:red;",
        dataStyle : "font-family: 'Times New Roman', serif;font-size:14px;",
        breakStyle : "line-height:0;padding:1px;background:#666;"
    }
};

let prefs = {
theme : "simple",
showLog : "all"
};
const miLog = new Logify(prefs,logifyTheme);
```

## Enjoy, share and contact 
I hope you enjoy this little script to make your logging more productive and fun.

If you find something to make it better, contact me at cabohe@gmail.com

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png">](https://www.buymeacoffee.com/cabohe)


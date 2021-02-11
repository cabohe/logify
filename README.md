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
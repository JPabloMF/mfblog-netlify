---
template: BlogPost
path: /javascript/use-strict
date: 2020-11-10T01:32:03.560Z
title: "\U0001F1EC\U0001F1E7 The modern mode \"use strict\""
metaDescription: use strict in javascript
thumbnail: /assets/js.png
---
# The modern mode "use strict"

"use strict" or 'use strict'

When it is located at the **top** of a script, the whole script works **"the modern way"**

**The modern way** means that our JavaScript file will be always working with the last functions or implementations of JavaScript

```
"use strict";

// this code works the modern way
```

The purpose of`"use strict"`is to indicate that the code should be executed in `"strict mode"`

With strict mode, you can not, for example, use undeclared variables.

```
"use strict";
x = 3.14;       // This will cause an error because x is not declared
```

If we **don’t use “use strict”** our code will be working with the last version that you use, that means that our code won’t be affected by any update, or working with old code implementations.



For more references review these links:

<https://javascript.info/strict-mode>

<https://www.w3schools.com/js/js_strict.asp>

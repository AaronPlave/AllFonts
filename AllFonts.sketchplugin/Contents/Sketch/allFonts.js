// All Fonts, by Aaron Plave
//
// Displays all of your fonts on an artboard. 
// Caution.

function onRun(context) {
    var doc = context.document

    // Add new page
    var newPage = doc.addBlankPage()
    newPage.setName("All Fonts")

    // Get available fonts
    var fm = NSFontManager.sharedFontManager()
    var availableFonts = fm.availableFonts()

    // Add new artboard
    var artboard = [MSArtboardGroup new]
    artboard.frame().setWidth(5800)
    artboard.frame().setHeight(availableFonts.count() * 207)
    newPage.addLayers_([artboard])
    var textOffsetX = 600
    var textOffsety = 1200

    // Display number of fonts
    var titleLayer = MSTextLayer.alloc().initWithFrame_(NSMakeRect(0, 0, 100, 100))
    var fontCountLayer = MSTextLayer.alloc().initWithFrame_(NSMakeRect(0, 0, 100, 100))
    var titleFontSize = 200
    var titleFont = [NSFont fontWithName: "HelveticaNeue-Bold"
        size: titleFontSize
    ]
    var fontCountFont = [NSFont fontWithName: "HelveticaNeue-Thin"
        size: titleFontSize
    ]
    titleLayer.setName("title")
    titleLayer.stringValue = "ALL FONTS"
    titleLayer.frame().setY(-470 + textOffsety)
    titleLayer.frame().setX(textOffsetX)
    titleLayer.font = titleFont

    fontCountLayer.setName("font count")
    fontCountLayer.stringValue = "FONT COUNT: " + availableFonts.count().toString()
    fontCountLayer.frame().setY(-310 + textOffsety)
    fontCountLayer.frame().setX(textOffsetX)
    fontCountLayer.font = fontCountFont
    artboard.addLayers_([titleLayer, fontCountLayer])

    // Create label font
    var labelFont = [NSFont fontWithName: "HelveticaNeue-Bold"
        size: 25
    ]

    for (var i = 0; i < availableFonts.count(); i++) {
        var fontStr = availableFonts[i]
        var currentFont = [NSFont fontWithName: fontStr size: 75]
        var labelLayer = MSTextLayer.alloc().initWithFrame_(NSMakeRect(0, 0, 100, 100))
        var textLayer = MSTextLayer.alloc().initWithFrame_(NSMakeRect(0, 0, 100, 100))
        textLayer.font = currentFont
        textLayer.stringValue = "The quick brown fox jumped over the lazy dog"
        textLayer.adjustFrameToFit()

        labelLayer.font = labelFont
        labelLayer.stringValue = currentFont.fontName().toString()
        labelLayer.setName(currentFont.fontName().toString())
        labelLayer.adjustFrameToFit()

        // Adjust positions
        var yOffset = 200
        labelLayer.frame().setY(i * yOffset + textOffsety)
        labelLayer.frame().setX(textOffsetX)
        textLayer.frame().setY(i * yOffset + 40 + textOffsety)
        textLayer.frame().setX(textOffsetX)

        artboard.addLayers_([labelLayer, textLayer])
    }
};
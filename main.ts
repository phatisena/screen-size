namespace scene {
    
    export enum sizetype { width, height}

    export const ARCADE_SCREEN_WIDTH = 160
    export const ARCADE_SCREEN_HEIGHT = 120
    
    /**
     * set screen size by
     * width value and height value
     */
    //%blockid=src_srcsize
    //%block="set screen size at width: $wh height: $ht"
    //%inlineInputMode=inline
    //%group="screen size"
    export function SrcSize (widthVal: number = undefined, heightVal: number = undefined) {
        if (widthVal) { const ARCADE_SCREEN_WIDTH = widthVal }
        if (heightVal) { const ARCADE_SCREEN_HEIGHT = heightVal }
    }

    /**
     * set screen size
     * from sizetype by value
     */
    //%blockid=src_srconesize
    //%block="set screen $t by $val"
    //%inlineInputMode=inline
    //%group="screen size"
    export function SetSize (sizet: sizetype, val: number = undefined) {
        switch (sizet) {
            case sizetype.width :
            SrcSize(val,undefined)
            break;
            case sizetype.height :
            SrcSize(undefined,val)
            break;
            default:
            break;
        }
    }

    /**
     * set screen size from 
     * tile size of 4:3 by value
     */
    //%blockid=src_srcsizewithtile
    //%block="set tile size of screen (4:3) by $tsize"
    //%inlineInputMode=inline
    //%group="screen size"
    export function TileSize (val: number = undefined) {
        if (val) {SrcSize(val * 4, val * 3)}
    }

    /**
     * set screen size and fit by sizetype
     * for the tile size of 4:3 by value
     */
    //%blockid=src_srcfitsize
    //%block="set screen fit size from $t by $val"
    //%inlineInputMode=inline
    //%group="screen size"
    export function FitSize (sizet: sizetype, val: number = undefined) {
        switch (sizet) {
            case sizetype.width:
            if (val) {
                const tsi = Math.floor(val / 4)
                SrcSize(tsi * 4, tsi * 3)
            }
            break;
            case sizetype.height:
            if (val) {
                const tsi = Math.floor(val / 3)
                SrcSize(tsi * 4, tsi * 3)
            }
            break;
            default:
            break;
        }
    }
}

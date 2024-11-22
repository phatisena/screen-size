namespace scene {
    
    export enum sizetype { width, height}

    /**
     * set screen size by
     * width value and height value
     */
    //%blockid=src_srcsize
    //%block="set screen size at width: $wh height: $ht"
    //%inlineInputMode=inline
    //%group="screen size"
    export function SrcSize (wh: number = undefined, ht: number = undefined) {
        if (wh) { const ARCADE_SCREEN_WIDTH = wh }
        if (ht) { const ARCADE_SCREEN_HEIGHT = ht }
    }

    /**
     * set screen size
     * from sizetype by value
     */
    //%blockid=src_srconesize
    //%block="set screen $t by $val"
    //%inlineInputMode=inline
    //%group="screen size"
    export function SetSize (t: sizetype, val: number = undefined) {
        switch (t) {
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
     * tile size from 4:3 by value
     */
    //%blockid=src_srcsizewithtile
    //%block="set tile size of screen (4:3) by $tsize"
    //%inlineInputMode=inline
    //%group="screen size"
    export function TileSize (tsize: number = undefined) {
        if (tsize) {SrcSize(tsize * 4, tsize * 3)}
    }

    /**
     * set screen size and fit by sizetype
     * for the tile size from 4:3 by value
     */
    //%blockid=src_srcfitsize
    //%block="set screen fit size from $t by $val"
    //%inlineInputMode=inline
    //%group="screen size"
    export function FitSize (t: sizetype, val: number = undefined) {
        switch (t) {
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

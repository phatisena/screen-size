namespace scene {
    
    export enum lentype { width, height}

    /**
     * set screen size by
     * @param :width @param :height
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
     * from @param by @param
     */
    //%blockid=src_srconesize
    //%block="set screen $t by $val"
    //%inlineInputMode=inline
    //%group="screen size"
    export function SetSize (t: lentype, val: number = undefined) {
        switch (t) {
            case lentype.width :
            SrcSize(val,undefined)
            break;
            case lentype.height :
            SrcSize(undefined,val)
            break;
            default:
            break;
        }
    }

    /**
     * set screen size from 
     * tile size 4:3 by @param
     */
    //%blockid=src_srcsizewithtile
    //%block="set tile size of screen (4:3) by $tsize"
    //%inlineInputMode=inline
    //%group="screen size"
    export function TileSize (tsize: number = undefined) {
        if (tsize) {SrcSize(tsize * 4, tsize * 3)}
    }

    /**
     * set screen size and fit by @param
     * for the tile size 4:3 by @param
     */
    //%blockid=src_srcfitsize
    //%block="set screen fit size from $t by $val"
    //%inlineInputMode=inline
    //%group="screen size"
    export function FitSize (t: lentype, val: number = undefined) {
        switch (t) {
            case lentype.width:
            if (val) {
                const tsi = Math.floor(val / 4)
                SrcSize(tsi * 4, tsi * 3)
            }
            break;
            case lentype.height:
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

namespace sence {
    
    export enum lentype { width, height}

    //%blockid=src_srcsize
    //%block="set screen size at width: $wh height: $ht"
    //%inlineInputMode=inline
    //%group="screen size"
    export function SrcSize (wh: number = undefined, ht: number = undefined) {
        if (wh) { const ARCADE_SCREEN_WIDTH = wh }
        if (ht) { const ARCADE_SCREEN_HEIGHT = ht }
    }

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

    //%blockid=src_srcsizewithtile
    //%block="set tile size of screen (4:3) by $tsize"
    //%inlineInputMode=inline
    //%group="screen size"
    export function SrcTileSize (tsize: number = undefined) {
        if (tsize) {SrcSize(tsize * 4, tsize * 3)}
    }
}

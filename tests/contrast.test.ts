import {test,expect} from 'bun:test';
import tokens from '../tokens.json';
import {readFileSync} from 'node:fs';
const css=readFileSync(new URL('../globals.css',import.meta.url),'utf8');
const linear=(value:number)=>value<=.04045?value/12.92:((value+.055)/1.055)**2.4;
function luminance(color:string){
 if(color.startsWith('#')){const rgb=[1,3,5].map(i=>linear(parseInt(color.slice(i,i+2),16)/255));return rgb[0]!*.2126+rgb[1]!*.7152+rgb[2]!*.0722;}
 const [light,chroma,hue]=color.match(/[\d.]+/g)!.map(Number);
 const L=light!/100,a=chroma!*Math.cos(hue!*Math.PI/180),b=chroma!*Math.sin(hue!*Math.PI/180);
 const l=(L+.3963377774*a+.2158037573*b)**3,m=(L-.1055613458*a-.0638541728*b)**3,s=(L-.0894841775*a-1.291485548*b)**3;
 const rgb=[4.0767416621*l-3.3077115913*m+.2309699292*s,-1.2684380046*l+2.6097574011*m-.3413193965*s,-.0041960863*l-.7034186147*m+1.707614701*s].map(value=>Math.max(0,Math.min(1,value)));
 return rgb[0]!*.2126+rgb[1]!*.7152+rgb[2]!*.0722;
}
const contrast=(a:string,b:string)=>{const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);};
for(const theme of ['light','dark'] as const)test(`${theme}: secondary text and filled controls meet WCAG AA`,()=>{
 const block=theme==='light'?css.split(':root {')[1]!.split('\n.dark {')[0]!:css.split('\n.dark {')[1]!;
 const variable=(name:string)=>block.match(new RegExp(`--${name}: ([^;]+);`))![1]!;
 const secondary=variable('secondary');
 expect(secondary).toBe(tokens.color[theme].base.secondary);
 for(const surface of ['background','card','popover','muted'])expect(contrast(secondary,variable(surface))).toBeGreaterThanOrEqual(4.5);
 expect(contrast(secondary,variable('secondary-foreground'))).toBeGreaterThanOrEqual(4.5);
 expect(contrast(tokens.color.hex[theme].base.secondary,tokens.color.hex[theme].base.background)).toBeGreaterThanOrEqual(4.5);
 const rgb=tokens.color.rgb[theme].base.secondary.match(/\d+/g)!.map(Number);
 expect('#'+rgb.map(value=>value.toString(16).padStart(2,'0')).join('')).toBe(tokens.color.hex[theme].base.secondary);
 console.log(`${theme}: secondary/background ${contrast(secondary,variable('background')).toFixed(2)}:1; secondary/foreground ${contrast(secondary,variable('secondary-foreground')).toFixed(2)}:1`);
});

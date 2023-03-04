import { Filer } from './components/filer.ts'


const filer = new Filer("/home/cosweb/Projects/bleno/entries/");
filer.permit()
.then(() => {
    filer.catwalk()
})
.then((item) => {

})
.catch((error) => {
    console.log(`failed: ${error}`)
})
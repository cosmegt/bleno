/**
 * Filer.ts 
 *
 * Handles file system operations from `entries` directory. 
 *
 */

class Filer {
    directory: string;
    
    constructor(dir: string){
        this.directory = dir;
    }

    permit(){
        return new Promise((resolve, reject) => {
            /** Check permissions */
            const query = { name: "read", path: this.directory } as const;
            const request = Deno.permissions.request(query);

            request.then((result) => {
                if (result.state == "granted"){
                    resolve("Access granted")
                } else {
                    reject("Access denied")
                }
            })
        })
    }

    catwalk(){
        return new Promise(async (resolve, reject) => {
            for await (let dirItem of Deno.readDir("/home/cosweb/Projects/bleno/entries/")){
                resolve(dirItem);
            }
        })
    }

    open(){
        return new Promise((resolve, reject) => {

        })
    }

}

export { Filer };

export interface IVertex{
    id: string;
    payload: any;
    edges?: string[];
    addEdge: (edge: string) => void;
    removeEdge: (edge: string) => void;
}

export class Vertex implements IVertex {
    payload = undefined;
    id: string = "";
    edges?: string[] = [];

    constructor(payload: any, id: string) {
            this.payload = payload;
            this.id = id;
        }

    addEdge(edge: string){
        try{
            if(this.edges){
                this.edges.push(edge);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    removeEdge(edge: string){
        try{
            if(this.edges){
                this.edges = this.edges.filter(vEdge => vEdge !== edge);
            }
        }
        catch (e) {
            console.log(e);
        }

    }
}
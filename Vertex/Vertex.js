"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vertex = void 0;
class Vertex {
    constructor(payload, id) {
        this.payload = undefined;
        this.id = "";
        this.edges = [];
        this.payload = payload;
        this.id = id;
    }
    addEdge(edge) {
        try {
            if (this.edges) {
                this.edges.push(edge);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    removeEdge(edge) {
        try {
            if (this.edges) {
                this.edges = this.edges.filter(vEdge => vEdge !== edge);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.Vertex = Vertex;

export class Car {
  constructor(
    public image: string,
    public make: string,
    public model: string,
    public engine: string,
    public description: string,
    public ownerName: string,
    public price: number,
    public id?: number,
    public owner?: number,
    public comments?: number[],
    public date?: any
  ) {}
}
export class Owner {
  constructor(
    public image: string,
    public name: string,
    public cars?: number[],
    public id?: number
  ) {}
}
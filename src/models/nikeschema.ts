import mongoose from 'mongoose';

export class NikeModel {
    private name: string;
    private price: string;
    private type: string;
    private colors: string[];

    constructor(name: string) {
        this.name = name;
        this.colors = new Array<string>();
    }

    public setPrice(price: string): void {
        this.price = price;
    }

    public setType(type: string): void {
        this.type = type;
    }

    public pushColor(color: string): void {
        this.colors.push(color);
    }

    public getColors(): string[] {
        return this.colors;
    }

    public getType(): string {
        return this.type;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): string {
        return this.price;
    }
}

// export type NikeModel = mongoose.Document & {
//     name: string,
//     price: string,
//     type: string,
//     colors: string[],
// };

const nikeSchema = new mongoose.Schema({
    colors: Array,
    name: String,
    price: String,
    type: String,
  }, { timestamps: true });

 // export const User: UserType = mongoose.model<UserType>('User', userSchema);
const Nike = mongoose.model('Nike', nikeSchema);
export default Nike;

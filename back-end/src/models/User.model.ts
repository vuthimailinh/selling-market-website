import { Model, DataType, Table, Column } from "sequelize-typescript";
import sequelize from "../configs/sequelize";

@Table({ tableName: "users", timestamps: false })
export class User extends Model {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id!: number;

    @Column({ type: DataType.STRING })
    firstName!: string;

    @Column({ type: DataType.STRING })
    lastName!: string;
}

// Initialize the model
User.init(
    {
        id: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true },
        firstName: { type: DataType.STRING },
        lastName: { type: DataType.STRING },
    },
    { sequelize }
);

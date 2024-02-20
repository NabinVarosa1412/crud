import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connection';

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public gender!: string;
  public phone!: string;
  public address!: string;
  public nationality!: string;
  public dateOfBirth!: Date;
  public educationBackground!: string;
  public preferredContactMethod!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    educationBackground: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    preferredContactMethod: {
      type: DataTypes.ENUM("email", "phone", "none"),
      defaultValue: "email",
      allowNull: true,
    },
    // Add other fields as needed
  },
  {
    tableName: 'nabin_users',
    sequelize, // pass the sequelize connection instance
  }
);

export default User;


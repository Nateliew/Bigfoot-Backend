"use strict";
const { Model } = require("sequelize");

//this model refers to what? a function/class/method
//if import model by itself anywhere without the model files, what will we get?

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //what is 'models' here and take from where?
      //say the relationships here
      // define association here
      // A.belongsTo(B)
      //big S or small S?
      this.belongsTo(models.sighting);
    }
  }
  Comment.init(
    {
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "comment",
      underscored: true,
      timestamps: true,
    }
  );
  return Comment;
};

const Sequelize = require('sequelize')

module.exports = class Post extends Sequelize.Model {
   static init(sequelize) {
      return super.init(
         {
            content: {
               type: Sequelize.TEXT,
               allowNull: false,
            },
            img: {
               type: Sequelize.STRING(20),
               allowNull: true,
            },
         },
         {
            sequelize,
            timestamps: true, //createAt, updateAt ..등 자동 생성
            underscored: false,
            modelName: 'Post',
            tableName: 'posts',
            paranoid: true,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
         },
      )
   }
   static associate(db) {
      db.Post.belongsTo(db.User, {
         foreignKey: 'user_id',
         targetKey: 'id',
      })

      db.Post.belongsToMany(db.Hashtag, {
         through: 'PostHashtag',
         foreignKey: 'post_id',
         otherKey: 'hashtag_id',
      })
   }
}

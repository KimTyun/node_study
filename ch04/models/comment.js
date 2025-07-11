const Sequelize = require('sequelize')

module.exports = class Comment extends Sequelize.Model {
   static init(sequelize) {
      return super.init(
         {
            comment: {
               type: Sequelize.STRING(100),
               allowNull: false,
            },

            created_at: {
               type: Sequelize.DATE(),
               allowNull: true,
               defaultValue: Sequelize.NOW,
            },
         },
         {
            sequelize,
            timestamps: false, // createAt,updateAt 컬럼 자동생성
            underscored: false, // column의 이름을 카멜법으로 할것이지
            modelName: 'Commnet', // 시퀄라이즈에서 사용하는 클래스 이름
            tableName: 'comments', // 데이터베이스에서 사용하는 실제 테이블 이름
            paranoid: false, // 소프트 삭제 활성화(deleteAt column 생성)
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
         },
      )
   }
   static associate(db) {
      db.Comment.belongsTo(db.User, {
         foreignKey: 'commenter', //Comment에서 사용할 외래키 컬럼 이름
         targetKey: 'id', //user 테이블에서 참조하는 컬럼이름
      })
   }
}
